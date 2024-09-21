export default async function handler(req, res) {
  const { domain } = req.query;

  // Make the request to the external API from the server
  try {
    const response = await fetch(`https://namestone.xyz/api/public_v1/get-names?domain=${domain}`, {
      method: 'GET',
      headers: {
        Authorization: '241cea56-7f9b-4e66-ac17-cb2e8edd61cc',
      },
    });

    // If the response is not OK, throw an error
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    
    // Send the data back to the frontend
    res.status(200).json(data);
  } catch (error) {
    console.error('Failed to fetch domain data:', error);
    res.status(500).json({ error: 'Failed to fetch domain data' });
  }
}