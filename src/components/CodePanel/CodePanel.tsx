import { codeToHtml } from "shiki";
import styles from './styles';
import { useEffect, useState } from "react";

export const CodePanel = ({htmlContent}: {htmlContent: string}) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const fetchHtml = async () => {
      const html = await codeToHtml(htmlContent, {
        lang: 'javascript',
        theme: 'vitesse-dark'
      });

      setHtml(html);
    };
    fetchHtml();
  }, [htmlContent]);

  return (
    <div className={styles}>
      <div className="code-panel__toolbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} className="code-panel__content" />
    </div>
  )
}