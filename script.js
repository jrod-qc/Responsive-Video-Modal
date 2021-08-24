function videoModal() {
    var videoBox = document.getElementById("video-src");
    //This is the Play Button Section
    $(".video-btn").click(() => {
        $(".video-wrapper").css("display", "flex");
        videoBox.play();
    });

    //This is the Pause and Hide the Modal with the exit button
    $(".video-exit-btn").click(() => {
        $(".video-wrapper").css("display", "none");
        videoBox.pause();
    });

    //This is the Pause and Hide the Modal with clicking outside the modal
    $(".video-wrapper").click(() => {
        $(".video-wrapper").css("display", "none");
        videoBox.pause();
    });
}
videoModal();