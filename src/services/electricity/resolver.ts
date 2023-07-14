import { Request, Response } from "express";
import ElectricityDataSource from "./datasource.js";
import {
  EVBankData,
  EVWalletDTO,
  ElectricityTxnDTO,
  MeterDetailsParams,
} from "./type.js";

export const ElectricityQuery = {
  async GetDisComs(
    _: unknown,
    _args: unknown,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new ElectricityDataSource(token, id).GetDisComs();
    return response;
  },

  async GetMeterDetails(
    _: unknown,
    params: MeterDetailsParams,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new ElectricityDataSource(token, id).GetMeterDetails(
      params
    );
    return response;
  },

  async GetElectricityHistory(
    _: unknown,
    params: MeterDetailsParams,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new ElectricityDataSource(token, id).GetMeterDetails(
      params
    );
    return response;
  },
};

export const ElectricityMutation = {
  async GenerateElectricityTxn(
    _: unknown,
    data: ElectricityTxnDTO,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new ElectricityDataSource(
      token,
      id
    ).GenerateElectricityTxn(data);
    return response;
  },

  async ElectricityViaWallet(
    _: unknown,
    data: EVWalletDTO,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new ElectricityDataSource(
      token,
      id
    ).ElectricityViaWallet(data);
    return response;
  },

  async ElectricityViaBank(
    _: unknown,
    data: EVBankData,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    const response = await new ElectricityDataSource(
      token,
      id
    ).ElectricityViaBank(data);
    return response;
  },
};
