import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://s3.ap-south-1.amazonaws.com/matsya-v0.1/ships_trial.geojson', {
      responseType: 'json',
    });
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching GeoJSON:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch GeoJSON' }), {
      status: 500,
    });
  }
}