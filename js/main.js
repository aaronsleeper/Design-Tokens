/**
 * Add elements to a target
 * 
 * num      =   how many elements to add
 * element  =   html element to be added
 * cssClass =   class to add to each element
 *              incremented value will also be added as a counter
 *              if num = 1 then id will be added as well
 * target   =   html elment that will contain the added elements
 * 
 * -- Example
 * addElements(9, 'div', 'block', '#stage');
 * 
 */
function addElements(num, element, cssClass, target) {
    for (i = 0; i < num; i++) {
        const el = document.createElement(element);
        el.classList.add(cssClass, cssClass + "-" + (i + 1));
        if (num === 1) {
            el.setAttribute("id", cssClass);
        }
        document.querySelector(target).appendChild(el);
    }
}
