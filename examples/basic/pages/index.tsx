import * as React from 'react';
import { Limgin } from 'limgin';

const images = [
  {
    lowSrc:
      'https://patra.imgix.net/images/2019-04-26/33807573-86a6-47a9-93bc-2ce78f166821.jpg?auto=compress%2Cformat&fit=crop&h=268&lossless=0&q=0&w=268',
    highSrc:
      'https://patra.imgix.net/images/2019-04-26/33807573-86a6-47a9-93bc-2ce78f166821.jpg?auto=compress%2Cformat&fit=crop&h=800&lossless=0&q=75&w=800',
  },
  {
    lowSrc:
      'https://patra.imgix.net/images/2019-04-16/ce5b85c2-4e85-4645-9b5a-990c293b4036.JPG?auto=compress%2Cformat&fit=crop&h=268&lossless=0&q=0&w=268',
    highSrc:
      'https://patra.imgix.net/images/2019-04-16/ce5b85c2-4e85-4645-9b5a-990c293b4036.JPG?auto=compress%2Cformat&fit=crop&h=800&lossless=0&q=75&w=800',
  },
  {
    lowSrc:
      'https://patra.imgix.net/images/2019-04-23/eb74f682-d29d-4707-a8a0-0c75ddcaa7fd.jpg?auto=compress%2Cformat&fit=crop&h=268&lossless=0&q=0&w=268',
    highSrc:
      'https://patra.imgix.net/images/2019-04-23/eb74f682-d29d-4707-a8a0-0c75ddcaa7fd.jpg?auto=compress%2Cformat&fit=crop&h=800&lossless=0&q=75&w=800',
  },
  {
    lowSrc:
      'https://patra.imgix.net/images/2019-04-25/4f068584-f6cf-4b15-8697-dcd443c65e65.jpg?auto=compress%2Cformat&fit=crop&h=268&lossless=0&q=0&w=268',
    highSrc:
      'https://patra.imgix.net/images/2019-04-25/4f068584-f6cf-4b15-8697-dcd443c65e65.jpg?auto=compress%2Cformat&fit=crop&h=800&lossless=0&q=75&w=800',
  },
  {
    lowSrc:
      'https://patra.imgix.net/images/2019-04-16/474d62ad-689d-4026-9916-97c2fb44ce3b.JPG?auto=compress%2Cformat&fit=crop&h=268&lossless=0&q=0&w=268',
    highSrc:
      'https://patra.imgix.net/images/2019-04-16/474d62ad-689d-4026-9916-97c2fb44ce3b.JPG?auto=compress%2Cformat&fit=crop&h=800&lossless=0&q=75&w=800',
  },
  {
    lowSrc:
      'https://patra.imgix.net/images/2019-04-24/b6333539-c539-4c59-91a0-fdcf30671a5c.jpg?auto=compress%2Cformat&fit=crop&h=268&lossless=0&q=0&w=268',
    highSrc:
      'https://patra.imgix.net/images/2019-04-24/b6333539-c539-4c59-91a0-fdcf30671a5c.jpg?auto=compress%2Cformat&fit=crop&h=800&lossless=0&q=75&w=800',
  },
  {
    lowSrc:
      'https://patra.imgix.net/images/2019-04-15/31ac7247-8809-4dde-9b71-8e0f35c047e8.jpg?auto=compress%2Cformat&fit=crop&h=268&lossless=0&q=0&w=268',
    highSrc:
      'https://patra.imgix.net/images/2019-04-15/31ac7247-8809-4dde-9b71-8e0f35c047e8.jpg?auto=compress%2Cformat&fit=crop&h=800&lossless=0&q=75&w=800',
  },
  {
    lowSrc:
      'https://patra.imgix.net/images/2019-04-11/dc3640d7-016c-48b3-abcd-f7ff52bab591.jpg?auto=compress%2Cformat&fit=crop&h=268&lossless=0&q=0&w=268',
    highSrc:
      'https://patra.imgix.net/images/2019-04-11/dc3640d7-016c-48b3-abcd-f7ff52bab591.jpg?auto=compress%2Cformat&fit=crop&h=800&lossless=0&q=75&w=800',
  },
];

export default () => {
  return (
    <ul style={{ display: 'flex', listStyle: 'none', flexWrap: 'wrap' }}>
      {images.map((img, i) => (
        <li key={i} style={{ margin: '10px' }}>
          <Limgin
            style={{ width: '500px', height: '500px', display: 'block' }}
            lowSrc={img.lowSrc}
            highSrc={img.highSrc}
            options={{}}
          />
        </li>
      ))}
    </ul>
  );
};
