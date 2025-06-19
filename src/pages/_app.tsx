import { type AppType } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import "@/styles/embla.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={cn(jakarta.className)}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
