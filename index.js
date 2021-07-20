let demo = document.querySelector("#demo")
let n = 0
let string = "你好,我是一名前端新人"
let string2 = ''
demo.innerHTML = string[n];

let steptime = () => {
  setTimeout(() => {
    console.log(n)
    if (n >= string.length) {
      return
    }
    string2 = string2 + string[n]
    console.log(string2)
    demo.innerHTML = string2
    // demo.innerHTML = string.substring(0,n) 
    //substring 显示字符串0-n个字符 

    n = n + 1
    steptime()
  }, 300)
}
steptime()