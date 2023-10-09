document.addEventListener("DOMContentLoaded",()=>{
    let bar = document.querySelector(".bar")
    let hiddentext = document.querySelectorAll(".hidden")

   dragElement(bar)
   setOpacity(0)

   function setOpacity(offset){
    for(let i = 0; i < hiddentext.length; i++){
       
        let op = 1 - Math.abs(offset - hiddentext[i].offsetTop) / 250;
        console.log(op);
        hiddentext[i].style.opacity = op;
      }
}


 
   function dragElement(element){
    let dist = 0
    let currentPosition=0


    element.onmousedown = dragMouseDown


    
    function dragMouseDown(e){
        e.preventDefault();
        currentPosition = e.clientY
        e.target.style.cursor = 'grabbing';
        document.onmouseup = closeDragElement
        document.onmousemove = elementDrag
    }


function closeDragElement(e){
    document.onmouseup = null
    document.onmousemove = null
    e.target.style.cursor = 'grab';
}

    function elementDrag(e){
        e.preventDefault()

        dist = currentPosition - e.clientY
        currentPosition = e.clientY

        let updatePosition = element.offsetTop -dist
        element.style.top = `${updatePosition}px`

        setOpacity(element.offsetTop);

        document.documentElement.style.setProperty("--cursorX", element.style.left)
    }
   }
})

