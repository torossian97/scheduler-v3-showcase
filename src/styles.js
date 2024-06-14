/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const rootStyle = css({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: "#fff",
});

export const appBarStyle = css({
  zIndex: 1201, // MUI default AppBar zIndex
  background: "white",
  color: "black",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0)",
});

export const mainStyle = css({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  marginTop: "64px", // Adjust for AppBar height
  overflow: "hidden",
  position: "relative",
});

export const scrollContainerStyle = css({
  display: "flex",
  flexDirection: "row",
  height: "100%",
  width: "100%",
  scrollSnapType: "x mandatory",
  scrollBehavior: "smooth",
  overflowX: "hidden",

  "& > *": {
    scrollSnapAlign: "start",
    minWidth: "100vw",
    height: "100%",
  },
});

export const navArrowsStyle = css({
  position: "fixed",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1300,
  padding: "0 20px",
  pointerEvents: "none",
});

export const navButtonStyle = css({
  backgroundColor: "#f0f0f0",
  pointerEvents: "auto",
});

export const dotContainerStyle = css({
  position: "absolute",
  bottom: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const dotStyle = css({
  height: "8px",
  width: "8px",
  margin: "8px",
  backgroundColor: "#f0f0f0",
  borderRadius: "50%",
  cursor: "pointer",
});

export const activeDotStyle = css({
  height: "12px",
  width: "12px",
  backgroundColor: "#616161",
});

export const sectionTitleStyle = css({
  textAlign: "left",
  padding: "16px",
  width: "80%",
  fontFamily: "'Poppins', sans-serif",
});

export const sectionContentStyle = css({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  alignItems: "center",
});

export const fabStyle = css({
  position: "fixed",
  bottom: "16px",
  right: "16px",
});

export const modalStyle = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "800px",
  height: "80%",
  maxHeight: "600px",
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "16px",
  overflowY: "auto",
});

export const copyBlockContainerStyle = css({
  justifyContent: "center",
});
