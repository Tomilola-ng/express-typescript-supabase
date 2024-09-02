# ExpressJS TypeScript Supabase Starter Template

This is a robust ExpressJS starter template repository for getting started with API development with TypeScript support, auto-restart functionality, Mocha tests, Supabase integration, and utility functions.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Using as a Template](#using-as-a-template)
  - [Forking the Repository](#forking-the-repository)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Customizing the Template](#customizing-the-template)
- [Supabase Setup](#supabase-setup)
- [Contributing](#contributing)
- [License](#license)

## Features

- ExpressJS with TypeScript
- Auto-restart using Nodemon
- Testing with Mocha and Chai
- Supabase integration
- Basic User model
- Utility functions
- Environment variable support

## Getting Started

### Using as a Template

1. Click the "Use this template" button at the top of this repository.
2. Choose a name for your new repository and create it.
3. Clone your new repository to your local machine.

### Forking the Repository

1. Click the "Fork" button at the top right of this repository.
2. Clone your forked repository to your local machine.

Don't forget to give this repository a star if you find it helpful! ⭐

## Installation

After cloning the repository, install the dependencies:

```bash
npm install
```

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables:

```
PORT=3000
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

Replace `your_supabase_url` and `your_supabase_key` with your actual Supabase credentials.

## Running the Application

To start the development server with auto-restart:

```bash
npm run dev
```

To build the application:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Running Tests

To run the test suite:

```bash
npm test
```

## Customizing the Template

1. Update the `package.json` file with your project details.
2. Modify the `src/app.ts` file to add your routes and middleware.
3. Add new models in the `src/models` directory.
4. Create new utility functions in `src/utils/helpers.ts`.
5. Add new test cases in the `src/tests` directory.

## Supabase Setup

1. Sign up for a Supabase account at https://supabase.com
2. Create a new project
3. In your project dashboard, go to Settings > API to find your API URL and API Key
4. Add these credentials to your `.env` file as `SUPABASE_URL` and `SUPABASE_KEY`
5. Set up your database tables. For the User model, create a table with the following SQL:

```sql
CREATE TABLE public.users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Add an index on the email column
CREATE INDEX idx_users_email ON public.users (email);
```

6. Set up Row Level Security (RLS) policies for your users table:

```sql
-- Enable RLS on the users table
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts
CREATE POLICY "Allow public inserts on users" ON public.users
FOR INSERT TO public
WITH CHECK (true);

-- Create a policy to allow reads of own user data
CREATE POLICY "Allow individuals to read own user data" ON public.users
FOR SELECT USING (auth.uid() = id);

-- Create a policy to allow updates of own user data
CREATE POLICY "Allow individuals to update own user data" ON public.users
FOR UPDATE USING (auth.uid() = id);
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
