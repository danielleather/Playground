import type { JSX } from "react";
import { css } from "@pigment-css/react";
import { useIntl } from "react-intl";
import { sizeGrid } from "../helpers/styling/responsive";
import borderStyles from "../helpers/styling/borders";

const Header = (): JSX.Element => {
  const intl = useIntl();

  const headerStyles = css`
    position: relative;
    ${borderStyles}

    margin: 0;
    color: var(--colors-text);
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
    text-align: left;
    padding: 0 0.5rem;
    font-weight: 500;
  `;

  return (<h1 className={headerStyles}>{intl.formatMessage({ id: 'header.title' })}</h1>);
};

export default Header;
