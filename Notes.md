We cloned the Base Node Project Template, defined the database and executed `npx sequelize db:create` to create the Flights database.

We then defined the Airplane model (schema) using `npx sequelize model:generate`. Executing this command does two things: it creates the model and a migration file.

The table isn't actually created at this point, we need to use migrations for what. Migrations act like a version control (Git), so after using `npx sequelize model:generate`, we get a migrations file, which tells us what all changes will be done in the next migration. If we want to make any changes, this is the right point before we create the table.

Real life usecase for migrations:

Let's say there are five developers in the team. Developer A makes some change in the schema, commits those changes and pushes it to the repo. Now the other four developers can do a git pull, run the migration and they too will now have the latest schema.

There can be two levels of constraints: JavaScript level constraints (that we specify in the models), and database level constraints (that we specify in the migrations)

When we execute `npx sequelize db:migrate`, it executes all the pending migrations (more specifically, the up() function of the migrations). Now the question might be, that how does Sequelize know which migrations are pending, and which are not? Sequelize keeps a track of all the migrations run so far, as each migration has a unique ID based on the date and time, it was created.

When we execute `npx sequelize db:migrate:undo`, it does undo of the last migration (specifically, it executes the down() function of the migration). 

Q. Are both JavaScript level constraints and database level constraints required?

A. If the records are inserted through the JavaScript application, then both the JavaScript level constraints as well as database level constraints will be enforced. However, if the records are inserted directly (for example, through the CLI), then only database level constraints will be enforced.

There's something called as `sync()` in Sequelize ORM, with the help of which we can sync our tables to have the latest possible schema at any point of time.

Q. What does `body-parser` or `app.use(express.json())` do? Why is it required, what happens if I don't use it ?

A. If we send the request body as JSON, express won't be able to decode the JSON and our API won't work. Hence we need `body-parser` or `app.use(express.json())` to decode the incoming JSON, so that Express can parse it. In earlier days, a separate package called the `body-parser` was used, these days they have integrated it in `express` as well.

Q. What is `app.use(express.urlencoded())` ? Why is it required, what happens if I don't use it ?

A. First things first, we need to know about URL encoding.


What is URL encoding? URL encoding is converting the characters into a format that can be transmitted over the Internet. Example: space is encoded as "%20", inverted comma as "%22". See W3 Schools for more information.

`Express` library can't parse the URL encoded strings as such. So we need to specify `express.urlencoded()` in order to parse the URL encoded strings.

There's a minor point about using "extended:true" in url-encoded, it indicates what library we want to use. The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true).