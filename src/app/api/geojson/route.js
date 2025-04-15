import { Co2Sharp } from '@mui/icons-material';
import axios from 'axios';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type')

  try {
    if(type=='geojson'){
      const response = await axios.get('https://s3.ap-south-1.amazonaws.com/matsya-v0.1/ships_trial.geojson', {
        responseType: 'json',
      });
      return new Response(JSON.stringify(response.data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    else if(type=='tiff') {
      const response = await axios.get('https://s3.ap-south-1.amazonaws.com/matsya-v0.1/rasters/syn_cog.tif', {
        responseType: 'arraybuffer',
      });
      return new Response(JSON.stringify(response.data), {
        status: 200,
        headers: { 'Content-Type': 'image/tiff' },
      });
    }
    
  } catch (error) {
    console.error('Error fetching GeoJSON:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch GeoJSON' }), {
      status: 500,
    });
  }
}