export function hasClass(ele, cls) {
    return ele.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(ele.className);
}

export function addClass(elements, myClass) {
    if (!elements) { 
        return; 
    }

    // if we have a selector, get the chosen elements
    if (typeof(elements) === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // if we have a single DOM element, make it an array to simplify behavior
    else if (elements.tagName) { 
        elements=[elements]; 
    }

    // add class to all chosen elements
    for (var i=0; i<elements.length; i++) {

        // if class is not already found
        if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {

            // add class
            elements[i].className += ' ' + myClass;
        }
    }
}

export function removeClass(elements, myClass) {
    // if there are no elements, we're done
    if (!elements) { 
        return; 
    }

    // if we have a selector, get the chosen elements
    if (typeof(elements) === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // if we have a single DOM element, make it an array to simplify behavior
    else if (elements.tagName) { 
        elements=[elements]; 
    }

    // create pattern to find class name
    var reg = new RegExp('(^| )'+myClass+'($| )','g');

    // remove class from all chosen elements
    for (var i=0; i<elements.length; i++) {
        elements[i].className = elements[i].className.replace(reg,' ');
    }
}

