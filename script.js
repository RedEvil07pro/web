document.getElementById('clickMeBtn').addEventListener('click', () => {
  const messageEl = document.getElementById('message');
  const now = new Date();
  messageEl.textContent = `Hai cliccato il bottone alle ${now.toLocaleTimeString()}`;
});
