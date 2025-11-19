export default function HomePage() {
  return (
    <div>
      <h1>Ory Bug Reproduction</h1>
      <p>This is a minimal Next.js app to reproduce the Ory staging bug.</p>
      <p>
        <a href="/auth/login">Go to Login</a>
      </p>
      <p>
        <a href="/dashboard">Go to Dashboard (requires auth)</a>
      </p>
    </div>
  );
}

