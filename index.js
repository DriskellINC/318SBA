// adding express server and localhost port
const express = require("express"); 
const app = express ()
const PORT = 3000

app.listen(PORT, () =>{
    console.log("It's working")
});

//adding root to access the html
app.get('/',(req, res)=> {
    res.sendFile('/views/newUsers.html',{
        root:__dirname,
    } )
})
// app.get('/newUser', (req, res) => {
//     res.sendFile('/views/newUsers.html', {
//         root: __dirname + '/views'
//     });
// });

// define a route to handle POST requests to create a new user
app.post('/api/user', (req, res) => {
    const newUser = req.body; // Assuming the form data is sent as JSON
    users.push(newUser);
    res.json(newUser);
});

// define a route to get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});
//middleware for req
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
const addUserToDatabase = (newUser) => {
    // Generate a unique ID for the new user
    const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    newUser.id = newUserId;
    users.push(newUser);
};

// handle form submission
app.post('/newUser', (req, res) => {
    const newUser = req.body;
    res.redirect('/newUser'); // Redirect to the form page after submission
});

// exported the function
module.exports = {
    addUserToDatabase: addUserToDatabase
};


// https://my.api.mockaroo.com/users.json
