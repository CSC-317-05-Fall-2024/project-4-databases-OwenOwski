import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// todo: import cats data
import { getRestaurant, getRestaurants, restaurants,getReviewsForRest} from './data/restaurants.js';
import { backendRouter } from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// todo: invoke the static middle ware
app.use(express.static(path.join(__dirname, 'Public')));




// todo: set up view engine for ejs template
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json())
app.use("/api", backendRouter);


// todo: fill in any paths
app.get("/index",(req, resp) => {
    resp.sendFile(path.join(__dirname, "server", "public", "views", "index.html"));
})

app.get("/attractions",(req, resp) => {
    resp.sendFile(path.join(__dirname, "public", 'attractions.html'));
})

app.get("/restaurants", (req, resp) => {
    const restaurants = getRestaurants();
    resp.render("restaurants", {restaurants});
});
app.get("/newRest",(req, resp) => {
    resp.sendFile(path.join(__dirname, "public", 'newRest.html'));
})

app.get('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const restaurant = getRestaurant(id);
    res.render('restaurant-details', {restaurant});
});

app.get('/restaurants/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const cat = await getRestaurant(id);
    const toys = await getReviewsForRestaurant(id);
    console.log(reviews);
    res.render('restaurant_detail', {restaurant, reviews});
});


// todo: fill in any views

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});