/*jshint esversion: 6 */

let newUser = {
  email: 'gatsby@dm.com',
  password: '12345'
};

let addUser = () => {
  $.post('/users', newUser)
  .done(() => {
    console.log('User created');
  });
};
