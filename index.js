const { easea, easeOutBounce } = require('./dist/index');

easea({
  easing: easeOutBounce,
  tick: (t, u) => {
    console.clear();
    console.log('■'.repeat(t * 100), '\n'.repeat(10));
  },
  duration: 1500,
});
