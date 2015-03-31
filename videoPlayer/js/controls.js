var Controls = function(){
    var self = this;
    //getting video
    this.vid = document.querySelector("#vid");
    //getting buttons
    this.play = document.querySelector("#playPause");
    this.mute = document.querySelector("#mute");
    this.fullScreen = document.querySelector("#fullScreen");
    //sliders
    this.progress = document.querySelector("#progress");
    this.volume = document.querySelector("#volume");

    self.playPause();
    self.muteControl();
    self.fullScreenControl();
}

Controls.prototype.playPause = function(){
    //alle dingen ophalen die je nodig hebt.
    var play = this.play;
    var vid = this.vid; 

    //een functie maakt die activeert wanneer er op play word geklikt
    play.addEventListener("click", function() {
    if (vid.paused == true) {
        //speelt de video af en verandered het woord naar Pause
        vid.play();
        play.innerHTML = "Pause";
    } else {
        //pauseerd de video en verandered het woord naar Play
        vid.pause();
        play.innerHTML = "Play";
    }
    });
}

Controls.prototype.muteControl = function(){
  //alle dingen ophalen die je nodig hebt.
    var mute = this.mute;
    var vid = this.vid;

    mute.addEventListener("click", function() {
    if (vid.muted == false) {
        vid.muted = true;
        mute.innerHTML = "Unmute";
    } else {
        vid.muted = false;
        mute.innerHTML = "Mute";
    }
    });
}

Controls.prototype.fullScreenControl = function(){
    //alle dingen ophalen die je nodig hebt.
    var fullScreen = this.fullScreen;
    var vid = this.vid;

    fullScreen.addEventListener("click", function() {
        if (vid.requestFullscreen) {
        vid.requestFullscreen();
    } else if (vid.mozRequestFullScreen) {
        vid.mozRequestFullScreen(); //firefox versie
    } else if (vid.webkitRequestFullscreen) {
        vid.webkitRequestFullscreen(); //chrome en safari versie
    }
    });
}