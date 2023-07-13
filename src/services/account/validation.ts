import { InferType, object, string } from "yup";
import { ErrorHandlers } from "../../helpers/ErrorHandlers.js";

const AccountLoginSchema = object().shape({
  username: string().required(),
  password: string().required(),
});

export type IAccountLogin = InferType<typeof AccountLoginSchema>;

export class AccountValidation {
  userLogin(loginData: IAccountLogin) {
    return new Promise((resolve, reject) => {
      AccountLoginSchema.validate(loginData, { abortEarly: true })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(new ErrorHandlers().ValidationError(err));
        });
    });
  }
}
