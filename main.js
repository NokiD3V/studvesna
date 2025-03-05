const textToColor = document.querySelectorAll("#colored__text")
textToColor.forEach((el, key) => {
    let chars = el.innerHTML.split("")
    chars = chars.map((n, i) => {
        if(i % 2 == 0){
            return `<span id="span__colored__1">${n}</span>`
        }
        else{
            return `<span id="span__colored__2">${n}</span>`
        }
    })
    console.log(chars)
    el.innerHTML = chars.join("");
})