This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Supabase Integration

This project includes integration with [Supabase](https://supabase.com) for authentication and database operations.

### Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Copy your Supabase URL and anon key from the project settings
3. Create a `.env.local` file in the root of the project with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Database Schema

For the Todo functionality to work, create a `todos` table in your Supabase project with the following SQL:

```sql
CREATE TABLE todos (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  task TEXT NOT NULL,
  is_complete BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Set up Row Level Security (optional for demo purposes)
ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all authenticated users to see all todos (for demo purposes)
CREATE POLICY "Allow all users to see todos"
  ON todos FOR SELECT USING (true);

-- Create policy to allow all authenticated users to insert todos (for demo purposes)
CREATE POLICY "Allow all users to insert todos"
  ON todos FOR INSERT WITH CHECK (true);

-- Create policy to allow all authenticated users to update todos (for demo purposes)
CREATE POLICY "Allow all users to update todos"
  ON todos FOR UPDATE USING (true);

-- Create policy to allow all authenticated users to delete todos (for demo purposes)
CREATE POLICY "Allow all users to delete todos"
  ON todos FOR DELETE USING (true);
```

For a production application, you would typically want to restrict access based on user_id:

```sql
-- Add a user_id column
ALTER TABLE todos ADD COLUMN user_id UUID REFERENCES auth.users;

-- Create policy for users to only see their own todos
CREATE POLICY "Users can only see their own todos"
  ON todos FOR SELECT USING (auth.uid() = user_id);

-- Create policy for users to insert their own todos
CREATE POLICY "Users can insert their own todos"
  ON todos FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create policy for users to update their own todos
CREATE POLICY "Users can update their own todos"
  ON todos FOR UPDATE USING (auth.uid() = user_id);

-- Create policy for users to delete their own todos
CREATE POLICY "Users can delete their own todos"
  ON todos FOR DELETE USING (auth.uid() = user_id);
```

## Code Formatting

This project uses Prettier for code formatting with the tailwind-prettier-plugin to ensure consistent formatting of Tailwind CSS classes.

### Configuration

The Prettier configuration is defined in `.prettierrc` with the following key settings:

- Single quotes for strings
- Semicolons at the end of statements
- 2 spaces for indentation
- 100 character line width
- Automatic sorting of Tailwind CSS classes

### Usage

Format all files:

```bash
npm run format
```

Check if files are formatted correctly:

```bash
npm run format:check
```

### VS Code Integration

For VS Code users, we recommend installing the Prettier extension and enabling "Format on Save" for the best development experience.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
