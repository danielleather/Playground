import { css } from "@pigment-css/react";
import type { JSX } from "react";

const spacerStyles = css`
  border-bottom: 1px solid var(--colors-newOrleans);
`;

const Spacer = (): JSX.Element => <div className={spacerStyles} style={{ height: '100px' }} />

export default Spacer;
