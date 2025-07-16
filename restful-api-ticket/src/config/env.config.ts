import * as Joi from 'joi';

// Esta función cargará las variables de entorno.
export const EnvConfiguration = () => ({
  //? DB Envs
  DB_PORT: process.env.DB_PORT || 5432,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_USER: process.env.DB_USER,
  //? Others Envs
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
});

// Esquema de validación con Joi.
export const envValidationSchema = Joi.object({
  DB_PORT: Joi.number().default(5432),
  DB_NAME: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_USER: Joi.string().required(),
  PORT: Joi.number().default(4000),
  NODE_ENV: Joi.string().default('dev'),
});