import ElectricityRestService from "./service.js";
import {
  EVBankData,
  EVWalletDTO,
  ElectricityTxnDTO,
  MeterDetailsParams,
} from "./type.js";

class ElectricityDataSource extends ElectricityRestService {
  async GetDisComs() {
    const response = await this.GetDisComsRoot();
    return response;
  }

  async GetMeterDetails(params: MeterDetailsParams) {
    const response = await this.GetMeterDetailsRoot(params);
    return response;
  }

  async GetElectricityHistory() {
    const response = await this.GetElectricityHistoryRoots();
    return response;
  }

  async GenerateElectricityTxn(data: ElectricityTxnDTO) {
    const response = await this.GenerateElectricityTxnRoots(data);
    return response;
  }

  async ElectricityViaWallet(data: EVWalletDTO) {
    const response = await this.ElectricityViaWalletRoots(data);
    return response;
  }

  async ElectricityViaBank(data: EVBankData) {
    const response = await this.ElectricityViaBankRoots(data);
    return response;
  }
}

export default ElectricityDataSource;
