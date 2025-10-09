import { css } from "@pigment-css/react";

export default css`
  border-radius: 0.75rem;
  background-color: var(--colors-jaguar);
  display: flow-root; /* prevent child margins from collapsing with parent */
  .code-panel__toolbar {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    span {
      width: 0.75rem;
      height: 0.75rem;
      background-color: color-mix(in oklab, #fff 20%, transparent);
      border-radius: 0.5rem;
    }
  }
  .code-panel__content {
    code {
      counter-reset: step;
      counter-increment: step 0;
      > span {
        margin-left: 1rem;
      }
      
    }
    pre {
      background-color: unset !important;
      background-color: color-mix(in oklab, #fff 5%, transparent) !important;
      border-radius: 0.5rem;
      border: 1px solid #1d1f29;
      margin: 3px;
      padding: 1rem 0;
    } 

    code .line::before {
      content: counter(step);
      counter-increment: step;
      width: 1rem;
      margin-right: 1.5rem;
      display: inline-block;
      text-align: right;
      color: rgba(115,138,148,.4)
    }
    text-align: left;
  }
`;