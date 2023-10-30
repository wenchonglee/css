/**
 * !
 * ! Remember to clone this to ve.css.md
 * !
 */
import { createVar, style } from "@vanilla-extract/css";

export const fontSize = createVar();
const root = style({
  fontSize,
});

export default {
  root,
  fontSize,
};
