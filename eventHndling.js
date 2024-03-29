/**
 * TITLES
 * 1: Browser events and types
 * 2: Event Handlers javascript
 * 3: Event Object
 * 4: Event Propagation i.e Bubbling,capturing
 * 5: stop propagation
 * 6: vent browser monitoring and compatability
 * 
 */

/**
 * LEARNING OBJECTIVIES
 * -By the end of this mudulle you will be able to
 * 1: reacll and recognize diffent types of browser events and event handelers in js
 * 2: comprehend/ understand the concept of the event propagation, babbling, capturing and stop propagation
 * 
 */

/**
 * BRowser events and types
 * what is prowser event handleing?
 *      BE are action or ocurrencies that happen or occur whithin the broser which can be setected an responded to by js
 * how can i recognize events?
 *      event are regnize as the CHENGE in STATE of an object
 * HOW and what triggers events?
 *     event can be triggered either by the user or by the browser automatically, based on the code
 * what is the process of responding to thes events is called?
 *     event Handling.
 * DEMO
 * 
 * 1:user interact with the page             >2: an event occur---------->3: a piece of js code runs in response-----> 4: the page's appearance isupdatedor modified in some way as a result
 * click me!   ------------------------------>event --------------------->function myEvent(){} ----------------------->page response
 * 
 * BROWSER'S MOUSE AND KEYBOARD  EVENTS
 * EVENT                     DESCRIPTION
 * click =>occue or happen when an elemnts is clicked
 * dbclick=> double click on an element
 * mouseover=>mouse pointer moves over and element
 * mouseout=> mouse pointer moves over and element
 * mousedown and mouseup=> mouse button is pressed and released over an elememt
 * keydown =>when a key is pressed down
 * keyup => when a key is released
 * keypress=> when a key is pressed and released
 * 
 * FORM AND WINDOW EVENTS
 * submit=>occur when a form is submitted
 * chenge =>when the value of an <input>, <select> or <textarea> elemets has been chenge
 * forcus and blur =>whan an elemen gets focus and losses focus respectively
 * load =>fired when the whole page has loaded including all dependent resouces
 * resize =>when the document view(window) has been resized
 * scroll =>when the user scroll in the document
 * 
 * TOUCH AND DRAG EVENTS
 * touchstart =>when a touch poit is placed on the touch surface
 * touchmove =>when a touch point is moved along the touch surface
 * touchend=>when the touch  pont is removed from the touch surface
 * drag, dragstart,dragend =>related to dragging elements and dropping them.
 * 
 * EVENT HANDLERS IN JS
 * what is event handeler? =>event handelrr in js are functions tha are called in response to spacifc ebvents occurring in the web page
 * what is the important of event handelers
 *      they enable interactive wb app by responding tto usser inputs i.e mouse clck, keyboard pressor changes in form elements
 * how to handle event handlers
 *      there are two recommended approaches for handeling 1: using Property event handler 2: using AddEventListener
 * 
 * USING PROPRTY EVENT HANDLERS
 * - By convention js obj that fire events have corresponding onevent property
 *   named by prefixing on to the name of event
 *   these properties are called to run associated handlers code when the eventis fire and may also be called directly by your own code 
 *   to set event handler code yo canjust assign it to the appropiate Onevent handler
 *   - only one event handler can be assigned for every event in an element. if needed the cndelar can be replased by assigning another function to the same property
 *
 */

const btn= document.querySelector(".btn");
function greet(event){
   // console.log("greet",event)
}
btn.onclick=greet

/**
 * USING ADDEVENTLISTENER
 * The most flexible way to set event handler on an element is to use the EVENTtARGET.addEventListener method
 * this approach allows multiple listen=ners to be removed if neede using : EventTarget.removeEventListener 
 * NOTE/: the ability to add and remove event handler allows u to for example:have same button perfome diffent actipons in different circumstances
 * in addition, in more complex programs cleaning up old or unused events handlers can improve efficieny.
 */

const btn2=document.querySelector(".btn");

function greet2(event){
   console.log("greet",event)
   // console.log("event type",event.type)
   // console.log("event target",event.target)
   // console.log("event current target",event.currentTarget)
   // console.log("event key code",event.keyCod)
   // console.log("event coordinate",event.clientX)
   // console.log("event coordinate",event.clientY)

}
btn2.addEventListener("click",greet2)

/**
 * EVENT OBJECT
 * THE event object => is js obj that contains all the details about an event:
 *            1:such as the type of event
 *            2:the element that triggered the event
 *            3:the state of the keyboad keys
 *  conventional names of event obj used in js are e,event,evt
 * PROPERTIES OF EVENT OBJECTS;
 * 1: TYPE: identifies the type of the event e.g "click","keydown"
 * 2: target: the element that triggered the event
 * 3: currentTaget: the element to which the event handler is attached
 * 4; preventDefault(): method to prevent the dfault action assocuated with the evnt
 * 5: stopPropegetion(): method to stop the event from bubbling up the DOM tree
 * 6: keyCode : the code ofg thekey pressed for keyboard events
 * 7: clinetX and clientY for mouse eents=> the x andy coodinates of the mouse pointer when the vent was triggerd
 * 
 */
/**
 * EVENT PROPERGATION
 * Propergation => describes the process by which events move though the document object module
 */

