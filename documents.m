//tool工具文档
一、rootRed
    功能：
        函数：读取当前页面 css 全局变量；
    语法：
        rootRed(Str);
    形参：
        Str：需要读取的 css 变量名称；
二、rootRew
    功能：
        函数：改写当前页面 css 全局变量；
    语法：
        rootRew(Str);
    形参：
        Str：需要改写的 css 变量名称；
三、rootDel
    功能：
        函数：删除当前页面 css 全局变量；
    语法：
        rootDel(Str);
    形参：
        Str：需要删除的 css 变量名称；
四、$
    功能：
        函数：获取当前页面对象；
    语法：
        $(type, Str);
    形参：
        type：支持参数 ID TAG NAME CLASS；
            ID 使用 ID 获取元素；
            TAG 使用标签名获取元素；
            NAME 使用 name 属性获取元素；
            CLASS 使用类名获取元素；
        Sty：上述参数对应的值；
五、moduleSign
    功能：
        数组：包含配置文件 ini.css 的 moduleSign 全局变量；
    语法：
        moduleSign[i];
    参数：
        i：moduleSign 数组中的第 i 号元素；
六、bezier
    功能：
        对象：实现贝塞尔曲线，默认是 easy 曲线；
    语法：
        设置控制点：setCP(cp0x, cp0y, cp1x, cp1y);
        设置控制点组：setCPs(CPs);
        设置比值：setR(ratio);
        获取曲线 X 值：getX();
        获取曲线 Y 值：getY();
        以 X 坐标为基获取 Y 值：getX2Y(ratio, precision);
        以 Y 坐标为基获取 X 值：getY2X(ratio, precision);
    形参：
        setCP：
            cp0x 控制点1 x 坐标；
            cp0y 控制点1 y 坐标；
            cp1x 控制点2 x 坐标；
            cp1y 控制点2 y 坐标；
        setCPs：
            CPs 控制点坐标集合，遵上顺序；
        setR：
            ratio 路径比值，0到1之间；
        getX2Y getY2X：
            ratio 路径比值，0到1之间；
            precision 获取精度，1000为千分之一；
    备注：
        可以在函数源代码之前定义贝塞尔曲线数组，用设置控制点组函数设置曲线；
七、moveTransition
    功能：
        对象：配合贝塞尔曲线实现元素的移动动画；
    语法：
        实现移动：moveTransition(thisElem, horizontalLength, hMsec, verticalLength, vMsec, *CPs);
        设置移动贝塞尔曲线：setCPs(CPs);
        设置移动毫秒每帧：setMsFps(ms);
    参数：
        moveTransition：
            thisElem 元素对象；
            horizontalLength 水平移动距离，正下负上；
            hMsec 水平移动时间；
            verticalLength 垂直移动距离，正右负左；
            vMsec 垂直移动时间；
            *CPs 可选参数，用于设置当前移动的贝塞尔控制点；
        setCPs：
            CPs 控制点坐标集合，同 bezier 对象；
        setMsFps：
            ms 毫秒每帧；
八、addMessage
    功能：
        实现页面消息提醒；
    语法：
        addMessage(title, content);
    形参：
        title：消息标题；
        content：消息内容；
    备注：
        iframe 框架使用 window.parent 实现对父页面函数的调用，并没有把该函数实现在 tools 内；