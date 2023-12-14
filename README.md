[Uploadi<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marriage Proposal</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Will you marry me?</h1>
        <button id="yesButton">Yes</button>
        <button id="noButton">No</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
ng index.html…]()
[Uplbody {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
}

.container {
    text-align: center;
}

button {
    font-size: 18px;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
}
oading styles.css…]()
[Uploadindocument.getElementById('yesButton').addEventListener('click', function() {
    // The 'Yes' button does nothing for now
});

document.getElementById('noButton').addEventListener('click', function() {
    // Disable the 'No' button
    document.getElementById('noButton').disabled = true;

    // After a delay, show a scary image
    setTimeout(function() {
        document.body.innerHTML = '<img src="scary-image.jpg" alt="Scary Image">';
    }, 3000); // 3000 milliseconds = 3 seconds
});
g script.js…]()
![scary-image](https://github.com/anacmonteiros/Marry-Me/assets/153870589/d0a9a8fa-855e-4490-b58a-9352e49613fa)
