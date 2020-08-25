import React from "react";

export const gradient: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  borderTopLeftRadius: "var(--rpc-border-radius)",
  borderTopRightRadius: "var(--rpc-border-radius)"
};

export const color: React.CSSProperties = {
  width: "100%",
  height: "200px",
  position: "relative",
  background: `hsl(var(--rpc-hue),100%, 50%)`,
  borderTopLeftRadius: "var(--rpc-border-radius)",
  borderTopRightRadius: "var(--rpc-border-radius)",
  borderBottom: "1px solid var(--rpc-border-color)"
};

export const pointer: React.CSSProperties = {
  position: "absolute",
  top: "var(--rpc-saturation-pointer-top)",
  left: "var(--rpc-saturation-pointer-left)",
  cursor: "default"
};

export const circle: React.CSSProperties = {
  width: "12px",
  borderRadius: "12px",
  height: "12px",
  background: "var(--rpc-hex)",
  boxShadow: "0 0 2px rgba(0, 0, 0, .9)",
  border: "2px solid var(--rpc-background)",
  cursor: "hand"
};
