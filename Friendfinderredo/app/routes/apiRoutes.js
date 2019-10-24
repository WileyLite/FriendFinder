const friendData = require("../data/friends");

module.exports = function(app) {
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res) {
    res.join(friendData);
});

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/api/tables", function(req, res) {
// here we create an if statement where the answers by user is taken and compared to the friendData that will display who user is most compatible with
});
};

