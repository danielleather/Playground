import type { JSX } from "react";
import { css } from "@pigment-css/react";
import Header from "./Header";
import Spacer from "./Spacer";
import SubHeader from "./Subheader";
import { sizeGrid } from "../helpers/styling/responsive";

const Landing = (): JSX.Element => {
  const wrapperStyles = css`
    display: grid;
    ${sizeGrid({
      xs: '0 minmax(0, 96rem) 0',
      md: '2.375rem minmax(0, 96rem) 2.375rem',
    }, 'grid-template-columns')}
    justify-content: center;
  `;

  const sidebarStyles = css`
    background-image: repeating-linear-gradient(315deg, transparent, transparent 5px, var(--colors-primary) 5px, var(--colors-primary) 6px);
    background-attachment: fixed;
    border: 1px solid var(--colors-primary);
  `;

  const landingStyles = css`
    svg {
      display: block;
    }
  `;
  
  return (
    <div className={wrapperStyles}>
      <div className={sidebarStyles} />
      <div className={landingStyles}>
        <Spacer />
        <Header />
        <Spacer />
        <SubHeader />
        <Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer /><Spacer />
        <div>
          - Pigment
        </div>
        <div>
          - Vite
        </div>
        <div>
          - React Intl
        </div>
        <div>
          - React Router
        </div>
        <div>
          - Storybook
        </div>
        <div>
          - Biome
        </div>
      </div>
      <div className={sidebarStyles}/>
    </div>
  );
};

export default Landing;
