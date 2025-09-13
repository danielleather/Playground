import type { JSX } from "react";
import { css } from "@pigment-css/react";
import { useIntl } from "react-intl";

const subheaderStyles = css`
    color: #2d2d2d;
    font-size: 2rem;
    font-weight: 500;
    border-bottom: 1px solid var(--colors-newOrleans);
`;

const SubHeader = (): JSX.Element => {
  const intl = useIntl();
  return (<h2 className={subheaderStyles}>{intl.formatMessage({ id: 'subheader.title' })}</h2>);
}

export default SubHeader;