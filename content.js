// content.js

document.addEventListener('DOMContentLoaded', () => {
  // Анимация кнопок Material UI
  const buttons = document.querySelectorAll('button, .MuiButton-root');
  buttons.forEach(btn => {
    btn.style.transition = 'background-color 0.3s ease, transform 0.2s ease';

    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
    });
    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'scale(0.95)';
    });
    btn.addEventListener('mouseup', () => {
      btn.style.transform = 'scale(1.05)';
    });
  });

  // Плавный переход между страницами
  const content = document.querySelector('#root');
  if (content) {
    content.style.transition = 'opacity 0.5s ease';
    content.style.opacity = '1';

    document.body.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href && href.startsWith('/') && !e.defaultPrevented) {
        e.preventDefault();
        content.style.opacity = '0';
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });

    window.onload = () => {
      content.style.opacity = '1';
    };
  }

  // Анимация меню Material UI
  const menus = document.querySelectorAll('.MuiMenu-root');
  menus.forEach(menu => {
    menu.style.transition = 'opacity 0.3s ease';
    menu.style.opacity = '0';
    menu.addEventListener('mouseenter', () => {
      menu.style.opacity = '1';
    });
    menu.addEventListener('mouseleave', () => {
      menu.style.opacity = '0';
    });
  });
});
