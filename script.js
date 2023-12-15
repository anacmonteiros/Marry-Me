document.getElementById('yesButton').addEventListener('click', function() {
    // The 'Yes' button does nothing for now
});

document.getElementById('noButton').addEventListener('click', function() {
    // Disable the 'No' button
    document.getElementById('noButton').disabled = true;

    // After a delay, show a scary image
    setTimeout(function() {
        document.body.innerHTML = '<img src="scary-image.jpg" alt="Scary Image">';
    }, 500); // 1500 milliseconds = 3 seconds
});
