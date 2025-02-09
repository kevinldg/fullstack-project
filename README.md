# Development Setup

1. `git clone https://github.com/kevinldg/fullstack-project.git` Clone the repository
2. `spring.data.mongodb.uri=` Set the MongoDB URI in /backend/src/main/resources/application.properties
3. `mvn clean compile package` Run the Maven lifecycles in /backend
4. `npm install` Install the NPM dependencies in /frontend

## For IntelliJ IDEA

1. Add the frontend and backend folder as modules in the project structure
2. Create the run/debug configurations for frontend and backend
3. Hint: Create a Compound configuration to start both at the same time