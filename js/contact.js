// コンタクト制御

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          form.style.display = 'none';
          document.getElementById('form-success').classList.add('visible');
          document.getElementById('form-success').scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          alert('送信に失敗しました。');
        }
      })
      .catch((error) => {
        alert('送信に失敗しました。');
        console.error(error);
      });
  });
});