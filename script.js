function checkCode() {
    var enteredCode = document.getElementById('code').value;
    var resultParagraph = document.getElementById('result');

    if (enteredCode.toLowerCase() === 'santa2023') {
        resultParagraph.textContent = 'You have discovered an Easter Egg! <- We know it is Christmas';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'snowflakes') {
        resultParagraph.textContent = 'The activity for today is: A Christmas Movie!';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'christmas tree') {
        resultParagraph.textContent = 'The activity for today is: Christmas Baking! <a href="google.com">link text</a>';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'ice skates') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'icicles') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'snowman') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'ice') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'christmas present') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'christmas ornaments') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'wind') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'gingerbread cookie') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'december') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'poinsettia') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'ice rink') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'scarf') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'christmas carol') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'sledding') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'ice castle') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'penguin') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'northern lights') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'winter solstice') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'orion') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'ice sculpting') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else {
        resultParagraph.textContent = 'Oops! Wrong code. Try again.';
        resultParagraph.style.color = '#e44d26'; // Red
    }
}
