import AirtimeRestService from "./service.js";
import { AddBeneficiaryDTO, PayWBankDTO, PayWWalletDTO, TxnDTO } from "./type";

class AirtimeDataSource extends AirtimeRestService {
  async GetTelcos() {
    const response = await this.GetTelcosRoot();
    return response;
  }

  async History(ItemsPerPage: number) {
    const response = await this.HistoryRoot(ItemsPerPage);
    return response;
  }

  async GenerateTxn(data: TxnDTO) {
    const response = await this.GenerateTxnRoot(data);
    return response;
  }

  async PayWWallet(data: PayWWalletDTO) {
    const response = await this.PayWWalletRoot(data);
    return response;
  }

  async PayWBank(data: PayWBankDTO) {
    const response = await this.PayWBankRoot(data);
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
