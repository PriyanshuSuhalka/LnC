import { GeocodingApi, GeocodeResponse } from "../api/geocodingApi";

export class GeocodingService {
  private geocodingApi = new GeocodingApi();

  async getLatLong(place: string): Promise<GeocodeResponse> {
    if (!place || place.trim() === "") {
      throw new Error("Place name cannot be empty.");
    }

    return this.geocodingApi.getCoordinates(place);
  }
}