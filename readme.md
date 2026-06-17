# 🐱 Random Cat Facts Generator

A simple and fun web application that fetches random cat facts from a public API and displays them on top of a cat-themed background image.

The project demonstrates how to use **JavaScript Fetch API**, **Async/Await**, **DOM Manipulation**, **Event Handling**, and **Dynamic HTML Element Creation** to build an interactive web application.

---
## Project Deployed Here
https://randomcatfact101.netlify.app/

## 📸 Project Preview

### Home Screen

* Displays a full-screen cat image.
* Shows a **START** button.
* Clicking the button launches the Cat Facts viewer.

### Facts Screen

* Displays a cat-themed background image.
* Shows a randomly generated cat fact.
* Includes a **Next Fact** button to fetch and display another random fact without reloading the page.

---

## 🚀 Features

✅ Full-screen responsive cat background

✅ Random cat facts fetched from an external API

✅ Dynamic page generation using JavaScript

✅ Asynchronous API requests using `async/await`

✅ Event-driven user interactions

✅ No page reload required

✅ Beginner-friendly project structure

---

## 🛠 Technologies Used

### HTML5

Used to create the structure of the webpage.

Concepts used:

* Semantic HTML structure
* Images (`<img>`)
* Buttons (`<button>`)
* Containers (`<div>`)

---

### CSS3

Used to style the application.

Concepts used:

* Flex-like centering using absolute positioning
* Full-screen layouts with `100vh`
* `object-fit: cover`
* Hover effects
* Border radius
* Typography styling
* Responsive width and height handling

---

### JavaScript (ES6+)

Used to add functionality and interactivity.

Concepts used:

#### DOM Manipulation

Selecting and modifying HTML elements dynamically:

```javascript
document.querySelector()
document.createElement()
appendChild()
removeChild()
```

---

#### Event Handling

Listening for user actions:

```javascript
addEventListener()
```

Used for:

* START button click
* Next Fact button click

---

#### Asynchronous Programming

Fetching data from the API without freezing the page.

```javascript
async
await
```

Example:

```javascript
let response = await fetch(url);
let data = await response.json();
```

---

#### Fetch API

Used to communicate with the Cat Facts API.

```javascript
fetch("https://catfact.ninja/fact")
```

The API returns data in JSON format.

Example response:

```json
{
  "fact": "Cats sleep for around 70% of their lives.",
  "length": 42
}
```

---

#### Dynamic Element Creation

Instead of writing all HTML manually, the project creates elements using JavaScript:

```javascript
document.createElement()
```

Elements created dynamically:

* Container div
* Background image
* Fact text
* Next Fact button

---

#### Error Handling

Implemented using:

```javascript
try {
   ...
}
catch(error) {
   ...
}
```

This prevents the application from crashing if the API request fails.

---

## 🌐 API Used

### Cat Facts API

Endpoint:

```text
https://catfact.ninja/fact
```

Purpose:

* Returns a random cat fact in JSON format.
* No authentication required.

Example Request:

```javascript
fetch("https://catfact.ninja/fact")
```

---

## 📂 Project Structure

```text
project-folder/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

Since this is a small project, all HTML, CSS, and JavaScript are contained within a single file.

---

## ⚙️ How It Works

### Step 1

User opens the webpage.

The home screen displays:

* Cat image
* START button

---

### Step 2

User clicks:

```text
START
```

The welcome screen is removed from the DOM.

```javascript
body.removeChild(welcomeDiv);
```

---

### Step 3

The application calls:

```javascript
getFacts();
```

which creates a new page dynamically.

---

### Step 4

`factSearch()` sends a request to the Cat Facts API.

```javascript
fetch("https://catfact.ninja/fact")
```

---

### Step 5

The received fact is displayed on the page.

---

### Step 6

Clicking **Next Fact** triggers another API request and updates the text instantly.

```javascript
fact.innerText = await factSearch();
```

---

## 📚 Concepts Practiced

This project is excellent for beginners learning:

* HTML Basics
* CSS Positioning
* Responsive Images
* JavaScript DOM Manipulation
* Event Listeners
* Async/Await
* Fetch API
* JSON Parsing
* Error Handling
* Dynamic Content Rendering

---

## 🎯 Learning Outcomes

After building this project, you will understand:

* How APIs work
* How browsers fetch external data
* How to handle asynchronous operations
* How to update webpage content dynamically
* How JavaScript interacts with HTML and CSS

---

## 🔮 Possible Future Improvements

Some ideas for extending the project:

### Add Loading Spinner

Show a loading animation while fetching data.

### Add Cat Images API

Fetch a random cat image along with the fact.

Possible API:

```text
https://api.thecatapi.com/
```

### Copy Fact Button

Allow users to copy facts to clipboard.

### Dark Mode

Add theme switching.

### Save Favorite Facts

Store favorite facts using:

```javascript
localStorage
```

### Fact Counter

Display:

```text
Fact #1
Fact #2
Fact #3
```

---

## 👨‍💻 Author

Created as a beginner JavaScript project to practice:

* API Integration
* DOM Manipulation
* Async JavaScript
* Dynamic User Interfaces

---

## ⭐ If You Like This Project

Give the repository a star and feel free to fork it to build your own version with more cat-related features!
