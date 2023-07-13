import AccountRestService from "./service.js";
import { AccountLoginDto, WalletHistoryDto } from "./type.js";

class AccountDatasource extends AccountRestService {
  async UserLogin(formData: AccountLoginDto) {
    const response = await this.UserLoginRoot(formData);

    return response;
  }

  async GetUserProfile() {
    const response = await this.GetUserProfileRoot();

    // console.log("datasauce", response);

    return response;
  }

  async GetWalletHistory(data: WalletHistoryDto) {
    const response = await this.GetWalletHistoryRoot(data);

    return response;
  }
}

export default AccountDatasource;
