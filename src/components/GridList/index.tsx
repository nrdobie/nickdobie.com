import * as React from "react";

import styles from "./GridList.module.css";

interface IGridListProps {
  children: React.ReactNode;
  columns?: number;
}

export const GridList: React.SFC<IGridListProps> & {
  Item: typeof GridListItem;
} = ({ children, columns }) => (
  <div
    className={styles.GridList}
    style={{
      "--gl-columns": columns || 3
    }}
  >
    {children}
  </div>
);

export const GridListItem: React.SFC = ({ children }) => (
  <div className={styles.GridList_item}>{children}</div>
);

GridList.Item = GridListItem;
