var input1=document.querySelector("input[name='todo_input']");
var btn=document.querySelector('button');
var div=document.querySelector('.todos');
var count=0;
btn.addEventListener('click',function(){
        var para =document.createElement("p")
        var text=input1.value
        para.append(text)
        para.setAttribute('key',count)
        count+=1;
        div.append(para);       
})
div.addEventListener('click',function(e){
    console.log(e)
    div.removeChild(e.target)
})
