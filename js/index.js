var a=boxs("box")
var b=boxs("zhezhao")
for (var i = 0; i < a.length; i++) {
	a[i].aa=i
	a[i].onmouseover=function(){
		b[this.aa].style.display="block"
	}
	a[i].onmouseout=function(){
		b[this.aa].style.display="none"
	}
};