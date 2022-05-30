fetch("https://randomuser.me/api/")
  .then((data) => data.json())
  .then((motivationData) => {
    const motivationText = motivationData.results[0].name.first;
    const motivationElement = document.getElementById("motivationElement");
    motivationElement.innerHTML = motivationText;
  });
