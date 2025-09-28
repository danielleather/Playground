    import { css } from "@pigment-css/react"

export const CodePanel = () => {
  const styles = css`
    background-color: var(--colors-primary);
    padding: 0.5rem;
    .code-panel {
      border-radius: 0.75rem;
      background-color: var(--colors-jaguar);
      display: flow-root; /* prevent child margins from collapsing with parent */
    }
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
      background-color: color-mix(in oklab, #fff 5%, transparent);
      border-radius: 0.5rem;
      border: 1px solid #1d1f29;
      margin: 3px;
      pre {
        margin: 0;
        overflow: auto;
        padding: 1rem;
        background: linear-gradient(
            to bottom,
            color-mix(in oklab, #000 8%, transparent),
            transparent 24px
          ) no-repeat;
      }
      code {
        display: block;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          "Liberation Mono", "Courier New", monospace;
        font-size: 0.9rem;
        line-height: 1.6;
        color: color-mix(in oklab, #fff 85%, transparent);
      }
      .code-lines {
        list-style: none; /* remove default markers */
        counter-reset: line;
        margin: 0;
        padding: 0 0 0 1.5rem; /* room for custom numbers */
        text-align: left;
      }
      .code-lines li {
        position: relative;
        white-space: pre; /* preserve indentation */
        padding-left: 0.75rem;
        counter-increment: line;
      }
      .code-lines li::before {
        content: counter(line);
        position: absolute;
        left: -2.5rem;
        width: 2rem;
        text-align: right;
        color: color-mix(in oklab, #fff 35%, transparent);
      }
      .code-line {
        display: block;
      }
      /* subtle token coloring to evoke syntax highlighting */
      .tok-tag { color: #7aa2f7; }
      .tok-attr { color: #9ece6a; }
      .tok-str { color: #e0af68; }
      .tok-text { color: color-mix(in oklab, #fff 85%, transparent); }
    }
  `;
  return (
    <div className={styles}>
      <div className="code-panel">
        <div className="code-panel__toolbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="code-panel__content">
          <pre>
            <code>
              <ol className="code-lines">
                <li>
                  <span className="code-line">
                    <span className="tok-text">&lt;</span><span className="tok-tag">div</span> <span className="tok-attr">class</span><span className="tok-text">=</span><span className="tok-str">"flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl"</span><span className="tok-text">&gt;</span>
                  </span>
                </li>
                <li>
                  <span className="code-line">  <span className="tok-text">&lt;</span><span className="tok-tag">div</span><span className="tok-text">&gt;</span></span>
                </li>
                <li>
                  <span className="code-line">    <span className="tok-text">&lt;</span><span className="tok-tag">img</span> <span className="tok-attr">class</span><span className="tok-text">=</span><span className="tok-str">"size-48 shadow-xl rounded-md"</span> <span className="tok-attr">alt</span><span className="tok-text">=</span><span className="tok-str">""</span> <span className="tok-attr">src</span><span className="tok-text">=</span><span className="tok-str">"/img/cover.png"</span> <span className="tok-text">/&gt;</span></span>
                </li>
                <li>
                  <span className="code-line">  <span className="tok-text">&lt;/</span><span className="tok-tag">div</span><span className="tok-text">&gt;</span></span>
                </li>
                <li>
                  <span className="code-line">  <span className="tok-text">&lt;</span><span className="tok-tag">div</span> <span className="tok-attr">class</span><span className="tok-text">=</span><span className="tok-str">"flex items-center md:items-start"</span><span className="tok-text">&gt;</span></span>
                </li>
                <li>
                  <span className="code-line">    <span className="tok-text">&lt;</span><span className="tok-tag">span</span> <span className="tok-attr">class</span><span className="tok-text">=</span><span className="tok-str">"text-2xl font-medium"</span><span className="tok-text">&gt;</span>Class Warfare<span className="tok-text">&lt;/</span><span className="tok-tag">span</span><span className="tok-text">&gt;</span></span>
                </li>
                <li>
                  <span className="code-line">    <span className="tok-text">&lt;</span><span className="tok-tag">span</span> <span className="tok-attr">class</span><span className="tok-text">=</span><span className="tok-str">"font-medium text-sky-500"</span><span className="tok-text">&gt;</span>The Anti-Patterns<span className="tok-text">&lt;/</span><span className="tok-tag">span</span><span className="tok-text">&gt;</span></span>
                </li>
                <li>
                  <span className="code-line">    <span className="tok-text">&lt;</span><span className="tok-tag">span</span> <span className="tok-attr">class</span><span className="tok-text">=</span><span className="tok-str">"flex gap-2 font-medium text-gray-600 dark:text-gray-400"</span><span className="tok-text">&gt;</span></span>
                </li>
                <li>
                  <span className="code-line">      <span className="tok-text">&lt;</span><span className="tok-tag">span</span><span className="tok-text">&gt;</span>No. 4<span className="tok-text">&lt;/</span><span className="tok-tag">span</span><span className="tok-text">&gt;</span></span>
                </li>
                <li>
                  <span className="code-line">      <span className="tok-text">&lt;</span><span className="tok-tag">span</span><span className="tok-text">&gt;</span>·<span className="tok-text">&lt;/</span><span className="tok-tag">span</span><span className="tok-text">&gt;</span></span>
                </li>
                <li>
                  <span className="code-line">      <span className="tok-text">&lt;</span><span className="tok-tag">span</span><span className="tok-text">&gt;</span>2025<span className="tok-text">&lt;/</span><span className="tok-tag">span</span><span className="tok-text">&gt;</span></span>
                </li>
                <li>
                  <span className="code-line">    <span className="tok-text">&lt;/</span><span className="tok-tag">span</span><span className="tok-text">&gt;</span></span>
                </li>
                <li>
                  <span className="code-line">  <span className="tok-text">&lt;/</span><span className="tok-tag">div</span><span className="tok-text">&gt;</span></span>
                </li>
                <li>
                  <span className="code-line"><span className="tok-text">&lt;/</span><span className="tok-tag">div</span><span className="tok-text">&gt;</span></span>
                </li>
              </ol>
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}