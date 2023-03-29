# AJAX

AJAX is a little different from other topics we have covered in this course. AJAX is not a language, it's not really a subtopic of any one language. It's a bunch of tools and technologies put together. I would call it a technique. 

The purpose of AJAX is to enable asynchronous data retrieval and presentation. What do we mean by asynchronous? 

Generally speaking, data on a web page is loaded when the document itself loads. When the user enters a url in the address bar, or clicks on a link that contains that url, the user's browser sends a request to the server. The server receives the request and sends the data the browser needs in order to render that page. Browsers know how to render html, css, and JavaScript, so what the server sends will usually be a combination of those three. Then the browser's interpretation engines run the code, principally from top to bottom. The browser then renders the page for the user and the user is able to view the page.

What happens if the user clicks on another link? A new request is sent to the server, and the page reloads and displays the new data. But what if we don't want the whole page to reload? The page reload can be slow and clunky and interrupt the user experience. Sometimes we want that, but sometimes we just need to modify the page slightly.

A classic example is the sidebar social media feed. We often see websites carrying social media feeds on the side. Every so often, or whenever a relevant post is made, the feed updates. Imagine if every time the feed updated, the whole page had to reload? Not good. 

An asynchronous request is not made at the same time as the page load, it does not typically cause a page to reload, and it is programmed to occur when a specific event occurs, so it does not run in sequence with the rest of the JavaScript code. 

As we know, JS code runs from top to bottom, for the main part. But what about event listeners? The script runs, the browser reads the event listeners, but the code in the event listener functions doesn't run until the event is triggered. That's asynchronous programming, leaving instructions to run at various moments in the course of the user's experience, but not directly with the main script code.

AJAX is asynchronous, but it goes further than event listeners. Event listeners don't need to communicate with a server to run. AJAX allows you to send a request to a server, receive data, and display data, all asynchronously. It's like a networked event listener. It's very widely used and very useful.

You can use AJAX in an app to retrieve data from your databases asynchronously; you can use AJAX in your forms to check if a username is already taken when a new user is registering or to carry out server-side data validation as the form is being filled; and you can use AJAX with APIs. In this part of the class we will mainly be looking at APIs. 

Let's start by retrieving data right here in our own local machine, pretending it's a remote server.

Say we have a bunch of data on murals from Chicago.

[City of Chicago mural registry](https://data.cityofchicago.org/resource/we8h-apcf.json)
Click on Raw Data to show raw data

```
[
  {
    "mural_registration_id":"19006","artist_credit":"John Pitman Weber","artwork_title":"TILT (Together Protect the Community)","year_installed":"1976","year_restored":"2005","street_address":"2100 West Division St","zip":"60622","ward":"2","community_area_number":"25","affiliated_or_commissioning":"Chicago Public Art Group","latitude":"41.90325452","longitude":"-87.67982505","location":{"type":"Point","coordinates":[-87.67982505,41.90325452]},":@computed_region_rpca_8um6":"4",":@computed_region_vrxf_vc4k":"25",":@computed_region_6mkv_f3dw":"21560",":@computed_region_bdys_3d7i":"517",":@computed_region_43wa_7qmu":"11"
  }, {
  "mural_registration_id":"19043","artist_credit":"Rahmaan Statik, Max Sansing","artwork_title":"Sepia","media":"Paint","year_installed":"2016","street_address":"2230 S. Central Park Ave","zip":"60623","ward":"22","affiliated_or_commissioning":"Chicago Public Art Group","latitude":"41.850922","longitude":"-87.715009","location":{"type":"Point","coordinates":[-87.715009,41.850922]},":@computed_region_rpca_8um6":"57",":@computed_region_vrxf_vc4k":"32",":@computed_region_6mkv_f3dw":"21569",":@computed_region_bdys_3d7i":"754",":@computed_region_43wa_7qmu":"28"
}, {
  "mural_registration_id":"19064","artist_credit":"Damon Reed & Moses Ball","artwork_title":"Change Makers","year_installed":"2006","street_address":"3819 Ogden Ave","zip":"60623","ward":"22","affiliated_or_commissioning":"Chicago Public Art Group","description_of_artwork":"Artists: Damon Reed & Moses Ball2005"
}, {
  "mural_registration_id":"19154","artist_credit":"Shawnimals","media":"Paint","year_installed":"2018","location_description":"Cards Against Humanity HQ","street_address":"1551 W Homer Street","zip":"60642","ward":"2","community_area_number":"22","affiliated_or_commissioning":"Cards Against Humanity HQ","description_of_artwork":"Shawn Smith, creator of Shawnimals and Ninjatown, makes things that inspire and delight people.","latitude":"41.91720864","longitude":"-87.66683738","location":{"type":"Point","coordinates":[-87.66683738,41.91720864]},":@computed_region_rpca_8um6":"49",":@computed_region_vrxf_vc4k":"23",":@computed_region_6mkv_f3dw":"22620",":@computed_region_bdys_3d7i":"209",":@computed_region_43wa_7qmu":"11"
}
]
```

Notice the data structure: objects within an array. The objects contain other objects, and the objects within the objects contain arrays. So the most nesting you are going to get is an array within an object within an object within an array.

Ok let's make a basic ajax call using a JQuery method. Behind the scenes there is a lot going on here, but JQuery takes care of it for us.

Given a basic html page, we can do the call like this:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AJAX Lecture</title>
    <link rel="shortcut icon" type="image/png" href="img/logo.png">
</head>
<body>
<script src="js/jquery-3.6.0.min.js"></script>
<script>
$.ajax("/data/murals.json").done(function(data){
    console.log(data);
});
</script>
</body>
</html>
```

But you may say, hey wait, that's not really async is it? It loads with the page load. OK, let's make it async. Say we have a button on the page. Imagine lots of buttons with lots of options -- like the city of Chicago data page, with lots of different options for data you want to look up. Let's have the AJAX call be event-driven.

```
<section id="murals-info">
    <p>I want to know about murals</p>
</section>
```

```  
    <style>
        #murals-info {
            margin: 10px auto;
            border: 5px ridge blueviolet;
            padding: 15px;
            width: 25%;
            text-align: center;
        }
        #murals-info:hover {
            cursor: pointer;
            background-color: aliceblue;
        }
    </style>
