// src/app/layout.tsx
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" className={robotoMono.className}>
      <body>{children}</body>
    </html>
  );
}
