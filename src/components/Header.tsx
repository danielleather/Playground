import type { JSX } from "react";
import { css } from "@pigment-css/react";
import { useIntl } from "react-intl";

const Header = (): JSX.Element => {
  const intl = useIntl();
  const headerStyles = css({
    'color': '#2d2d2d',
    'font-size': '4rem',
    'font-weight': '500',
  });
  return (<h1 className={headerStyles}>{intl.formatMessage({ id: 'header.title' })}</h1>);
};

export default Header;
