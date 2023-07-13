import gql from "graphql-tag";
// GetUserWallet accepts types for her arguments and then types for the expected response
// TypeDef -1, service - 2, datasource - 3, resolver - 4
const AccountTypeDefs = gql`
  type Mutation {
    UserLogin(data: LoginDTO): LoginResponse!
  }

  type Query {
    GetUserProfile: UserProfileResponse!
    GetWalletHistory(
      page: Int
      startDate: String
      endDate: String
    ): WalletHistoryResponse!
  }

  input LoginDTO {
    username: String!
    password: String!
  }

  type LoginResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    data: LoginData!
    # AUTH_TOKEN: String!
  }

  type LoginData {
    userType: UserType!
    uid: Int!
    firstname: String!
    surname: String!
    phone: String!
    email: String!
    photo: String
    balance: String
    currency: String!
    hasPIN: Boolean!
  }

  enum UserType {
    ADMIN
    USER
  }

  type UserProfileResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    data: UserData
  }

  type UserData {
    firstname: String!
    surname: String!
    phone: String!
    email: String!
    photo: String
    isMerchant: Int!
    country: String
    wallet: String!
    balance: String
    currency: String!
    refCode: String!
    lastIP: String!
    lastDevice: String!
    lastLogin: String
    id: Int!
    hasPIN: Int!
  }

  type WalletHistoryResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    data: WalletHistoryData
  }

  type WalletHistoryData {
    totalPages: Int!
    data: [TransactionData]
  }

  type TransactionData {
    ref: String!
    createdAt: String!
    desc: String!
    icon: String
    amount: Int!
    transactionType: String!
    status: String!
  }
`;

export default AccountTypeDefs;
