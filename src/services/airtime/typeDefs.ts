import gql from "graphql-tag";

const AirtimeTypeDefs = gql`
  type Query {
    GetTelcos: GetTelcosResponse
    History(ItemsPerPage: Int!): HistoryResponse
  }
  type Mutation {
    GenerateAirtimeTxn(data: TxnDTO): TxnResponse
    AirtimeViaWallet(data: AirtimeViaWalletDTO): AirtimeViaWalletResponse
    AirtimeViaBank(data: AirtimeViaBankDTO): AirtimeViaBankResponse
    AddBeneficiary(data: AddBeneficiaryDTO): AddBeneficiaryResponse
    DltBeneficiary(id: ID!): DltBeneficiaryResponse
  }

  # get telcos
  type GetTelcosResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    data: [TelcosResponseData]
  }

  type TelcosResponseData {
    id: ID!
    name: String!
    logo: String!
  }

  #generate TXN
  input TxnDTO {
    telcoId: ID
    amount: String
    phone: String
  }

  type TxnResponse {
    msg: String
    flag: Boolean
    auth: Boolean
    soln: String
    data: TxnResponseData
  }

  type TxnResponseData {
    ref: ID
    txnType: String
    operator: TxnOperator
  }

  type TxnOperator {
    id: ID
    name: String
    logo: String
  }

  #history

  type HistoryResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    data: HistoryResponseData
  }

  type HistoryResponseData {
    totalPages: Int!
    data: [HistoryData!]
  }

  type HistoryData {
    ref: ID!
    createdAt: String!
    amount: Int!
    status: String!
    phone: Int!
    operatorName: String
    operatorLogo: String
  }

  #Pay with wallet
  input AirtimeViaWalletDTO {
    walletCode: ID!
    pin: Int!
    txnRef: ID!
  }

  type AirtimeViaWalletResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    data: AirtimeViaWalletResponseData
  }

  type Operator {
    id: ID!
    name: String!
    logo: String!
  }
  type AirtimeViaWalletResponseData {
    status: String
    operator: Operator
  }

  #Pay with bank
  input AirtimeViaBankDTO {
    txnRef: ID!
    paymentRef: ID!
  }

  type AirtimeViaBankResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    # data: [AirtimeViaBankResponseData]
  }

  # type AirtimeViaBankResponseData {}

  # Add Beneficiary

  input AddBeneficiaryDTO {
    phone: Int!
    alias: String!
    operatorId: ID!
  }

  type AddBeneficiaryResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    # data: [AddBeneficiaryResponseData]
  }

  # type AddBeneficiaryResponseData {}

  #Delete Beneficiary
  type DltBeneficiaryResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    # data: [DltBeneficiaryResponseData]
  }

  # type DltBeneficiaryResponseData {}
`;

export default AirtimeTypeDefs;
