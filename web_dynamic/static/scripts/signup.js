// static/script/signup.js

$(document).ready(function() {
  // Sign Up Button Click Event
  $(".form-signup .button").click(function() {
    // Retrieve form data
    var firstName = $(".form-signup #user-first-name").val();
    var lastName = $(".form-signup #user-last-name").val();
    var password = $(".form-signup #pass-password").val();
    var repeatPassword = $(".form-signup #pass-repassword").val();
    var email = $(".form-signup #pass-email").val();

    // Check if passwords match
    if (password !== repeatPassword) {
      return;
    }

    // Create user object
    var userData = {
      "first_name": firstName,
      "last_name": lastName,
      "password": password,
      "email": email,
    };

    // Make call to post user information
    $.ajax({
      type: "POST",
      url: "/users",
      contentType: "application/json",
      data: JSON.stringify(userData),
      xhrFields: {
        withCredentials: true  // Include credentials
    },
      success: function(response) {
        if (response.success) {
          alert("User created successfully. Kindly login to continue.");
          window.location.href = "register";
        } else {
          window.location.href = "register";
        }
      },
      error: function(xhr, status, error) {
        var errorMessage = "Error creating user";
      
        if (xhr.responseJSON && xhr.responseJSON.message) {
          errorMessage += ": " + xhr.responseJSON.message;
        } else {
          errorMessage += ": " + status + " - " + error;
        }
      
        alert(errorMessage);
      }
    });
  });

  // Sign In Button Click Event
  $(".form-login .button").click(function() {
    // Retrieve form data
    var email = $(".form-login #user_email").val();
    var password = $(".form-login #user_pass").val();

    // Create login object
    var loginData = {
      "email": email,
      "password": password
    };

    // Make call for authentication (You need to implement this endpoint in your API)
    $.ajax({
      type: "POST",
      url: "/sessions", // Adjust the URL based on your API endpoint for authentication
      contentType: "application/json",
      data: JSON.stringify(loginData),
      xhrFields: {
        withCredentials: true  // Include credentials
    },
      success: function(response) {
        if (response.success) {
          alert("You have been logged in.");
          window.location.href = "account";
        } else {
          alert("You have been logged in.");
          window.location.href = "account";
        }
      },
      error: function(xhr, status, error) {
        var errorMessage = "Error loging in";
      
        if (xhr.responseJSON && xhr.responseJSON.message) {
          errorMessage += ": " + xhr.responseJSON.message;
        } else {
          errorMessage += ": " + status + " - " + error;
        }
      
        alert(errorMessage);
      }
    });
  });

  // Admin Sign In Button Click Event
  $(".admin-form-login .button").click(function() {
    // Retrieve form data
    var email = $(".admin-form-login #admin_user_email").val();
    var password = $(".admin-form-login #admin_user_pass").val();

    // Create login object
    var loginData = {
      "email": email,
      "password": password
    };

    // Make call for authentication (You need to implement this endpoint in your API)
    $.ajax({
      type: "POST",
      url: "/admin/sessions", // Adjust the URL based on your API endpoint for authentication
      contentType: "application/json",
      data: JSON.stringify(loginData),
      xhrFields: {
        withCredentials: true  // Include credentials
    },
      success: function(response) {
        if (response.success) {
          alert("You have been logged in.");
          window.location.href = "/admin/account/dashboard";
        } else {
          alert("You have been logged in.");
          window.location.href = "/admin/account/dashboard";
        }
      },
      error: function(xhr, status, error) {
        var errorMessage = "Error loging in";
      
        if (xhr.responseJSON && xhr.responseJSON.message) {
          errorMessage += ": " + xhr.responseJSON.message;
        } else {
          errorMessage += ": " + status + " - " + error;
        }
      
        alert(errorMessage + " Please check your email and password");
      }
    });
  });
});

  