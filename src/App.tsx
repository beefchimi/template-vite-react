import {clx} from 'beeftools';

import {BreakpointProvider} from '@src/providers/BreakpointProvider.tsx';
import {ThemeProvider} from '@src/providers/ThemeProvider.tsx';

import {Footer} from '@src/components/sections/Footer/Footer.tsx';
import {Header} from '@src/components/sections/Header/Header.tsx';
import {Main} from '@src/components/sections/Main/Main.tsx';

import {AccordionTest} from '@src/components/ui/Accordion/AccordionTest.tsx';
import {ButtonTest} from '@src/components/ui/Button/ButtonTest.tsx';

import styles from './App.module.css';

function AppContent() {
  // Separated from `<App />` to allow use of hooks available via "app providers".
  return (
    <div className={styles.App}>
      <Header />

      <Main>
        <div className={styles.Layout}>
          <div
            className={clx(styles.Card, {
              [styles.invert]: false,
            })}
          >
            <AccordionTest />
          </div>

          <div
            className={clx(styles.Card, {
              [styles.invert]: false,
            })}
          >
            <ButtonTest />
          </div>
        </div>
      </Main>

      <Footer />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <BreakpointProvider>
        <AppContent />
      </BreakpointProvider>
    </ThemeProvider>
  );
}
