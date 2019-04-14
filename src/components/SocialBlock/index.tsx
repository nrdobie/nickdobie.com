import classnames from 'classnames'
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './SocialBlock.module.css'
import { getIcon, SocialType, getDisplay, getLabel, getUrl } from "../../services/social";

interface ISocialBlockProps {
  type: SocialType
  account: string
}

export const SocialBlock: React.SFC<ISocialBlockProps> = ({ type, account }) => (
  <a href={getUrl(type, account)} target="_blank" className={classnames('no-style', styles.SocialBlock)}>
    <div className={styles.SocialBlock_icon}>
      <FontAwesomeIcon fixedWidth icon={getIcon(type)} />
    </div>
    <div className={styles.SocialBlock_account}>
      <p>{getDisplay(type, account)}</p>
    </div>
    <div className={styles.SocialBlock_type}>
      <p>{getLabel(type)}</p>
    </div>
  </a>
);
