import { Inter } from "next/font/google";
import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ghun Manga",
  description: "Website to Read you favourite Manga",
};

export default function RootLayout({ children }) {
  console.log(process.env.MONGODB_URI);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
