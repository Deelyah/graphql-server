export interface ElectricityTxnData {
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
