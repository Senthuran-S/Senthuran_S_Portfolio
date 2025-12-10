
const btn = document.getElementById('toggleTheme');
if(btn){
  btn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    btn.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
  });
}
