/* Establish the DB connection pool here. */
import pg from 'pg';
import dotenv from 'dotenv'

dotenv.config();

const config = {
    connectionString: process.env.CONNECTIONSTRING
};
const pool = new pg.Pool(config);
export {pool};