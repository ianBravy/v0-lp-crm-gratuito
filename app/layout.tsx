import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AGENTE SDR - PROCESSO DE VENDAS 100% Automatizado com IA",
  description:
    "Dobre a conversão do seu comercial com um processo automatizado utilizando IA e tenha todos os dados para escalar com previsibilidade e segurança.",
  keywords: "CRM, automação, vendas, IA, inteligência artificial, pipeline, dashboard, comercial",
  authors: [{ name: "Bravy School" }],
  openGraph: {
    title: "AGENTE SDR - PROCESSO DE VENDAS 100% Automatizado com IA",
    description:
      "Dobre a conversão do seu comercial com um processo automatizado utilizando IA e tenha todos os dados para escalar com previsibilidade e segurança.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGENTE SDR - PROCESSO DE VENDAS 100% Automatizado com IA",
    description:
      "Dobre a conversão do seu comercial com um processo automatizado utilizando IA e tenha todos os dados para escalar com previsibilidade e segurança.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NLKWGB7L');
            `,
          }}
        />
        {/* Facebook Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '416037493599303');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=416037493599303&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Facebook Pixel Code */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NLKWGB7L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  )
}
