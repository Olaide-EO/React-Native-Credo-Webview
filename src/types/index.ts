export type Currency = 'NGN' | 'GHS' | 'USD' | 'ZAR';

export type Channels = 'bank' | 'card' | 'qr' | 'ussd' | 'mobile_money';

export interface CredoProps {
  amount: string | number;
  currency: string;
  customerEmail: string;
  customerName: string;
  customerPhoneNo: string;
  publicKey: string;
  referenceNo?: string;
  showModal: boolean;
  handleWebViewMessage?: (string: string) => void;
  onCancel?: (Response: any) => void;
  onSuccess: (SuccessResponse:any) => void;
  closeModal: () => void;
}
