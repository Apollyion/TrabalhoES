import { Router } from "express";
import { validate } from "express-validation";
import { ensureAutheticaded } from "../middlewares/ensureAutheticated";
import { ValidateType } from "../middlewares/validateType";
import { AssociateDeliveryController } from "../modules/deliveries/useCases/associateDelivery/AssociateDeliveryController";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { DeleteDeliveryController } from "../modules/deliveries/useCases/deleteDelivery/DeleteDeliveryController";
import { GetDeliveriesController } from "../modules/deliveries/useCases/getDeliveries/GetDeliveriesController";
import { GetDeliveryController } from "../modules/deliveries/useCases/getDelivery/GetDeliveryController";
import { UpdateStatusDeliveryController } from "../modules/deliveries/useCases/updateStatusDelivery/UpdateStatusDeliveryController";
import { DeliverySchema } from "./schemas";
export const deliveriesRoute = Router();

const createDeliveryController = new CreateDeliveryController();
deliveriesRoute.post(
  "/",
  ensureAutheticaded,
  ValidateType("CLIENT"),
  validate(DeliverySchema),
  createDeliveryController.handle
);

const getDeliveriesController = new GetDeliveriesController();
deliveriesRoute.get("/", ensureAutheticaded, getDeliveriesController.handle);

const getDeliveryController = new GetDeliveryController();
deliveriesRoute.get(
  "/:deliveryId",
  ensureAutheticaded,
  getDeliveryController.handle
);

const deleteDeliveryController = new DeleteDeliveryController();
deliveriesRoute.delete(
  "/:deliveryId",
  ensureAutheticaded,
  deleteDeliveryController.handle
);

const associateDeliveryController = new AssociateDeliveryController()
deliveriesRoute.put(
  "/:deliveryId",
  ensureAutheticaded,
  ValidateType("DELIVERYMAN"),
  associateDeliveryController.handle
);

const updateStatusDeliveryController = new UpdateStatusDeliveryController()
deliveriesRoute.put(
  "/status/:deliveryId",
  ensureAutheticaded,
  updateStatusDeliveryController.handle
);