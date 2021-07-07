const express = require('express');
const app = express();
const DataStore = require('nedb')
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening at ${port} `));

app.use(express.static('src'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


const database = {};
database.posts = new DataStore('db/posts.db');
database.comments = new DataStore('db/comments.db');
database.categories = new DataStore('db/categories.db');
database.users = new DataStore('db/users.db');
database.recipes = new DataStore('db/recipes.db');


database.posts.loadDatabase();
database.comments.loadDatabase();
database.categories.loadDatabase();
database.users.loadDatabase();
database.recipes.loadDatabase();


//POSTS

app.get("/posts", (request, response) => {
    database.posts.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data)
    })
});

app.get("/one_post/:id", (request, response) => {
    const id = request.params.id;
    database.posts.find({ 'id': id }, function (error, document) {
        if (error) response.send(error);
        return response.json(document);
    });
});

app.post("/posts", (request, response) => {
    const data = request.body
    data.createdAt = Date.now()
    database.posts.insert(data);
    response.json({
        status: 'success'
    });
});


//CATEGORIES

app.get("/categories", (request, response) =>{
    database.categories.find({},(err, data)=> {
        if(err) {
            response.end();
            return;
        }
        response.json(data)
    } )
});


//RECIPES

app.get("/recipes", (request, response) => {
    database.recipes.find({},(err, data)=> {
        if(err) {
            response.end();
            return;
        }
        response.json(data)
    } )
});

app.get("/recipes/:title", (request, response) => {
    const title = request.params.title;
    database.recipes.find({ 'title': title }, function (error, document) {
        if (error) response.send(error);
        return response.json(document);
    });
});

//COMMENTS

app.get("/comments/:postId", (request, response) => {
    const postId = request.params.postId;
    database.comments.find({ 'postId': postId }, function (error, document) {
        if (error) response.send(error);
        return response.json(document);
    });
});

app.post("/comments", (request, response) => {
    const data = request.body
    data.createdAt = Date.now()
    database.comments.insert(data);
    response.json({
        status: 'success'
    });
});

