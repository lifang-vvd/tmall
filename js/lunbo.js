// var dsb1=boxs("bbb")
// var dsb2=boxs("ccc")
// for (var i = 0; i < dsb1.length; i++) {
// 	dsb1[i].aa=i//记录元素下标
// 	dsb1[i].onclick=function(){
//        //this.aa当前元素下标
//        for(var j=0;j<dsb1.length;j++){
//               dsb1[j].style.cssText=""
//        	dsb2[j].style.display="none"
//        }
//        this.style.cssText="font-weight:bold;border-bottom:5px solid red"
// 	dsb2[this.aa].style.display="block"
//       }
// };
/*
var bgcolor=["#27c4f9","#e8e8e8","#067d69","pink"]
var tu=boxs("bannerTu");
var zhubanner=boxs("zhubanner")[0]
var anniu=boxs("btn")[0]
var an=anniu.getElementsByTagName("li")
var num=0;
function change () {
  num++;
  if(num>=an.length){
    num=0;
  }
  for (var i = 0; i < an.length; i++) {

  zhubanner.style.background=""
    tu[i].style.opacity=0;
        an[i].id=""
  };
  animate(tu[num],{opacity:1})
  // tu[num].style.opacity:1;
  an[num].id="btn1";
  zhubanner.style.background=bgcolor[num]
}
var t=setInterval(change,2000)
var banner=boxs("zhubanner")[0]
banner.onmouseover=function(){
  clearInterval(t)
} 
banner.onmouseout=function(){
  t=setInterval(change,2000)
}


for (var i = 0; i < an.length; i++) {
  an[i].index=i
  an[i].onclick=function(){
    for (var j = 0; j < an.length; j++) {
      tu[j].style.opacity=0;
      an[j].id=""
    };
    animate(tu[this.index],{opacity:1})
    // tuu[this.index].style.opacity:1;
    this.id="btn1"
    num=this.index
  }

};
*/

  var floor=$(".louceng")
  var btnli=$(".LeftS")
  var colorarr=["red","green","yellow","black","red","green","yellow","black"]
  // alert(btnli.length)
  var now; 
  /*window.onscroll=function(){
  for (var i = 0; i < btnli.length; i++) 
    if(floor[i].offsetTop<=obj.scrollTop+300)
    {
      for (var j = 0; j < btnli.length; j++) 
      {
    btnli[j].style.background="#626262"
    };
  btnli[i].style.background=colorarr[i]
      now=i
  }
  
  }*/
    






document.documentElement.scrollTop=1;
  var obj=document.documentElement.scrollTop?document.documentElement:document.body;
var yincangbox=boxs("yincangbox")[0]
var LeftSidebar=boxs("LeftSidebar")[0]

var flagdown=1;
var flagup=1
window.onscroll=function  () {
  if (obj.scrollTop>=500) {
    if(flagdown==1){
      animate(yincangbox,{height:45},200)
      animate(LeftSidebar,{width:38,height:364},200)
      flagdown=2
    }
    flagup=1
  } else{
    if(flagup==1){
    animate(yincangbox,{height:0},200)
    animate(LeftSidebar,{width:0,height:0},200)
    flagup=2
  }
    flagdown=1;
  };
  for (var i = 0; i < btnli.length; i++) 
    if(floor[i].offsetTop<=obj.scrollTop+300)
    {
      for (var j = 0; j < btnli.length; j++) 
      {
    btnli[j].style.background="#626262"
    };
  btnli[i].style.background=colorarr[i]
      now=i
  }else{
    btnli[i].style.background="#626262"
  }
}
for (var i = 0; i < btnli.length; i++) {
      btnli[i].AA=i
       
       btnli[i].onclick=function(){
        
      //  obj.scrollTop=floor[this.AA].offsetTop
        animate(obj,{scrollTop:floor[this.AA].offsetTop},300)
        now=this.AA
      }
    btnli[i].onmouseover=function(){

      for (var j = 0; j < btnli.length; j++) {
        if(now!=j){
        btnli[j].style.background="#626262"
          }
      };
      btnli[this.AA].style.background=colorarr[this.AA]
    }
    btnli[i].onmouseout=function(){
    btnli[this.AA].style.background="#626262"
    }
    } 

 



function getchilds(father,type){
  type =type||"a"
  var all=father.childNodes
  var arr=[]
  for (var i = 0; i < all.length; i++) {
    if(type=="a"){
      if(all[i].nodeType==1){
        arr.push(all[i])
      }
    }else if(type=="b"){
      if(all[i].nodeType==1||all[i].nodeType==3&&all[i].nodeValue.replace(/^\s*|s*$/g,"")!==""){
        arr.push(all[i])
      }
    }

  };
  return arr
}

// ele表示元素
function getnext(ele){
  var next=ele.nextSibling
  if(next==null){
    return false
  }
  while(next.nodeType==3||next.nodeType==8){
    next=next.nextSibling
    if(next==null){
    return false
  }
  }
  return next
}
function getpre(ele){
  var pre=ele.previousSibling
  if(pre==null){
    return false
  }
  while(pre.nodeType==3||pre.nodeType
    ==8){
    pre=pre.previousSibling
  if(pre==null){
    return false
  }
  }
  return pre
}
function getfirstchild(father){
  return getchilds(father)[0]
  }  
