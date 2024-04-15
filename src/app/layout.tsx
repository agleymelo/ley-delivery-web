import "~/styles/globals.css";

import { Roboto as FontSans } from "next/font/google";

import { Toaster } from "sonner";
import { Footer } from "~/components/Footer";
import { cn } from "~/lib/utils";
import { Header } from "../components/Header";
import { getProfile } from "./actions/get-profile";
import { ThemeProvider } from "~/providers/theme-provider";
import { CartProvider } from "~/providers/cart-provider";
import { SessionProvider } from "~/providers/session-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Ley Delivery",
  description: "Ley Delivery",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const getProfileData = await getProfile();

  // const signed = getProfileData?.signed;

  return (
    <html lang="en">
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <Toaster richColors />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          key="@ley-delivery:theme"
        >
          <SessionProvider>
            <div className="min-h-screen"> 
            {/* classname desktop grid min-h-screen grid-rows-app */}
              <CartProvider>
                <Header signed={false} />

                {children}

                <Footer />
              </CartProvider>
            </div>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
