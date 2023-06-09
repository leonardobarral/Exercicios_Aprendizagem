// const bloco = document.querySelector(".bloco");
// const header = bloco.querySelector("header");

addEventListener("mousedown",(evento)=>{   
    function onDrag({movementX,movementY}){
        let bloco = document.querySelector(`#${evento.target.id}`);

        let getStyle = window.getComputedStyle(bloco);
        let left = parseFloat(getStyle.left);
        let top = parseFloat(getStyle.top); 
    
        bloco.style.left = `${left + movementX}px`;
        bloco.style.top = `${top + movementY}px`;
    
        console.log(movementX,movementY)
    
    };

    // console.log(evento.target.id)
    if (evento.target.classList == "bloco" || evento.target.classList == "bloco active"){
        let bloco = document.querySelector(`#${evento.target.id}`);
        bloco.classList.add("active");
        bloco.addEventListener("mousemove", onDrag);

        bloco.addEventListener("mouseup", (evento)=>{
            if (evento.target.classList == "bloco" || evento.target.classList == "bloco active"){
                bloco.classList.remove("active");
                bloco.removeEventListener("mousemove", onDrag);
            }
        });
        bloco.addEventListener("mouseout", (evento)=>{
            if (evento.target.classList == "bloco" || evento.target.classList == "bloco active"){
                bloco.classList.remove("active");
                bloco.removeEventListener("mousemove", onDrag);
            }
        });
    }
});





// bloco.addEventListener("mousedown", ()=>{
//     bloco.classList.add("active");
//     bloco.addEventListener("mousemove", onDrag);
// });
// document.addEventListener("mouseup", ()=>{
//     bloco.classList.remove("active");
//     bloco.removeEventListener("mousemove", onDrag);
// });
