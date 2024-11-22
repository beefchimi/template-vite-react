import type {ReactNode} from 'react';
import {clx} from 'beeftools';

import styles from './DisplayText.module.css';

export interface DisplayTextProps {
  // Consider restricting this to `string | number`.
  children: ReactNode;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function DisplayText({children, size = 'h1'}: DisplayTextProps) {
  const Tag = size;

  return (
    <Tag className={clx(styles.DisplayText, {[styles[size]]: Boolean(size)})}>
      {children}
    </Tag>
  );
}