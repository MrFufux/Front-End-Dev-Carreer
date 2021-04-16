const button = document.querySelector("button");

function Nombres() {
  let fName, LName;
  fName = prompt("Enter your first name");
  LName = prompt("Enter your last name");
  fullName = fName + LName;
  alert(`Your full name is ${fullName}`);
}
