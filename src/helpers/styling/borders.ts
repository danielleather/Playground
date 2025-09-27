const shared = `position: absolute;
  height: 1px;
  width: 200vw;
  left: -100vw;
  background-color: var(--colors-primary);
  content: '';
`;

export default `
&::before {
  ${shared}
  top: 0;
}
&::after {
  ${shared}
  bottom: 0;
}`;
