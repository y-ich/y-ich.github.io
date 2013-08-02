var id_number = 1; /* incremental id number for 'math' and 'argument' */
var drag_flag = false; /* drag_flag prevents click handle after move */


window.onload = function() {
    var i;
    var elems;

    //prevent default document scrolling
    document.addEventListener('touchmove', function(e) {
	e.preventDefault();
    }, false);
			
    /* initialize items in pulldown menus */
    elems = document.getElementById('pulldownmenu').getElementsByClassName('math');
    for (i = 0; i < elems.length; i++) {
	elems[i].id = 'expression' + id_number;
	id_number++;
	new webkit_draggable(elems[i].id, {revert: 'always', onEnd: handleEnd});
    }
}


/* generate math class node from prototype(menu item) */
function genMath(proto) {
    const maxArguments = 4;
    var copy;

    copy = cloneNodeWithMathJax(proto);
    copy.id = 'expression' + id_number;
    id_number++;
    document.body.appendChild(copy);
    /* appendChild should be executed before webkit_drop.add */
    for (j = 1; j <= maxArguments; j++) {
	/* Because elems is a NodeList, not an Array, you cannot concatenate.
	   so I repeat procedure for each elems. */
	elems = copy.getElementsByClassName('argument' + j);
	for (i = 0; i < elems.length; i++) {
	    elems[i].id = 'expressions' + id_number;
	    id_number++;
	    webkit_drop.add(elems[i].id, {onDrop: handleDrop});
	}
    }

    return copy;
}

/* copy item from menu */
function handleEnd(draggable_element, touchevent) {
    const maxArguments = 4;
    var copy;
    var elems;
    var i, j;
    var event = touchevent.changedTouches[0];

    if (draggable_element.dropped != true) {
	copy = genMath(draggable_element);
	copy.style.left = event.clientX + 'px';
	copy.style.top = event.clientY + 'px';
	copy.addEventListener('click', handleClick, false);
	new webkit_draggable(copy.id, {onEnd: function () {drag_flag = true;}});
	draggable_element.dropped = false;
    }

    drag_flag = true;
};


/* simply drop version */
function handleDrop(draggable, droppable, event) {
    var droppableParent = droppable.parentNode;
    var children;
    var child;
    var dropped;

    if (droppableParent == draggable) return;
    if (draggable.parentNode.tagName != 'BODY') { /* should be menu */
	dropped = genMath(draggable);
	dropped.style.left = event.clientX + 'px';
	dropped.style.top = event.clientY + 'px';
	draggable.dropped = true;
    }
    else {
	dropped = draggable;
    }

    children = droppable.childNodes;
    while (children.length > 0) {
	droppable.removeChild(children[0]);
    }
    droppable.className = 'math';
    droppable.title = dropped.title;

    children = dropped.childNodes;
    while (children.length > 0) {
	child = children[0];
	dropped.removeChild(child);
	droppable.appendChild(child);
    }
    
    dropped.parentNode.removeChild(dropped);
    // webkit_drop.remove(droppable); /* Removing a droppable within handle cause inconsistency of lastIndex. leave it alone .*/
};


/* simplifing to one exression version */
function handleDrop2(draggable, droppable, event) {
    var droppableParent = droppable.parentNode;
    var children;
    var child;
    var className;
    var i;
    var texSource;

    if (droppableParent == draggable) return;

    className = droppable.className;
    droppableParent.title = droppableParent.title.replace('a' + className.substring('argument'.length), draggable.title);
    
    children = droppableParent.childNodes;
    if (children[0] === droppable) {
	texSource = '{' 
	    + MathJax.Hub.getAllJax(draggable)[0].SourceElement().innerHTML
	    + '}' + MathJax.Hub.getAllJax(droppableParent)[0].SourceElement().innerHTML;
    }
    else {
	texSource = MathJax.Hub.getAllJax(droppableParent)[0].SourceElement().innerHTML
	    + '{'
	    + MathJax.Hub.getAllJax(draggable)[0].SourceElement().innerHTML
	    + '}';
    }

    texSource = texSource.replace(/(\{.+\})\/(\{.+\})/, '\\frac$1$2');

    draggable.parentNode.removeChild(draggable);
    droppableParent.removeChild(droppable);
    // webkit_drop.remove(droppable); /* Removing a droppable within handle cause inconsistency of lastIndex. leave it alone .*/
    MathJax.Hub.Queue(['Text', MathJax.Hub.getAllJax(droppableParent)[0], texSource]);
};


function handleClick(event) {
    var popup;

    if (drag_flag == true) {
	drag_flag = false;
	return;
    }
    drag_flag = false;
    popup = document.getElementById('popupmenu');
    popup.parentNode.removeChild(popup);
    event.currentTarget.appendChild(popup);
    popup.style.display = (popup.style.display == '') ? 'none' : '';
};


function maxima_evaluate(event) {
    var target = event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    var result = target.title;
    var maths = target.getElementsByClassName('math');
    var i;

    console.log(target);
    for (i = 0; i < maths.length; i++) {
	result = result + ' ' + maths[i].title;
    }
    console.log(result);
};


function handleMouseOut(event) {
    event.currentTarget.style.display = 'none';
};


function cloneNodeWithMathJax(elem) {
    var result;

    result = cloneNodeWithMathJaxAux(elem);
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, result]);

    return result;
}

/* deep copy except for elements with class name beginning with 'MathJax'.
   Because they would be reproduced by calling MathJax.Hub.Queue. */
function cloneNodeWithMathJaxAux(elem) {
    var i;
    var result;
    var children;

    result = elem.cloneNode(false);
    result.id = null;

    children = elem.childNodes;
    for (i = 0; i < children.length; i++) {
	if (!(/^MathJax.*/.test(children[i].className))) {
	    result.appendChild(cloneNodeWithMathJaxAux(children[i]))
	}
    }

    return result;
}
