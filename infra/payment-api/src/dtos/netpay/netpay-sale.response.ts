/**
 * DTO representing NetPay's response after processing a sale/charge.
 *
 * This mirrors what NetPay returns — do NOT add internal fields here.
 */
export interface NetPaySaleResponse {
  /** NetPay's unique transaction identifier */
  transactionId: string;

  /** Transaction status (e.g., "approved", "declined", "pending") */
  status: string;

  /** Authorization code from the issuing bank */
  authorizationCode?: string;

  /** Response code for programmatic handling */
  responseCode: string;

  /** Human-readable response message */
  responseMessage: string;

  /** The amount that was charged */
  amount: number;

  /** Currency used */
  currency: string;

  /** Timestamp of the transaction */
  transactionDate: string;

  /** Masked card number (e.g., "****1234") */
  maskedCardNumber?: string;

  /** Card brand (e.g., "Visa", "Mastercard") */
  cardBrand?: string;
}
