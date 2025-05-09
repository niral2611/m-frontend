// app/layout.tsx
// import { Geist, Geist_Mono } from "next/font/google";
import { montserrat, playfair } from './fonts';
import "./globals.css";
import 'leaflet/dist/leaflet.css';
import ClientLayout from './ClientLayout';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "MATSYA",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfair.variable} antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
