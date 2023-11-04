# NestJS Lambda Functions with Serverless Framework

This project is a collection of serverless microservices built with NestJS, designed to run on AWS Lambda. It includes three services: `bite-bot`, `doc-brew`, and `help-hopper`, each responsible for interacting with OpenAI's API and providing distinct functionalities.

## Services

- **bite-bot**: A service tailored for quick, bite-sized interactions with OpenAI's API.
- **doc-brew**: This service focuses on generating and processing documents using OpenAI's API.
- **help-hopper**: Aimed at providing help and guidance through OpenAI's API.

Each service is encapsulated in its own Lambda function, with a shared common module to handle requests to OpenAI's API.

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js (version 14.x or later)
- AWS CLI (configured with appropriate permissions)
- Serverless Framework
- An OpenAI API key

### Installing

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2. Install dependencies
    ```bash
    cd your-repo-name
    npm install
    ```

3. Set up environment variables:

    Create a .env file in the root of your project and add your OpenAI API key:
    ```bash
    OPENAI_API_KEY=your_openai_api_key_here
    ```

## Run the app
Run Serverless Offline for local development:
```bash
npm run sls
```

## Deployment
Deploy your project to AWS with the following command:
```bash
serverless deploy
```

