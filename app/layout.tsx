import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Restaurant Data",
  description: "Katie C - JET Assesment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html >
  );
}
