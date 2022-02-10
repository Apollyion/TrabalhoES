"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = exports.connect = void 0;

var _pg = require("pg");

var _config = require("../config");

const db = new _pg.Pool({
  host: 'localhost',
  user: _config.config.POSTGRES_USER,
  password: _config.config.POSTGRES_PASSWORD,
  database: _config.config.POSTGRES_DATABASE,
  port: Number(_config.config.POSTGRES_PORT)
});
exports.db = db;

const connect = async () => {
  await db.connect();
};

exports.connect = connect;