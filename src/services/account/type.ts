interface AccountLoginDto {
  password: string;
  username: string;
}

interface WalletHistoryDto {
  page?: number;
  startDate?: string;
  endDate?: string;
}

export { AccountLoginDto, WalletHistoryDto };
