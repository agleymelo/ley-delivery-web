import "~/styles/globals.css";

import { Roboto as FontSans } from "next/font/google";

import { Toaster } from "sonner";
import { Footer } from "~/components/Footer";
import { cn } from "~/lib/utils";
import { GlobalStateProvider } from "~/provider/global-state";
import { HeaderHome } from "./(home)/client/header";
import { getProfile } from "./actions/get-profile";

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

  const signed = getProfileData?.signed;

  return (
    <html lang="en">
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <Toaster richColors />
        <div className="grid min-h-screen grid-rows-app">
          <GlobalStateProvider>
            <HeaderHome signed={signed} />

            {children}

            <Footer />
          </GlobalStateProvider>
        </div>
      </body>
    </html>
  );
}
