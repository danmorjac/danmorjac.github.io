// Selecciona todos los elementos con la clase 'languajes-tools'
let elements = document.querySelectorAll('.languajes-tools');

// Itera sobre cada elemento seleccionado
elements.forEach(function (element, index) {
  // Verifica si el elemento no es el primero
  if (index !== 0) {
    // Oculta el elemento correspondiente
    let targetId = element.nextElementSibling.id;
    let targetElement = document.getElementById(targetId);
    targetElement.style.display = 'none';

  } else {
    element.classList.add('active');
  }

  // Agrega un evento 'click' a cada elemento
  element.addEventListener('click', function () {
    // Oculta todos los elementos con la clase 'hidden-cont'
    document.querySelectorAll('.hidden-cont').forEach(function (hiddenElement) {
      hiddenElement.style.display = 'none';
    });

    // Muestra u oculta el elemento actual al que se hizo clic
    let targetId = element.nextElementSibling.id;
    let targetElement = document.getElementById(targetId);
    targetElement.style.display = (targetElement.style.display === 'none' || targetElement.style.display === '') ? 'block' : 'none';

    // Remueve la clase 'active' de todos los elementos
    elements.forEach(function (el) {
      el.classList.remove('active');
    });

    // Agrega la clase 'active' al elemento que se hizo clic
    element.classList.add('active');
  });
});