import { Router } from "express";
import { validate } from "express-validation";
import { ensureAutheticaded } from "../middlewares/ensureAutheticated";
import { ValidateType } from "../middlewares/validateType";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { GetDeliveriesController } from "../modules/deliveries/useCases/getDeliveries/GetDeliveriesController";
import { GetDeliveryController } from "../modules/deliveries/useCases/getDelivery/GetDeliveryController";
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

const getDeliveryController = new GetDeliveryController()
deliveriesRoute.get("/:deliveryId", ensureAutheticaded, getDeliveryController.handle)

