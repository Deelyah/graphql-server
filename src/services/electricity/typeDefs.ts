import gql from "graphql-tag";

const ElectricityTypeDefs = gql`
  type Query {
    GetDisComs: DisComsResponse
    GetMeterDetails(params: MeterDetailsParams): MeterDetailsResponse
    GetHistory: HistoryResponse
  }
  type Mutation {
  GenerateTxn(data:  TxnData): TxnResponse}

  # GetDiscos (distribution companies)
  type DisComsResponse {
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    data: [DisComsResponseData]
  }

  type DisComsResponseData {
    id: ID!
    name: String!
    logo: String!
    states: [DiscomStates]
  }

  type DiscomStates {
    id: ID!
    name: String!
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
  type HistoryResponse{
    msg: String!
    flag: Boolean!
    auth: Boolean!
    soln: String!
    data: 
    }


    #Generate Txn
    input TxnData{
        amount: String
        meter_number: String
        meterType: String
        disco: Int
    }

    type TxnResponse{
        msg: String! 
        flag: Boolean!
        auth: Boolean!
        soln: String!
        #data: [TxnResponseData]
    }

    #type TxnResponseData {}
`;

export default ElectricityTypeDefs;
