import * as React from 'react'

import styles from './Section.module.css'

export const Section: React.SFC<{ children: React.ReactNode }> = ({children}) => (
  <div className={styles.Section}>{children}</div>
)