
//到一定位置之后出现滚动条
$(function () {
//当前窗口滚动事件
    $(window).scroll(function () {
    //    定义top=滚动条离窗口顶部的距离
        var top = $(window).scrollTop();
        console.log(top)
        //当滚动到top>800时，滚动条固定到顶端；否则不显示
        if (top>800 && top<1200) {
            $('.mod-header').addClass('active')
        }else {
            $('.mod-header').removeClass('active')
        }
    })
})






