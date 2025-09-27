import { useIntl } from "react-intl";
import GithubIcon from '../media/icons/github.svg?react';
import LinkedInIcon from '../media/icons/linkedIn.svg?react';
import { css, styled } from "@pigment-css/react";
import { ContrastSwitcher } from "./ContrastSwitcher/ContrastSwitcher";
import { useContrast } from "../context/contrast";
import themeSettings from "../helpers/styling/theme";

const iconPanelStyles = css`
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  .linkedIn, .github {
    color: var(--colors-text);
  }
`;

const IconPanel = ({ children }: { children: React.ReactNode }) => 
  <div className={iconPanelStyles}>
    {children}
  </div>

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { contrast } = useContrast();
  const intl = useIntl();

  const topNavStyles = css`
    height: 3.5rem;
    background-color: var(--colors-background);
    border-bottom: 1px solid var(--colors-primary);
    position: fixed;
    width: 100%;
    z-index: 2;
  `;

  const spacerStyles = css({
    height: '3.5rem',
  });

  type LanguageSwitcherProps = {
    active?: boolean;
  }

  const LanguageSwitcher = styled('a')<LanguageSwitcherProps>({
    variants: [
      {
        props: { active: true },
        style: {
          display: 'block',
        }
      },
      {
        props: { active: false },
        style: {
          display: 'none',
        }
      }
    ]
  });

  return (
    <div style={themeSettings(contrast)}>
      <div className={topNavStyles}>
        <IconPanel>
          <LanguageSwitcher href="/en" active={intl.locale === 'fr-ca'}>English</LanguageSwitcher>
          <LanguageSwitcher href="/fr-ca" active={intl.locale === 'en'}>Français</LanguageSwitcher>
          <a className="linkedIn" href="https://www.linkedin.com/in/daniel-leather-9b417714b/" target="_blank" rel="noreferrer" aria-label={intl.formatMessage({ id: 'topNav.linkedin.linkDescription' })}>
            <span className="visually-hidden">{intl.formatMessage({ id: 'topNav.linkedin.ariaLabel' })}</span>
            <LinkedInIcon />
          </a>
          <a className="github" href="https://github.com/danielleather" target="_blank" rel="noreferrer" aria-label={intl.formatMessage({ id: 'topNav.github.linkDescription' })}>
            <span className="visually-hidden">{intl.formatMessage({ id: 'topNav.github.ariaLabel' })}</span>
            <GithubIcon />
          </a>
          <ContrastSwitcher />
        </IconPanel>
      </div>
      <div className={spacerStyles} />

      {children}

      <div>
        <span className="footer-text">© 2025 Daniel Leather</span>
      </div>
    </div>
  );
}