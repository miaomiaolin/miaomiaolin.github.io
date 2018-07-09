function loadImg () {
    //加载图片
    var tbody="";
    // var imgSum=19;
    for(var i=1;i<=imgSum;i++){
        var trs = "";
        trs += '<div class = "item"><div class = "item-content"><img src="./img/img ('+i+').jpg" onclick="show('+i+')"></div></div>';
        tbody += trs;
    }
    document.getElementById("main").innerHTML = tbody;  
}

// 显示
function show (i) {
	var url ="./img/img ("+i+").jpg";
	console.log(i)
	console.log(url)
	document.getElementById("showImg").src = url;
	document.getElementById("show").style.display = "block";
}
// 隐藏
function toHidden () {
	document.getElementById("show").style.display = "none";
}