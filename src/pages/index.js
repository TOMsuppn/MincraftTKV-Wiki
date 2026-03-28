import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {useState} from 'react';
import styles from './index.module.css';

const quickLinks = [
  {
    title: '首次部署',
    description: '从 Paper 核心、License 到地图与点位配置，一次看完整个初次接入流程。',
    label: '教程',
    previewHeading: '🚀 首次使用 MinecraftTKV',
    previewLines: ['从 Paper 到 License 配置，完整走一遍首次接入流程。', '适合第一次部署插件时快速对照。'],
    previewCode: '/docs/intro',
    to: '/docs/intro',
  },
  {
    title: '玩家命令',
    description: '收录 /play、/market、/eco、/mstats 等常用玩家指令说明。',
    label: '命令',
    previewHeading: '🧭 Mhelp 与玩家命令',
    previewLines: ['集中查看 /play、/market、/eco、/mstats 等常用指令。', '适合给玩家服内培训或快速查询。'],
    previewCode: '/play Factory',
    to: '/docs/players/help',
  },
  {
    title: '管理命令',
    description: '整理经济、市场、战令、惩罚与任务系统的后台管理命令。',
    label: '管理',
    previewHeading: '🛠️ 后台管理命令',
    previewLines: ['覆盖经济、市场、战令、惩罚与任务系统的后台入口。', '适合服主和管理员排错与日常维护。'],
    previewCode: '/mtkv ecoadmin reload',
    to: '/docs/admin-commands/ecoadmin',
  },
  {
    title: '系统说明',
    description: '集中查看藏身处与撤离点等核心系统规则，便于排错和培训。',
    label: '系统',
    previewHeading: '🏠 系统规则与机制',
    previewLines: ['快速理解藏身处、撤离点等核心系统的设计逻辑。', '适合培训、排错和整理服内说明。'],
    previewCode: '/docs/systems/hideout',
    to: '/docs/systems/hideout',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [selectedPreview, setSelectedPreview] = useState(quickLinks[0]);

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <header className={styles.heroBanner}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>Wiki</p>
              <Heading as="h1" className={styles.heroTitle}>
                <span className={styles.heroTitlePrimary}>MinecraftTKV</span>
                <span className={styles.heroTitleAccent}>使用文档</span>
              </Heading>
              <p className={styles.heroSubtitle}>
                围绕 MinecraftTKV 的安装、系统说明、玩家命令、管理命令与版本更新整理的统一文档入口。
              </p>
              <div className={styles.actions}>
                <Link className="button button--primary button--lg" to="/docs/intro">
                  开始阅读
                </Link>
                <Link className="button button--secondary button--lg" to="/docs/changelog">
                  查看更新日志
                </Link>
              </div>
            </div>
            <div
              className={styles.heroPreview}
              aria-label="文档预览窗口">
              <div className={styles.previewPanel}>
                <div className={styles.previewHeader}>
                  <span className={styles.previewDot} />
                  <span className={styles.previewDot} />
                  <span className={styles.previewDot} />
                </div>
                <div className={styles.previewSidebar}>
                  <div className={styles.previewSidebarTitle}>文档导航</div>
                  {quickLinks.map((item) => (
                    <button
                      key={item.to}
                      className={`${styles.previewSidebarItem} ${
                        selectedPreview.to === item.to ? styles.previewSidebarItemActive : ''
                      }`}
                      onClick={() => setSelectedPreview(item)}
                      type="button">
                      {item.title}
                    </button>
                  ))}
                </div>
                <div className={styles.previewBody}>
                  <div className={styles.previewLabel}>{selectedPreview.label}</div>
                  <div className={styles.previewHeading}>{selectedPreview.previewHeading}</div>
                  {selectedPreview.previewLines.map((line) => (
                    <p key={line} className={styles.previewDescription}>
                      {line}
                    </p>
                  ))}
                  <div className={styles.previewCode}>{selectedPreview.previewCode}</div>
                  <Link className={styles.previewCta} to={selectedPreview.to}>
                    打开当前文档
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.mainContent}>
        <section className={`container ${styles.quickSection}`}>
          <div className={styles.sectionHeader}>
            <Heading as="h2">常用入口</Heading>
          </div>
          <div className={styles.quickGrid}>
            {quickLinks.map((item) => (
              <Link key={item.to} className={styles.quickCard} to={item.to}>
                <Heading as="h3">{item.title}</Heading>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
