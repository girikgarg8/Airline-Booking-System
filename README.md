# Flights Service

<h3>Objective</h3>
<p>
    We need to build a backend system that can support different features for an airline company, our end user is going to be someone who wants to book flights and query about flights so we need a robust system to actually help them give the best experience possible. This doc is solely going to focus on the backend part of the system. We want to prepare the whole backend keeping the fact that the code base should be as maintainable as possible.
</p>


<h3>High Level Design</h3>
<img src="/src/High-Level-Design.png" alt="High Level Design"/>

<h3> Non Functional Requirements </h3>

- We can expect that we are going to have more flight searches than flight bookings.

- The system needs to be accurate in terms of booking. (Means the booking should not be done more than once for the user).

- Expect that we will be having approx. 1,00,000 total signed up users, each user may book for a maximum of 5, so 5,00,000 bookings might come up in one quarter.

- So in one day we can expect 5000 bookings.

- System should be capable of scaling up to 3X of the current estimated traffic.

- System should handle real time updates to flight prices, before the user makes the final booking.

- System should make sure that the prices don’t change while the payment is going on.

- Concurrency should be handled, using RDBMS should be a good solution.

<h3>Schema</h3>

<img src="/src/Schema.png" alt="Schema"/>


<h3>Services</h3>
<ul>
<li>
<h4>
<a href="#" target="_blank">Flights API Gateway</a></h4>
</li>
<li>
<h4>
<a href="#" target="_blank">Flights Booking Service</a></h4>
</li>
<li>
<h4>
<a href="#" target="_blank">Flights Notification Service</a></h4>
</li>
</ul>

**High level flow of the project** 

We started by identifying the functional and non-functional requirements of the project. We then designed the schema and identified four models: Airplane, City, Airport and Flight. We then setup these models and created CRUD APIs for each of these models.

The attribute city_id in Airport is the foreign key which references the primary key id of City. There is a one to many relationship between these models (one city can have multiple airports) . So, we set up an association between these models by establishing the foreign key relationship using Sequelize ORM.

 Similarly, we identified a one to many relationship between Airport and Flight (one airport can have many flights departing/arriving), and a similar one to many relationship between Airplane and Flight (one airplane can be used for many flights). Hence we setup the foreign key constraints at both the JavaScript and database levels.


For the complete design doc of this project please <a href="https://docs.google.com/document/d/1FyH16wreiVJ3Vtazm8msDB7-DPQsjRFSYDkLdWSvdJo/edit?usp=sharing" target="_blank"> click here