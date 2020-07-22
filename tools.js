
//操作css全局变量
function rootRed(Str){//读
	return getComputedStyle(document.documentElement).getPropertyValue(Str).trim();
}
function rootRew(Str, Data){//写
	$().style.setProperty(Str, Data);
	return rootRed(Str);
}
function rootDel(Str){//删
	$().style.removeProperty(Str);
	return rootRed(Str);
}


//标记预定义；
const ID = 0x10000002;
const TAG = 0x10000003;
const NAME = 0x10000004;
const CLASS = 0x10000001;
//获取对象
function $(type, Str){
	switch (type){
		case ID: return document.getElementById(Str);
		case TAG: return document.getElementsByTagName(Str);
		case NAME: return document.getElementsByName(Str);
		case CLASS: return document.getElementsByClassName(Str);
		default : return document.documentElement;
	}
}


//处理ini下moduleSign字符串
var moduleSign = new Array();
var moduleStr = getComputedStyle(document.documentElement).getPropertyValue('--moduleSign').trim();
for (var i = 0, j = 0; moduleStr[i] != null; i++){
	if (
		(moduleStr[i] >= '0' && moduleStr[i] <= '9') ||
		(moduleStr[i] >= 'A' && moduleStr[i] <= 'Z') ||
		(moduleStr[i] >= 'a' && moduleStr[i] <= 'z')
	){
		if (moduleSign[j] == undefined)
			moduleSign[j] = '';
		moduleSign[j] += moduleStr[i];
	}
	if (moduleStr[i] == ',')
		j++;
}


//贝塞尔曲线
var B_line = [0, 0, 1, 1];
var B_diy1 = [];

var cache = new Array(4);
var xs = new Array;
var ys = new Array;
function bezier() {//输入比值，返回比值，范围0-1；
	this.ratio = 0;//比值输入
	this.x0 = 0;//起始坐标x
	this.y0 = 0;//起始坐标y
	this.x1 = 1;//终点坐标x
	this.y1 = 1;//终点坐标y
	this.cp0x = 0.25;//控制点1x
	this.cp0y = 0.1;//控制点1y
	this.cp1x = 0.25;//控制点2x
	this.cp1y = 1;//控制点2y
	
	this.getY2X = function(ratio, precision){//二维贝塞尔 X坐标基准
		if (cache[0] != this.cp0x ||
			cache[1] != this.cp0y ||
			cache[2] != this.cp1x ||
			cache[3] != this.cp1y){//判断是否计算过曲线，以提高性能；
			for (var i = 0; i <= precision; i++){//提前计算好数据；
				this.setR(i / precision);
				xs[i] = this.getX();
				ys[i] = this.getY();
			}
			cache[0] = this.cp0x;
			cache[1] = this.cp0y;
			cache[2] = this.cp1x;
			cache[3] = this.cp1y;
		}
		for (var i = 0; i < precision; i++){
			if (ratio > ys[i]){
				if (ratio < ys[i + 1])
					return xs[i + 1];
			}
		}
	}
	this.getX2Y = function(ratio, precision){//y坐标基准
		if (cache[0] != this.cp0x ||
			cache[1] != this.cp0y ||
			cache[2] != this.cp1x ||
			cache[3] != this.cp1y){
			for (var i = 0; i <= precision; i++){
				this.setR(i / precision);
				xs[i] = this.getX();
				ys[i] = this.getY();
			}
			cache[0] = this.cp0x;
			cache[1] = this.cp0y;
			cache[2] = this.cp1x;
			cache[3] = this.cp1y;
		}
		for (var i = 0; i < precision; i++){
			if (ratio > xs[i]){
				if (ratio < xs[i + 1])
					return ys[i + 1];
			}
		}
	}
	this.getX = function(){//获取曲线X值
		this.x = this.x0 * (1 - this.ratio) * (1 - this.ratio) * (1 - this.ratio) +
		3 * this.cp0x * this.ratio * (1 - this.ratio) * (1 - this.ratio) +
		3 * this.cp1x * this.ratio * this.ratio * (1 - this.ratio) +
		this.x1 * this.ratio * this.ratio * this.ratio;

		return this.x;
	}
	this.getY = function(){//获取曲线y值
		this.y = this.y0 * (1 - this.ratio) * (1 - this.ratio) * (1 - this.ratio) +
		3 * this.cp0y * this.ratio * (1 - this.ratio) * (1 - this.ratio) +
		3 * this.cp1y * this.ratio * this.ratio * (1 - this.ratio) +
		this.y1 * this.ratio * this.ratio * this.ratio;
		
		return this.y;
	}
	this.setCP = function(cp0x, cp0y, cp1x, cp1y){//设置控制点
		this.cp0x = cp0x;
		this.cp0y = cp0y;
		this.cp1x = cp1x;
		this.cp1y = cp1y;
	}
	this.setR = function(ratio){//设置比值
		this.ratio = ratio;
	}
	this.setCPs = function(CPs){//设置控制点组
		if (!CPs)
			return 0;
		this.cp0x = CPs[0];
		this.cp0y = CPs[1];
		this.cp1x = CPs[2];
		this.cp1y = CPs[3];
	}
}


