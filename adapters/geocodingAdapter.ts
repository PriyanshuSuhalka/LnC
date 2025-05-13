import { GeocodingApi, GeocodeResponse } from "../api/geocodingApi";

export interface GeocodingPort {
  getCoordinates(place: string): Promise<GeocodeResponse>;
}

export class GeocodingAdapter implements GeocodingPort {
  private readonly geocodingApi: GeocodingApi;

  constructor() {
    this.geocodingApi = new GeocodingApi();
  }

  async getCoordinates(place: string): Promise<GeocodeResponse> {
    return this.geocodingApi.getCoordinates(place);
  }
}
