import FormData from "form-data";
import Base from "../../Base";
import { MeterDetailsParams, TxnData } from "./type";

class ElectricityRestService extends Base {
  async GetDisComsRoot() {
    const response = await this.marketPlaceApi().get(
      "/api/v1/bills/electricity/get-operators"
    );

    return response;
  }

  async GetMeterDetailsRoot(params: MeterDetailsParams) {
    const response = await this.marketPlaceApi().get(
      `/api/v1/bills/electricity/meter-details?meterType=${params.meterType}&disco=${params.meterType}&meter_number=${params.meter_number}`
    );
    return response;
  }

  async GenerateTxnRoots(data: TxnData) {
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
