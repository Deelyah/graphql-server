import { Request, Response } from "express";
import ElectricityDataSource from "./datasource.js";
import { MeterDetailsParams } from "./type.js";

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
};

export const ElectricityMutation = {};
