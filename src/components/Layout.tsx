import { useIntl } from "react-intl";
import GithubIcon from '../media/icons/github.svg?react';
import LinkedInIcon from '../media/icons/linkedIn.svg?react';
import { css } from "@pigment-css/react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const intl = useIntl();

  const topNavStyles = css(({ theme }) => ({
    height: '3.5rem',
    display: 'flex',
    backgroundColor: theme.colors.bananaMania,
    borderBottom: `1px solid ${theme.colors.newOrleans}`,
    position: 'fixed',
    width: '100%',
    flexDirection: 'row-reverse',
  }));

  // const topNavStyles = css({
  //   height: '3.5rem',
  //   display: 'flex',
  //   backgroundColor: `${bananaMania}`,
  //   borderBottom: `1px solid ${newOrleans}`,
  //   position: 'fixed',
  //   width: '100%',
  //   flexDirection: 'row-reverse',
  // });
  const spacerStyles = css({
    height: '3.5rem',
  });
  // const languageSwitcherStyles = (locale: string) => {
  //   const displayValue = intl.locale === locale ? 'block' : 'none';
  //   return css({
  //     display: displayValue,
  //   })
  // }
  // const languageSwitcherStyles = css(() => {
  //   const displayValue = intl.locale === locale ? 'block' : 'none';
  // });

  return (
    <>
    <div className={topNavStyles}>
      <a href="/en" className='asdf'>English</a>
      <a href="fr-ca" className='asdf'>Français</a>
      <a href="https://www.linkedin.com/in/daniel-leather-9b417714b/" target="_blank" rel="noreferrer">
        <span className="visually-hidden">{intl.formatMessage({ id: 'topNav.linkedin.ariaLabel' })}</span>
        <LinkedInIcon />
      </a>
      <a href="https://github.com/danielleather" target="_blank" rel="noreferrer" aria-label={intl.formatMessage({ id: 'topNav.github.linkDescription' })}>
        <span className="visually-hidden">{intl.formatMessage({ id: 'topNav.github.ariaLabel' })}</span>
        <GithubIcon />
      </a>
    </div>
    <div className={spacerStyles} />

      {children}

    <div>
      <span className="footer-text">© 2025 Daniel Leather</span>
    </div>
    </>
  );
}