function getlastchild(father){
  return getchilds(father)[getchilds(father).length-1]
  }
function getnumchild(father,num){
  return getchilds(father)[num]
  }
//导航小猫
var xiaomao=$(".xiaomao")
var dxiaomao=$(".dxiaomao")
  
for (var i=0;i<dxiaomao.length;i++) { 
      dxiaomao[i].AA=i    
    dxiaomao[i].onmouseover=function(){
      for (var j = 0; j<xiaomao.length; j++) {
        animate(xiaomao[j],{height:0},200)
          }
           animate(xiaomao[this.AA],{height:15},200)
      };
    dxiaomao[i].onmouseout=function(){
    animate(xiaomao[this.AA],{height:0},200)
    }
   }


//banner部分选项卡
var WW=$(".WW")
var NvZ=$(".NvZ")
// alert(NvZ.length)
for(var i=0;i<WW.length;i++){
    WW[i].DD=i;
    WW[i].onmouseover=function(){
        
       for(var j=0;j<NvZ.length;j++){
        NvZ[j].style.display="none"
       } 
       NvZ[this.DD].style.display="block"
      // var flag=1
    }
    
    WW[i].onmouseout=function(){
        NvZ[this.DD].style.display="none"
    }
    // for(var k=0;k<NvZ.length;k++){
    //     NvZ[k].KK=k
    //     //alert(flag)
    //     if(flag==1){
    //         NvZ[k].onmouseover=function(){
    //              this.style.display="block"
                 
    //         }
    //         flag=0
    //         //alert(flag)
    //     }else if(flag==0){
    //         NvZ[k].onmouseout=function(){
    //             alert(1)
    //             NvZ[this.KK].style.display="none"
                
    //         }
    //         flag=1
    //     }

    // }
}  


//输入框
var TSSK=$(".TSSK")[0];
var text=$(".text")[0];
  TSSK.onfocus=function(){
    if(TSSK.value=="CPB肌肤之钥光耀入驻"){
      TSSK.value=""
    }
  }
  TSSK.onblur=function(){
    if(TSSK.value==""){
      TSSK.value="CPB肌肤之钥光耀入驻"
    }
  }
    text.onfocus=function(){
        if(text.value=="夏季热搜"){
            text.value=""
        }
    }
    text.onblur=function(){
        if(text.value==""){
            text.value="夏季热搜"
        }
    }//输入框
  


// 放大镜
var fenlei999=$(".fenlei999")
var fenleitupian=$(".fenleitupian")
for (var i = 0; i < fenlei999.length; i++) {
  fenlei999[i].aa=i
fenlei999[i].onmouseover=function(){
   fenleitupian[this.aa].style.cssText="width:147px;height:147px;"
}
fenlei999[i].onmouseout=function(){
   fenleitupian[this.aa].style.cssText="width:140px;height:140px;"
}
};



jQuery(window).resize(function(){
  if(jQuery(window).width()<1230){
    jQuery(".daohang3>ul>li:gt(7)").css("display","none")
    jQuery("zhubannernei").css("width",1230)
  }else{
    jQuery(".daohang3>ul>li:gt(7)").css("display","block")
    jQuery("zhubannernei").css("width",1230)
  }
})
jQuery(window).resize()
// #27c4f9","#e8e8e8","#067d69","pink
var number=0
    jQuery(".btn ul li").click(function(){
        var index=jQuery(".btn ul li").index(this)
        jQuery(".btn ul li").css("background","#ccc")
        jQuery(this).css("background","red")
        jQuery(".jpg").animate({opacity:0},300).eq(index).animate({opacity:1},300)
        number=index
        if(number==0){
          jQuery(".zhubanner").css("background","#27c4f9")
        }else if(number==1){
          jQuery(".zhubanner").css("background","#e8e8e8")
        }else if(number==2){
          jQuery(".zhubanner").css("background","#067d69")
        }else if(number==3){
          jQuery(".zhubanner").css("background","pink")
        }
    })

    function lunbos(){
        number++
        if(number>jQuery(".btn ul li").length-1){
            number=0
        }
        jQuery(".jpg").animate({opacity:0},300)
        jQuery(".jpg").eq(number).finish()
        jQuery(".jpg").eq(number).animate({opacity:1},300)
        jQuery(".btn ul li").css("background","#ccc").eq(number).css("background","red");
        if(number==0){
          jQuery(".zhubanner").css("background","#27c4f9")
        }else if(number==1){
          jQuery(".zhubanner").css("background","#e8e8e8")
        }else if(number==2){
          jQuery(".zhubanner").css("background","#067d69")
        }else if(number==3){
          jQuery(".zhubanner").css("background","pink")
        }
   
    }
    var t=setInterval(lunbos,2000)
    jQuery(".box").hover(function(){
        clearInterval(t)
    },function(){
        t=setInterval(lunbos,2000)
    })