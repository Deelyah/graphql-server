import FormData from "form-data";
import Base from "../../Base.js";
import { MeterDetailsParams, ElectricityTxnData } from "./type.js";

class ElectricityRestService extends Base {
  async GetDisComsRoot() {
    const response = await this.marketPlaceApi().get(
      "/api/v1/bills/electricity/get-operators"
    );

    return response;
  }

  async GetMeterDetailsRoot(params: MeterDetailsParams) {
    const { meterType, meter_number, disco } = params;
    const response = await this.marketPlaceApi().get(
      `/api/v1/bills/electricity/meter-details?meterType=${meterType}&disco=${disco}&meter_number=${meter_number}`
    );
    return response;
  }

  async GenerateTxnRoots(data: ElectricityTxnData) {
    const formData = new FormData();
    formData.append("amount", data.amount);
    formData.append("disco", data.disco);
    formData.append("meterType", data.meterType);
    formData.append("meter_number", data.meter_number);

    const response = await this.marketPlaceApi().post(
      "/api/v1/bills/electricity/generate-txn",
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );
    return response;
  }
}

export default ElectricityRestService;
