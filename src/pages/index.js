import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {useState} from 'react';
import styles from './index.module.css';
import plasticStyles from './plastic.module.css';

const quickLinks = [
  {
    op: 'OP-01', risk: 'STD', enLabel: 'INITIAL DEPLOYMENT',
    title: '首次部署',
    description: '从 Paper 核心、License 到地图与点位配置，一次看完整个初次接入流程。',
    label: '教程',
    previewHeading: '🚀 首次使用 MinecraftTKV',
    previewLines: ['从 Paper 到 License 配置，完整走一遍首次接入流程。', '适合第一次部署插件时快速对照。'],
    previewCode: '/docs/intro',
    to: '/docs/intro',
  },
  {
    op: 'OP-02', risk: 'LOW', enLabel: 'PLAYER COMMANDS',
    title: '玩家命令',
    description: '收录 /play、/market、/eco、/mstats 等常用玩家指令说明。',
    label: '命令',
    previewHeading: '🧭 Mhelp 与玩家命令',
    previewLines: ['集中查看 /play、/market、/eco、/mstats 等常用指令。', '适合给玩家服内培训或快速查询。'],
    previewCode: '/play Factory',
    to: '/docs/players/help',
  },
  {
    op: 'OP-03', risk: 'HIGH', enLabel: 'ADMIN OVERRIDE',
    title: '管理命令',
    description: '整理经济、市场、战令、惩罚与任务系统的后台管理命令。',
    label: '管理',
    previewHeading: '🛠️ 后台管理命令',
    previewLines: ['覆盖经济、市场、战令、惩罚与任务系统的后台入口。', '适合服主和管理员排错与日常维护。'],
    previewCode: '/mtkv ecoadmin reload',
    to: '/docs/admin-commands/ecoadmin',
  },
  {
    op: 'OP-04', risk: 'MED', enLabel: 'CORE SYSTEMS',
    title: '系统说明',
    description: '集中查看藏身处与撤离点等核心系统规则，便于排错和培训。',
    label: '系统',
    previewHeading: '🏠 系统规则与机制',
    previewLines: ['快速理解藏身处、撤离点等核心系统的设计逻辑。', '适合培训、排错和整理服内说明。'],
    previewCode: '/docs/systems/hideout',
    to: '/docs/systems/hideout',
  },
];

const Brackets = () => (
  <>
    <span className={`${styles.cornerBracket} ${styles.cornerTL}`} aria-hidden="true" />
    <span className={`${styles.cornerBracket} ${styles.cornerTR}`} aria-hidden="true" />
    <span className={`${styles.cornerBracket} ${styles.cornerBL}`} aria-hidden="true" />
    <span className={`${styles.cornerBracket} ${styles.cornerBR}`} aria-hidden="true" />
  </>
);

