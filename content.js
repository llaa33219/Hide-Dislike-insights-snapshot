function removeTeaser() {
  const teaserElements = document.querySelectorAll('.ryd-premium-teaser');
  teaserElements.forEach(element => element.remove());
}

setInterval(removeTeaser, 300);
