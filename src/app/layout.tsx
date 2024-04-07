import "~/styles/globals.css";

import { Roboto as FontSans } from "next/font/google";

import { cn } from "~/lib/utils";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Ley Delivery",
  description: "Ley Delivery",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <div className="grid-rows-app grid min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
