// get elements
const player=document.querySelector('.player')
const video=player.querySelector('.viewer')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// building functions
function togglePlay(){
    // if(video.pause){
    //     video.play()
    // }else{
    //     video. pause()
    // }

    const method= video.paused ? 'play':'pause';
    //works but doesnt run on click button yet 
    video[method]();

}


function updatButton(){
    const icon=this.paused?'►':'❚ ❚'; 
    toggle.textContent=icon
    console.log('updated button')

}

function skip(){
    console.log("skipping")

    // this is a string so convert it
    console.log(this.dataset.skip)
    video.currentTime+=parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){

    console.log(this.name);
    console.log(this.value);

    video[this.name] =this.value

}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

    // to update the prgressbar
function srub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;

}

// hook events to function

            // all of this is great, but its better to update it at the pause

    // video click
video.addEventListener('click', togglePlay)
video.addEventListener('play', updatButton)
video.addEventListener('pause', updatButton)
// click button
toggle.addEventListener('click', togglePlay)
// change the text of button

// handle time update progress
video.addEventListener('timeupdate', handleProgress)


// progress button
let flag=false
progress.addEventListener('click',scrub)
    // check varible then returns
progress.addEventListener('mousemove ',(e)=>flag &&scrub(e))
progress.addEventListener('mousedown',()=>flag=true)
progress.addEventListener('mouseup ',()=>flag=false)

// skip buttonsen
skipButtons.forEach(button=>button.addEventListener('click',skip))


ranges.forEach(rang=>rang.addEventListener("change",handleRangeUpdate
))
ranges.forEach(rang=>rang.addEventListener("mousemove",handleRangeUpdate))

