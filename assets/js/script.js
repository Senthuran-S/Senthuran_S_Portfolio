// Theme toggle (v1)
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('toggleTheme');
  // preserve preference via localStorage
  if(localStorage.getItem('theme') === 'light'){
    document.body.classList.add('lightmode');
    if(btn) btn.textContent = '🌙 Dark';
  } else {
    if(btn) btn.textContent = '☀️ Light';
  }

  if(btn){
    btn.addEventListener('click', function(){
      document.body.classList.toggle('lightmode');
      if(document.body.classList.contains('lightmode')){
        localStorage.setItem('theme','light');
        btn.textContent = '🌙 Dark';
      } else {
        localStorage.setItem('theme','dark');
        btn.textContent = '☀️ Light';
      }
    });
  }
});
