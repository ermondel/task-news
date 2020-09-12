function createAnalytics() {
  let counter = 0;
  let destroyed = false;

  const listener = () => counter++;

  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      destroyed = true;
    },

    getClicks() {
      if (destroyed) {
        return 'analytics disabled';
      } else {
        return counter;
      }
    },
  };
}

window.analytics = createAnalytics();
