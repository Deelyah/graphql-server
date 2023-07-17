import FormData from "form-data";

import Base from "../../Base.js";
import { ErrorHandlers } from "../../helpers/ErrorHandlers.js";
import { AccountLoginDto, WalletHistoryDto } from "./type.js";

class AccountRestService extends Base {
  async UserLoginRoot(data: AccountLoginDto) {
    // this.parseJSONtoFormData(data)

    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    console.log(formData.getHeaders());
    const response = await this.marketPlaceApi().post(
      "/api/v1/auth/login",
      formData,
      {
        headers: { ...formData.getHeaders() },
      }
    );
    return response;
  }

  async GetUserProfileRoot() {
    const response = await this.marketPlaceApi().get("/api/v1/user/profile");

    return response;
  }

  async GetWalletHistoryRoot(data: WalletHistoryDto) {
    // data is the query params
    const { page, startDate, endDate } = data;
    let url = "/api/v1/user/accounts/history";

    if (page) {
      url = `api/v1/user/accounts/history?page=${page}`;
    } else if (page && startDate && endDate) {
      url = `api/v1/user/accounts/history?page=${page}&startDate=${startDate}&endDate=${endDate}`;
    }

    const response = await this.marketPlaceApi().get(url);

    return response;
  }
}

export default AccountRestService;
