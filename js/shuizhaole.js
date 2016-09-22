function boxs (selector,father) {
	father=father||document
	if(father.getElementsByClassName){
		return father.getElementsByClassName(selector)
	}else{
		var all=father.getElementsByTagName("*")
		var newarr=[];
		for (var i = 0; i < all.length; i++) {
			if(str(all[i].className,selector)){
				newarr.push(all[i])
		    };
        }
	}return newarr
}
function str(da,xiao){
	var mm=da.split(" ")
	for(var i in mm){
		if(mm[i]==xiao){
			return true
		}
	}return false
}


function getstyle (ele,attr) {
	if(ele.currentStyle){
	return ele.currentStyle[attr]
}else{
	return getComputedStyle(ele,null)[attr]
}
}






