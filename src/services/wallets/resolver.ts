import { Request, Response } from "express";
import { GenericParams, RenameDTO } from "./type";
import WalletDataSource from "./datasource.js";

export const WalletQuery = {
  async GetAllWallets(
    _: unknown,
    data: GenericParams,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new WalletDataSource(token, id).GetAllWallets(data);
    return response;
  },
};

export const WalletMutation = {
  async RenameWallet(
    _: unknown,
    data: { params: GenericParams; data: RenameDTO },
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new WalletDataSource(token, id).RenameWallet(
      data.params,
      data.data
    );
    return response;
  },
};
