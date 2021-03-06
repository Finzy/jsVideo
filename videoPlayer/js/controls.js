var Controls = function(){
    var self = this;
    //getting video
    this.vid = document.querySelector("#vid");
    //getting buttons
    this.play = document.querySelector(".playPause");
    this.mute = document.querySelector(".mute");
    this.fullScreen = document.querySelector(".fullScreen");
    //sliders
    this.timeBar = document.querySelector("#progress");
    //getting the entire control panel
    this.control = document.querySelector("#vidControl");

    self.playPause();
    self.muteControl();
    self.progress();
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
        $(play).removeClass("fa-play").addClass("fa-pause");
    } else {
        //pauseerd de video en verandered het woord naar Play
        vid.pause();
        $(play).removeClass("fa-pause").addClass("fa-play");
    }
    });

    vid.addEventListener("click", function() {
    if (vid.paused == true) {
        //speelt de video af en verandered het woord naar Pause
        vid.play();
        $(play).removeClass("fa-play").addClass("fa-pause");
    } else {
        //pauseerd de video en verandered het woord naar Play
        vid.pause();
        $(play).removeClass("fa-pause").addClass("fa-play");
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
        $(mute).removeClass("fa-volume-up").addClass("fa-volume-off");
    } else {
        vid.muted = false;
        $(mute).removeClass("fa-volume-off").addClass("fa-volume-up");
    }
    });
}

Controls.prototype.fullScreenControl = function(){
    //alle dingen ophalen die je nodig hebt.
    var fullScreen = this.fullScreen;
    var vid = this.vid;
    var control = this.control;

    fullScreen.addEventListener("click", function() {
    if (vid.requestFullscreen) {
        vid.requestFullscreen();
        player.style.zIndex = "2147483647";
    } else if (vid.mozRequestFullScreen) {
        vid.mozRequestFullScreen(); //firefox versie
    } else if (vid.webkitRequestFullscreen) {
        vid.webkitRequestFullscreen(); //chrome en safari versie
    }
    });
}

Controls.prototype.progress = function(){
    var vid = this.vid;

    $(document).ready(function(){
        vid.addEventListener("timeupdate", function(event){
            onTrackedVideoFrame(this.currentTime, this.duration);
        });
    });

    function onTrackedVideoFrame(currentTime, duration){
        var timeBar = $('#progress');
        var timeC = $(".current");
        var timeM = $(".duration")

        var maxTime = Math.round(duration * 100) / 100;
        var maxMin = Math.round(duration) / 60;
        var current = Math.round(currentTime * 100) / 100;
        var percent = 100 * current / maxTime;
        timeBar.css('width', percent +'%');
        console.log(maxMin);
        timeC.text(current);
        timeM.text(maxTime);
    }
}

