import bg from './bg.svg'
export default {
    root: {
      height: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      /* background by SVGBackgrounds.com */
      backgroundColor: "#394BAD",
      backgroundImage: `url(${bg})`,
      overflow: "scroll"
    },
    container: {
      width: "50%",
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      flexWrap: "wrap"
    },
    nav: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      "& a": {
        color: "white"
      }
    },
    palettes: {
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "5%"
    }
  }