const apiKey="ad1946bc766d310a85278043064a907a14530bf0";
const apiUrl="https://api.waqi.info/feed/";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkAqi(city){
    const response = await fetch(apiUrl+city+`/?token=${apiKey}`);    
    if(response.status == 404)
    {
        document.querySelector(".error").style.display="block";
    }
    else
    {
        var data=await response.json();
        console.log(data);
        console.log(data.data);

        document.querySelector(".city").innerHTML=city;
        document.querySelector(".aqi").innerHTML=data.data.aqi;
    }
}
searchBtn.addEventListener("click",()=>{    
    checkAqi(searchBox.value);
});