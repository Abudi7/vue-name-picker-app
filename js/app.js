// const { createApp, ref, onMounted } = Vue;
// createApp({
//   setup() {
//     const count = ref(0);
//     const date = ref(new Date().toLocaleString()); // Initial date and time
//     const greetings = 'Hello World!!';

//     // Function to increment count and update date
//     function increment() {
//       setInterval(() => {
//         count.value++;
//         date.value = new Date().toLocaleString(); // Update date and time
//       }, 1000);
//     }

//     onMounted(() => {
//       increment();
//     });

//     function message() {
//       return 'Hello Abd from Function';
//     }

//     return {
//       greetings,
//       message,
//       count,
//       date
//     };
//   }
// }).mount('#app');


// ====================================================//

// Import necessary functions from the Vue library
const { createApp, reactive, computed } = Vue;

// Define the default state for the application
const DEFAULT_STATE = {
  state: true,            // Indicates whether the main state of the app is active
  inputNam: '',           // Stores user input for names
  error: '',              // Stores error messages, if any
  names: [],              // Array to store the list of added names
  showError: false,       // Boolean to toggle error message display
  result: ''              // Placeholder for future result data or outputs
};

// Create and configure the Vue application
createApp({
  setup() {
    // Make the DEFAULT_STATE reactive so Vue tracks changes
    const data = reactive(DEFAULT_STATE);

    // Computed property to check if there are more than one name in the list
    const isReady = computed(() => data.names.length > 1);

    // Method to add a name to the list with validation
    const addNameToList = () => {
      const userName = data.inputNam.trim(); // Trim whitespace from user input

      // Check if the input is empty and show an error if true
      if (!userName) {
        data.error = 'Name cannot be empty';  // Set error message for empty input
        data.showError = true;                // Display error message
        return;                               // Exit the function
      }

      // Check if the name already exists in the names array to avoid duplicates
      if (data.names.includes(userName)) {
        data.error = 'This name is already in the list'; // Set error message for duplicate
        data.showError = true;                           // Display error message
        return;                                          // Exit the function
      }

      // If validations pass, add the name to the names array
      data.names.push(userName);   // Add name to list
      data.inputNam = '';          // Clear the input field after adding
      data.showError = false;      // Hide any existing error message
    };

    // Method to remove a name from the list by index
    const removeName = (index) => {
      data.names.splice(index, 1);  // Remove the name at the specified index
    };

    // Method to show the Results by toggling the main state
    const showResults = () => {
      data.state = false;           // Hide the input section
      data.result = data.names[Math.floor(Math.random() * data.names.length)]; // Randomly pick a "loser" from names
    };
    // Method to start over and reset the application state
    const startOver = () => {
      data.names = [];         // Clear the names list
      data.inputNam = '';      // Clear input
      data.state = true;       // Switch back to the main input state
      data.result = '';        // Clear the result
    };

    // Method to choose another "looser" without resetting the entire state
    const chooseAgain = () => {
      const randomIndex = Math.floor(Math.random() * data.names.length);
      data.result = `The looser is: ${data.names[randomIndex]}`; // Pick a random looser
    };

    // Return the reactive data and methods to be used in the template
    return {
      data,
      addNameToList,
      removeName,
      showResults,
      isReady, startOver,chooseAgain
    };
  }
}).mount('#app'); // Mount the Vue app to the HTML element with ID 'app'
