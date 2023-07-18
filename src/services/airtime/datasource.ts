import AirtimeRestService from "./service.js";
import {
  AddBeneficiaryDTO,
  AirtimeViaBankDTO,
  AirtimeViaWalletDTO,
  TxnDTO,
} from "./type";

class AirtimeDataSource extends AirtimeRestService {
  async GetTelcos() {
    const response = await this.GetTelcosRoot();
    return response;
  }

  async History(ItemsPerPage: number) {
    const response = await this.HistoryRoot(ItemsPerPage);
    return response;
  }

  async GenerateAirtimeTxn(data: TxnDTO) {
    const response = await this.GenerateAirtimeTxnRoot(data);
    return response;
  }

  async AirtimeViaWallet(data: AirtimeViaWalletDTO) {
    const response = await this.AirtimeViaWalletRoot(data);
    console.log("DAtaSource", response)
    return response;
  }

  async AirtimeViaBank(data: AirtimeViaBankDTO) {
    const response = await this.AirtimeViaBankRoot(data);
    return response;
  }

  async AddBeneficiary(data: AddBeneficiaryDTO) {
    const response = await this.AddBeneficiaryRoot(data);
    return response;
  }

  async DltBeneficiary(id: number) {
    const response = await this.DltBeneficiaryRoot(id);
    return response;
  }
}

export default AirtimeDataSource;
