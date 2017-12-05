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

let addAnother = () => {
  var clientId = "MyApp";
  var clientSecret = "MySecret";

  var authorizationBasic = $.base64.btoa(clientId + ':' + clientSecret);

  $.ajax({
      type: 'POST',
      url: '/users',
      data: { email: 'nick@dm.com', password: '12345', grant_type: 'password' },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=utf-8',
      xhrFields: {
         withCredentials: true
      },
      // crossDomain: true,
      headers: {
         'Authorization': 'Basic ' + authorizationBasic
      },
      //beforeSend: function (xhr) {
      //},
      success: function (result) {
         var token = result;
      },
      //complete: function (jqXHR, textStatus) {
      //},
      error: function (req, status, error) {
      console.log(error);
      }
  });
};
