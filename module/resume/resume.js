//Automatic random gradient background color;
(function () {
    var color_bg = ['#2ae0c8', '#a2e1d4', '#acf6ef', '#cbf5fb', '#bdf3d4', '#e6e2c3', '#e3c887', '#fad8be', '#fbb8ac', '#fe6673'];
    //var color_bg = ['#fa5a5a', '#f0d264', '#82c8a0', '#7fccde', '#6698cb', '#cb99c5', '#e3c887', '#fad8be', '#fbb8ac', '#fe6673'];
    var color_bg_pointer = 0;
    function setColor_bg() {
        if (color_bg_pointer >= 10)
            color_bg_pointer = 0;
        //document.getElementById('info-bg').style.backgroundColor = color_bg[color_bg_pointer];
        document.getElementById('info-bg').style.backgroundColor = color_bg[Math.round(Math.random() * color_bg.length - 1)];
        color_bg_pointer++;
    }
    setInterval(setColor_bg, 5000);
}());

/**
 * Background movement effect;
 * 1.calculate the overflow amount of the background equivalent to the window
 * 2.get position property in html (is data-bg-position-x and data-bg-position-y) 
 *   calculate rule: binary code 0 is top or left
 *                   binary code 1 is bottom or right
 * 3.use random number of 0 or 1, and control the movement of the background
 * 4.real movement through arithmetic
 */
(function () {
    var bg_img = document.querySelector('#bg img');
    var bg_position_x = Number(bg_img.dataset.bgPositionX);
    var bg_position_y = Number(bg_img.dataset.bgPositionY);
    //Overflow calculation;
    var overflowHeight = bg_img.scrollHeight - bg.offsetHeight;
    var overflowWidth = bg_img.scrollWidth - bg.offsetWidth;
    if (overflowHeight <= 0)
        overflowHeight = 0;
    if (overflowWidth <= 0)
        overflowWidth = 0;

    function bg_move() {
        if (bg_img.getAttribute("Lock") == 1)
            return;
        //set yes or no of move of x and y
        var shift_x = Math.round(Math.random());
        if (shift_x == 0)
            var shift_y = 1;
        else
            shift_y = Math.round(Math.random());
        //set direction
        if (bg_position_x)
            var direction_x = 1;
        else
            var direction_x = -1;
        if (bg_position_y)
            var direction_y = 1;
        else
            var direction_y = -1;
        //move function
        moveTransition(
            bg_img,
            shift_x * direction_x * overflowWidth,
            shift_x * 10000,
            shift_y * direction_y * overflowHeight,
            shift_y * 10000,
            B_line);
        //update position infomation
        if (shift_x)
            bg_position_x = !bg_position_x;
        bg_img.dataset.bgPositionX = Number(bg_position_x);
        if (shift_y)
            bg_position_y = !bg_position_y;
        bg_img.dataset.bgPositionY = Number(bg_position_y);
    }
    
    bg_move();
    setInterval(bg_move, 10000);
}());
