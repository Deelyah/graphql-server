import { Request, Response } from "express";
import AirtimeDataSource from "./datasource.js";
import {
  AddBeneficiaryDTO,
  PayWBankDTO,
  PayWWalletDTO,
  TxnDTO,
} from "./type.js";

export const AirtimeQuery = {
  async GetTelcos(
    _: unknown,
    _args: unknown,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new AirtimeDataSource(token, id).GetTelcos();
    return response;
  },

  async History(
    _: unknown,
    ItemsPerPage: number,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new AirtimeDataSource(token, id).History(
      ItemsPerPage
    );
    return response;
  },
};

// Mutattions //

export const AirtimeMutation = {
  async GenerateTxn(
    _: unknown,
    data: TxnDTO,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new AirtimeDataSource(token, id).GenerateTxn(data);
    console.log("resolver", response.data);
    return response;
  },

  async PayWWallet(
    _: unknown,
    data: PayWWalletDTO,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new AirtimeDataSource(token, id).PayWWallet(data);
    return response;
  },

  async PayWBank(
    _: unknown,
    data: PayWBankDTO,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new AirtimeDataSource(token, id).PayWBank(data);
    return response;
  },

  async AddBeneficiary(
    _: unknown,
    data: AddBeneficiaryDTO,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new AirtimeDataSource(token, id).AddBeneficiary(
      data
    );
    return response;
  },

  async DltBeneficiary(
    _: unknown,
    userId: number,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new AirtimeDataSource(token, id).DltBeneficiary(
      userId
    );
    return response;
  },
};
