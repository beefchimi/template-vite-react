import {type ReactNode} from 'react';

import {DisplayText} from '@src/components/ui/DisplayText/DisplayText.tsx';
import styles from './Main.module.css';

export interface MainProps {
  children?: ReactNode;
}

export function Main({children}: MainProps) {
  return (
    <main id="Page-Main" className={styles.Main}>
      <DisplayText size="h2">Section: Main</DisplayText>
      {children}
    </main>
  );
}
