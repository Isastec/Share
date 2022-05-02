e = document.querySelectorAll(".lis1")

e.forEach(element => {
    element.addEventListener("click",(a)=>{
    console.log(element, a )
    element.Selection
    document.execCommand('copy');
    
    navigator.clipboard.writeText(element.innerHTML)

    alert("Copied!");

        
        
    })
});






