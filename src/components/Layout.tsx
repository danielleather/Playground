import { useIntl } from "react-intl";
import GithubIcon from '../media/icons/github.svg?react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const intl = useIntl();

  return (
    <>
    <div className="topNav">
      <a href="https://github.com/danielleather" target="_blank" rel="noreferrer" aria-label={intl.formatMessage({ id: 'topNav.github.linkDescription' })}>
        <span className="visually-hidden">{intl.formatMessage({ id: 'topNav.github.ariaLabel' })}</span>
        <GithubIcon />
      </a>

    </div>
      {children}
    <div className="footer">
      <span className="footer-text">© 2025 Daniel Leather</span>
    </div>
    </>
  );
}