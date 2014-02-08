$(document).ready(function(){

    $('#player').youTubeEmbed('http://www.youtube.com/watch?v=Qv53zmmpM5Q');

    /*
        //You can alternatively pass an object:

        $('#player').youTubeEmbed({
            video     : 'http://www.youtube.com/watch?v=u1zgFlCw8Aw',
            width     : 600,    // Height is calculated automatically
            progressBar : false   // Hide the progress bar
        });

    */

});

// If a string is passed, it is assumed to be the URL of a YouTube video.
// If you are passing an object make sure that you are passing the video property with a correct video URL.