import classnames from "classnames";
import * as React from "react";

import styles from "./Section.module.css";

interface ISectionProps {
  children: React.ReactNode;
  theme?: "primary" | "secondary" | "dark";
}

export const Section: React.SFC<ISectionProps> = ({ children, theme }) => (
  <section
    className={classnames(styles.Section, {
      "use-theme-primary": theme === "primary",
      "use-theme-secondary": theme === "secondary",
      "use-theme-dark": theme === "dark"
    })}
  >
    {children}
  </section>
);
