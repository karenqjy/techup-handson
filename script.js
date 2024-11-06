var age = 20;
age = 65;
console.log(age);

var username = "karen";
var password = "techup";

var isMale = true;
var isLoggedIn = false;

var blog_posts = ["hello, how are you?", "i am well", "thank you!"]

console.log(username);
console.log(password);
console.log(isMale);
console.log(isLoggedIn);
console.log(blog_posts);

if (isMale == true) {
    console.log("I am a boy!");   
} else {
    console.log("I am a girl!");
}

while(age < 70){
    console.log("My age is " + age);
    age = age +1;
}

function sayHello() {
        alert("Hello everyone");
    }

function showAge() {
    var user_input = document.getElementById("user-input").value;
    document.getElementById("header-age").textContent = user_input;
}    