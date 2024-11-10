// Fill this in
let restaurants = [
    {   
        id:0,
        image: "/images/marysol.jpg",
        name: "Restaurant Name",
        add: "1234 Something Ave",
        add1:"Los Angeles, CA 12345",
        num: "(123) 123 - 1234"
    },
    {   
        id:1,
        image: "/images/marysol.jpg",
        name: "Restaurant Name",
        add: "1234 Something Ave",
        add1:"Los Angeles, CA 12345",
        num: "(123) 123 - 1234"
    },
    {
        id:2,
        image: "/images/marysol.jpg",
        name: "Restaurant Name",
        add: "1234 Something Ave",
        add1:"Los Angeles, CA 12345",
        num: "(123) 123 - 1234"
    },
    {   
        id:3,
        image: "/images/marysol.jpg",
        name: "Restaurant Name",
        add: "1234 Something Ave",
        add1:"Los Angeles, CA 12345",
        num: "(123) 123 - 1234"
    },
    {   
        id:4,
        image: "/images/marysol.jpg",
        name: "Restaurant Name",
        add: "1234 Something Ave",
        add1:"Los Angeles, CA 12345",
        num: "(123) 123 - 1234"
    },
    {   
        id:5,
        image: "/images/marysol.jpg",
        name: "Restaurant Name",
        add: "1234 Something Ave",
        add1:"Los Angeles, CA 12345",
        num: "(123) 123 - 1234"
    },
    {
        id:6,
        image: "/images/marysol.jpg",
        name: "Restaurant Name",
        add: "1234 Something Ave",
        add1:"Los Angeles, CA 12345",
        num: "(123) 123 - 1234"
    },
    {
        id:7,
        image: "/images/marysol.jpg",
        name: "Restaurant Name",
        add: "1234 Something Ave",
        add1:"Los Angeles, CA 12345",
        num: "(123) 123 - 1234"
    },
    {
        id:8,
        image: "/images/marysol.jpg",
        name: "Restaurant Name",
        add: "1234 Something Ave",
        add1:"Los Angeles, CA 12345",
        num: "(123) 123 - 1234"
    },

];

let lastId = restaurants.length;

const getNextId = () => {
    lastId += 1;
    return lastId;
}

// Get a list of restaurants
const getRestaurants = () => {
    return restaurants
};


// Get a restaurant by id
const getRestaurant = (id) => {
    return restaurants.find(restaurant => restaurant.id === id);
};

// Create a new restaurant entry
const createRestaurant = (data) => {
    const newRestaurant = {
        id: getNextId(),
        ...data
    }
    console.log(newRestaurant);
    restaurants.push(newRestaurant);
    return newRestaurant;
};

// Delete a restaurant by id
const deleteRestaurant = (id) => {
    console.log(id);
    const restaurantToDelete = restaurants.find(restaurant => restaurant.id === id);
    if (!restaurantToDelete) {
        throw Error(`restaurant ${id} not found!`);
    }
    restaurants = restaurants.filter(restaurant => restaurant.id !== id);
    return restaurantToDelete;
};

const getReviewsForRest = async (restaurant_id) => {
    try {
        const results = await pool.query('SELECT name FROM reviews WHERE restaurant_id = $1', [restaurant_id])
        return results.rows;
    } catch (error) {
        console.error( error.message )
    }
};

export { getRestaurants, getRestaurant, getReviewsForRest, createRestaurant, deleteRestaurant, restaurants};