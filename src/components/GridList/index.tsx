import * as React from "react";

import styles from "./GridList.module.css";

interface IGridListProps {
  children: React.ReactNode;
  itemMinWidth?: string;
}

export const GridList: React.SFC<IGridListProps> & {
  Item: typeof GridListItem;
} = ({ children, itemMinWidth }) => (
  <div
    className={styles.GridList}
    style={{
      "--gl-min-width": itemMinWidth || '20rem'
    }}
  >
    {children}
  </div>
);

export const GridListItem: React.SFC = ({ children }) => (
  <div className={styles.GridList_item}>{children}</div>
);

GridList.Item = GridListItem;
