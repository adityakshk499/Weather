

const input = document.querySelector('.input')
const city = document.querySelector('.city')
const visibility = document.querySelector('.visibility')
const temp = document.querySelector('.temp')
const humid = document.querySelector('.humid')
const description = document.querySelector('.description')
const message = document.querySelector('.message')
const data = document.querySelector('.data')
const paragraph = document.querySelectorAll('p')
const message2 = document.querySelector('.message2')

function toremovedataclass(elements){
  for(let element of elements){
    element.classList.remove("data")
  }

}



input.addEventListener('keypress',(key)=>{
  if(key.keyCode==13){
   let city = input.value;
   input.value=""
let URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2203e8d6434a0cee809e7ad8f8e69490`


fetch(URL).then((response)=>{

  return response.json()
}).then((response)=>{
addingvalue(response)
}).catch(()=>{
  for(let element of paragraph){
    element.classList.add("data")
  }
  message.style.display='none'
  message2.style.display='block'

})

  }


})

function addingvalue(apidata){
  message2.style.display='none'
message.style.display='none'
toremovedataclass(paragraph)
city.textContent =` ${apidata.name},${apidata.sys.country} `
temp.textContent = `${Math.floor(apidata.main.temp/10)}\u00B0C `
humid.textContent=`Humidity-${apidata.main.humidity} `
description.textContent =apidata.weather[0].main
visibility.textContent=`Visibility-${Math.floor(apidata.visibility/1000)}Km`


}









