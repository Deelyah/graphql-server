import gql from "graphql-tag";

// typeDefs are written in the same order as the postman collection

const WalletTypeDefs = gql`
  type Query {
    GetAllWallets(data: GenericParams): AllWalletsResponse!
    DeactivateWallet(params: WalletSelectionParams): DeactivationResponse!
    GetWalletDetails(params: WalletSelectionParams): WalletDetailResponse!
  }

  type Mutation {
    RenameWallet(params: GenericParams, data: RenameDTO): RenameResponse!
    Topup(data: TopupDTO): TopupResponse!
    WTWTransfer(data: WTWTransferDTO): WTWTransferResponse!
    WTBTransfer(data: WTBTransferDTO): WTBTransferResponse!
  }

  #reusable types
  input GenericParams {
    action: String
  }

  input WalletSelectionParams {
    action: String!
    wallet_id: ID!
  }

  #list all wallets (GET)
  type AllWalletsResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    data: [AllWalletsResponseData!]!
  }

  type AllWalletsResponseData {
    wallet_id: ID
    currency: Int
    wallet_balance: Int
    wallet_name: String
    access_date: String
    wallet_status: String
    status: Int
  }

  #rename wallet (POST)
  input RenameDTO {
    wallet_name: String!
    wallet_id: ID!
  }

  type RenameResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    #  data: RenameResponseData
  }

  # type RenameResponseData {}

  #deactivate wallet (GET)
  type DeactivationResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    # data: [DeactivationResponseData]
  }

  # type DeactivationResponseData {}

  #wallet details (GET)
  type WalletDetailResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    #   data: [WalletResponseData]
  }

  # type WalletResponseData {}

  #Topup (POST)
  input TopupDTO {
    txnRef: String!
    paymentRef: String!
  }

  type TopupResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    #  data: [TopupResponseData]
  }

  # type TopupResponseData {}

  #Wallet to wallet transfer (POST)
  input WTWTransferDTO {
    walletCode: String!
    toWalletCode: String!
    amount: Int!
    pin: Int!
  }

  type WTWTransferResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    #data: [WTWTransferResponseData]
  }

  #type WTWTransferResponseData {}

  # Wallet to Bank Transfer
  input WTBTransferDTO {
    walletCode: String!
    bankCode: String!
    accountNo: Int!
    amount: Int!
    pin: Int!
    narration: String
  }

  type WTBTransferResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    #data: [WTBTransferResponseData]
  }

  #type WTBTransferResponseData {}
`;
export default WalletTypeDefs;
