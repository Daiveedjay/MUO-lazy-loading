"use strict";
// Select all images with the "lazy" loading attribute
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src; // Load the image source
      observer.unobserve(lazyImage); // Stop observing this image
    }
  });
});

lazyImages.forEach((lazyImage) => {
  observer.observe(lazyImage); // Start observing each lazy image
});