```

```
<script>
    $("#murals-info").click(function(){
        $.ajax("/data/murals.json").done(function(data){
            console.log(data);
        });
    });
</script>
```

OK, we've changed the AJAX call so it only retrieves data when someone expresses an interest in it. But a console log is not very useful to most users. So let's mod the DOM a little and present some data on the page when the user expresses an interest in it, and give the user some options for getting further information.

Let's play around with it a little in the console, so we can see how to get the information out.

Notice how the response from the ajax call is used. We chain a .done method to the ajax call. The .done() method takes a function as its argument. Why is it called .done()? Because the way it works, the .done method will only start working once the ajax call has gotten its response. This can take time, and it's yet another bit of the async equation. An ajax request is not instantaneous. It can often take a few seconds for the request to go out over the network, be received by a server, and then return its reply. Until that is done, nothing can happen. So the .done method chained to the ajax call just waits. It waits until the ajax request is done. When it is, its callback function gets called.

The function we pass to the .done() method by default takes up to three parameters, the principal one being the data parameter. We can use the data as a local variable to access the information inside the response. So, in this case the response is an array. So, let's say I modify this to use array notation:

```
 $("#murals-info").click(function(){
        $.ajax("/data/murals.json").done(function(data){
            console.log(data[0]);
        });
    });
```

Now I get the first object inside the array. So, if I want to output each object sequentially rather than all the data all at once, I have to loop through the array.

```
$("#murals-info").click(function(){
        $.ajax("/data/murals.json").done(function(data){
            data.forEach(function(mural){
               console.log(mural);
            });
        });
    });
```

Let's take it a step further. Let's say we just want the mural name and the artist name.

```
 $("#murals-info").click(function(){
        $.ajax("/data/murals.json").done(function(data){
            data.forEach(function(mural){
               console.log(mural.artwork_title);
               console.log(mural.artist_credit);
            });
        });
    });
```

Now we have an issue, one of them doesn't have a title. So we need an if-then to handle that possibility.

```
  $("#murals-info").click(function(){
        $.ajax("/data/murals.json").done(function(data){
            data.forEach(function(mural){
               console.log(mural.artwork_title ? mural.artwork_title : "Untitled");
               console.log(mural.artist_credit);
            });
        });
    });
```

All right, I think we're ready for some DOM output now. Let's do it. Add this to the html:

```
<section id="card-section"></section>
```
```
$("#murals-info").click(function(){
        $.ajax("/data/murals.json").done(function(data){
            data.forEach(function(mural){
                let title = '';
                mural.artwork_title? title = mural.artwork_title : title = "Untitled";
                $("#card-section").append('<article class="card">' +
                    '<p>' + title + '</p>' +
                    '<p>' + mural.artist_credit + '</p>' +
                    '</article>');
            });
        });
    });
```

We've got the output. Now let's style it properly.

```
      #card-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
      .card {
            display: flex;
            flex-direction: column;
            border: 2px solid darkgray;
            padding: 5px;
            width: 330px;
        }
```

We could take it to another level too. We could add a more information button that retrieves more information. 

```
 $("#murals-info").click(function(){
        $.ajax("/data/murals.json").done(function(data){
            data.forEach(function(mural){
                let title = '';
                mural.artwork_title? title = mural.artwork_title : title = "Untitled";
                $("#card-section").append('<article class="card">' +
                    '<p>' + title + '</p>' +
                    '<p>' + mural.artist_credit + '</p>' +
                    '<button class="more-info">More information</button>' +
                    '<p class="index" style="display: none">'+ index + '</p>' +
                    '</article>');
            });
        });
        $("#card-section").on('click', '.more-info', function(){
           alert("yes this works");
        });
    });
```

And then, after the button we add

```
  '<p class="index" style="display: none">'+ index + '</p>' +
```

And then, we do

```
$("#card-section").on('click', '.more-info', function(){
            let theClickedButton = $(this);
            let index = theClickedButton.next().text();
            $.ajax("/data/murals.json").done(function(data){
                var year = data[index].year_installed;
                $(theClickedButton).after('<p>' + year + '</p>');
            });
        });
```

Something that's critically important to understand about the asynchronicity of AJAX calls, and why a lot of stuff you would think you could just write after the call actually needs to happen inside the .done() method. Look at these two alerts here:

```
$("#card-section").on('click', '.more-info', function(){
            let theClickedButton = $(this);
            let index = theClickedButton.next().text();
            $.ajax("/data/murals.json").done(function(data){
                let year = data[index].year_installed;
                $(theClickedButton).after('<p>' + year + '</p>');
                alert("I come first in the code");
            });
            alert("I come after in the code but I happen first");
        });
```

Now I've been using the .ajax() method, but we can also use the shorthand methods, .get() and .post(). By default, if we don't specify a request type, .ajax() uses get. We can get the same result with .get() as long as we are just looking to get information from the server, and not to change something on the server. If we want to change something, we should use .post()