function moveTransition(thisElem, horizontalLength, hMsec, verticalLength, vMsec, CPs = 0){
	if (thisElem.getAttribute("Lock") == 1)
		return -1;
	var elemObj = new Object;
	//处理需求变量
	elemObj.thisElem = thisElem;//当前元素
	elemObj.thisElem.setAttribute("Lock", "1");//给元素上锁
	elemObj.Transition = new bezier();//建立贝塞尔对象；
	elemObj.LengthSet = 0;//当前设置值
	elemObj.horOffset = 0;//当前水平偏移
	elemObj.verOffset = 0;//当前垂直偏移
	elemObj.fpsCount = 0;//帧计数
	elemObj.msFps = 1;//毫秒每帧
	elemObj.hMsec = hMsec;//水平移动时间
	elemObj.hMsec = hMsec;//垂直移动时间
	elemObj.horFpsNum = hMsec / elemObj.msFps;//水平总帧数
	elemObj.verFpsNum = vMsec / elemObj.msFps;//垂直总帧数
	elemObj.horLength = Number(horizontalLength);//水平总步长
	elemObj.verLength = Number(verticalLength);//垂直总步长
	elemObj.thisTop = Number(thisElem.style.top.replace(/[^0-9-.]/ig, ''));//当前元素top
	elemObj.thisLeft = Number(thisElem.style.left.replace(/[^0-9-.]/ig, ''));//当前元素left

	//如果行内没有属性，去找外链或内嵌
	if (elemObj.thisTop == '')
		elemObj.thisTop = getComputedStyle(elemObj.thisElem).top.replace(/[^0-9-.]/ig, '');
	if (elemObj.thisLeft == '')
		elemObj.thisLeft = getComputedStyle(elemObj.thisElem).left.replace(/[^0-9-.]/ig, '');

	//设置贝塞尔控制点
	elemObj.Transition.setCPs(CPs);

	//移动计时器
	elemObj.stop = setInterval(function(){elemObj.micMove();}, elemObj.msFps);

	//微分函数
	elemObj.micMove = function() {
		this.LengthSet = Number(this.horOffset) + Number(this.thisLeft);
		if (this.horLength && this.fpsCount <= this.horFpsNum){
			this.thisElem.style.left = this.LengthSet + 'px';
			//贝塞尔算法偏移
			this.horOffset = this.Transition.getX2Y(this.fpsCount / this.horFpsNum, 1000) * this.horLength;
		}

		this.LengthSet = Number(this.verOffset) + Number(this.thisTop);
		if (this.verLength && this.fpsCount <= this.verFpsNum){
			this.thisElem.style.top = this.LengthSet + 'px';
			//贝塞尔算法偏移
			this.verOffset = this.Transition.getX2Y(this.fpsCount / this.verFpsNum, 1000) * this.verLength;
		}
		
		this.fpsCount++;
		if (this.fpsCount >= this.horFpsNum && this.fpsCount >= this.verFpsNum){
			clearInterval(this.stop);
			this.LengthSet = Number(this.horLength) + Number(this.thisLeft);
			this.thisElem.style.left = this.LengthSet + 'px';

			this.LengthSet = Number(this.verLength) + Number(this.thisTop);
			this.thisElem.style.top = this.LengthSet + 'px';

			this.thisElem.setAttribute("Lock", "0");
			return 0;
		}
	}
	/*
	原理：
	计算出微分长度，然后用微分长度乘处理过的方向，再加上元素原先top值，可得到新top值；
	细节emmmm，我看不懂了；
	2.0改版补充：
		增加了水平和垂直并行效果，效果很炸裂；优化了算法，依旧不想写细节原理，咬我呀；
	*/
}
