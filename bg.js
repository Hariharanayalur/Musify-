chrome.runtime.onMessage.addEventListener(player);
var myAudio = document.getElementById("myAudio");
function player(n){
    var url = URL.createObjectURL(files[n]);
    myAudio.setAttribute('src', url);
    var playPromise =  myAudio.play();
}
console.log(files)