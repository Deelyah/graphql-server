export interface TxnDTO {
  amount: number;
  phone: number;
  telcoId: string;
}

export interface PayWWalletDTO {
  walletCode: string;
  pin: number;
  txnRef: string;
}

export interface PayWBankDTO {
  txnRef: string;
  paymentRef: string;
}

export interface AddBeneficiaryDTO {
  phone: number;
  alias: string;
  operatorId: string;
}
