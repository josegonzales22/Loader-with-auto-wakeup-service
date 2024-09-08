import fetch from 'node-fetch';

export async function handler(event, context) {
    const url = 'https://josegonz.netlify.app/'; // URL de tu página de destino

    try {
        const response = await fetch(url, { method: 'GET' });
        if (response.ok) {
            return {
                statusCode: 200,
                body: JSON.stringify({ status: 'success' }),
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
