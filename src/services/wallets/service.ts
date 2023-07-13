import FormData from "form-data";
import {
  GenericParams,
  RenameDTO,
  TopupDTO,
  WTBTransferDTO,
  WTWTransferDTO,
} from "./type";
import Base from "../../Base.js";
class WalletRestService extends Base {
  async GetAllWalletsRoot(data: GenericParams) {
    const response = await this.marketPlaceApi().get(
      `api/v1/user/wallets?action=${data.action}`
    );
    return response.data;
  }

  async RenameWalletRoot(params: GenericParams, data: RenameDTO) {
    let formData = new FormData();
    formData.append("wallet_name", data.wallet_name);
    formData.append("wallet_id", data.wallet_id);
    const response = await this.marketPlaceApi().post(
      `api/v1/user/wallets?action=${params.action}`,
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );
    return response;
  }

  async TopupRoot(data: TopupDTO) {
    let formData = new FormData();
    formData.append("txnRef", data.txnRef);
    formData.append("paymentRef", data.paymentRef);
    const response = await this.marketPlaceApi().post(
      `api/v1/user/accounts/complete-topup`,
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );
    return response;
  }

  async WTWTransferRoot(data: WTWTransferDTO) {
    let formData = new FormData();
    formData.append("walletCode", data.walletCode);
    formData.append("amount", data.amount);
    formData.append("pin", data.pin);
    formData.append("toWalletCode", data.toWalletCode);
    const response = await this.marketPlaceApi().post(
      `api/v1/bills/transfer/transfer`,
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );
    return response;
  }

  async WTBTransferRoot(data: WTBTransferDTO) {
    let formData = new FormData();

    // for (let i = 0; i < Object.keys(data).length; i++) {
    //    formData.append(Object.keys(data)[i], )
    //   console.log(i);
    // }

    // for (const key in data) {
    //   formData.append(key, data[key]);
    // }

    const response = await this.marketPlaceApi().post(
      `api/v1/bills/transfer/transfer`,
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );
    return response;
  }
}

export default WalletRestService;
