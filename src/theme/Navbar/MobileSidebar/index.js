import React from 'react';
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
  useNavbarSecondaryMenu,
} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';

const socialLinks = [
  {
    label: 'GitHub: TOMsuppn',
    href: 'https://github.com/TOMsuppn',
    className: 'github-link',
  },
  {
    label: 'Bilibili: TOMsuppn',
    href: 'https://space.bilibili.com/454944513',
    className: 'bilibili-link',
  },
];

export default function NavbarMobileSidebar() {
  const mobileSidebar = useNavbarMobileSidebar();
  const secondaryMenu = useNavbarSecondaryMenu();

  useLockBodyScroll(mobileSidebar.shown);

  if (!mobileSidebar.shouldRender) {
    return null;
  }

  return (
    <div className="navbar-sidebar">
      <NavbarMobileSidebarHeader />
      <div className="navbar-sidebar__items navbar-sidebar__items--stacked">
        <div className="navbar-sidebar__item menu navbar-sidebar__item--stacked">
          <NavbarMobileSidebarPrimaryMenu />
          {secondaryMenu.content ? (
            <section className="navbar-sidebar__section">
              <div className="navbar-sidebar__divider" />
              <p className="navbar-sidebar__section-title">文档目录</p>
              {secondaryMenu.content}
            </section>
          ) : null}
          <div className="navbar-sidebar__footer">
            <div className="navbar-sidebar__social">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className={`navbar__icon-link ${link.className}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                  onClick={() => mobileSidebar.toggle()}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
