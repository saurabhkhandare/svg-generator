function render() {
  const lines = encodeURIComponent(document.getElementById("lines").value);
  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value.replace(/^#/, "");
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const src = `https://readme-typing-svg.demolab.com?lines=${lines}&size=${size}&color=${color}&width=${width}&height=${height}`;
  document.getElementById(
    "output"
  ).textContent = `<img src="${src}" alt="typing svg">`;
  document.getElementById(
    "preview"
  ).innerHTML = `<img src="${src}" alt="typing svg">`;
  resetCopyBtn();
}

function copyCode() {
  const code = document.getElementById("output").textContent;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.getElementById("copyBtn");
    btn.textContent = "Copied!";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = "Copy";
      btn.classList.remove("copied");
    }, 1400);
  });
}

function resetCopyBtn() {
  const btn = document.getElementById("copyBtn");
  btn.textContent = "Copy";
  btn.classList.remove("copied");
}

render();
