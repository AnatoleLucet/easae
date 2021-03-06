import * as easings from './easings';
export * from './easings';

interface Args {
  easing: typeof easings[keyof typeof easings];
  tick: (t?: number, u?: number) => void;
  duration?: number;
  delay?: number;
  rate?: number;
}

const defaultArgs: Partial<Args> = {
  duration: 500,
  delay: 0,
  rate: 60,
};

export const easae = (args?: Args): Promise<void> =>
  new Promise((resolve) => {
    const { duration, delay, rate, tick, easing } = {
      ...defaultArgs,
      ...args,
    };

    const requestAnimationFrame =
      typeof window !== 'undefined'
        ? window.requestAnimationFrame
        : (cb: () => void) => setTimeout(cb, 1000 / rate);

    const t = (progress: number) => {
      requestAnimationFrame(() => {
        const x = easing(progress);
        tick(x, 1 - x);

        progress += (1 / rate) * (1000 / duration);

        if (progress <= 1) t(progress);
        else {
          tick(1, -1);
          return resolve();
        }
      });
    };

    if (delay > 0) setTimeout(() => t(0), delay);
    else t(0);
  });
