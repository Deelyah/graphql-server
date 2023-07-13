import gql from "graphql-tag";

const AirtimeTypeDefs = gql`
  type Query {
    GetTelcos: GetTelcosResponse
    History(ItemsPerPage: Int!): HistoryResponse
  }
  type Mutation {
    GenerateTxn(data: TxnDTO): TxnResponse!
    PayWWallet(data: PayWWalletDTO): PayWWalletResponse
    PayWBank(data: PayWBankDTO): PayWBankResponse
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
    telcoId: ID!
    amount: String!
    phone: String!
  }

  type TxnResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    data: TxnResponseData
  }

  type TxnResponseData {
    ref: ID!
    txnType: String!
    operator: TxnOperator
  }

  type TxnOperator {
    id: ID!
    name: String!
    logo: String!
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
  input PayWWalletDTO {
    walletCode: ID!
    pin: Int!
    txnRef: ID!
  }

  type PayWWalletResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    data: PayWWalletResponseData
  }

  type Operator {
    id: ID!
    name: String!
    logo: String!
  }
  type PayWWalletResponseData {
    status: String!
    operator: Operator
  }

  #Pay with bank
  input PayWBankDTO {
    txnRef: ID!
    paymentRef: ID!
  }

  type PayWBankResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    # data: [PayWBankResponseData]
  }

  # type PayWBankResponseData {}

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
