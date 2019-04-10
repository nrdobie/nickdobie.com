import * as React from "react";
import { IndexPageTemplate } from "../../templates/index-page";

export const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <IndexPageTemplate {...data} />;
  } else {
    return <div>Loading...</div>;
  }
};
