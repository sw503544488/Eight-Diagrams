let html = document.querySelector("#demo")
let style = document.querySelector('#style')

let n = 0
let string = `/*
*你好,我叫商伟
*接下来我要演示下我的前端功底
*首先我要准备一个div*/
#div1{  
   border:1px solid  black;
   width:300px;
   height:300px;
}
/**接下来我把
*要把div变成一个八卦图
*注意看好了
*首先把div变成一个圆
**/
#div1{
   border-radius:50%;
   box-shadow:0 0 3px rgba(0, 0, 0, 0.5) ;
   border:none;
}
/**八卦是阴阳形成的
 * 一黑一白
 */
 #div1{
   background: rgb(255,255,255);
   background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
  #div1::after{
   background: rgb(255,255,255);
  }
#div1::before{
   background: rgb(0,0,0);
  }
/**加两个小球
 * 首先加一个黑色的小球
 */
#div1::after {
   background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);  
  }
/**
 * 然后加一个白色的球
 */
#div1::before {
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
  }


`
let string2 = ''
let string3=style.innerHTML
// string=string.replace(/\n/g,'<br>');
// demo.innerHTML = string[n];

let steptime = () => {
  setTimeout(() => {
    console.log(n)
    if (n >= string.length) {
      return  //如果n大于字符串长度之后直接退出
    }
    if (string[n] === "\n") {
      //如果是回车就不照搬,变成<br>
      string2 += '<br>'
 
    } else if (string[n] === " ") {
      string2 += '&nbsp'
      string3+=' '



    } else {//如果不是就照搬
      string2+= string[n]
     string3+=string[n]
    }
    
    style.innerHTML=string3//照搬string2会出现
    console.log(style.innerHTML)

    html.innerHTML = string2
    window.scrollTo(0,5000) //设置滚动条滚到底部
        html.scrollTo(0,5000) //设置滚动条滚到底部

    // demo.innerHTML = string.substring(0,n) 
    //substring 显示字符串0-n个字符 
    n = n + 1
    steptime()
  }, 10)
}
steptime()


