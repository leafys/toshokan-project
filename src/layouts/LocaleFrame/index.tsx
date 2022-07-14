import { i18nLanguages } from '@plugins/i18n';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import MyButton from '@components/UI/Buttons/MainButton';

const LocaleFrame = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [isLanguageChoosen, setIsLanguageChoosen] = useState<boolean>(false);

  useMemo(() => {
    if (localStorage.getItem('isOldUser')) {
      setIsLanguageChoosen(true);
    } else {
      localStorage.setItem('isOldUser', 'true');
      window.disableScroll();
    }
  }, []);

  const onChangeLng = (locale: string) => {
    i18n.changeLanguage(locale);
    setIsLanguageChoosen(true);
    window.enableScroll();
  };

  return (
    <>
      {!isLanguageChoosen && (
        <section className="flex justify-center items-center fixed w-full h-full bg-black z-20">
          <div className="container text-center">
            <h2 className="text-xxl font-bold mb-2">{t('locale.title')}</h2>
            <p className="mb-5">{t('locale.desc')}</p>
            {i18nLanguages.map((lng) => (
              <MyButton
                type="submit"
                key={lng.locale}
                onClick={() => onChangeLng(lng.locale)}
                className={cn('px-4 py-2 border-gray rounded-md mx-2')}
              >
                {t(lng.nativeName)}
              </MyButton>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default LocaleFrame;
