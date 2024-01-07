  function openModal(imageSrc) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
  }
  
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
  
  var images = document.getElementsByClassName('image_eq');
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function(event) {
      openModal(event.target.src);
    });
  }
  