import FormData from "form-data";
import Base from "../../Base.js";
import {
  AddBeneficiaryDTO,
  PayWBankDTO,
  PayWWalletDTO,
  TxnDTO,
} from "./type.js";

class AirtimeRestService extends Base {
  async GetTelcosRoot() {
    const response = await this.marketPlaceApi().get(
      `api/v1/bills/airtime/get-telcos`
    );
    return response.data;
  }

  async HistoryRoot() {
    const response = await this.marketPlaceApi().get(
      `api/v1/bills/airtime/history`
    );
    return response.data;
  }

  async GenerateTxnRoot(data: TxnDTO) {
    let formData = new FormData();
    formData.append("amount", data.amount);
    formData.append("telcoId", data.telcoId);
    formData.append("phone", data.phone);
    const response = await this.marketPlaceApi().post(
      `api/v1/bills/airtime/generate-txn`,
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );
    return response;
  }

  async PayWWalletRoot(data: PayWWalletDTO) {
    let formData = new FormData();
    formData.append("walletCode", data.walletCode);
    formData.append("pin", data.pin);
    formData.append("txnRef", data.txnRef);
    const response = await this.marketPlaceApi().post(
      `api/v1/bills/airtime/pay-with-wallet`,
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );
    return response;
  }

  async PayWBankRoot(data: PayWBankDTO) {
    let formData = new FormData();
    formData.append("txnRef", data.txnRef);
    formData.append("paymentRef", data.paymentRef);
    const response = await this.marketPlaceApi().post(
      `api/v1/bills/airtime/pay-with-bank`,
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );
    return response;
  }

  async AddBeneficiaryRoot(data: AddBeneficiaryDTO) {
    let formData = new FormData();
    formData.append("alias", data.alias);
    formData.append("phone", data.phone);
    formData.append("operatorId", data.operatorId);
    const response = await this.marketPlaceApi().post(
      `api/v1/user/beneficiaries/airtime/add`,
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );
    return response;
  }

  async DltBeneficiaryRoot(id: number) {
    let formData = new FormData();
    formData.append("id", id);
    const response = await this.marketPlaceApi().post(
      `api/v1/user/beneficiaries/airtime/add`,
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );
    return response;
  }
}

export default AirtimeRestService;
