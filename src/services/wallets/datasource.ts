import WalletRestService from "./service.js";
import { GenericParams, RenameDTO } from "./type";
// This is the pusedoDatabase (We fetch data from our
// rest API here). It could be a database but since we don't have, we use the rest API as database
class WalletDataSource extends WalletRestService {
  async GetAllWallets(data: GenericParams) {
    const response = await this.GetAllWalletsRoot(data);
    return response;
  }

  async RenameWallet(params: GenericParams, data: RenameDTO) {
    const response = await this.RenameWalletRoot(params, data);
    return response;
  }
}
export default WalletDataSource;
