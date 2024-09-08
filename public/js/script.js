async function checkStatus() {
    try {
        const response = await fetch('/.netlify/functions/checkStatus');
        const data = await response.json();
        if (data.status === 'success' && data.redirectUrl) {
            window.location.href = data.redirectUrl;
        } else {
            setTimeout(checkStatus, 5000);
        }
    } catch (error) {
        console.error('Error checking status:', error);
        setTimeout(checkStatus, 5000);
    }
}
window.onload = checkStatus;
