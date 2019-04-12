import changeCase from "change-case";

const illustrationsRequire = require.context(
  "!svg-react-loader!./",
  true,
  /\.svg$/
);

interface IIllustrationProps {
  width?: string
  height?: string
}

type IllustrationsSet = {
  [key: string]: React.SFC<IIllustrationProps>;
};

export const illustrations = illustrationsRequire
  .keys()
  .reduce<IllustrationsSet>((illustrationsObject, illustrationKey) => {
    const name = illustrationKey.replace(/^\.\/(.*)\.svg$/, "$1");

    return {
      ...illustrationsObject,
      [changeCase.pascal(name)]: illustrationsRequire(illustrationKey)
    };
  }, {});
