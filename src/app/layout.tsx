import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/layout/Header";
import Head from "next/head";
import React from "react";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ortopedická ambulancia",
  icons: {
    icon: "/logos.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <title>Ortopedická ambulancia</title>
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@2.0.7/css/boxicons.min.css"
        />
      </Head>
      <body className={inter.className}>
        <React.StrictMode>
          {children}
        </React.StrictMode>
      </body>
    </html>
  );
}
function useClient() {
}

