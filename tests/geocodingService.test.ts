import { GeocodingService } from "../services/geocodingService";

describe("GeocodingService", () => {
  const service = new GeocodingService();

  test("should return coordinates for a valid place", async () => {
    const result = await service.getLatLong("SilkBoard");
    expect(result.lat).toBeDefined();
    expect(result.lon).toBeDefined();
  });

  test("should throw error for empty place", async () => {
    await expect(service.getLatLong("")).rejects.toThrow("Place name cannot be empty.");
  });

  test("should throw error for invalid place", async () => {
    await expect(service.getLatLong("a_place_that_does_not_exist_123456")).rejects.toThrow();
  });
});
