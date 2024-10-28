# Vue.js "Name Picker" Application

This is a Vue.js application for dynamically adding and displaying names in a list, and randomly selecting one as the "loser." The app includes features such as validation, error handling, and smooth UI interactions. It is designed to be straightforward yet engaging, with an intuitive interface and animations.

---
# Modern Web Application - User Selection App

This project is a modern web application designed for selecting and displaying user inputs with a dynamic and visually appealing user interface.

## Author
**Abdulrhman Al Shalal**

---

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

---

## Demo

This application allows users to:
- Add names to a list
- Remove names from the list
- Randomly select a "loser" from the list
- Reset the list and start over

---

## Features

- **Dynamic Name List**: Add, display, and remove names in real-time.
- **Random Selection**: Randomly select one name as the "loser" from the list.
- **Error Handling**: Validation for empty and duplicate entries.
- **Responsive Design**: Fully responsive and optimized for different screen sizes.
- **Smooth UI Animations**: Animations for a polished user experience.

---

## Installation

To set up and run the application locally on your PC, follow these steps:

### Prerequisites

Ensure you have **Node.js** and **npm** (Node Package Manager) installed. You can download them [here](https://nodejs.org/).

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/vue-name-picker-app.git
   ```

2. **Navigate into the Project Directory**

   ```bash
   cd vue-name-picker-app
   ```

3. **Install Dependencies**

   Run the following command to install all required dependencies:

   ```bash
   npm install
   ```

4. **Run the Application**

   Use the following command to start a local development server:

   ```bash
   npm run serve
   ```

   Once the server starts, open your browser and go to `http://localhost:8080` to see the application in action.

---

## Usage

1. **Add Names**: Enter a name in the input field and click **Add Name**. The name will appear in the list below.
2. **View or Remove Names**: Names will appear in the list with an option to remove each.
3. **Pick a Loser**: Click **Check the Loser** to randomly select a name from the list.
4. **Restart or Choose Again**: Use **Start Over** to reset the app or **Choose Again** to select a new name.

---

## Code Structure

- **Main Application Logic**: The main logic is built using Vue 3 with the Composition API.
  - **Reactive State**: Uses `reactive` for state management.
  - **Computed Properties**: Manages validation and readiness checks with `computed`.
  - **Methods**:
    - `addNameToList`: Adds names with validation.
    - `removeName`: Removes names by index.
    - `showResults`: Toggles to display the randomly chosen "loser".
    - `startOver` and `chooseAgain`: Reset or reselect a random name.

---

## Technologies

- **Vue 3**: JavaScript framework used for building the application.
- **CSS3**: Custom animations and transitions for UI interactions.
- **Node.js & npm**: JavaScript runtime and package manager for development.

---

## License

This project is licensed under the [MIT License](LICENSE) © [Abdulrhman Al Shalal](https://www.abdulrhman-alshalal.com).


---

