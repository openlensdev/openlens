// src/pages/Home.jsx
import HeroSlider from '../components/HeroSlider'
import Services from './Services'

export default function Home({ dark }) {
  return (
    <>
      <HeroSlider dark={dark} />
      <Services />
    </>
  )
}
