import CSS from "csstype";

export const container: CSS.Properties = {
  margin: "15px 0",
  width: "100%",
  height: "10px",
  background:
    "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)",
  boxShadow: "0 0 1px rgba(0, 0, 0, .2)",
  position: "relative",
  borderRadius: "16px"
};

export const pointer: CSS.Properties = {
  position: "absolute",
  left: "var(--rpc-hue-pointer)"
};

export const slider: CSS.Properties = {
  width: "16px",
  borderRadius: "16px",
  height: "16px",
  background: `hsl(var(--rpc-hue), 100%, 50%)`,
  boxShadow: "0 0 1px rgba(0, 0, 0, .9)",
  border: "2px solid #ffffff",
  transform: "translate(-8px, -4px)",
  cursor: "pointer"
};
