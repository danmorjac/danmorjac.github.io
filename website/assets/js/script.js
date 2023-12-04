document.querySelectorAll('.languajes-tools').forEach(function (element) {
  // Ocultar todos los elementos con la clase hidden-cont al principio
  var targetId = element.nextElementSibling.id;
  var targetElement = document.getElementById(targetId);
  targetElement.style.display = 'none';

  element.addEventListener('click', function () {
    // Ocultar todos los elementos con la clase hidden-cont
    document.querySelectorAll('.hidden-cont').forEach(function (hiddenElement) {
      hiddenElement.style.display = 'none';
    });

    // Mostrar u ocultar el elemento actual
    targetElement.style.display = (targetElement.style.display === 'none' || targetElement.style.display === '') ? 'block' : 'none';
  });
});