import fetch from "node-fetch";

export interface GeocodeResponse {
  lat: number;
  lon: number;
}

export class GeocodingApi {
  private readonly baseUrl = "https://geocode.maps.co/search";
  private readonly apiKey = "6817adf16c97e998642133pmt2591c0"; 

  async getCoordinates(place: string): Promise<GeocodeResponse> {
    const url = `${this.baseUrl}?q=${encodeURIComponent(place)}&api_key=${this.apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch geocode data: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error(`No coordinates found for "${place}".`);
    }

    const location = data[0];
    return {
      lat: parseFloat(location.lat),
      lon: parseFloat(location.lon)
    };
  }
}
