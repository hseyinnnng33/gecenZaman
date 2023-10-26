const h2Parent = document.querySelector(".dk")
const saniye = document.querySelector(".saniye")

let dakikaYarat = document.createElement("span")


let index = 0;
let dakikaSayac = 0;

const guncelle = () =>{
    index++;
    saniye.innerHTML = index;

    if(index == 60){
        index = 0;
        h2Parent.appendChild(dakikaYarat)
        dakikaSayac++;
        dakikaYarat.innerHTML = `${dakikaSayac} Dakika`;
    }
}

setInterval(guncelle, 1000)




const nanoHtml = document.querySelector(".nano")
let nanoSayac = 0;
const nanoFunc = () =>{
    nanoSayac++;
    nanoHtml.innerHTML = `${nanoSayac} Nano-metre`
}
setInterval(nanoFunc, 600)



const milesHtml = document.querySelector(".miles")
const milesSpanHtml = document.querySelector(".milesSpan")
let mileSayac = 0;
let mileSayacSpan = 0;

const milesFunc = () =>{
    mileSayacSpan++;
    milesSpanHtml.innerHTML = mileSayacSpan;
    

    if(mileSayacSpan == 9){
        mileSayacSpan = 0;
        mileSayac++;
        
        
        milesHtml.innerHTML = `${mileSayac}.`;
        milesSpanHtml.innerHTML = `${mileSayacSpan}`;
        
    }
}
setInterval(milesFunc, 400)


const gunesMil = document.querySelector(".gunesMil")
let gunesSayac = 0;
const gunesFunc = () =>{
    gunesSayac++;
    gunesMil.innerHTML = `${gunesSayac} Km`
}
setInterval(gunesFunc, 50)


const yildizMil = document.querySelector(".yildizMil")
let yildizSayac = 0;
const yildizFunc = () =>{
    yildizSayac++;
    yildizMil.innerHTML = `${yildizSayac} Km`;
}
setInterval(yildizFunc, 40)


const yildiBigMil = document.querySelector(".yildiBigMil")
let yildizBigSayac = 0;
const yildizBigFunc = () =>{
    yildizBigSayac++;
    yildiBigMil.innerHTML = `${yildizBigSayac} Km`;
}
setInterval(yildizBigFunc, 30)


const carpisMil = document.querySelector(".carpisMil")
let carpisMilSayac = 0;
const carpisMilFunc = () =>{
    carpisMilSayac++;
    carpisMil.innerHTML = `${carpisMilSayac} Km`;
}
setInterval(carpisMilFunc, 20)

const enMil = document.querySelector(".enMil")
let enMilSayac = 0;
const enMilSayacFunc = () =>{
    enMilSayac++;
    enMil.innerHTML = `${enMilSayac} Km`;
}
setInterval(enMilSayacFunc, 0.1)


const saatBar = document.querySelector(".saatBar");
const initialOffsetTop = saatBar.getBoundingClientRect().top + window.scrollY;

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= initialOffsetTop) {
    saatBar.classList.add("active")
    saatBar.scrollIntoView({behavior: "smooth"})
  } else {
    saatBar.classList.remove("active")
  }
});
