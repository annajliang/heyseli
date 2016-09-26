import React from 'react';

import styles from './styles.scss';
import WorkPreview from './WorkPreview';

import data from './data';

const Work = () => (
  <div className={styles.wrapper}>
    {data.map(item =>
      <WorkPreview
        key={item.name}
        name={item.name}
        platform={item.platform}
        link={item.link}
      />
    )}
  </div>
);

export default Work;
