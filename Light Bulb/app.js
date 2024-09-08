// let btn = document.querySelector('.btn');
// let body = document.querySelector('body');
// let sound = document.getElementById('audio');
// btn.onclick = function(){
//     body.classList.toggle('on');
//     sound.play();
// }



// let btn = document.querySelector('.btn');
// let body = document.querySelector('body');
// let sound = document.getElementById('audio');

// btn.onclick = function() {
//     // Toggle the class 'on' to change the state
//     body.classList.toggle('on');

//     // Reset the sound and play it
//     sound.currentTime = 0; // Ensures the sound plays from the start every time
//     sound.play(); // Plays the click sound
// };


let btn = document.querySelector('.btn');
let body = document.querySelector('body');
let sound = document.getElementById('audio');

btn.onclick = function() {
    // Toggle the class 'on' to change the state
    body.classList.toggle('on');

    // Ensure the sound plays from the start
    sound.currentTime = 0;
    sound.play().catch(error => {
        // Handle errors (e.g., user gesture required)
        console.error('Audio play error:', error);
    });
};
