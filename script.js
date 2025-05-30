
const lines = [
  ":: SIGNAL INTERCEPTED ::\n",
  "INCIDENT CLASS: UNVERIFIED\n",
  "FILE NAME: SITD-000\n",
  "\n",
  "An unknown presence has been detected in [REDACTED] sectors.\n",
  "Subjects describe sudden urges to scream, kiss, and dance.\n",
  "Proceed with caution.\n",
  "\n",
];

const terminal = document.getElementById('terminal');

let index = 0;

function typeLine() {
  if (index < lines.length) {
    terminal.innerHTML += lines[index];
    index++;
    setTimeout(typeLine, 100);
  } else {
    // Add blinking ENTER link
    const enter = document.createElement('a');
    enter.id = 'enter-link';
    enter.href = 'https://safeinthedark.com/home';
    enter.textContent = '> [ ENTER ]';
    document.body.appendChild(enter);
    enter.style.display = 'block';
    // Add keyboard support for Enter key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    window.location.href = enter.href;
  }
});

  }
}

typeLine();
