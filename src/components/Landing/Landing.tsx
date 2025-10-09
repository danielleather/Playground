import type { JSX } from "react";
import Header from "../Header";
import Spacer from "../Spacer";
import SubHeader from "../Subheader";
import { wrapperStyles, sidebarStyles, landingStyles } from "./styles";
import { CodePanel } from "../CodePanel";

const Landing = (): JSX.Element => {
  return (
    <div className={wrapperStyles}>
      <div className={sidebarStyles} />
      <div className={landingStyles}>
        <Spacer />
        <Header />
        <Spacer />
        <SubHeader />
        <CodePanel />
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
        <div>
          - Playwright
        </div>
        <div>
          - Sentry?
        </div>
        <div>
          - pnpm
        </div>
        <div>
          ~~~~~~~~~~~~~ Backend ~~~~~~~~~~~~~
        </div>
        <div>
          - Mutation testing (stryker)
          -unit testing (nock) and jest
        </div>
      </div>
      <div className={sidebarStyles}/>
    </div>
  );
};

export default Landing;
