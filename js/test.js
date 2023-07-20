$.get(`https://api.openweathermap.org/data/2.5/weather?zip=78244,us&appid=${WEATHERMAP_API_KEY}&units=metric`).done(data=>{
    console.log(data);

});