const pianoKeys=document.querySelectorAll(".piane-keys .key");
const volumeSlider= document.querySelector(".volume-slider input");
let mapedkeys=[];
const keysckeck=document.querySelector(".keys-check input");
let audio=new Audio(`audios/som.wav`)
const makesound= (key)=>{
    audio.src=`audios/${key}.wav`;
    audio.play();
    const clickedkey=document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    setTimeout(()=>{
        clickedkey.classList.remove("active");
    },150)
};
const showHideKeys= ()=>{
    pianoKeys.forEach((key)=>{
        key.classList.toggle("hide");
    })
}
pianoKeys.forEach((key)=>{
    key.addEventListener("click",()=>{
        makesound(key.dataset.key);
        mapedkeys.push(key.dataset.key);
    })
}
)
document.addEventListener("keydown", (e)=>{
if(mapedkeys.includes(e.key)){ 
      makesound(e.key)
}})
const handleVolume= (e)=>{
audio.volume=e.target.value;

};
volumeSlider.addEventListener("input", handleVolume);
volumeSlider.addEventListener("change", handleVolume);
keysckeck.addEventListener("click", showHideKeys);