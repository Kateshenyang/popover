export default class Tooltip {
    constructor(element, options) {
      this.element = element;
      this.title = options.title;
      this.content = options.content;
      this.tooltip = null;
    }
  
    toggle() {
      if (this.tooltip) {
        this.hide();
      } else {
        this.show();
      }
    }
  
    show() {
      this.tooltip = document.createElement('div');
      this.tooltip.className = 'tooltip';
      this.tooltip.innerHTML = `
        <div class="tooltip-header">${this.title}</div>
        <div class="tooltip-body">${this.content}</div>
      `;
      document.body.appendChild(this.tooltip);
  
      const rect = this.element.getBoundingClientRect();
      const tooltipRect = this.tooltip.getBoundingClientRect();
      this.tooltip.style.top = `${rect.top - tooltipRect.height}px`;
      this.tooltip.style.left = `${rect.left + (rect.width - tooltipRect.width) / 2}px`;
    }
  
    hide() {
      if (this.tooltip) {
        document.body.removeChild(this.tooltip);
        this.tooltip = null;
      }
    }
  }