import { css } from "@pigment-css/react";
import type { JSX } from "react";

const spacerStyles = css`
  height: 100px;
`;

const Spacer = (): JSX.Element => <div className={spacerStyles} />

export default Spacer;
