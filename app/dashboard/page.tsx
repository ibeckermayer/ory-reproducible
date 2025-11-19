import ory from "@/lib/ory";
import { headers } from "next/headers";

export default async function DashboardPage() {
  let session = null;
  let error = null;

  try {
    const cookieHeader = headers().get("cookie") || "";
    session = await ory.toSession({ cookie: cookieHeader });
  } catch (e) {
    error = e instanceof Error ? e.message : "Unknown error";
  }

  if (error || !session?.identity) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Dashboard - Not Logged In</h1>
        <p>Error: {error || "No session found"}</p>
        <p>
          <a href="/auth/login">Go to Login</a>
        </p>
      </div>
    );
  }

  const identity = session.identity;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dashboard - You're Logged In!</h1>
      <h2>Session Information:</h2>
      <div>
        <p>
          <strong>Identity ID:</strong> {identity.id}
        </p>
        <p>
          <strong>Schema ID:</strong> {identity.schema_id}
        </p>
        <p>
          <strong>State:</strong> {identity.state}
        </p>
        {identity.traits?.email && (
          <p>
            <strong>Email:</strong> {identity.traits.email as string}
          </p>
        )}
        {identity.traits?.name && (
          <p>
            <strong>Name:</strong> {JSON.stringify(identity.traits.name)}
          </p>
        )}
      </div>
      <div style={{ marginTop: "2rem" }}>
        <h3>Full Identity Object:</h3>
        <pre
          style={{ background: "#f5f5f5", padding: "1rem", overflow: "auto" }}
        >
          {JSON.stringify(identity, null, 2)}
        </pre>
      </div>
      <p style={{ marginTop: "2rem" }}>
        <a href="/">Go to Home</a>
      </p>
    </div>
  );
}
