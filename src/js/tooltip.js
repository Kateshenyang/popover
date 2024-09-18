export default class Tooltip {
    constructor(element, options) {
      this.element = element;
      this.options = options;
      this.tooltipElement = null;
  
      this.init();
    }
  
    init() {
      this.tooltipElement = document.createElement('div');
      this.tooltipElement.className = 'tooltip';
      this.tooltipElement.innerHTML = `
        <div class="tooltip-header">${this.options.title}</div>
        <div class="tooltip-body">${this.options.content}</div>
      `;
      document.body.appendChild(this.tooltipElement);
      this.tooltipElement.style.display = 'none';
  
      this.positionTooltip();
    }
  
    positionTooltip() {
      const rect = this.element.getBoundingClientRect();
      // Позиционируем tooltip выше кнопки на 5 пикселей и по центру горизонтально
      const tooltipWidth = this.tooltipElement.offsetWidth;
      const elementWidth = rect.width;
      const leftOffset = rect.left + window.scrollX + (elementWidth / 2) - (tooltipWidth / 2);
  
      this.tooltipElement.style.top = `${rect.top + window.scrollY - this.tooltipElement.offsetHeight - 5}px`;
      this.tooltipElement.style.left = `${leftOffset}px`;
    }
  
    toggle() {
      if (this.tooltipElement.style.display === 'none') {
        this.tooltipElement.style.display = 'block';
        this.positionTooltip(); // Перепозиционируем при показе
      } else {
        this.tooltipElement.style.display = 'none';
      }
    }
  }