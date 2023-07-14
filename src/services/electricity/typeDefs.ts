import gql from "graphql-tag";

const ElectricityTypeDefs = gql`
  type Query {
    GetDisComs: DisComsResponse
    GetMeterDetails(params: MeterDetailsParams): MeterDetailsResponse
    GetElectricityHistory: HistoryResponse
  }
  type Mutation {
    GenerateElectricityTxn(data: ElectricityTxnDTO): TxnResponse
    ElectricityViaWallet(data: EVWalletDTO): EVWalletResponse
    ElectricityViaBank(data: EVBankDTO): EVBankResponse
    AddBenElectricity(data: ABElectricDTO): ABElectricityResponse
  }

  # GetDiscos (distribution companies)
  type DisComsResponse {
    msg: String
    flag: Boolean
    auth: Boolean
    soln: String
    data: [DisComsResponseData]
  }

  type DisComsResponseData {
    id: ID
    name: String
    logo: String
    states: [DiscomStates]
  }

  type DiscomStates {
    id: ID
    name: String
  }

  #Meter Details
  input MeterDetailsParams {
    meter_number: String
    meterType: String
    disco: Int
  }

  type MeterDetailsResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    #data: [MeterDetailsResponseData]
  }

  #type MeterDetailsResponseData {}

  #Get History
  type HistoryResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    # data:
  }

  #Generate Txn
  input ElectricityTxnDTO {
    amount: String
    meter_number: String
    meterType: String
    disco: Int
  }

  type TxnResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    #data: [TxnResponseData]
  }

  #type TxnResponseData {}

  # Pay with Wallet
  # Electricity Via Wallet (EVWallet)
  input EVWalletDTO {
    walletCode: ID
    pin: Int
    txnRef: String
    phone: String
  }

  type EVWalletResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    #data: [EVWResponseData]
  }

  # type EVWResponseData { }

  # Pay for Electricity Via Bank
  input EVBankDTO {
    txnRef: ID!
    paymentRef: String
  }

  type EVBankResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    #data: [EVBResData]
  }

  # type EVBResData { }

  #Add Beneficiary
  input ABElectricDTO {
    phone: String
    alias: String
    operatorId: ID
  }

  type ABElectricityResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    #data: [ABElectricityResData]
  }

  # type ABElectricityResData { }
`;

export default ElectricityTypeDefs;
