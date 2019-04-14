import * as React from "react";
import { IndexPageTemplate } from "../../templates/index-page";

export const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <IndexPageTemplate {...data} contacts={{accounts: []}} />;
  } else {
    return <div>Loading...</div>;
  }
};
