export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const revealedClass = 'revealed';
  const hiddenClass = 'hidden';

  function activeAccordion() {
    this.classList.toggle(revealedClass);
    this.classList.toggle(hiddenClass);
    this.nextElementSibling.classList.toggle(revealedClass);
  }

  if (accordionList.length) {
    accordionList.forEach((item) => {
      item.classList.add(hiddenClass);
    });
    accordionList[0].classList.remove(hiddenClass);
    accordionList[0].classList.add(revealedClass);
    accordionList[0].nextElementSibling.classList.add(revealedClass);

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
