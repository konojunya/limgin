# limgin
🚀 limgin, it is a method to control the image optimally.

![](https://github.com/konojunya/limgin/blob/master/screenshots/limgin.gif?raw=true) 

# Description
limgin is a wrapper for img that switches between high quality images and low quality images.

**Polyfill is required because it uses the IntersectionObserver API.**

polyfill: `https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CIntersectionObserverEntry`

# Example

```tsx
import { limgin } from 'limgin';

export const Image = () => (
 <limgin
  lowSrc="<low image src>"
  highSrc="<high image scr>"
  alt="alt"
 />
);
```

# API

`lowSrc` `highSrc` is required.  Use these two to switch images.

## options

- alt?: `string`
- style?: `any`
- options?: `IntersectionOption`

### IntersectionOption

- root?: `React.RefObject<Element>`
- rootMargin?: `string`
- threshold?: `number` | `number[]`
- once?: `boolean`

