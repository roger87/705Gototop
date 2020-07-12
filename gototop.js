window.onload = () => {

    var elements = document.getElementsByTagName("*");

    for (let index = 0; index < elements.length; index++) {
        const e = elements[index];
        
        e.onclick = () => {
            var target = e.getAttribute("data-gte-target");  
            var offset = e.getAttribute("data-gte-offset");  
    
            if (target) {

                var element = document.getElementById(target);      
        
                window.scrollTo({
                    top: element.offsetTop - offset,
                    behavior: "smooth"
                })
            }
        }
    }
}