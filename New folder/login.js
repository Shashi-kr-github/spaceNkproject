

const current_user = [];
  
if (localStorage.getItem("current_user") == null) {
  localStorage.setItem("current_user", JSON.stringify(current_user));
}

function check(e) {
  
  e.preventDefault();

  const form = document.getElementById("login-form");

  const email = form.email.value;
  const password = form.password.value;

  const all_users = JSON.parse(localStorage.getItem("all_users_data"));

  const current_user_credentials = {
    email: email,
    password: password
  }

  let login_flag = 0;

  for (let i = 0; i < all_users.length; i++) {
    if (all_users[i].email == email && all_users[i].password == password) {
      login_flag = 1;
      current_user.push(current_user_credentials);
      localStorage.setItem("current_user", JSON.stringify(current_user));
      window.location.href = "new.html";
    } else if (all_users[i].email == email) {
      login_flag = 1;
      alert("Invalid Credentials");
    }
  }
  if (login_flag == 0) {
    alert("User does not exist, please signup first");
    window.location.href = "login.html";
  }
}



const all_user= [
    {
        email: "VRATHOD591@GMAIL.COM",
        password:"123",
    }
]

localStorage.setItem("all_users_data", JSON.stringify(all_user));
