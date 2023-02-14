# Api-to-SQL
This is  a database created using MYSQL and Node.js which reads data from an API of public source and puts it into sql database.
The following is the steps to test this database:
Api used: https://jsonplaceholder.typicode.com/users
1) first the database is created and used by the command :
   use database db_name; // where db_name is the name of our database
2) After the database we create a table with the attributes according to the api used.
3) After the table is created successfully we can check the content using :
   select * from table_name;
   
   ![Screenshot (15)](https://user-images.githubusercontent.com/107358756/218826059-aba43276-ab1d-4873-9327-3a4e472f11d3.png)
   
4) In the Terminal we execute this code by saving the code using .js extension and running the following command :
   node file_name.js
5)we get the output as following and the table in the database is now updated with the contents of the api.
 
 ![Screenshot (14)](https://user-images.githubusercontent.com/107358756/218826781-66223352-be65-41b4-a0b8-13bfb4f7760d.png)
 ![Screenshot (16)](https://user-images.githubusercontent.com/107358756/218826841-15323a6b-e4a4-4a5b-b204-5043d0f3fa0f.png)
 ![Screenshot (17)](https://user-images.githubusercontent.com/107358756/218826895-4144f9f3-b23c-4d4b-8ed8-2b70dd522e9a.png)
 ![Screenshot (18)](https://user-images.githubusercontent.com/107358756/218826941-620494d5-fb52-475f-9d97-4e89fcc5e1ec.png)



   
