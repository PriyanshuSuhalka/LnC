import readline from "readline";
import { GeocodingService } from "./services/geocodingService";

const service = new GeocodingService();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser() {
  rl.question("Enter a place name: ", async (place) => {
    try {
      const result = await service.getLatLong(place);
      console.log(`Latitude: ${result.lat}`);
      console.log(`Longitude: ${result.lon}`);
    } catch (err: any) {
      console.error(`Error: ${err.message}`);
    } finally {
      rl.close();
    }
  });
}

promptUser();