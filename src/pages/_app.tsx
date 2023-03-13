import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
   </main>
  )
}
