// snowfall.js

document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    for (let i = 0; i < 100; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';

        const size = Math.random() * 15;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;

        container.appendChild(snowflake);

        snowflake.addEventListener('animationiteration', () => {
            snowflake.style.left = `${Math.random() * 100}%`;
        });
    }
});
