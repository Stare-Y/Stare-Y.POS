/**
 * DTO representing the request body to create a sale/charge
 * via NetPay's transaction API.
 *
 * This mirrors NetPay's external contract — do NOT mix
 * internal domain types here.
 */
export interface NetPaySaleRequest {
  // json Object to send "relevant information" for the commerce (like tags or iunno) */
  traceability: string;
  // the serial number of the device that is processing the payment, if applicable
  serialNumber: string;
  // the unique identifier for the store or merchant */
  storeId: string;
  // msi stands for "months without interest" and indicates the number of installments for the payment. A value of 0 means a single payment, while a value greater than 0 indicates the number of installments (e.g., 3 for three monthly payments). */
  msi: number;
  // our unique identifier that will be shown in the ticket
  folioNumber: string;
  // access token to consume the serice
  access_token: string;
  // if true, oficial ticket Netpay will be skipped
  disablePrintAnimation: boolean;
}
