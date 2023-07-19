import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import { SliderData } from '../components/SliderData'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <Head>
        <title>Castleman Retreats</title>
        <meta name='description' content='N/A'/>
      </Head>
      <Hero heading='Castleman Retreats' message='Nestled in Cromer, our Castleman Chalet offers a serene coastal retreat.' showButton/>
      <Slider slides={SliderData}/>
    </div>
  )
}
