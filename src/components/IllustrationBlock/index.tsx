import classnames from "classnames";
import * as React from "react";

import styles from "./IllustrationBlock.module.css";
import { Container } from "../Container";
import { illustrations } from '../../illustrations';

interface IIllustrationBlockProps {
  illustration: string;
  title: string;
  children: React.ReactNode;
  side?: "left" | "right";
}

export const IllustrationBlock: React.SFC<IIllustrationBlockProps> = ({
  illustration,
  title,
  children,
  side
}) => {
  const Illustration = illustrations[illustration]
  return (
  <Container>
    <div
      className={classnames(styles.IllustrationBlock, {
        [styles.right]: side === "right"
      })}
    >
      <h2 className={styles.IllustrationBlock_title}>{title}</h2>
      <div className={styles.IllustrationBlock_text}>{children}</div>
      <div className={styles.IllustrationBlock_illustration}>
        <Illustration />
      </div>
    </div>
  </Container>
)};
