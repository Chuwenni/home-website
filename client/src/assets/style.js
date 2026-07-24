const styles = {
    container: {
      display: "grid",
      width: "95%",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "40px",
      padding: "20px",
    },

    card: {
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,.1)",
    },

    image: {
      width: "100%",
      height: "220px",
      background: "#e0e0e0",
    },

    content: {
      padding: "15px",
    },

    title: {
      width: "80%",
      height: "18px",
      background: "#e0e0e0",
      borderRadius: "6px",
      marginBottom: "12px",
    },

    subtitle: {
      width: "60%",
      height: "14px",
      background: "#e0e0e0",
      borderRadius: "6px",
      marginBottom: "18px",
    },

    row: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "18px",
    },

    price: {
      width: "70px",
      height: "18px",
      background: "#e0e0e0",
      borderRadius: "6px",
    },

    rating: {
      width: "50px",
      height: "18px",
      background: "#e0e0e0",
      borderRadius: "6px",
    },

    button: {
      width: "100%",
      height: "40px",
      background: "#e0e0e0",
      borderRadius: "8px",
    },
    menubar:{
      position: "Fixed",
      width: '100%',
      height: "50px",
      borderBottom: "2px solid",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "30px 35px",
      zIndex: "2",
      backgroundColor: "white"
    },
    subtitleMenu: {
      width: 100,
      height: 10,
      borderRadius: 20,
      background: "#e0e0e0",
    },
    titleDiv: {
      width: 300,
      height: "50%",
      display: "flex",
      alignItems: 'center',
      gap: 20
    },
    menubar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: 70,
    background: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    boxSizing: "border-box",
    boxShadow: "0 2px 10px rgba(0,0,0,.08)",
    zIndex: 1000,
},

logo: {
    margin: 0,
    fontSize: 28,
    fontWeight: "700",
    color: "#2563eb",
    cursor: "pointer"
},

links: {
    display: "flex",
    gap: 35,
    alignItems: "center"
},

link: {
    textDecoration: "none",
    color: "#555",
    fontSize: 16,
    fontWeight: 500,
    transition: ".25s"
},

activeLink: {
    textDecoration: "none",
    color: "#2563eb",
    fontSize: 16,
    fontWeight: "700",
    borderBottom: "3px solid #2563eb",
    paddingBottom: 4
},

loginButton: {
    textDecoration: "none",
    background: "#2563eb",
    color: "white",
    padding: "10px 22px",
    borderRadius: 8,
    fontWeight: 600,
    transition: ".25s"
},
  };

export default styles;