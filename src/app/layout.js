import { DM_Sans, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Highcontent - Ready to post social media content for professionals",
  description:
    "Stop spending weekends in Canva. Get a full month of ready-to-post content — Posts, Stories and realistic AI photo and video. New drops monthly, from €99.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="overflow-x-hidden font-sans antialiased">
        <Script id="outseta-options" strategy="beforeInteractive">
          {`var o_options = { domain: 'highcontent.outseta.com', monitorDom: true, translationLang: 'en' };`}
        </Script>
        <Script
          id="outseta-script"
          src="https://cdn.outseta.com/outseta.min.js"
          strategy="beforeInteractive"
          data-options="o_options"
        />
        {children}
      </body>
    </html>
  );
}
