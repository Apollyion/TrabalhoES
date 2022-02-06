import { db } from "../../../../database";
import { IDelivery } from "../../deliverieModel";
import { GetDeliveryProps, IDeliveryRepository } from "../IDeliveryRepository";

export class DeliveryRepository implements IDeliveryRepository {
  async createDelivery(body: IDelivery) {
    const text = `INSERT INTO deliveries (item_name, description, street, district, number, city, state, complement, created_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
    const values = [
      body.item_name,
      body.description,
      body.street,
      body.district,
      body.number,
      body.city,
      body.state,
      body.complement,
      body.created_by
    ];

    const response = await db.query(text, values)

    return response.rows[0]
  }

  async getDeliveries({ search, delivery_by, created_by, offset, limit}: GetDeliveryProps) {
    let variable = 0;
    let text = `SELECT * FROM deliveries`;
    
    if(search) text += ` WHERE deliveries.item_name ILIKE $${variable+=1}`
    if(delivery_by) text += ` ${!!search ? "AND" : "WHERE"} deliveries.delivery_by=$${variable+=1}`
    if(created_by) text += ` ${!!search ? "AND" : "WHERE"} deliveries.created_by=$${variable+=1}`

    text += ` ORDER BY deliveries.created_at DESC`
    text+= ` LIMIT $${variable+=1} OFFSET $${variable += 1}`
  

    const values = [limit, offset] as any[];
    if(created_by) values.unshift(created_by)
    if(delivery_by) values.unshift(delivery_by)
    if(search) values.unshift(`%${search}%`)

    const response = await db.query(text, values);

    return response.rows;
  }

  async getDeliveryById(deliveryId: string) {
    const text = `SELECT * FROM deliveries WHERE deliveries.id=$1`
    const values = [deliveryId]

    const response = await db.query(text, values)

    return response.rows[0]
  }
}
