    authToken = "uni"
    function attemptLogin() {
        const urlParams = new URLSearchParams(window.location.search);
        const urlToken = urlParams.get('token');

        if (urlToken == authToken) {
            sessionStorage.setItem('loggedIn', 'true');
            document.getElementById('login-status').textContent = 'Prihlásenie úspešné';
            window.location.href = "www.unimap.sk/mapa";
            }
        else {
            document.getElementById("login-status").textContent = "Naskenujte QR kód svojim telefónom";
        }
    }


    setInterval(attemptLogin, 1000);
