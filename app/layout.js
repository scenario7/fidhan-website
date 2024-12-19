import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Q Stone Jewels",
  description: "Jewellery, Redefined.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/vistara-website.appspot.com/o/logo-white-bg.png?alt=media&token=76ea81be-e23b-42f2-b9f5-bf9b198427f4" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
