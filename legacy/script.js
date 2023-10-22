function myFunction() {
    var x = document.querySelector("nav");
    
    // If "responsive" class is already set, this will remove it.
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        // If "responsive" class isn't set, this will add it.
        x.classList.add("responsive");
    }
}
