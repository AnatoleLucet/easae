<p align="center">
  <img src="https://raw.githubusercontent.com/AnatoleLucet/easae/main/docs/assets/code-preview.webp" />
</p>

<h1 align="center">Easae</h1>

<p align="center">A small utility for easy easing.</p>

---

## Features

- Browser AND NodeJs support.
- Built in easing functions.
- Custom easing function.
- Easy to use.
- Custom duration, delay, and framerate.

## Install

```
npm i easae
```

## Usage

```ts
import { easae, easeInCubic } from 'easae';

const modal = document.querySelector('.modal');

easae({
  // Easing function you want to use, you can find the list further in the doc.
  easing: easeInCubic,
  // This function will be called on each tick of the easing.
  tick: (t, u) => {
    // 't' is going from 0 to 1 and 'u' is going from 1 to 0 (u = 1-t).
    // The tick function will be called in a requestAnimationsFrame on the browser, and a setTimeout in Node.

    // Bellow - as an example - we set the new scale of the modal.
    // But the idea is that you can animate anything in here using 't' and 'u'.
    modal.style.transform = `scale(${t})`;

    // For example we could set a React state:
    setProgressBarWidth(t * 100); // t * 100 so it's in %
  },
  // The duration of the easing in milliseconds
  duration: 300,
  // The delay before the easing starts in milliseconds (default is 0)
  delay: 100,
  // The refresh rate of the easing (default is 60)
  rate: 144,
});
```

## Easing functions

You can find the list of every easing functions on https://easings.net. They are all exported from `easae` (for example `import { easeInBounce } from 'easae'`).

Or you can make your own:

```ts
easae({
  easing: (x) => x, // linear
  tick: (t) => {
    // ...
  },
  duration: 500,
});
```

## Terminal based animations

<p align="center">
  <img width="1000px" src="https://raw.githubusercontent.com/AnatoleLucet/easae/main/docs/assets/terminal.svg" />
</p>

```js
const { easae, easeOutBounce } = require('easae');

easae({
  easing: easeOutBounce,
  tick: (t) => {
    console.clear();
    console.log('■'.repeat(t * 100), '\n');
  },
  duration: 1300,
});
```

## Chained animations

`easae` returns a promise that resolves when the easing is finished. So you can await this promise, then start the next one.

```
const { easae, easeOutBounce, easeInCubic } = require('easae');

async function animate() {
	// first
	await easae({
		easing: easeOutBounce,
		tick: (t) => {
			 // ...
		},
		duration: 1300,
	});

	// second
	await easae({
		easing: easeInCubic,
		tick: (t) => {
			 // ...
		},
		duration: 500,
	});
}
```

## Examples

See the [examples folder](examples).

## Inspiration

If you're familiar with [Svelte's animation API](https://svelte.dev/docs#animate_fn), you've probably noticed the resemblance.

## License

[MIT](LICENSE)
