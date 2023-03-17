import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { Bebas_Neue } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-bebasNueue',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${bebasNeue.variable} font-sans`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
