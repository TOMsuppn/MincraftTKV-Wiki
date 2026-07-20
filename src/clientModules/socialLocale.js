import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const englishLabels = {
  '.kook-link': 'Join KOOK channel',
  '.qq-link': 'Join QQ group',
};

function localizeSocialLinks() {
  if (document.documentElement.lang !== 'en') return;

  Object.entries(englishLabels).forEach(([selector, label]) => {
    document.querySelectorAll(selector).forEach((link) => {
      link.setAttribute('data-tooltip', label);
      link.setAttribute('aria-label', label);
      link.setAttribute('title', label);
    });
  });
}

export function onRouteDidUpdate() {
  if (ExecutionEnvironment.canUseDOM) localizeSocialLinks();
}