// 功能卡片组件 - 支持图片堆叠交互
const FeatureCard = ({title, images}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.featureCard}>
      <Brackets />
      <div className={styles.featureImageStack}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`${styles.featureImage} ${idx === activeIndex ? styles.featureImageActive : ''}`}
            style={{
              '--stack-index': idx,
              '--stack-total': images.length,
            }}
          >
            <img src={img} alt={`${title} ${idx + 1}`} loading="lazy" />
          </div>
        ))}
        {images.length > 1 && (
          <>
            <button
              type="button"
              className={styles.featureNavButton + ' ' + styles.featureNavPrev}
              onClick={handlePrev}
              aria-label="上一张图片"
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.featureNavButton + ' ' + styles.featureNavNext}
              onClick={handleNext}
              aria-label="下一张图片"
            >
              ›
            </button>
            <div className={styles.featureCounter}>
              {activeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
      <div className={styles.featureTitle}>{title}</div>
      {images.length > 1 && (
        <div className={styles.featureIndicators}>
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`${styles.featureIndicator} ${idx === activeIndex ? styles.featureIndicatorActive : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`查看图片 ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const featureShowcase = [
  {
    code: 'M-01',
    align: 'left',
    kicker: 'MATCH CONTROL',
    lines: ['战局', '管理器'],
    images: ['/img/features/match-manager-1.png', '/img/features/match-manager-2.png'],
  },
  {
    code: 'M-02',
    align: 'right',
    kicker: 'COMMAND LINE',
    lines: ['MTKV', 'CLI'],
    images: ['/img/features/mtkv-cli.png'],
  },
  {
    code: 'M-03',
    align: 'left',
    kicker: 'EXTRACTION NETWORK',
    lines: ['撤离点', '系统'],
    images: ['/img/features/extract-point.png'],
  },
  {
    code: 'M-04',
    align: 'right',
    kicker: 'SOCIAL LINK',
    lines: ['社交', '系统'],
    images: ['/img/features/social-system.png'],
  },
  {
    code: 'M-05',
    align: 'left',
    kicker: 'SUPPLY CACHE',
    lines: ['物资箱', '系统'],
    images: ['/img/features/loot-box-1.png', '/img/features/loot-box-2.png'],
  },
  {
    code: 'M-06',
    align: 'right',
    kicker: 'PROGRESSION CORE',
    lines: ['进度', '系统'],
    images: ['/img/features/progress-system.png'],
  },
  {
    code: 'M-07',
    align: 'left',
    kicker: 'FIELD TELEMETRY',
    lines: ['统计', '信息'],
    images: ['/img/features/stats-system.png'],
  },
];

function PlasticFeatureRow({feature}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageCount = feature.images.length;

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? imageCount - 1 : index - 1));
  };

  const showNext = () => {
    setActiveIndex((index) => (index === imageCount - 1 ? 0 : index + 1));
  };

  const copy = (
    <div className={`${plasticStyles.featureCopy} ${styles.homePlasticCopy}`}>
      <div className={`${plasticStyles.featureKicker} ${styles.homePlasticKicker}`}>{feature.kicker}</div>
      <Heading as="h3" className={`${plasticStyles.featureTitle} ${styles.homePlasticTitle}`}>
        {feature.lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </Heading>
    </div>
  );

  const visual = (
    <div className={`${plasticStyles.featureVisual} ${styles.homePlasticVisual}`} aria-hidden="true">
      <div className={`${plasticStyles.visualFrame} ${styles.homePlasticFrame}`}>
        <img
          className={`${plasticStyles.visualImage} ${styles.homePlasticImage}`}
          src={feature.images[activeIndex]}
          alt={`${feature.lines.join('')} ${activeIndex + 1}`}
          loading="lazy"
        />
        <span className={`${plasticStyles.visualCode} ${styles.homePlasticCode}`}>{feature.code}</span>
        {imageCount > 1 && (
          <>
            <button
              type="button"
              className={`${styles.homePlasticNavButton} ${styles.homePlasticNavPrev}`}
              onClick={showPrevious}
              aria-label={`${feature.lines.join('')}：上一张图片`}>
              ‹
            </button>
            <button
              type="button"
              className={`${styles.homePlasticNavButton} ${styles.homePlasticNavNext}`}
              onClick={showNext}
              aria-label={`${feature.lines.join('')}：下一张图片`}>
              ›
            </button>
            <span className={styles.homePlasticCounter}>
              {String(activeIndex + 1).padStart(2, '0')} / {String(imageCount).padStart(2, '0')}
            </span>
            <div className={styles.homePlasticIndicators}>
              {feature.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={`${styles.homePlasticIndicator} ${index === activeIndex ? styles.homePlasticIndicatorActive : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`查看第 ${index + 1} 张图片`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className={`${plasticStyles.featureRow} ${feature.align === 'right' ? plasticStyles.featureRowright : ''}`}>
      {feature.align === 'left' ? (
        <>
          {visual}
          {copy}
        </>
      ) : (
        <>
          {copy}
          {visual}
        </>
      )}
    </div>
  );
}

// 大标题：从右到左逐字 blur-up
const SplitTitle = ({lines, className, baseDelay = 0}) => {
  return (
    <>
      {lines.map((line, lineIdx) => {
        const chars = Array.from(line);
        return (
          <span key={lineIdx} className={styles.titleLine}>
            {chars.map((c, i) => (
              <span
                key={i}
                className={`${styles.titleChar} ${className || ''}`}
                style={{
                  '--c-delay': `${baseDelay + i * 55 + lineIdx * 200}ms`,
                  animationDelay: `${baseDelay + i * 55 + lineIdx * 200}ms`,
                }}
                aria-hidden="true">
                {c === ' ' ? ' ' : c}
              </span>
            ))}
          </span>
        );
      })}
      <span className="sr-only">{lines.join(' ')}</span>
    </>
  );
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [selectedPreview, setSelectedPreview] = useState(quickLinks[0]);

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      {/* ---------- Hero ---------- */}
      <header className={styles.heroBanner}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.operationsHeader}>
                <span className={styles.statusDot}></span>
                <span className={styles.operationsText}>OPERATIONS TERMINAL</span>
                <span className={styles.sectorText}>| SECTOR · MTKV</span>
                <span className={styles.gridCoord}>GRID 37.43N · 115.12E | UTC</span>
              </div>
              <div className={styles.dossierBadge}>DOSSIER · MINECRAFTTKV / BETA.1-PREVIEW3</div>
              <Heading as="h1" className={styles.heroTitle}>
                <SplitTitle lines={['MINECRAFT', 'TKV · WIKI']} baseDelay={120} />
              </Heading>
              <div className={styles.missionBrief}>— MISSION BRIEF —</div>
              <p className={styles.heroSubtitle}>
                <strong>MinecraftTKV Beta.1-Preview3</strong> 测试版本现已更新。集中整理战局管理、SA / COB AI、武器系统、物资箱、钥匙卡、藏身处、社交功能与完整配置文档，帮助服主快速部署并稳定运行。
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} to="/docs/intro">
                  <span>[ 01 ]</span> 进入档案室 →
                </Link>
                <Link className={styles.secondaryButton} to="/docs/changelog">
                  <span>[ 02 ]</span> 更新日志
                </Link>
              </div>
            </div>
            <div className={styles.heroPreview}>
              <div className={styles.previewPanel}>
                <div className={styles.previewHeader}>
                  <span className={styles.previewDot}></span>
                  <span className={styles.previewDot}></span>
                  <span className={styles.previewDot}></span>
                  <span className={styles.terminalTitle}>FIELD TERMINAL / INSPECTOR</span>
                  <span className={styles.opCode}>OP-01</span>
                </div>
                <div className={styles.previewSidebar}>
                  <div className={styles.operationsLabel}>/ OPERATIONS</div>
                  {quickLinks.map((item, idx) => (
                    <button
                      key={item.to}
                      className={`${styles.previewSidebarItem} ${
                        selectedPreview.to === item.to ? styles.previewSidebarItemActive : ''
                      }`}
                      onClick={() => setSelectedPreview(item)}
                      type="button">
                      <span className={styles.opNumber}>OP-0{idx + 1}</span> {item.title}
                    </button>
                  ))}
                </div>
                <div className={styles.previewBody} key={selectedPreview.to}>
                  <div className={styles.previewBodyTopRow}>
                    <div className={styles.previewLabel}>{selectedPreview.label}</div>
                    <div className={styles.callsign}>CALLSIGN · DEPLOY</div>
                    <div className={styles.riskLevel}>RISK STD</div>
                  </div>
                  <div className={styles.previewHeading}>{selectedPreview.previewHeading}</div>
                  {selectedPreview.previewLines.map((line, idx) => (
                    <p key={idx} className={styles.previewDescription}>
                      <span className={styles.stepNumber}>0{idx + 1}</span> {line}
                    </p>
                  ))}
                  <div className={styles.previewCode}>$ {selectedPreview.previewCode}</div>
                  <Link className={styles.previewCta} to={selectedPreview.to}>
                    开启档案 · OPEN FILE ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Stats（点缀条） ---------- */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>04</div>
              <div className={styles.statLabel}>OPERATIONS</div>
              <div className={styles.statSublabel}>可执行行动</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>∞</div>
              <div className={styles.statLabel}>COMMANDS</div>
              <div className={styles.statSublabel}>命令条目</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>BETA.1</div>
              <div className={styles.statLabel}>PATCH</div>
              <div className={styles.statSublabel}>当前版本</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue} style={{color: '#ffa94d'}}>LIVE</div>
              <div className={styles.statLabel}>STATUS</div>
              <div className={styles.statSublabel}>服务状态</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Operations Deck ---------- */}
      <section className={styles.opsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>SECTION · 02</div>
            <div className={styles.sectionHeaderRow}>
              <Heading as="h2" className={styles.sectionTitle}>
                <SplitTitle lines={['执行档案']} />
                <span className={styles.titleEn}> / OPERATIONS DECK</span>
              </Heading>
              <span className={styles.hazardStripe} aria-hidden="true" />
            </div>
          </div>
          <div className={styles.opsGrid}>
            {quickLinks.map((item, idx) => (
              <Link key={item.to} className={styles.opCard} to={item.to}>
                <Brackets />
                <span className={styles.opCardTopAccent} aria-hidden="true" />
                <div className={styles.opCardHeader}>
                  <span className={styles.opCardCode}>{item.op}</span>
                  <span className={`${styles.opCardRisk} ${styles[`risk${item.risk}`]}`}>
                    RISK · {item.risk}
                  </span>
                </div>
                <div className={styles.opCardEnLabel}>{item.enLabel}</div>
                <div className={styles.opCardTitle}>{item.title}</div>
                <p className={styles.opCardDesc}>{item.description}</p>
                <div className={styles.opCardFooter}>
                  <span className={styles.opCardChip}>{item.label}</span>
                  <span className={styles.opCardEnter}>ENTER →</span>
                </div>
                <span className={styles.opCardWatermark} aria-hidden="true">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Features Showcase ---------- */}
      <section className={`${styles.featuresSection} ${plasticStyles.featuresSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>SECTION · 02.5 · SHOWCASE</div>
            <div className={styles.sectionHeaderRow}>
              <Heading as="h2" className={styles.sectionTitle}>
                <SplitTitle lines={['功能展示']} />
                <span className={styles.titleEn}> / FEATURES SHOWCASE</span>
              </Heading>
              <span className={styles.hazardStripe} aria-hidden="true" />
            </div>
            <p className={styles.sectionSubtitle}>
              从战局管理、SA / COB AI 到武器、物资箱与社交系统，快速了解 Beta.1-Preview3 的核心功能。
            </p>
          </div>
          <div className={plasticStyles.featuresTrack}>
            {featureShowcase.map((feature) => (
              <PlasticFeatureRow key={feature.code} feature={feature} />
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
