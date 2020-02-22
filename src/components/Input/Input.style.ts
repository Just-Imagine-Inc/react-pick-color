import { RgbColor } from "../../types";

import CSS from "csstype";

export const value = (color: RgbColor): CSS.Properties => ({
  position: "relative",
  background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
  width: "16px",
  height: "16px",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 0 2px rgba(0, 0, 0, .2)"
});

export const checkboard: CSS.Properties = {
  position: "absolute",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
  backgroundImage:
    'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAC9JREFUOBFjZGBgEAFifOANPkkmfJLEyI0awMAw8GHASERU4U0nA++FURdQISEBAFeUATP+HuV8AAAAAElFTkSuQmCC")',
  backgroundPosition: "left center",
  zIndex: -1
};
