//页面加载框架
var iframe = '';
var iframeName = '';
var iframeTempHead = '<iframe class="module" src="module/'
var iframeTempEnd = '.html" Lock="0"></iframe>'
	
for (var i = 0; i < moduleSign.length; i++){
	iframeName = moduleSign[i] + '/' + moduleSign[i];
	iframe += iframeTempHead + iframeName + iframeTempEnd;
}
$(ID, 'iframe').innerHTML = iframe;

//滚动框架
var present = moduleSign.length - 1;
var deteWheelOn = setInterval('deteWheel()', 600);
function deteWheel(){
	if (rootRed('--wheelOn') == -1){//上移
		rootRew('--wheelOn', '0');
		console.log("On");
		//
		if (present == 0){
			console.log('last');
			addMessage('提示', '已经是最后一页', 2000);
		}
		else{
			if (moveTransition($('ID', 'iframe').getElementsByClassName('module')[present--], -window.innerWidth, 220, -window.innerHeight, 200) == -1)
				present++;
		}
		
	}
	if (rootRed('--wheelOn') == 1){//下移
		rootRew('--wheelOn', '0');
		console.log("Down");
		//
		if (present == moduleSign.length - 1){
			console.log('former');
			addMessage('提示', '已经是第一页', 2000);
		}
		else{
			if (moveTransition($('ID', 'iframe').getElementsByClassName('module')[++present], window.innerWidth, 220, window.innerHeight, 200) == -1)
				present--;
		}
		
	}	
}

// 控制面板 control 的 close 关闭点击事件
document.getElementById('control').getElementsByTagName('close')[0].onclick = function(){
	if (this.parentElement.getAttribute("on") == 0){
		moveTransition(this.parentElement, -350, 200, 0, 0);
		this.parentElement.setAttribute("on", "1");
	}
	else{
		moveTransition(this.parentElement, 350, 200, 0, 0);
		this.parentElement.setAttribute("on", "0");
	}
}


//消息控制机制
//消息窗口单次移动限制为280px
var stopClose;//停止关闭消息框计时器；
var stopShow;//停止展示消息框计时器；
var putShowOn = 0;//消息队列是否完成状态量；
var messageCount = -1;//消息队列下标；
var messageArr = new Array(3);//消息队列；
messageArr[0] = new Array();//消息队列标题数组；
messageArr[1] = new Array();//消息队列内容数组；
messageArr[2] = new Array();//消息停留时长；

//消息添加
function addMessage(title, content, ms = 3000){
	messageCount++;
	messageArr[0][messageCount] = title;
	messageArr[1][messageCount] = content;
	if (ms > 10000) ms = 10000;
	messageArr[2][messageCount] = ms;
	if ($(ID, 'messageIframe').getAttribute("Lock") == 0 && putShowOn == 0)
		showMessage();
}
//消息框弹出-关闭
function closeMessage(){
	if ($(ID, 'messageIframe').getAttribute("Lock") == 0){
		messageArr[0].splice(0, 1);
		messageArr[1].splice(0, 1);
		messageArr[2].splice(0, 1);
		messageCount--;
		clearTimeout(stopClose);
		moveTransition($(ID, 'messageIframe'), 0, 0, -280, 200);
		if (messageCount >= 0){
			setTimeout(showMessage, 1000);
		}
		else
			putShowOn = 0;
	}
}
function showMessage(){
	putShowOn = 1;
	$(ID, 'messageIframe').getElementsByTagName('brief')[0].innerText = messageArr[0][0];
	$(ID, 'messageIframe').getElementsByTagName('content')[0].innerText = messageArr[1][0];

	moveTransition($(ID, 'messageIframe'), 0, 0, 280, 200);
	stopClose = setTimeout(closeMessage, messageArr[2][0]);
}
//鼠标移入消息区，取消自动关闭；
$(ID, 'messageIframe').onmouseover = function(){
	clearTimeout(stopClose);
}
//鼠标移出消息区，执行自动关闭；
$(ID, 'messageIframe').onmouseout = function(){
	stopClose = setTimeout(closeMessage, messageArr[2][0]);
}
/*
* 消息机制逻辑解释：
* 任何消息发送过来先存在二维数组（标题和内容），然后检测当前消息队列是否空闲，空闲则唤出消息窗口，
* 否则就不唤出消息窗口，以防冲突，消息窗口先展示队列第一条信息，然后隔3秒关闭消息窗口，如果鼠标移入消息窗口，
* 则清除关闭窗口计时器，鼠标移出后再重新计时，关闭消息窗口增加Lock锁判断，防止在关闭窗口时候再次触发移出效果，
* 移出时清除消息数组第一行消息，然后数组下标变量减1，移出窗口后过，如果当前下标不小于0就过1秒再次执行窗口唤出，
* 否则退出消息队列，以便下次调用消息时可唤醒窗口；
*/
