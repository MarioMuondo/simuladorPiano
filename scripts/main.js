const pianoKeys=document.querySelectorAll(".piane-keys .key");
const volumeSlider= document.querySelector(".volume-slider input");
let mapedkeys=[];
const makesound= (key)=>{
    audio=new Audio(`audios/${key}.wav`);
    audio.play();
    const clickedkey=document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    setTimeout(()=>{
        clickedkey.classList.remove("active");
    },150)
};
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

};
volumeSlider.addEventListener("input", handleVolume);