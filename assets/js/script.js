
document.querySelectorAll('.languajes-tools').forEach(function (element) {
  element.addEventListener('click', function () {
    var targetId = this.nextElementSibling.id;
    var targetElement = document.getElementById(targetId);
    
    // Ocultar todos los elementos con la clase hidden-cont
    document.querySelectorAll('.hidden-cont').forEach(function (hiddenElement) {
      hiddenElement.style.display = 'none';
    });

    // Mostrar u ocultar el elemento actual
    targetElement.style.display = (targetElement.style.display === 'none' || targetElement.style.display === '') ? 'block' : 'none';
  });
});