import { Router, Request, Response, NextFunction } from 'express';
import { Ok } from '../../shared';
import { QRDataAccess } from '../../data';
/**
 * The system router that holds all module routes.
 */
export const systemsRouter = Router();

/**
 * The relative route for the systems.
 *
 * No leading or trailing slashes required.
 */
export const systemsRelativeRoute = 'system/qr';

/* get sale invoice by id route. */
systemsRouter.get('/sale-invoice/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await QRDataAccess.getSaleInvoice(parseInt(req.params.id));
    if (result.error) {
      next(result.error);
    } else if (result.data) {
      Ok(res, { data: result.data });
    }
  } catch (error) {
    next(error);
  }
});
