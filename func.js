const x = document.getElementById("click"); 
x.addEventListener("click",()=>{
    first.setAttribute('style','display:none');
})

const y =document.getElementById("plus");
y.addEventListener("click",()=>{
    if(todoinput.value ==""){
        alert("Please type something to your ToDo-List");
    }
    else{
        var tododiv=document.createElement("div");
        tododiv.classList.add("todo");
        tododiv.innerText=todoinput.value;
        document.body.appendChild(tododiv);

        const complete=document.createElement('button');
        complete.innerHTML = '<i class="fa fa-check"></i>';
        complete.classList.add("complete-button");
        tododiv.appendChild(complete);

        const trash=document.createElement('button');
        trash.innerHTML ='<i class="fa fa-close"></i>';
        trash.classList.add("trash-button");
        tododiv.appendChild(trash);

        todoinput.value="";

        var del =document.getElementsByClassName("trash-button");
        var done=document.getElementsByClassName("complete-button");
        var body=document.getElementsByClassName("todo");
    
        for(let i=0;i<done.length;i++){
        done[i].addEventListener("click",()=>{
        body[i].setAttribute('style','text-decoration:line-through');
        body[i].classList.add('opa');
           });
        }
        for(let i=0;i<del.length;i++){
            del[i].addEventListener("click",()=>{
                
                body[i] .setAttribute('style','display:none');
           
               });
            }
       
            const z = document.getElementById("clear"); 
            z.addEventListener("click",()=>{
              tododiv.setAttribute('style','display:none');
            })
    }
        
    
})

     
