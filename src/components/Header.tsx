import type { JSX } from "react";
import { css } from "@pigment-css/react";
import { useIntl } from "react-intl";
import { sizeGrid } from "../helpers/responsive";

const Header = (): JSX.Element => {
  const intl = useIntl();
  const headerStyles = css`
    color: #2d2d2d;
    font-size: 3rem;
    line-height: 1;
    ${
      sizeGrid({
        xs: '2.25rem',
        md: '3rem',
        lg: '4rem',
        xl: '6rem',
      }, 'font-size')
    }
    font-weight: 500;
    border-bottom: 1px solid var(--colors-newOrleans);
  `;
  return (<h1 className={headerStyles}>{intl.formatMessage({ id: 'header.title' })}</h1>);
};

export default Header;
