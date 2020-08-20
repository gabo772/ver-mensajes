//estructura mensajes exportados 
// dd/mm/aa hh:mm p./a. m. - Nombre usuario: mensaje

const setActive = () => {
    let element, name, array;
    element = document.getElementsById("optn");
    name = "active";
    array = element.className.split(" ");
    if (array.indexOf(name) == -1) {
        element.className += " " + name;
    }
}



