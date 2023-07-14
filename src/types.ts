import gql from "graphql-tag";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";
import AccountSchema from "./services/account/typeDefs.js";
import WalletSchema from "./services/wallets/typeDefs.js";
import AirtimeSchema from "./services/airtime/typeDefs.js";
import ElectricitySchema from "./services/electricity/typeDefs.js";
const rootTypeDefs = gql`
  enum gender {
    male
    female
  }

  type Mutation {
    _: Boolean
  }

  type Query {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [
  rootTypeDefs,
  AccountSchema,
  WalletSchema,
  AirtimeSchema,
   ElectricitySchema,
  ...scalarTypeDefs,
];
