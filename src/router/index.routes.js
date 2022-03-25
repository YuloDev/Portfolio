let content = document.getElementById("root");

const router = (route) => {
  content.innerHTML = ``;

  switch (route) {
    case "#/":
      break;
    case "#/portfolio":
      break;
    case "#/acercaDe":
      break;
    default:
      console.log("404");
      break;
  }
};

export default router;
