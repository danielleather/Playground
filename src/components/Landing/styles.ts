import { css } from "@pigment-css/react";
import { sizeGrid } from "../../helpers/styling/responsive";

export const wrapperStyles = css`
  display: grid;
  ${sizeGrid(
    {
      xs: '0 minmax(0, 96rem) 0',
      md: '1.5rem minmax(0, 96rem) 1.5rem',
      lg: '2.5rem minmax(0, 96rem) 2.5rem',
    },
    'grid-template-columns'
  )}
  justify-content: center;
`;

export const sidebarStyles = css`
  background-image: repeating-linear-gradient(315deg, transparent, transparent 6px, var(--colors-primary) 6px, var(--colors-primary) 7px);
  background-attachment: fixed;
  border-right: 1px solid var(--colors-primary);
  border-left: 1px solid var(--colors-primary);
`;

export const landingStyles = css`
  svg {
    display: block;
  }
`;