
var meng=getclass("xy")
var lei=getclass("bannerbox")

var num=0
 for (var i = 1; i < lei.length; i++) {
    lei[i].style.left="1349px"
  };
  var now=0
  var next=0
  function moveleft () {
    next++
    if (next>=lei.length) {
      next=0
    };
    animate(lei[now],{left:-1349},500)
    lei[next].style.left="1349px"
    animate(lei[next],{left:0},500)
    lei[now].style.zIndex=0
    lei[next].style.zIndex=5
    meng[now].id=""
    meng[next].id="msb"
    now=next
  }
  var t=setInterval(moveleft,3000)
var banner=getclass("banner")[0]
    banner.onmouseover=function  () {
      clearInterval(t)
      msbz.style.display="block"
      msby.style.display="block"
    }
    banner.onmouseout=function  () {
      t=setInterval(moveleft,3000)
      msbz.style.display="none"
      msby.style.display="none"
    }
  var msbz=getclass("leftbnt")[0]
  var msby=getclass("rightbnt")[0]
  var leftbnt1=getclass("leftbnt1")[0]
  var rightbnt1=getclass("rightbnt1")[0]
  msbz.onmouseover=function  () {
    leftbnt1.style.opacity="1"
  }
  msbz.onmouseout=function  () {
    leftbnt1.style.opacity="0.7"
  }
  msby.onmouseover=function  () {
    rightbnt1.style.opacity="1"
  }
  msby.onmouseout=function  () {
    rightbnt1.style.opacity="0.7"
  }
  msbz.onclick=function  () {
    moveleft()
  }
  msby.onclick=function  () {
      next--
    if (next<=-1) {
      next=lei.length-1
    };
    animate(lei[now],{left:1349},500)
    lei[next].style.left="-1349px"
    animate(lei[next],{left:0},500)
    lei[now].style.zIndex=0
    lei[next].style.zIndex=5
    meng[now].id=""
    meng[next].id="msb"
    now=next
  }

for (var K = 0; K < meng.length; K++) {
  // num++
  meng[K].aa=K//记录元素下标
  meng[K].onclick=function(){
       //this.aa当前元素下标
       next=this.aa
       lei[next].style.left="1349px"
       animate(lei[next],{left:0})
       lei[now].style.zIndex=0
       lei[next].style.zIndex=5
       meng[now].id=""
       meng[next].id="msb"
       now=next
    //    for(var j=0;j<meng.length;j++){
    //           meng[j].id=""
    //      shabia[j].style.left="-1180px"
    //    }
    //    this.id="xiaohong"
     // shabia[this.aa].style.left="0px"
    //    num=this.aa
      }
};