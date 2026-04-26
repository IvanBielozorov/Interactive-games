const containers = document.querySelectorAll('.container');
containers.forEach(container => {
  if (
    container !== containers[containers.length - 1] &&
    container !== containers[containers.length - 2]
  ) {
    const line = document.createElement('div');
    line.classList.add('line-section');
    container.after(line);
  }
});
