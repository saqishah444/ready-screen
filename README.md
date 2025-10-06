# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/67abc3fe-f9cb-47c2-819a-52c1ce16cba7

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/67abc3fe-f9cb-47c2-819a-52c1ce16cba7) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/67abc3fe-f9cb-47c2-819a-52c1ce16cba7) and click on Share -> Publish.

## Optional: Netlify Functions + Neon (Postgres) backend

This project includes example Netlify Functions in `netlify/functions/` that use `@netlify/neon` (Neon/Postgres).

Quick setup:

1. Install function dependencies:

```powershell
npm install @netlify/neon bcryptjs
```

2. Add your database connection string to Netlify's `NETLIFY_DATABASE_URL` environment variable (in the Netlify project settings). Locally you can set it in your environment when running Netlify dev.

3. Table schemas (example SQL):

```sql
-- users table
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	email TEXT UNIQUE NOT NULL,
	password_hash TEXT NOT NULL,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- posts table (example)
CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	body TEXT,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

4. Example functions added:

- `netlify/functions/get-post.js` — GET post by id (query param `id`).
- `netlify/functions/auth-signup.js` — POST with JSON { name, email, password } to create a user.
- `netlify/functions/auth-signin.js` — POST with JSON { email, password } to authenticate and receive a simple token.

Notes:
- These functions are examples/demos. For production, use secure session cookies, HTTPS-only tokens, proper error handling, rate limiting, and input validation.
- The `@netlify/neon` package will read the connection string from `process.env.NETLIFY_DATABASE_URL` automatically.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
