import * as React from "React";
import { illustrations } from "../../illustrations";

import styles from './IconBlock.module.css'

interface IIconBlockProps {
  illustration: string;
  title: string;
  text: string;
}

export const IconBlock: React.SFC<IIconBlockProps> = ({
  illustration,
  title,
  text
}) => {
  const Illustration = illustrations[illustration];

  return (
    <div className={styles.IconBlock}>
      <div className={styles.IconBlock_illustration}>
        <Illustration width="100%" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
