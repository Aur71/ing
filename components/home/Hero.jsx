import styles from '../../styles/Hero.module.scss'
import { useGlobalContext } from '../../context/context'

import Hero1 from './Hero1'
import Hero2 from './Hero2'

const Hero = () => {
  const { search } = useGlobalContext()

  if (search !== '') {
    return <Hero2 />
  }

  return <Hero1 />
}

export default Hero
