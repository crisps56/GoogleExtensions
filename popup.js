function choose() {
  const messages = [
    "yeah you should", 
    "no you shouldn't", 
    "it'd be a bad idea", 
    "that's probably a good idea"
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

window.onload = function() {
  document.getElementById('message').textContent = choose();
}
