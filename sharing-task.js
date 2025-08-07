/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.

function capitalize(word) {
    let goodword = isValidName(word);
    capitalized = goodword.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return capitilized;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
function formatString(name,role) {
    return (`Name: ${name}, Role: ${role}`);
}
function generateBadge(name,role) {
    let capitalRole= capitalize(role);
    return formatString(name,capitalRole);
}

console.log(generateBadge("Gabrielle","STudent"));

// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.

/* my code:

let people = 120;
let perPerson = 9.99;

function totalCost(attendees,costPer) {
    let subTotal = attendees * costPer;
    if (attendees >= 100){
    let discount = subTotal / 10;
    total = subTotal - discount;
    return total;
    }
    else {return subTotal};
}

console.log(totalCost(people,perPerson));

*/



//Team Code:
function calculateBaseCost(attendees, costPerAttendee) {
    return (attendees * costPerAttendee);
}
function isEligibleForDiscout(attendees) {
    return (attendees > 100);
}
function applyDiscount(baseCost) {
    return (baseCost * 0.9);
}

function calculateEventCost(attendees, costPerAttendee) {
    let baseCost = calculateBaseCost(attendees,costPerAttendee);
    if (isEligibleForDiscout(attendees)){
        return applyDiscount(baseCost);
    }
    return baseCost;
}

console.log(calculateEventCost(120,50));


// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.

//my solution
/*
function checkString(emailaddress) {
    if (emailaddress.includes("@") && emailaddress.includes(".")) {
        return true;
    }
    return false;
}

console.log(checkString("studentemailyahoo.com"));
*/

//class answer
function isValidEmail(email) {
   return email.includes("@") && email.includes(".");
}

console.log(isValidEmail("studentemail@yahoo.com"));




// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?
