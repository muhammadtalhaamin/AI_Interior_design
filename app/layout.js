import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import {Outfit} from 'next/font/google';
import Provider from "./provider";


export const metadata = {
  title: "AI Interior design",
  description: "Generated interior design by AI",
};

const outfit=Outfit({subsets:['latin']})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
      className={outfit.className}>
        <Provider>
        {children}
        </Provider>
       
      </body>
    </html>
    </ClerkProvider>
  );
}
