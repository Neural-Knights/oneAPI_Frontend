# Neural Knights

NKnights is a web application that enhances the learning experience of students and also helps teachers to manage things.

![NKnights Screenshot](/public/logolight.svg)

## Demo

You can access the live demo of the application at [https://nknights.vercel.app/](https://nknights.vercel.app/).

## Tech Stack

The application is built with the following technologies:

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **MongoDB**: A cross-platform document-oriented database program.

## Prerequisites

Before running the application locally, ensure you have the following dependencies installed on your machine:

- Node.js (version 12 or above)
- npm (version 6 or above)

## Local Development

To run the application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/nknights.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nknights
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Setup Env

   ```bash
   cp .env.example .env
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000` to see the application running.

## Build and Deployment

To build the production-ready version of the application, run:

```bash
npm run build
```

This will generate an optimized build in the `out` directory.

To deploy the application to a hosting provider, you can use the `next export` command to generate a static version of the website:

```bash
npm run export
```

The static files will be generated in the `out` directory, which you can then upload to your hosting provider.
