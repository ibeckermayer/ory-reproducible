export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Ory Bug Reproduction</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

