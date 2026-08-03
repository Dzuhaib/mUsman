import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "الذهب/الدولار ماستر🔰 – Gold USD Master | Premium Gold Signals",
  description:
    "Follow الذهب/الدولار ماستر (Gold USD Master) for accurate daily gold trading signals, professional market analysis and real-time XAUUSD updates on Telegram. انضم لقناة الذهب/الدولار ماستر للحصول على إشارات ذهبية دقيقة وتحليل سوق احترافي.",
  openGraph: {
    title: "الذهب/الدولار ماستر🔰 – Gold USD Master | Premium Gold Signals",
    description:
      "Accurate XAUUSD signals. Daily gold market analysis. إشارات ذهبية دقيقة وتحليل يومي لسوق الذهب.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1661442715630637');
            fbq('init', '1331161572496594');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1661442715630637&ev=PageView&noscript=1"
            alt=""
          />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1331161572496594&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body style={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {children}
      </body>
    </html>
  );
}
