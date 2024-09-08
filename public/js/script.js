async function checkStatus() {
    try {
        const response = await fetch('/.netlify/functions/checkStatus');
        const data = await response.json();
        if (data.status === 'success') {
            window.location.href = 'https://josegonz.netlify.app/'; // Redirige a la página de destino
        } else {
            setTimeout(checkStatus, 5000); // Reintenta después de 5 segundos
        }
    } catch (error) {
        console.error('Error checking status:', error);
        setTimeout(checkStatus, 5000); // Reintenta después de 5 segundos
    }
}

window.onload = checkStatus;