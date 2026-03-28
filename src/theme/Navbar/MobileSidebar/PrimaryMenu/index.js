import React from 'react';
import Link from '@docusaurus/Link';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';

const items = [
  {
    label: '首页',
    to: '/',
  },
  {
    label: '文档',
    to: '/docs/intro',
  },
  {
    label: '更新日志',
    to: '/docs/changelog',
  },
];

export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <ul className="menu__list">
      {items.map((item) => (
        <li key={item.label} className="menu__list-item">
          <Link
            className="menu__link"
            to={item.to}
            onClick={() => mobileSidebar.toggle()}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
