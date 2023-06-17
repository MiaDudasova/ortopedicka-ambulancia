import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/layout/Header";
import Head from "next/head";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ortopedická ambulancia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Ortopedická ambulancia</title>
        <link rel="shortcut icon" type="image/png" href="./logos.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@2.0.7/css/boxicons.min.css"
        />
      </Head>
      <body className={inter.className}>
        <React.StrictMode>
          <Header />
          {children}
        </React.StrictMode>
      </body>
    </html>
  );
}
function useClient() {
  throw new Error("Function not implemented.");
}

