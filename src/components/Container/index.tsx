import * as React from 'react'

import styles from './Container.module.css'

export const Container: React.SFC<{ children: React.ReactNode }> = ({children}) => (
  <div className={styles.Container}>{children}</div>
)