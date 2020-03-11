export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.revealedClass = 'revealed';
    this.hiddenClass = 'hidden';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.revealedClass);
    item.classList.toggle(this.hiddenClass);
    item.nextElementSibling.classList.toggle(this.revealedClass);
    item.nextElementSibling.classList.toggle(this.hiddenClass);
  }

  // adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // iniciar funcao
  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
