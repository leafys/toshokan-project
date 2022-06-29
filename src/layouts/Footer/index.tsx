import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import {
  IRoutesTitleItem,
  ISocialLink,
  routesTitleItems,
  socialLinks,
} from '@layouts/routesTitleItems';

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="container mx-auto py-8 px-5 bg-light-gray-opacity">
        <div className="flex md:gap-4 sm:justify-center sm:flex-col ">
          <div className="flex flex-auto flex-col gap-2 sm:items-center">
            <Link to="/" className="max-w-[260px] sm:max-w-[210px]">
              <img className="w-main-logo" src="images/logo.png" alt="logo" />
              <span className="text-base sm:text-sm">
                Bem vindo ao melhor site de animes
              </span>
            </Link>

            <div className="flex flex-col gap-1 max-w-[372px] ">
              <span className="text-sm sm:text-center">
                Animes online todos os direitos reservados
              </span>
              <span className="text-sm sm:max-w-[250px] sm:text-center">
                Atenção: Este site não hospeda nenhum vídeo em seu servidor.
                Todo conteudo é provido por terceiros e não afiliados.
              </span>
            </div>
          </div>

          <div className="flex items-end sm:flex-col sm:items-center sm:gap-5">
            <ul className="flex items-end gap-2 flex-col sm:flex-row sm:justify-center ">
              {routesTitleItems.map((item: IRoutesTitleItem) => (
                <li className={styles.item} key={item.path}>
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              {socialLinks.map((item: ISocialLink, index) => (
                <Link
                  to={item.path}
                  className="flex gap-2  sm:text-base;"
                  key={index}
                >
                  <div className={styles['social__img']}>{item.icon}</div>
                  {item.title}
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
