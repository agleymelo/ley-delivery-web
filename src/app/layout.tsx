import "~/styles/globals.css";

import { Roboto as FontSans } from "next/font/google";

import { cn } from "~/lib/utils";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Toaster } from "sonner";
import { getProfile } from "./actions/get-profile";
import { getCategories } from "./actions/get-categories";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getProfileData = await getProfile();
  const categories = await getCategories()

  return (
    <html lang="en">
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <Toaster richColors />
        <div className="grid min-h-screen grid-rows-app">
          <Header
            user={getProfileData?.user}
            isSigned={getProfileData?.signed}
            categories={categories}
          />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
