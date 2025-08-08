import type { JSX } from "react";
import { css } from "@pigment-css/react";
// import { useIntl } from "react-intl";
import Header from "./Header";
import GithubIcon from '../media/icons/github.svg?react';

const Landing = (): JSX.Element => {
  const landingStyles = css(({ theme }) => ({
    border: `1px solid ${theme.colors.newOrleans}`,
    'svg': {
      display: 'block',
    }
  }));
  const wrapperStyles = css({
    display: 'grid',
    gridTemplateColumns: '40px auto 40px',
  });

  const sidebarStyles = css(({ theme }) => ({
    backgroundImage: `repeating-linear-gradient(315deg, transparent, transparent 5px, ${theme.colors.newOrleans} 5px, ${theme.colors.newOrleans} 6px)`,
    backgroundAttachment: 'fixed',
    borderTop: `1px solid ${theme.colors.newOrleans}`,
  }));
  
  return (
    <div className={wrapperStyles}>
      <div className={sidebarStyles} />
      <div className={landingStyles}>
        <Header />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
        <GithubIcon />
      </div>
      <div className={sidebarStyles}/>
    </div>
  );
};

export default Landing;
