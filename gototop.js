window.onload =() => {
   
    //var test = document.getElementById("test");

    test.onclick = () => {
        var target = test.getAttribute("data-gte-target");
        var offset = test.getAttribute("data-gte-offset");

        var element = document.getElementById(target);

        window.scrollTo({
            top: element.offsetTop - offset,
            behavior:"smooth"
        })
    }
}