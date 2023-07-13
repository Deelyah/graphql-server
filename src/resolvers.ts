import { AccountMutation, AccountQuery } from "./services/account/resolver.js";
import { WalletQuery, WalletMutation } from "./services/wallets/resolver.js";
import { AirtimeMutation, AirtimeQuery } from "./services/airtime/resolver.js";

const Mutation = {
  ...AccountMutation,
  ...WalletMutation,
  ...AirtimeMutation,
};

const Query = {
  ...AccountQuery,
  ...WalletQuery,
  ...AirtimeQuery,
};

export { Mutation, Query };
