import './css/style.css';
import Tooltip from './js/tooltip';

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn-danger');
  const tooltip = new Tooltip(btn, {
    title: 'Popover title',
    content: "And here's some amazing content. It's very engaging. Right?",
  });

  btn.addEventListener('click', () => {
    tooltip.toggle();
  });
});