# Ory Bug Reproduction - Minimal Next.js App

This is a minimal Next.js application to reproduce the Ory bug where `NEXT_PUBLIC_ORY_SDK_URL` is ignored in Vercel staging environments.

## Bug Description

See issue: https://github.com/ory/elements/issues/572

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory with your Ory project URL:

```env
NEXT_PUBLIC_ORY_SDK_URL=https://your-project.projects.oryapis.com
```

Replace `your-project.projects.oryapis.com` with your actual Ory project URL.

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app/page.tsx` - Home page with links
- `/app/(auth)/auth/login/page.tsx` - Login page using Ory Elements
- `/app/dashboard/page.tsx` - Protected dashboard showing session data
- `/middleware.ts` - Authentication middleware
- `/lib/ory.ts` - Ory client configuration
- `/ory.config.ts` - Ory UI configuration

## Testing Locally

1. Navigate to http://localhost:3000
2. Click "Go to Login"
3. Log in with your Ory credentials
4. You should be redirected to the dashboard showing your session info
