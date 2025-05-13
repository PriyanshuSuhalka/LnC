import { GeocodeResponse } from "../api/geocodingApi";
import { GeocodingAdapter } from "../adapters/geocodingAdapter";

export class GeocodingService {
  private geocodingAdapter = new GeocodingAdapter();

  async getLatLong(place: string): Promise<GeocodeResponse> {
    if (!place || place.trim() === "") {
      throw new Error("Place name cannot be empty.");
    }

    return this.geocodingAdapter.getCoordinates(place);
  }
}
