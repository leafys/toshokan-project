import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { ISocialLink, socialLinks } from '@layouts/routesTitleItems';
import { useTranslation } from 'react-i18next';
import NavBar from '@components/NavBar';

const Footer = () => {
  const { t } = useTranslation();
  const locale = window.locale;
  return (
    <footer className="mt-auto bg-light-gray-opacity">
      <div className="container mx-auto py-8 px-5">
        <div className="flex md:gap-4 sm:justify-center sm:flex-col ">
          <div className="flex flex-auto flex-col gap-2 sm:items-center">
            <Link
              className="sm:flex sm:flex-col sm:items-center"
              to={`/${locale}`}
            >
              <img
                className="w-main-logo mb-2"
                src="images/logo.png"
                alt="logo"
              />
              <span className="text-base sm:text-sm">{t('footer.title')}</span>
            </Link>

            <div className="flex flex-col gap-1 max-w-[372px] ">
              <span className="text-sm sm:text-center">
                {t('footer.subtitle')}
              </span>
              <span className="text-sm sm:text-center">{t('footer.desc')}</span>
            </div>
          </div>

          <div className="flex items-end sm:flex-col sm:items-center sm:gap-5 ">
            <NavBar
              className="flex items center justify-center"
              classNameForUl="flex items-end gap-2 flex-col sm:flex-row  sm:flex-wrap sm:w-full sm:justify-center"
              classNameForLi={styles.item}
            />

            <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-evenly">
              {socialLinks.map((item: ISocialLink, index) => (
                <Link
                  to={item.path}
                  className="flex gap-2 sm:text-base"
                  key={index}
                >
                  <div className="w-[28px]">{item.icon}</div>
                  {t(item.title)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
