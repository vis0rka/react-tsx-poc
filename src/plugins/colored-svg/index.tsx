const b64Start = "data:image/svg+xml;base64,";

const toBase64 = (content: string) => {
  return b64Start + window.btoa(content);
};

const replaceSvgColor = (content: string, color: string) => {
  return content.replace(/(<path|<circle|<rect)/g, `$1 fill="${color}"`).replace(/#\d{6}/g, color);
};

export const coloredSvg = (icon: string, color: string) => {
  const svgXmlContent = require(`!raw-loader!assets/icons/${icon}.svg`).default;
  return toBase64(replaceSvgColor(svgXmlContent, color));
};
