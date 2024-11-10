/* Initialize the data in the DB */
import { pool } from './database.js';

const dropTables = async () => {
    try {
        const dropTablesQuery = `
            DROP TABLE IF EXISTS restaurants;
            DROP TABLE IF EXISTS reviews
        `;
        await pool.query(dropTablesQuery);
    } catch (error) {
        console.log(error)
    }
}

const createTables = async () => {
    try {
        console.log('creating restaurants...')
        const createQuery = `
        CREATE TABLE IF NOT EXISTS restaurants (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name TEXT NOT NULL,
            address TEXT NOT NULL,
            address1 TEXT NOT NULL,
            num TEXT NOT NULL,
            image TEXT NOT NULL
    );
        CREATE TABLE IF NOT EXISTS reviews (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name TEXT NOT NULL,
            star TEXT NOT NULL
            restaurant_id INT NOT NULL,
            FOREIGN KEY (cat_id) REFERENCES cats(id) ON DELETE CASCADE
            );
            `;
            await pool.query(createQuery)
            console.log('created cats and toys');
    } catch (error) {
        console.log(error)
    }
}

const insertData = async () => {
    try {
        console.log('adding initial data...');
        const insertQuery = `
        INSERT INTO restaurnats (name, address, address1, num, image) VALUES 
            ('Restaurant Name', '1234 Something Ave','Los Angeles, CA 12345','(123) 123 - 1234','images/marysol.jpg');

        INSERT INTO restaurants (name, address, address1, num, image) VALUES 
            ('Restaurant Name', '1234 Something Ave','Los Angeles, CA 12345','(123) 123 - 1234','images/marysol.jpg');
            
        INSERT INTO restaurants (name, address, address1, num, image) VALUES 
            ('Restaurant Name', '1234 Something Ave','Los Angeles, CA 12345','(123) 123 - 1234','images/marysol.jpg');
        
        INSERT INTO restaurants (name, address, address1, num, image) VALUES 
            ('Restaurant Name', '1234 Something Ave','Los Angeles, CA 12345','(123) 123 - 1234','images/marysol.jpg');
        
        INSERT INTO restaurants (name, address, address1, num, image) VALUES 
            ('Restaurant Name', '1234 Something Ave','Los Angeles, CA 12345','(123) 123 - 1234','images/marysol.jpg');
        
        INSERT INTO restaurants (name, address, address1, num, image) VALUES 
            ('Restaurant Name', '1234 Something Ave','Los Angeles, CA 12345','(123) 123 - 1234','images/marysol.jpg');

        INSERT INTO restaurants (name, address, address1, num, image) VALUES 
            ('Restaurant Name', '1234 Something Ave','Los Angeles, CA 12345','(123) 123 - 1234','images/marysol.jpg');
        
        INSERT INTO restaurants (name, address, address1, num, image) VALUES 
            ('Restaurant Name', '1234 Something Ave','Los Angeles, CA 12345','(123) 123 - 1234','images/marysol.jpg');
        
        INSERT INTO restaurants (name, address, address1, num, image) VALUES 
            ('Restaurant Name', '1234 Something Ave','Los Angeles, CA 12345','(123) 123 - 1234','images/marysol.jpg');
        
        INSERT INTO reviews (name,star, restaurant_id) VALUES ('Reviewer1', '1 star', 1);
        INSERT INTO reviews (name,star, restaurant_id) VALUES ('Reviewer2', '1 star', 1);
        INSERT INTO reviews (name,star, restaurant_id) VALUES ('Reviewer3', '3 stars', 2);
        INSERT INTO reviews (name,star, restaurant_id) VALUES ('Reviewer4', '4 stars', 3);   
        INSERT INTO reviews (name,star, restaurant_id) VALUES ('Reviewer5', '5 stars', 3);
        `;
        await pool.query(insertQuery);
    } catch (error) {
        console.log(error)
    }
}

const setup = async () => {
    await dropTables();
    await createTables();
    await insertData();
}

setup();
