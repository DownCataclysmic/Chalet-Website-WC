import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Castleman Retreats</title>
        <meta name='description' content='N/A'/>
      </Head>
      <Hero heading='Castleman Retreats' message='Nestled in Cromer, Castleman Chalets offer a serene coastal retreat.'/>
    </div>
  )
}
