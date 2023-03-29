# JQuery Events

As mentioned earlier in the course, web browsers continually maintain awareness of the state of the window object. The window object is the top level of the hierarchy of JavaScript objects. As part of monitoring the state of the window object, browsers are programmed to have awareness of numerous events that can take place.

The majority of these are called [global events](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers). There are many of these though in practice we will use a few of them very often and most of them rarely if at all. 

The most important of these is the click event. A browser knows when a user clicks within its window, and it knows where the user clicks, exactly. 

In JavaScript, we can attach an event listener to a particular HTML element. When the event occurs on that element, it sends a message to the JavaScript interpreter, which works out what should happen next based on the code you've written into the event listener (aka event handler, aka callback). It works in a very similar way with the jQuery library.

Let's see a very basic example.

html:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JQuery Events</title>
</head>
<body>
    <button id="clickMe">Click Me</button>
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-events.js"></script>
</body>
</html>
```
js:
```
$(document).ready(function (){
    $("#clickMe").click(function(){
       alert("You clicked me!");
    });
});
```

1. An element gets clicked
2. The event listener attached to that element hears the click event and passes on to the JavaScript interpreter the code that is attached to it.
3. The interpreter runs the function specified by the listener
4. The user sees something happen

We can also use the longhand method known as on.

```
<button id="clickMeToo">Click me, too</button>
```
```
  $("#clickMeToo").on('click', function(){
        alert("Yay, I got clicked too!");
    });
```

The shorthand is the quickest way to get an event listener up on an element and is often the best for any situation where an element is pre-written onto the page.

The .on() method is favored for dynamically added elements because the event handler, selector, and event information is attached to the root level document, this allows dynamically added elements to share in event handlers that are declared when the window first loads. It gives you extra flexibility and power over the shorthand.

For example, say you have a button that adds an element to the page. 

```
 $("#create-an-element").click(function(){
       $(this).after("<button class='does-it-work'>Try clicking me</button>");
    });
```
Adding an event listener for it in the document.ready function will not work. This code does not trigger the event:
```
$(".does-it-work").click(function(){
       alert("clicking on a dynamically added element does not work");
    });
```
What I can do is use the .on() method with some extra arguments: 

```
    $(document).on('click', '.does-it-work', function(){
        alert("clicking on a dynamically added element does work");
    });
```

This is called a delegated event. You set an event listener on the parent element of the dynamically created element. When the event listed as the first argument is detected on the selector OR any of its children, the JavaScript interpreter checks if the element that triggered the listener matches the selector listed as the second argument. If it does, then the function runs.

A more efficient way of doing it would be to have a direct parent element, so the interpreter doesn't have to detect events on every element everywhere.

```
   <section id="dynamic">
        <button id="create-an-element">Create an element</button>
    </section>
```
```
   $("#dynamic").on('click', '.does-it-work', function(){
        alert("clicking on a dynamically added element does work");
    });
```

There are a number of jQuery methods you can use to program event listeners on elements in a web page. We can program to a double-click instead of a click, with the .dblclick() method. A very useful method that works a little differently is the .hover() method.

Let's break down the categories of event. We have document load events (load, ready, unload). We are using the ready event a lot. We have browser events: resize, scroll, error. We have form events: focus, blur, select, submit, change. The ones we will be most focused on in this class are mouse and keyboard events. Right now we are looking at mouse events. 

We've seen click and doubleclick. There is also mousedown and mouseup; mouseenter and mouseleave; mouseover, which is a mouseenter that also applies to the children of the bound element; mousemove.

.hover() is kind of a combined mouseenter-mouseleave bundled into one method for convenience. It binds mouseenter and mouseleave handlers to an element. Let's look at it.

```
<section class="simple-box"></section>
```
```
 .simple-box {
            height: 100px;
            width: 75%;
            margin: 15px auto;
            border: 1px solid black;
        }
```
```
 $(".simple-box").hover(
      function (){
          $(this).css('outline', '8px ridge rebeccapurple');
      },
      function (){
          $(this).css('outline', 'none');
        }
    );
```

There are a lot of other methods that are useful to use with .hover(). We'll see a lot of methods shortly, but keep in mind as well as single css properties, you can use .addClass() and .removeClass() to add whole clumps of properties all at once.

```
 .outline {
            outline: 8px ridge rebeccapurple;
            outline-offset: 3px;
        }
```
```
    $(".simple-box").hover(
        function (){
        $(this).addClass("outline");
    },
        function(){
            $(this).removeClass("outline");
        });
```

The other event listener methods you will need for today's exercise are the keyboard methods. The most significant of these are the keydown, keyup, and keypress methods.

```
 $(document).keydown(function(){
       alert("key down");
    });
```
```
 $(document).keyup(function(){
        alert("key up");
    });
```
Keypress is like keydown, except that it doesn't trigger when the so-called "modifier" keys are pressed: control, option, command, shift, delete, fn.

```
$(document).keypress(function(){
       alert("'real' key pressed");
    });
```

