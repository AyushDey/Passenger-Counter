# Simple Counter Web Application
[![Netlify Status](https://api.netlify.com/api/v1/badges/9114850a-26eb-4163-a271-cea514056ac2/deploy-status)](https://app.netlify.com/sites/people-counterbyayush/deploys)

This project is a lightweight web application that provides a user-friendly interface for counting and saving numerical values. It allows users to increment, decrement, and save count values, making it ideal for various tracking purposes.

The application is built using vanilla JavaScript and HTML, offering a straightforward and efficient solution for basic counting needs. It features a clean interface where users can easily manipulate the count, save multiple entries, and view a running total of all saved values.

Key features of this counter application include:
- Increment and decrement functionality with a minimum count of zero
- Ability to save multiple count entries
- Display of previous entries
- Automatic calculation and display of the total sum of all entries
- Responsive design for use across different devices

## Repository Structure

The repository has a simple structure with three main files:

- `index.html`: The main HTML file that structures the web page
- `index.css`: The CSS file for styling the application
- `index.js`: The JavaScript file containing the application logic

## Usage Instructions

### Installation

To use this application, follow these steps:

1. Clone the repository to your local machine:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd <project-directory>
   ```
3. Open the `index.html` file in a web browser.

No additional installation or setup is required as this is a client-side application.

### Getting Started

Once you've opened the `index.html` file in your web browser, you can start using the counter application immediately:

1. Click the "+" button to increment the count.
2. Click the "-" button to decrement the count (the count will not go below zero).
3. Click the "SAVE" button to save the current count and reset the counter to zero.
4. View your saved entries and the total sum at the bottom of the page.

### Troubleshooting

If you encounter any issues while using the application, try the following steps:

1. Ensure all files (`index.html`, `index.css`, and `index.js`) are in the same directory.
2. Check your browser's console for any JavaScript errors:
   - Right-click on the page and select "Inspect" or "Inspect Element"
   - Navigate to the "Console" tab to view any error messages
3. If the count isn't updating, verify that JavaScript is enabled in your browser settings.
4. Clear your browser's cache and reload the page if changes are not reflecting.

For any persistent issues, please check the browser's compatibility with ES6 JavaScript features.

## Data Flow

The data flow in this application is straightforward:

1. User interaction (clicking buttons) triggers JavaScript functions.
2. These functions update the `count` variable in memory.
3. The DOM is updated to reflect the new count value.
4. When saving, the current count is added to the `entries` array.
5. The saved entries and total are then rendered to the DOM.

```
[User Input] -> [JavaScript Functions] -> [Update Variables] -> [Update DOM]
                        ^                                            |
                        |                                            |
                        +--------------------------------------------+
```

This cycle repeats with each user interaction, ensuring that the display always reflects the current state of the application.