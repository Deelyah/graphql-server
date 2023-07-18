export interface TxnDTO {
  telcoId: string;
  amount: string;
  phone: string;
}

export interface AirtimeViaWalletDTO {
  walletCode: string;
  pin: number;
  txnRef: string;
}

export interface AirtimeViaBankDTO {
  txnRef: string;
  paymentRef: string;
}

export interface AddBeneficiaryDTO {
  phone: number;
  alias: string;
  operatorId: string;
}
