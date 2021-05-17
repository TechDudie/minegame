document.addEventListener("keydown",  e => {
  if (e.keyCode === 8 || e.keyCode === 13)  {
    e.preventDefault();
  }
});
function print(text) {
  for (var i = 0; i < text.length; i++) {
    document.getElementById("terminal").value += text[i];
    await new Promise(r => setTimeout(r, 300));
  }
}
print("Welcome to Minegame, a open source online HTML Minecraft-themed game.");
// TEST
