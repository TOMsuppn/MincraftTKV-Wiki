import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const quickLinks = [
  {
    title: '首次部署',
    description: '从 Paper 核心、License 到地图与点位配置，一次看完整个初次接入流程。',
    to: '/docs/intro',
  },
  {
    title: '玩家命令',
    description: '收录 /play、/market、/eco、/mstats 等常用玩家指令说明。',
    to: '/docs/players/help',
  },
  {
    title: '管理命令',
    description: '整理经济、市场、战令、惩罚与任务系统的后台管理命令。',
    to: '/docs/admin-commands/ecoadmin',
  },
  {
    title: '系统说明',
    description: '集中查看藏身处与撤离点等核心系统规则，便于排错和培训。',
    to: '/docs/systems/hideout',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <header className={styles.heroBanner}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>文档</p>
              <Heading as="h1" className={styles.heroTitle}>
                MinecraftTKV 使用文档
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
            <div className={styles.heroPreview}>
              <div className={styles.previewPanel}>
                <div className={styles.previewHeader}>
                  <span className={styles.previewDot} />
                  <span className={styles.previewDot} />
                  <span className={styles.previewDot} />
                </div>
                <div className={styles.previewSidebar}>
                  <div className={styles.previewSidebarTitle}>文档导航</div>
                  <div className={styles.previewSidebarItem}>首次使用</div>
                  <div className={styles.previewSidebarItem}>系统说明</div>
                  <div className={`${styles.previewSidebarItem} ${styles.previewSidebarItemActive}`}>
                    玩家命令
                  </div>
                  <div className={styles.previewSidebarItem}>管理命令</div>
                </div>
                <div className={styles.previewBody}>
                  <div className={styles.previewLabel}>文档</div>
                  <div className={styles.previewHeading}>MinecraftTKV Wiki</div>
                  <div className={styles.previewText} />
                  <div className={styles.previewTextShort} />
                  <div className={styles.previewCode}>/play Factory</div>
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
            <p>从 GitBook 迁移过来的主要文档已经按使用场景分组完成。</p>
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
