import https from 'https';

export function fetchJsonReport(url: string) {
    return https.get(url, (response) => {
        let data = '';
      
        response.on('data', (chunk) => {
          data += chunk;
        });
      
        response.on('end', () => {
          try {
            const jsonData = JSON.parse(data);
            // Process the JSON data
            return jsonData;
          } catch (error) {
            // Handle parsing errors
            console.error('Error parsing JSON:', error);
          }
        });
      
    }).on('error', (error) => {
        // Handle HTTP request errors
        console.error('Error fetching JSON:', error);
    });
}