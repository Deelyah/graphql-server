import ElectricityRestService from "./service.js";
import { MeterDetailsParams } from "./type.js";

class ElectricityDataSource extends ElectricityRestService {
  async GetDisComs() {
    const response = await this.GetDisComsRoot();
    return response;
  }

  async GetMeterDetails(params: MeterDetailsParams) {
    const response = await this.GetMeterDetailsRoot(params);
    return response;
  }
}

export default ElectricityDataSource;
