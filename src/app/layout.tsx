// src/app/layout.tsx

import "../styles/globals.css";

export const metadata = {
  title: "Deep Learning Course",
  description: "Welcome to the Deep Learning Course website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
