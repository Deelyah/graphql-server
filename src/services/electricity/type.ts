export interface ElectricityTxnDTO {
  amount: string;
  meter_number: string;
  meterType: string;
  disco: number;
}

export interface MeterDetailsParams {
  meter_number: string;
  meterType: string;
  disco: number;
}

export interface EVWalletDTO {
  walletCode: string;
  pin: string;
  txnRef: string;
  phone: string;
}
export interface EVBankData {
  txnRef: string;
  paymentRef: string;
}
