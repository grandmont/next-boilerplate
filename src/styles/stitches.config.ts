import { createStitches } from "@stitches/react";

import colors from "./colors";
import fontSizes from "./fontSizes";
import utils from "./utils";
import media from "./media";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors,
    fontSizes,
  },
  utils,
  media,
});
