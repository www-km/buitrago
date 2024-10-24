// Generar el CAPTCHA
        function generateCaptcha() {
            const captchaText = Math.random().toString(36).substring(2, 8);
            document.getElementById('captcha').innerText = captchaText;
        }

        // Validar el CAPTCHA
        function validateCaptcha() {
            const input = document.getElementById('captchaInput').value;
            const captcha = document.getElementById('captcha').innerText;
            const result = document.getElementById('result');

            if (input === captcha) {
                result.innerText = "CAPTCHA correcto";
                result.style.color = "green";
                document.getElementById('captchaContainer').style.display = 'none';
                document.getElementById('adContainer').style.display = 'block';
                document.getElementById('adWarning').style.display = 'block';
            } else {
                result.innerText = "CAPTCHA incorrecto";
                result.style.color = "red";
                generateCaptcha();
            }
        }

        // Generar el CAPTCHA al cargar la página
        window.onload = generateCaptcha;
    