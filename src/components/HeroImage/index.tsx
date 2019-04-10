import { faCamera } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react'

import styles from './HeroImage.module.css'
import { Container } from '../Container';

type SharpFluidImage = string | { childImageSharp: { fluid: { src: string } }}

type Credit = { link: string, author: string }

export const HeroImage: React.SFC<{ image: SharpFluidImage, title: string, subtitle?: string, credit?: Credit }>  = ({ image, title, subtitle, credit }) => (
  <div className={styles.HeroImage}>
    <div className={styles.HeroImage_background} style={{ 
      backgroundImage: `url(${typeof image !== 'string' ? image.childImageSharp.fluid.src : image}` 
    }} />
    <Container>
      <h1 className={styles.HeroImage_title}>{title}</h1>
      {!!subtitle && (
        <React.Fragment>
          <br/>
          <h2 className={styles.HeroImage_subtitle}>{subtitle}</h2>
        </React.Fragment>
      )}
    </Container>
    {!!credit &&
      <a className={styles.HeroImage_credit} href={credit.link} target="_blank">
      <FontAwesomeIcon icon={faCamera} /> {credit.author}
      </a>}
  </div>
)