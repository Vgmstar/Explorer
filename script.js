function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "mayk usando oculos preto e jaqueta, com fundo iluminado"
    )
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
  }

  // se tiver sem light mode, manter a imagem normal
  // substituir a imagem
}
