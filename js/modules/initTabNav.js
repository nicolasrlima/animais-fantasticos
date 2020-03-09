export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="tabmenu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo', tabContent[index].dataset.anime);
    });
    tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
  }

  if (tabMenu && tabContent) {
    tabContent[0].classList.add('ativo');

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
