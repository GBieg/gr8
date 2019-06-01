function parallax(e){
  this.querySelectorAll('.layer').forEach(layer => {
    let speed = layer.getAttribute('data-speed');

    layer.style.transform = `translateX(${event.clientX*speed/1000}px)`
  })
  //console.log(e.clientX);
}

document.addEventListener('mousemove', parallax);
