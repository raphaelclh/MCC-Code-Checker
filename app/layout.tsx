import type { Metadata } from "next";
import CreditCardIcon from "../images/credit-card-svgrepo-com.svg"; // Update the path accordingly
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "MCC Code Checker",
  description: "MCC Code Checker",
  icons: CreditCardIcon.src,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
