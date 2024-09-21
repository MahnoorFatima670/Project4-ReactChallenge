const questions = [
    {
         "question": "What does HTML stand for?",
        "options": ["Hypertext Markup Language", "Hightext Machine Language", "Hyperlink and Text Markup Language", "None of the above"],
        "correctAnswer": "Hypertext Markup Language"
      },
      {
        "question": "Which HTML tag is used to define an internal style sheet?",
        "options": ["<style>", "<css>", "<script>", "<stylesheet>"],
        "correctAnswer": "<style>"
      },
      {
        "question": "Which property is used to change the background color in CSS?",
        "options": ["bgcolor", "background-color", "color", "background"],
        "correctAnswer": "background-color"
      },
      {
        "question": "What does CSS stand for?",
        "options": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Systems", "Colorful Style Sheets"],
        "correctAnswer": "Cascading Style Sheets"
      },
      {
        "question": "In JavaScript, which symbol is used for comments?",
        "options": ["//", "#", "/* */", "<!-- -->"],
        "correctAnswer": "//"
      },
      {
        "question": "Which JavaScript method is used to remove the last element from an array?",
        "options": ["pop()", "shift()", "splice()", "push()"],
        "correctAnswer": "pop()"
      },
      {
        "question": "What is the correct syntax to create a function in JavaScript?",
        "options": ["function = myFunction()", "function myFunction()", "create myFunction()", "myFunction() = function"],
        "correctAnswer": "function myFunction()"
      },
      {
        "question": "What does 'DOM' stand for?",
        "options": ["Document Object Model", "Data Object Model", "Document Output Model", "Dynamic Object Model"],
        "correctAnswer": "Document Object Model"
      },
      {
        "question": "Which attribute is used to specify the URL of an external script in HTML?",
        "options": ["src", "href", "link", "url"],
        "correctAnswer": "src"
      },
      {
        "question": "How do you select an element with the id 'demo' in CSS?",
        "options": [".demo", "#demo", "demo", "element#demo"],
        "correctAnswer": "#demo"
      },
      {
        "question": "What is React primarily used for?",
        "options": ["Building web applications", "Styling web pages", "Creating databases", "Server-side scripting"],
        "correctAnswer": "Building web applications"
      },
      {
        "question": "Which command is used to create a new React app?",
        "options": ["npm create react-app", "npx create-react-app", "react create app", "npm init react"],
        "correctAnswer": "npx create-react-app"
      },
      {
        "question": "What is the purpose of the 'key' prop in React?",
        "options": ["To identify components", "To set the state", "To bind events", "To style components"],
        "correctAnswer": "To identify components"
      },
      {
        "question": "What is the default port for a React application?",
        "options": ["3000", "8080", "5000", "4000"],
        "correctAnswer": "3000"
      },
      {
        "question": "Which hook is used to manage state in functional components in React?",
        "options": ["useState", "useEffect", "useContext", "useReducer"],
        "correctAnswer": "useState"
      },
      {
        "question": "How do you create a class component in React?",
        "options": ["class MyComponent extends React.Component {}", "function MyComponent() {}", "const MyComponent = () => {}", "MyComponent: React.Component"],
        "correctAnswer": "class MyComponent extends React.Component {}"
      },
      {
        "question": "Which method is used to update the state in React?",
        "options": ["setState()", "updateState()", "changeState()", "modifyState()"],
        "correctAnswer": "setState()"
      },
      {
        "question": "What is JSX?",
        "options": ["JavaScript XML", "JavaScript Extension", "Java Syntax Extension", "None of the above"],
        "correctAnswer": "JavaScript XML"
      },
      {
        "question": "What does 'npm' stand for?",
        "options": ["Node Package Manager", "Node Project Manager", "Node Program Manager", "None of the above"],
        "correctAnswer": "Node Package Manager"
      },
      {
        "question": "Which of the following is a valid way to define a style in React?",
        "options": ["const style = { color: 'red' };", "<style>color: red;</style>", "style.color = 'red';", "color: 'red' in style"],
        "correctAnswer": "const style = { color: 'red' };"
      },
    
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;

  function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElements = document.querySelectorAll(".option");
    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElements.forEach((option, index) => {
      option.textContent = questions[currentQuestionIndex].options[index];
    });
  }

  function handleOptionClick(event) {
   selectedOption=event.target.textContent;
    if (selectedOption === questions[currentQuestionIndex].correctAnswer&&currentQuestionIndex < questions.length - 1) {
      score++;  
    }

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      showResult();  
    }
  }
  function showResult() {
    const resultDiv = document.getElementById("result");

    resultDiv.style.display = "block";
    resultDiv.textContent = `Quiz Completed! Your score is ${score} out of ${questions.length}`;
  }
  document.addEventListener("DOMContentLoaded", showQuestion);
  document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", handleOptionClick);
  });