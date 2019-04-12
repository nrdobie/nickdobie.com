import { faCamera } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react'

import styles from './HeroImage.module.css'
import { Container } from '../Container';

type SharpFluidImage = string | { childImageSharp: { fluid: { src: string, tracedSVG?: string } }}

type Credit = { link: string, author: string }

function createBackgroundImage(image: SharpFluidImage) {
  return [
    `linear-gradient(rgba(var(--palette-black-rgb), 0.75), rgba(var(--palette-black-rgb), 0.75))`,
    `url(${typeof image !== 'string' ? image.childImageSharp.fluid.src : image})`
  ].join(', ')
}

export const HeroImage: React.SFC<{ image: SharpFluidImage, title: string, subtitle?: string, credit?: Credit }>  = ({ image, title, subtitle, credit }) => (
  <div className={styles.HeroImage} style={{
    backgroundImage: createBackgroundImage(image)
  }}>
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
