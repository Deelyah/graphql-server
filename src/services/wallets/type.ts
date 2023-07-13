export interface GenericParams {
  action: string;
}

export interface RenameDTO {
  wallet_name: string;
  wallet_id: string;
}

export interface TopupDTO {
  txnRef: string;
  paymentRef: string;
}

export interface WTWTransferDTO {
  walletCode: string;
  toWalletCode: string;
  amount: number;
  pin: number;
}

export interface WTBTransferDTO {
  walletCode: string;
  bankCode: string;
  accountNo: number;
  amount: number;
  pin: number;
  narration: string;
}
