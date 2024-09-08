const leng = navigator.language;
if (leng.startsWith("es")) {
  fetch("/json/content.json")
    .then((response) => response.json())
    .then((data) => {
      const textloader = data.es["text-loader"];
      const note = data.es["note"];
      const pageTitle = data.es["page-title"];
      var textloader1 = document.getElementById("text-loader");
      var note1 = document.getElementById("note");
      if (textloader1) textloader1.innerHTML = textloader;
      if (note1) note1.innerHTML = note;
      if (document.title) document.title = pageTitle;
    })
    .catch((error) => {
      console.error("Error al cargar el archivo JSON:", error);
    });
} else {
  fetch("/json/content.json")
    .then((response) => response.json())
    .then((data) => {
      const textloader = data.en["text-loader"];
      const note = data.en["note"];
      const pageTitle = data.en["page-title"];
      var textloader1 = document.getElementById("text-loader");
      var note1 = document.getElementById("note");
      if (textloader1) textloader1.innerHTML = textloader;
      if (note1) note1.innerHTML = note;
      if (document.title) document.title = pageTitle;
    })
    .catch((error) => {
      console.error("Fail to load JSON file:", error);
    });
}
