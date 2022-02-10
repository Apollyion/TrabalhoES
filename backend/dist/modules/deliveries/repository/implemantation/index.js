"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryRepository = void 0;

var _database = require("../../../../database");

class DeliveryRepository {
  async createDelivery(body) {
    const text = `INSERT INTO deliveries (item_name, description, street, district, number, city, state, complement, created_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;
    const values = [body.item_name, body.description, body.street, body.district, body.number, body.city, body.state, body.complement, body.created_by];
    const response = await _database.db.query(text, values);
    return response.rows[0];
  }

  async getDeliveries({
    search,
    delivery_by,
    status,
    created_by,
    offset,
    limit
  }) {
    let variable = 0;
    let text = `SELECT * FROM deliveries`;
    if (search) text += ` WHERE deliveries.item_name ILIKE $${variable += 1}`;
    if (delivery_by) text += ` ${!!search ? " AND" : " WHERE"} deliveries.delivered_by=$${variable += 1}`;
    if (created_by) text += ` ${!!search ? " AND" : " WHERE"} deliveries.created_by=$${variable += 1}`;
    if (status) text += `${!!delivery_by && !!created_by ? " AND" : " WHERE"} deliveries.status=$${variable += 1}`;
    text += ` ORDER BY deliveries.created_at DESC`;
    text += ` LIMIT $${variable += 1} OFFSET $${variable += 1}`;
    const values = [limit, offset];
    if (status) values.unshift(status);
    if (created_by) values.unshift(created_by);
    if (delivery_by) values.unshift(delivery_by);
    if (search) values.unshift(`%${search}%`);
    const response = await _database.db.query(text, values);
    return response.rows;
  }

  async getDeliveryById(deliveryId) {
    const text = `SELECT * FROM deliveries WHERE deliveries.id=$1`;
    const values = [deliveryId];
    const response = await _database.db.query(text, values);
    return response.rows[0];
  }

  async deleteDelivery(deliveryId) {
    const text = `DELETE FROM deliveries WHERE deliveries.id=$1 RETURNING *`;
    const values = [deliveryId];
    const response = await _database.db.query(text, values);
    return response.rows[0];
  }

  async updateDeliveryForAssociante(body) {
    const text = `UPDATE deliveries SET delivered_by=$1, status='IN_PROGRESS' WHERE deliveries.id=$2 RETURNING *`;
    const values = [body.delivered_by, body.id];
    const response = await _database.db.query(text, values);
    return response.rows[0];
  }

  async updateStatusDelivered(body) {
    const text = `UPDATE deliveries SET status=$1 ${body.status === "PENDING" ? ", delivered_by=null" : ""} WHERE deliveries.id=$2 RETURNING *`;
    const values = [body.status, body.id];
    const response = await _database.db.query(text, values);
    return response.rows[0];
  }

}

exports.DeliveryRepository = DeliveryRepository;