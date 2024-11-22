import {useState, type ReactNode} from 'react';

import {Portal} from '@src/components/primitives/Portal.tsx';
import {Overlay} from '@src/components/primitives/Overlay/Overlay.tsx';
import {YouTubeEmbed} from '@src/components/primitives/YouTubeEmbed/YouTubeEmbed.tsx';
import {useTheme} from '@src/providers/ThemeProvider.tsx';

import {Button} from '@src/components/ui/Button/Button.tsx';
import {DisplayText} from '@src/components/ui/DisplayText/DisplayText.tsx';

import styles from './Header.module.css';

export interface HeaderProps {
  children?: ReactNode;
}

export function Header({children}: HeaderProps) {
  const {toggle} = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header id="Page-Header" className={styles.Header}>
      <DisplayText>Section: Header</DisplayText>

      <div className={styles.Actions}>
        <Button
          label="Toggle Theme"
          ariaLabel="Switch between light / dark mode"
          onClick={toggle}
        />

        <Button
          label="Watch YouTube"
          ariaLabel="Open a YouTube overlay"
          onClick={() => setOpen(true)}
        />
      </div>

      <Portal>
        <Overlay open={open} onClose={() => setOpen(false)}>
          <YouTubeEmbed videoId="430mSjFYHI0" autoPlay allowFullscreen />
        </Overlay>
      </Portal>

      {children}
    </header>
  );
}
