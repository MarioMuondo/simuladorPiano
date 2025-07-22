const pianoKeys=document.querySelectorAll(".piane-keys .key");
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
        makeSound(key.dataset.key);
    })
}
)
document.addEventListener("keydown", (e)=>{
   makesound(e.key)
})
