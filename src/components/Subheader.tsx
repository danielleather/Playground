import type { JSX } from "react";
import { css } from "@pigment-css/react";
import { useIntl } from "react-intl";
import borderStyles from "../helpers/styling/borders";

const subheaderStyles = css`
    color: var(--colors-text);
    font-size: 2rem;
    font-weight: 500;
    margin:0;
    position: relative;
    text-align: left;
    ${borderStyles}
`;

const SubHeader = (): JSX.Element => {
  const intl = useIntl();
  return (<h2 className={subheaderStyles}>{intl.formatMessage({ id: 'subheader.title' })}</h2>);
}

export default SubHeader;