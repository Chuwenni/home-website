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
      width: '100%',
      height: "50px",
      borderBottom: "2px solid",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "30px 50px"
    },
    subtitleMenu: {
      width: 100,
      height: 10,
      borderRadius: 20,
      background: "#e0e0e0",
    },
    profile: {
      background: "#e0e0e0",
      width: 50,
      height: 50,
      borderRadius: "50%"
    },
    titleDiv: {
      width: 300,
      height: "50%",
      display: "flex",
      gap: 20
    }
  };

export default styles;