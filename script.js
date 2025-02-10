(() => {
        const passwordInput = document.getElementById('password-input');
        const eyeIcon = document.getElementById('eye-icon');

        function togglePasswordDisplayMode() {
                playSoundEffect();
                
                if (passwordInput.type === 'password') {
                        passwordInput.type = 'text';
                        eyeIcon.src = './images/eye-open.png';                        
                } else {
                        passwordInput.type = 'password';
                        eyeIcon.src = './images/eye-close.png';
                }
        }

        function playSoundEffect() {
                const sound = new Audio('./audio/click.mp3');
                sound.play();
        }
        eyeIcon.addEventListener('click', togglePasswordDisplayMode);
})()