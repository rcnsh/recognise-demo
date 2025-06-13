import { type AppType } from "next/app";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={cn(geist.className)}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
