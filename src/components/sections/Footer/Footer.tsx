import {clx} from 'beeftools';

import SvgSocialLinkedIn from '@src/assets/svg/social-linkedin.svg?react';
import SvgSocialX from '@src/assets/svg/social-x.svg?react';
import SvgSocialYouTube from '@src/assets/svg/social-youtube.svg?react';

import {DisplayText} from '@src/components/ui/DisplayText/DisplayText.tsx';
import {TextLink} from '@src/components/ui/TextLink/TextLink.tsx';

import styles from './Footer.module.css';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="Page-Footer" className={styles.Footer}>
      <DisplayText size="h6">Section: Footer</DisplayText>

      <div className={styles.Layout}>
        <p className={styles.LegalText}>
          {CURRENT_YEAR}{' '}
          <TextLink
            ariaLabel="Come to my house"
            url="https://dulmage.me/"
            external
          >
            Dulmage Inc.
          </TextLink>{' '}
          All rights reserved.
        </p>

        <ul className={styles.SocialLinks}>
          <li className={styles.SocialLinkItem}>
            <a
              className={clx('button-basic', styles.SocialLinkAction)}
              href="#"
              title="Subscribe to my YouTube channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={clx('icon-wrapper', styles.SocialIconWrapper)}>
                <SvgSocialYouTube />
              </div>
            </a>
          </li>

          <li className={styles.SocialLinkItem}>
            <a
              className={clx('button-basic', styles.SocialLinkAction)}
              href="#"
              title="Follow me on X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={clx('icon-wrapper', styles.SocialIconWrapper)}>
                <SvgSocialX />
              </div>
            </a>
          </li>

          <li className={styles.SocialLinkItem}>
            <a
              className={clx('button-basic', styles.SocialLinkAction)}
              href="#"
              title="Hire me on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={clx('icon-wrapper', styles.SocialIconWrapper)}>
                <SvgSocialLinkedIn />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
