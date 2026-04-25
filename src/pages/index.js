import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {useState} from 'react';
import styles from './index.module.css';

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

const noop = (e) => {
  e?.preventDefault?.();
  /* TODO: 接入支付 */
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [selectedPreview, setSelectedPreview] = useState(quickLinks[0]);
  const [proPlan, setProPlan] = useState('lifetime'); // 'lifetime' | 'sub'
  const [subMonths, setSubMonths] = useState(1); // 1 | 2 | 3

  const subTotal = 45 * subMonths;
  const priceLabel = proPlan === 'lifetime' ? '150' : String(subTotal);
  const priceKey = `${proPlan}-${subMonths}`;

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
              <div className={styles.dossierBadge}>DOSSIER · MINECRAFTTKV / TACTICAL WIKI</div>
              <Heading as="h1" className={styles.heroTitle}>
                <SplitTitle lines={['MINECRAFT', 'TKV · WIKI']} baseDelay={120} />
              </Heading>
              <div className={styles.missionBrief}>— MISSION BRIEF —</div>
              <p className={styles.heroSubtitle}>
                关于 <strong>MinecraftTKV</strong> 插件的战术级说明档案。部署、系统、玩家命令与管理后门，经过整理、编号、上锁——现已就位，随时可以交付行动组。
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
              <div className={styles.statValue}>Alpha.2</div>
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
      <section className={styles.featuresSection}>
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
              从战局管理到统计系统，体验 MinecraftTKV 的核心功能模块。
            </p>
          </div>
          <div className={styles.featuresGrid}>
            <FeatureCard
              title="战局管理器"
              images={['/img/features/match-manager-1.png', '/img/features/match-manager-2.png']}
            />
            <FeatureCard
              title="MTKV CLI"
              images={['/img/features/mtkv-cli.png']}
            />
            <FeatureCard
              title="撤离点"
              images={['/img/features/extract-point.png']}
            />
            <FeatureCard
              title="社交系统"
              images={['/img/features/social-system.png']}
            />
            <FeatureCard
              title="物资箱"
              images={['/img/features/loot-box-1.png', '/img/features/loot-box-2.png']}
            />
            <FeatureCard
              title="进度系统"
              images={['/img/features/progress-system.png']}
            />
            <FeatureCard
              title="统计信息"
              images={['/img/features/stats-system.png']}
            />
          </div>
        </div>
      </section>

      {/* ---------- Pricing ---------- */}
      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>SECTION · 03 · ARSENAL</div>
            <div className={styles.sectionHeaderRow}>
              <Heading as="h2" className={styles.sectionTitle}>
                <SplitTitle lines={['选择你的装备等级']} />
                <span className={styles.titleEn}> / SELECT YOUR LOADOUT</span>
              </Heading>
              <span className={styles.hazardStripe} aria-hidden="true" />
            </div>
            <p className={styles.sectionSubtitle}>
              两档配置——从单服实用到全服战备。一次付费，长期服役。
            </p>
          </div>
          <div className={styles.pricingGrid}>
            {/* PRO Tier */}
            <div className={styles.pricingCard}>
              <Brackets />
              <div className={styles.tierBadge}>TIER-01</div>
              <div className={styles.issueLabel}>STANDARD ISSUE</div>
              <div className={styles.tierName}>PRO</div>

              <div className={styles.planTabs} role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={proPlan === 'lifetime'}
                  className={`${styles.planTab} ${proPlan === 'lifetime' ? styles.planTabActive : ''}`}
                  onClick={() => setProPlan('lifetime')}>
                  永久买断<span>ONE-TIME</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={proPlan === 'sub'}
                  className={`${styles.planTab} ${proPlan === 'sub' ? styles.planTabActive : ''}`}
                  onClick={() => setProPlan('sub')}>
                  订阅<span>SUBSCRIPTION</span>
                </button>
              </div>

              <div className={styles.priceArea}>
                <div className={styles.pricingRow} key={priceKey}>
                  <div className={styles.priceTag}>
                    <span className={styles.currency}>¥</span>
                    <span className={`${styles.price} ${styles.priceRoll}`}>{priceLabel}</span>
                    <span className={styles.period}>
                      {proPlan === 'lifetime' ? '一次性' : `/ ${subMonths} 个月`}
                    </span>
                  </div>
                </div>
                <div className={styles.accessLabel} key={`label-${priceKey}`}>
                  {proPlan === 'lifetime'
                    ? '永久授权 · 无月费'
                    : `按月订阅 ¥45/月 · 当前 ${subMonths} 个月，单次最多 3 个月`}
                </div>
              </div>

              {/* 订阅时长选择（slot 高度恒定，永久态显示提示） */}
              <div className={styles.durationSlot}>
                {proPlan === 'sub' ? (
                  <div className={styles.durationGroup} role="radiogroup" aria-label="订阅时长">
                    {[1, 2, 3].map((m) => (
                      <button
                        key={m}
                        type="button"
                        role="radio"
                        aria-checked={subMonths === m}
                        className={`${styles.durationChip} ${subMonths === m ? styles.durationChipActive : ''}`}
                        onClick={() => setSubMonths(m)}>
                        {m} 月
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className={styles.durationHint}>买断后无需续费 · 享所有未来版本</div>
                )}
              </div>

              <div className={styles.tierDescription} key={`desc-${proPlan}`}>
                {proPlan === 'lifetime'
                  ? '单服部署，覆盖核心模块与基础维护更新。'
                  : '短期试用或临时活动部署，灵活上下机。订阅期内享 PRO 全部模块。'}
              </div>

              <ul className={styles.featureList}>
                <li>单服授权 · 1× 节点</li>
                <li>核心模块全开放</li>
                <li>社区频道支持</li>
                <li>版本自动更新</li>
              </ul>

              <button type="button" className={styles.buyButton} onClick={noop} key={`btn-${priceKey}`}>
                {proPlan === 'lifetime'
                  ? '永久买断 · ¥150'
                  : `订阅 ${subMonths} 个月 · 共 ¥${subTotal}`} ↗
              </button>
            </div>

            {/* MAX Tier */}
            <div className={`${styles.pricingCard} ${styles.pricingCardRecommended}`}>
              <Brackets />
              <div className={styles.recommendedBadge}>◆ RECOMMENDED · 推荐 ◆</div>
              <div className={styles.tierBadge}>TIER-02</div>
              <div className={styles.issueLabel}>FULL LOADOUT</div>
              <div className={styles.tierName}>MAX</div>

              {/* 占位以与 PRO 的 tab 同高 */}
              <div className={styles.planTabsPlaceholder} aria-hidden="true" />

              <div className={styles.priceArea}>
                <div className={styles.pricingRow}>
                  <div className={styles.priceTag}>
                    <span className={styles.currency}>¥</span>
                    <span className={`${styles.price} ${styles.priceRoll}`}>850</span>
                    <span className={styles.period}>买断</span>
                  </div>
                </div>
                <div className={styles.accessLabel}>永久授权 · 无月费</div>
              </div>

              <div className={styles.durationSlot}>
                <div className={styles.durationHint}>多服无限部署 · 全模块解锁</div>
              </div>

              <div className={styles.tierDescription}>
                多服无限授权，全模块解锁，优先技术支持。
              </div>

              <ul className={styles.featureList}>
                <li>多服无限授权 · ∞× 节点</li>
                <li>全部高级模块解锁</li>
                <li>优先 1v1 技术支持</li>
                <li>永久免费版本更新</li>
              </ul>

              <button type="button" className={`${styles.buyButton} ${styles.buyButtonMax}`} onClick={noop}>
                立即购买 MAX · ¥850 ↗
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
