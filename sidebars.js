const sidebars = {
  wikiSidebar: [
    'intro',
    {
      type: 'category',
      label: '配置文件',
      className: 'sidebar-group',
      items: [
        'config/index',
        'config/core',
        'config/debug',
        'config/maps',
        'config/market',
        'config/tasks',
      ],
    },
    {
      type: 'category',
      label: '系统说明',
      className: 'sidebar-group',
      items: [
        'systems/hideout',
        'systems/extraction-points',
      ],
    },
    {
      type: 'category',
      label: '玩家命令',
      className: 'sidebar-group',
      items: [
        'players/help',
        'players/play',
        'players/economy',
        'players/market',
        'players/pass',
        'players/progress',
        'players/stats',
      ],
    },
    {
      type: 'category',
      label: '管理命令',
      className: 'sidebar-group',
      items: [
        'admin-commands/ecoadmin',
        'admin-commands/marketadmin',
        'admin-commands/passadmin',
        'admin-commands/punishment',
        'admin-commands/taskadmin',
      ],
    },
  ],
};

export default sidebars;
