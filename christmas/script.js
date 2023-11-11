function checkCode() {
    var enteredCode = document.getElementById('code').value;
    var resultParagraph = document.getElementById('result');

    if (enteredCode.toLowerCase() === 'santa2023') {
        resultParagraph.textContent = 'The activity for today is: !';
        resultParagraph.style.color = '#218838'; // Darker Green
    } else {
        resultParagraph.textContent = 'Oops! Wrong code. Try again.';
        resultParagraph.style.color = '#e44d26'; // Red
    }
}
