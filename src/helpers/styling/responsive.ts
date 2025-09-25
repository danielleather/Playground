/**
 * Responsive styling utilities for consistent breakpoints and sizing
 */

import type { Breakpoint } from "@pigment-css/react";

/**
 * Common breakpoints for consistent responsive design
 */
export const breakpoints = {
  xs: '0',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
} as Record<Breakpoint, string>;

export const mediaBreakpointUp = (breakpoint: Breakpoint, style: string) => `@media (min-width: ${breakpoints[breakpoint]}) { ${style} }`;

export const sizeGrid = (breakpointGrid: Partial<Record<Breakpoint, string>>, style: string) => Object.entries(breakpointGrid).reduce((acc, [breakpoint, value]) =>
  `${acc}${mediaBreakpointUp(breakpoint as Breakpoint, `${style}: ${value}`)}`,
  ''
);