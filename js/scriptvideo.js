$(document).ready(function () {

    console.log("werarathere")
    var video = $('#preloaderVideo').get(0); // Access the video element

    // Correctly attach the click event using on for better practice


    function handlePreloader() {
        video.loop = false; // Ensure the video doesn't loop

        document.body.addEventListener('click', function () {
            console.log("Body clicked");
        
            if (video.muted) {
                console.log("Unmuting the video");
                video.muted = false; // Unmute the video
        
                // Optionally, hide the unmute button after clicking
                // Ensure you have a way to access and hide the button, e.g., by its id or class
                document.getElementById('unmuteButtonId').style.display = 'none'; // Replace 'unmuteButtonId' with your actual button's id
            }
        });



        // Check if the preloader exists and then fade it out after video ends or after a timeout
        if ($('.preloader').length) {

            $('body').addClass('page-loaded');

            $('#preloaderVideo').on('ended', function () {
                console.log("Video has ended");
                $('.preloader').fadeOut('slow'); // Fade out the preloader
            });

            // Optional: Fade out the preloader after a certain time (e.g., 8 seconds)
            setTimeout(function () {
                console.log("finishh")
                $('.preloader').fadeOut('slow');
            }, 8000);
        }
    }

    // Call the preloader handler function
    handlePreloader();
});