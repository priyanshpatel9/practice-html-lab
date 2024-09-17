document.querySelectorAll('nav > ul > li').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('ul').style.display = 'block';
  });
  item.addEventListener('mouseleave', () => {
    item.querySelector('ul').style.display = 'none';
  });
});