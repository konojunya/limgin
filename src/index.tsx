import * as React from 'react';
import shallowEqual from 'shallowequal';

export type IntersectionOptions = {
  root?: React.RefObject<Element>;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

interface Props {
  lowSrc: string;
  highSrc: string;
  style?: any;
  alt?: string;
  options?: IntersectionOptions;
}

const getIntersectionObserver = (
  optsRef: React.MutableRefObject<IntersectionOptions>,
  callback: (entry: IntersectionObserverEntry) => void,
) => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      callback(entry);
    },
    {
      ...optsRef.current,
      root: optsRef.current.root != null ? optsRef.current.root.current : null,
    },
  );
  return observer;
};

export const Limgin: React.FunctionComponent<Props> = ({ lowSrc, highSrc, options = {}, alt, style }) => {
  const { once, ...opts } = options;
  const optsRef = React.useRef(opts);
  const ref = React.useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    if (!shallowEqual(optsRef.current, opts)) {
      optsRef.current = opts;
    }
  });

  React.useEffect(() => {
    const observer = getIntersectionObserver(optsRef, (entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      if (entry.intersectionRatio !== 0) {
        setIntersecting(true);

        const t = entry.target.children[0] as HTMLImageElement;
        let highSrcLoaded = false;
        t.onload = () => {
          if (!highSrcLoaded) {
            setTimeout(() => {
              t.src = highSrc;
            }, 100);
            highSrcLoaded = true;
            observer.unobserve(entry.target);
          }
        };
        t.src = lowSrc;
      }

      if (once && entry.isIntersecting && ref.current != null) {
        observer.unobserve(ref.current);
      }
    });
    if (ref.current == null) {
      return;
    }
    observer.observe(ref.current);
    return () => {
      if (!once && ref.current != null) {
        observer.unobserve(ref.current);
      }
    };
  }, [optsRef.current]);

  return <figure ref={ref}>{isIntersecting ? <img alt={alt} style={style} /> : null}</figure>;
};
