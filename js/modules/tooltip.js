export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // move a tooltip com base em seus estilos de acordo com a posicao do mouse
  onMouseMove(event) {
    this.tooltipbox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipbox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipbox.style.left = `${event.pageX + 20}px`;
    }
  }

  // remove a tooltip e os eventos MouseMove e MouseLeave
  onMouseLeave(event) {
    this.tooltipbox.remove();
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    event.currentTarget.removeEventListener('mouseleave', this.onMouseMove);
  }

  // cria a tooltip box e coloca no body
  criarTolltipBox(element) {
    const tooltipbox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipbox.classList.add('tooltip');
    tooltipbox.innerText = text;
    document.body.appendChild(tooltipbox);
    this.tooltipbox = tooltipbox;
  }

  onMouseOver(event) {
    // cria a tooltip box e coloca em uma propriedade
    this.criarTolltipBox(event.currentTarget);

    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((element) => {
      element.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
