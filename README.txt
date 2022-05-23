Backend will: 
  -Receive requests in server.js;
  -Redirect them to routes/index;
  -Send them to controller, where they will be executed (POSTS will be receiving JSON data from request's body)

Both GET and POST will work based on a SQL database connection set in a .dotenv, with GET being set for the "/" endpoint and POST for the "/register" endpoint coming from the frontend.
