import React from "react";

const Link = React.forwardRef((props, ref) => {
  return (<>
    <a style={styles.link} href="https://console.firebase.google.com/project/gymtom-2067b/authentication/users" target="_blank">Open user panel</a> <i>You may need to log in to the Google console first</i>
  </>)
}
);

const styles = {
  link: { textDecoration: "none", textTransform: "uppercase", fontWeight: "bold", padding: 12, backgroundColor: "#89ef89", borderColor: "#aaaaaa", borderRadius: 8, borderWidth: 1 }
}

export default Link;