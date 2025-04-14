import { RawIntlProvider, createIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import languages from '../helpers/localisation/languages';
import { DEFAULT_LOCALE } from '../helpers/constants';
import messagesEn from '../helpers/localisation/messages-en.json';
import messagesFrCa from '../helpers/localisation/messages-fr-ca.json';
import type { Language } from '../helpers/types';

export const localeMap: Partial<Record<Language, Record<string, string>>> = {
  [DEFAULT_LOCALE]: messagesFrCa,
  'en': messagesEn,
};

export const IntlProvider = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Language;
}) => {
  const { bidi }: { bidi: boolean } = languages[locale as keyof typeof languages] || false;

  const intl: IntlShape & { bidi?: boolean } = createIntl(
    {
      defaultLocale: DEFAULT_LOCALE,
      locale,
      onError: (err) => {
        console.error(err);
      },
      messages: localeMap[locale],
    },
  );
  intl.bidi = bidi;

  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
}
