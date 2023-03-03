# Users from gorest
This is a simple web application built with React and TypeScript that allows you to retrieve and filter user data from the gorest.co.in API.

### Requirements
Node.js version 10 or higher
npm package manager
### Getting Started
Clone the repository and navigate to the project directory:
```bash
git clone https://github.com/Bilkash/users_from_gorest.git
cd users_from_gorest
```
Install the project dependencies:
```
npm install
```
Create a ```.env``` file with next lines:

```
REACT_APP_BASE_URL=https://gorest.co.in/public/v2
REACT_APP_ACCESS_TOKEN=your_api_key
```

Start the development server:
```
npm start
```
Open the application in your browser:
```
http://localhost:3000
```
### Usage
The application allows you to retrieve and filter user data from the gorest.co.in API using the following options:

  * Gender: Filter users by gender
  * Page: Set the page number to retrieve
  
  
The application retrieves user data from the gorest.co.in API using the axios library, and displays the results in a table. You can use the filter option to narrow down the results, or use the pagination controls to navigate between pages.

### Contributing
If you find any bugs or issues with the project, please feel free to open an issue or submit a pull request.
