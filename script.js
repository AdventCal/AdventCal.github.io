function checkCode() {
    var enteredCode = document.getElementById('code').value;
    var resultParagraph = document.getElementById('result');

    if (enteredCode.toLowerCase() === 'santa2023') {
        window.location.href = 'https://www.google.com'
    } else if (enteredCode.toLowerCase() === 'snowflakes') {
        resultParagraph.textContent = 'The activity for today is: A Christmas Movie!';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'christmas tree') {
        resultParagraph.textContent = 'The activity for today is: Christmas Baking!';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'ice skates') {
        resultParagraph.textContent = 'The activity for today is: A Snowy Day Walk!';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'icicle') {
        resultParagraph.textContent = 'The activity for today is: A Christmas Movie!';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'snowman') {
        resultParagraph.textContent = 'The activity for today is: A Christmas Craft!';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'frost') {
        resultParagraph.textContent = 'The activity for today is: A Snowy Day Walk!';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else if (enteredCode.toLowerCase() === 'north star') {
        resultParagraph.textContent = 'The activity for today is: A Christmas Movie!';
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
