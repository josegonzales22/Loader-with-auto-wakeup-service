import fetch from 'node-fetch';

export async function handler(event, context) {
    // Accede a la variable de entorno
    const url = process.env.TARGET_URL;

    if (!url) {
        return {
            statusCode: 500,
            body: JSON.stringify({ status: 'error', message: 'TARGET_URL is not defined' }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }

    try {
        const response = await fetch(url, { method: 'GET' });
        if (response.ok) {
            return {
                statusCode: 200,
                body: JSON.stringify({ status: 'success', redirectUrl: url }),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        } else {
            return {
                statusCode: 503,
                body: JSON.stringify({ status: 'unavailable' }),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ status: 'error', message: error.message }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
}
