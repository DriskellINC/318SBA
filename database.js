const users = [{"id":1,"first_name":"Bard","last_name":"Ipgrave","email":"bipgrave0@liveinternet.ru"},
{"id":2,"first_name":"Jude","last_name":"Catchpole","email":"jcatchpole1@utexas.edu"},
{"id":3,"first_name":"Huntley","last_name":"Selman","email":"hselman2@ed.gov"},
{"id":4,"first_name":"Gertrude","last_name":"Thomasen","email":"gthomasen3@wp.com"},
{"id":5,"first_name":"Konstance","last_name":"Brasener","email":"kbrasener4@fema.gov"},
{"id":6,"first_name":"Aurelie","last_name":"Carney","email":"acarney5@google.com.hk"},
{"id":7,"first_name":"Jaimie","last_name":"Bettesworth","email":"jbettesworth6@ow.ly"},
{"id":8,"first_name":"Marika","last_name":"Crunden","email":"mcrunden7@twitpic.com"},
{"id":9,"first_name":"Abramo","last_name":"Dumbarton","email":"adumbarton8@weebly.com"},
{"id":10,"first_name":"Thaddus","last_name":"Worland","email":"tworland9@marketwatch.com"},
{"id":11,"first_name":"Bartie","last_name":"McGrayle","email":"bmcgraylea@aboutads.info"},
{"id":12,"first_name":"Oby","last_name":"Roocroft","email":"oroocroftb@weibo.com"},
{"id":13,"first_name":"Maryrose","last_name":"Castanie","email":"mcastaniec@over-blog.com"},
{"id":14,"first_name":"Candide","last_name":"Eakly","email":"ceaklyd@blinklist.com"},
{"id":15,"first_name":"Fionnula","last_name":"Roussel","email":"froussele@elpais.com"},]

// import the function from 'index.js'
const { addUserToDatabase } = require('./index');

// imported function
// to add a new user
const newUser = {
    name: 'John',
    username: 'john123',
    email: 'john@example.com'
};
addUserToDatabase(newUser);
