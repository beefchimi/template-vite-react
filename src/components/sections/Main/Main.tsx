import type {ReactNode} from 'react';

import {Accordion} from '@src/components/ui/Accordion/Accordion.tsx';
import {AccordionList} from '@src/components/ui/Accordion/AccordionList.tsx';
import {DisplayText} from '@src/components/ui/DisplayText/DisplayText.tsx';

import {MOCK_ACCORDION} from '@src/data.ts';
import styles from './Main.module.css';

export interface MainProps {
  children?: ReactNode;
}

export function Main({children}: MainProps) {
  return (
    <main id="Page-Main" className={styles.Main}>
      <DisplayText size="h2">Section: Main</DisplayText>

      <div className={styles.Card}>
        <AccordionList>
          {MOCK_ACCORDION.map(({title, text}, index) => (
            <AccordionList.Item key={title}>
              <Accordion id={`Accordion-${index}`} title={title}>
                <Accordion.Content>
                  {text.map((line) => (
                    <Accordion.Text key={line}>{line}</Accordion.Text>
                  ))}
                </Accordion.Content>
              </Accordion>
            </AccordionList.Item>
          ))}
        </AccordionList>
      </div>

      {children}
    </main>
  );
}
