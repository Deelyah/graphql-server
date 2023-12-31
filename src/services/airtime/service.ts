import FormData from "form-data";
import Base from "../../Base.js";
import {
  AddBeneficiaryDTO,
  AirtimeViaBankDTO,
  AirtimeViaWalletDTO,
  TxnDTO,
} from "./type.js";

class AirtimeRestService extends Base {
  async GetTelcosRoot() {
    const response = await this.marketPlaceApi().get(
      `api/v1/bills/airtime/get-telcos`
    );
    return response.data;
  }

  async HistoryRoot(ItemsPerPage: number) {
    const response = await this.marketPlaceApi().get(
      `api/v1/bills/airtime/history/${ItemsPerPage}`
    );
    return response.data;
  }

  async GenerateAirtimeTxnRoot(data: TxnDTO) {
    const formData = new FormData();
    formData.append("amount", data.amount);
    formData.append("telcoId", data.telcoId);
    formData.append("phone", data.phone);
    // console.log(formData.getHeaders());

    const response = await this.marketPlaceApi().post(
      "/api/v1/bills/airtime/generate-txn",
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );
    return response;
  }

  async AirtimeViaWalletRoot(data: AirtimeViaWalletDTO) {
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
    console.log(response?.data);
    return response.data;
  }

  async AirtimeViaBankRoot(data: AirtimeViaBankDTO) {
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
    return response.data;
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
    return response.data;
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
    return response.data;
  }
}

export default AirtimeRestService;
