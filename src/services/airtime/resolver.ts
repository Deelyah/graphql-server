import { Request, Response } from "express";
import AirtimeDataSource from "./datasource.js";
import {
  AddBeneficiaryDTO,
  AirtimeViaBankDTO,
  AirtimeViaWalletDTO,
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
  async GenerateAirtimeTxn(
    _: unknown,
    { data }: { data: TxnDTO },
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new AirtimeDataSource(token, id).GenerateAirtimeTxn(
      data
    );
    return response.data;
  },

  async AirtimeViaWallet(
    _: unknown,
    { data }: { data: AirtimeViaWalletDTO },
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new AirtimeDataSource(token, id).AirtimeViaWallet(
      data
    );
    console.log("wallet", response);

    return response;
  },

  async AirtimeViaBank(
    _: unknown,
    data: AirtimeViaBankDTO,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new AirtimeDataSource(token, id).AirtimeViaBank(
      data
    );
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
