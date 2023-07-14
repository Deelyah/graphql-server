import { AccountLoginDto, WalletHistoryDto } from "./type.js";
import AccountDatasource from "./datasource.js";
import { AccountValidation } from "./validation.js";
import { Request, Response, CookieOptions } from "express";

const cookieSettings = {
  httpOnly: true,
  secure: false,
} satisfies CookieOptions;

export const AccountMutation = {
  async UserLogin(
    _: unknown,
    { data }: { data: AccountLoginDto },
    context: { req: Request; res: Response }
  ) {
    // console.log(data);
    await new AccountValidation().userLogin(data);
    const response = await new AccountDatasource().UserLogin(data);

    context.res.cookie(
      "NETAPPS-AUTH-TOKEN",
      response.headers["auth_token"],
      cookieSettings
    );
    context.res.cookie(
      "NETAPPS-AUTH-ID",
      response.data.data.uid,
      cookieSettings
    );

    return response.data;
  },
};

export const AccountQuery = {
  async GetUserProfile(
    _: unknown,
    _args: unknown,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    console.log("req cookies", token, id);

    const response = await new AccountDatasource(token, id).GetUserProfile();

    return response.data;
  },

  async GetWalletHistory(
    _: unknown,
    data: WalletHistoryDto,
    context: { req: Request; res: Response }
  ) {
    const token = context.req.cookies["NETAPPS-AUTH-TOKEN"];
    const id = context.req.cookies["NETAPPS-AUTH-ID"];
    // console.log("req cookies", token, id);
    console.log(data);

    const response = await new AccountDatasource(token, id).GetWalletHistory(
      data
    );

    return response.data;
  },
};
