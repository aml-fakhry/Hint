import { Database } from '../../../database';
import { DataResult } from '../../../../shared';
import { SaleInvoicePrintData } from '../../../reports';

/**
 * The QR data-access service that includes the functionalities to read a sale invoice .
 */
export class QRDataAccess {
  /**
   * Finds the sale invoice with the given id.
   * @param saleInvoiceId The id of the sale invoice.
   */
  public static async getSaleInvoice(saleInvoiceId: number): Promise<DataResult<SaleInvoicePrintData>> {
    const result: DataResult<SaleInvoicePrintData> = {};

    try {
      const saleInvoice = await Database.SaleInvoices.findByPk(saleInvoiceId, {
        include: [{ model: Database.Customers, required: true }],
        nest: true,
      });

      const companySettings = await Database.CompanySettings.findOne({ where: { companyId: saleInvoice?.companyId } });

      result.data = { saleInvoice, companySettings };
    } catch (error) {
      result.error = error;
    }

    return result;
  }
}
