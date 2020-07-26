
//监听滚轮事件
function wheel(m){
	m = m || window.event;
	if (m.wheelDelta){//IE,Chrome
		if (m.wheelDelta > 0)
			wheelOn();	
		if (m.wheelDelta < 0)
			wheelDown();
	} else if (m.detail){//firefox
		if (m.detail > 0)
			wheelOn();
		if (m.detail < 0)
			wheelDown();
	}
}
if (document.addEventListener)//绑定鼠标滚轮；
	document.addEventListener('DOMMouseScroll', wheel, false);//firefox
window.onmousewheel = wheel;//IE,Chrome

//定义滚轮事件
function wheelOn(){//发送信号量给框架父页面
	//console.log(KeyDown);
	//if (KeyDown != null && KeyDown.keyCode == 90)
		window.parent.document.documentElement.style.setProperty('--wheelOn', '1');
}
function wheelDown(){
	//if (KeyDown != null && KeyDown.keyCode == 90)
		window.parent.document.documentElement.style.setProperty('--wheelOn', '-1');
}

//添加消息
function addMessage(title, content){
	window.parent.addMessage(title, content);
}