import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ReduxProvider from "@/providers/ReduxProvider";
import AuthProvider from "@/providers/AuthProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "XeroCodee",
  description: "XeroCodee's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ReduxProvider>
          <AuthProvider>
            <Toaster position="bottom-right" />
            {children}
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
