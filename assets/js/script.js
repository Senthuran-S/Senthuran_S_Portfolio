
const btn = document.getElementById('toggleTheme');
if(btn){
  btn.addEventListener('click', ()=>{
    document.body.classList.toggle('lightmode');
    if(document.body.classList.contains('lightmode')){
      document.documentElement.style.setProperty('--bg','#f7f7fb');
      document.documentElement.style.setProperty('--card','#fff');
      document.documentElement.style.setProperty('--muted','#334e68');
      document.documentElement.style.setProperty('--accent','#0b84ff');
      document.documentElement.style.setProperty('--accent2','#003366');
      document.documentElement.style.setProperty('--text','#071018');
      btn.textContent='🌙 Dark';
    } else {
      document.documentElement.style.setProperty('--bg','#071018');
      document.documentElement.style.setProperty('--card','#081226');
      document.documentElement.style.setProperty('--muted','#9fb0c6');
      document.documentElement.style.setProperty('--accent','#0bb5ff');
      document.documentElement.style.setProperty('--accent2','#ffc857');
      document.documentElement.style.setProperty('--text','#e6f2ff');
      btn.textContent='☀️ Light';
    }
  });
}
