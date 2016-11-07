
function getclass(selector,father){
	father=father||document
	if(father.getElementsByClassName){//1判断浏览器
		return father.getElementsByClassName(selector)
		//如果是可以用ClassName
	}else{//不可以则通过标签名获取大方围
		var newarr=[]
		var all=father.getElementsByTagName("*");
		for(var i=0;i<all.length;i++){//4遍历集合
			if(check(all[i].className,selector)){
				//5判断集合里的每一个==selector
				newarr.push(all[i])
				//6找到后保存新的数组
			}
		}
		return newarr//7返回新数组
	}
}


function check(str,selector){
	var arr=str.split(" ");//字符串转换为数组
	for(var i in arr){//遍历数组
		if(arr[i]==selector){
		//判断每一个每一个元素==selector
			return true;
			//条件为真时，表示找到了，返回这个真的
		}
	}
	return false;
	//所有元素比较后，都没有找到，返回假的
}




//获取样式的兼容
function getstyle(ele,attr){
	if(ele.currentStyle){
        return ele.currentStyle[attr]
	}else{
        return  getComputedStyle(ele,null)[attr];
	}
}