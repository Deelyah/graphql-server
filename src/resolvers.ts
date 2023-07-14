import { AccountMutation, AccountQuery } from "./services/account/resolver.js";
import { WalletQuery, WalletMutation } from "./services/wallets/resolver.js";
import { AirtimeMutation, AirtimeQuery } from "./services/airtime/resolver.js";
import {
  ElectricityQuery,
  ElectricityMutation,
} from "./services/electricity/resolver.js";

const Mutation = {
  ...AccountMutation,
  ...WalletMutation,
  ...AirtimeMutation,
  ...ElectricityMutation,
};

const Query = {
  ...AccountQuery,
  ...WalletQuery,
  ...AirtimeQuery,
  ...ElectricityQuery,
};

export { Mutation, Query };
