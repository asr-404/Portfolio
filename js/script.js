// typing animation
var typed = new Typed(".typing",{
    strings:["","Web Developer","Designer","Frontend Developer", "Backend Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// download cv
document.getElementById('downloadCvBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action

    var link = document.createElement('a');
    link.href = './Akash-cv.pdf';
    link.download = 'ASR-CV.pdf'; // Specify the default name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});