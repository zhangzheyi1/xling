import XlButton from '@/components/XlButton';
import React from 'react';
import styles from './index.less';

const DisplayComp: React.FC = () => {
  return (
    <XlButton className={styles.button} confirm confirmMsg="确认么？">
      123
    </XlButton>
  );
};

export default DisplayComp;
