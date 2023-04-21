let loc=document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchinput=document.getElementById("search input");
const searchbutton=document.getElementById("search button");
searchbutton.addEventListener('click',(e)=>
{
    e.preventDefault();
    getWeather(searchinput.value);
    searchinput.value='';

})
const getWeather=async(city)=>
{
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f47ec6f7c7de830f2218ff0450d7c73f`);
    
        const weatherdata=await response.json();
        console.log(weatherdata);
        const{name}=weatherdata;
        const{feels_like}=weatherdata.main;
        const{id,main}=weatherdata.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        if(id>200&&id<300)
        {
            tempicon.src="./icons/thunder.jpg";
        }
     else  if(id>300&&id<400)
        {
            tempicon.src="./icons/drizzle.jpeg";
        }
       
      else  if(id>500&&id<600)
        {
            tempicon.src="./icons/rain.jpeg";
        }
      else  if(id>600&&id<700)
        {
            tempicon.src="./icons/snow.jpg";
        }
        else  if(id>700&&id<800)
        {
            tempicon.src="./icons/snow.jpg";
        }
        
       else if(id>800)
        {
            tempicon.src="./icons/clear.jpg";
        }
        
    }
    catch(error)
    {
alert('city not found');
    }
};
















window.addEventListener("load",()=>{

let long;
let lat;
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition((position)=>
    {
    long=position.coords.longitude;
    lat=position.coords.latitude;
    const proxy="https://cors-anywhere.herokuapp.com/";
const api=`${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f47ec6f7c7de830f2218ff0450d7c73f`
fetch(api).then((response)=>{

    return response.json();
})
.then(data=>
    {
        const{name}=data;
        const{feels_like}=data.main;
        const{id,main}=data.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        if(id>200&&id<300)
        {
            tempicon.src="./icons/thunder.jpg";
        }
     else  if(id>300&&id<400)
        {
            tempicon.src="./icons/drizzle.jpeg";
        }
       
      else  if(id>500&&id<600)
        {
            tempicon.src="./icons/rain.jpeg";
        }
      else  if(id>600&&id<700)
        {
            tempicon.src="./icons/snow.jpg";
        }
        else  if(id>700&&id<800)
        {
            tempicon.src="./icons/snow.jpg";
        }
        
       else if(id>800)
        {
            tempicon.src="./icons/clear.jpg";
        }
        

        console.log(data);
    })

})
}

})