document.addEventListener('DOMContentLoaded', function () {


  const tabNav = document.querySelectorAll('.tabs__btn');
  const tabPanes = document.querySelectorAll('.tab-content');

  for (let i = 0; i < tabNav.length; i++) {
    tabNav[i].addEventListener('click', function (e) {
      e.preventDefault();
      let activTab = e.target.getAttribute('data-path');
      for (let j = 0; j < tabNav.length; j++) {
        let contentAttr = tabPanes[j].getAttribute('data-target');
        if (activTab === contentAttr) {
          tabNav[j].classList.add('tabs__btn-active');
          tabPanes[j].classList.add('tab-content-active')
        } else {
          tabNav[j].classList.remove('tabs__btn-active');
          tabPanes[j].classList.remove('tab-content-active')
        }
      }
    })
  }




  // document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {

  //   tabsBtn.addEventListener('click', function (event) {
  //     const path = event.currentTarget.dataset.path;

  //     document.querySelectorAll('.tab-content').forEach(function (tabContent) {
  //       tabContent.classList.remove('tab-content-active');
  //     });

  //     document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
  //   });
  // });




});
