let greetingMessage = "Good Morning!";

function greetPeople(greetingMessage) {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage("Good Evening");

greetPeople(greetingMessage);