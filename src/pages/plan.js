import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {useEffect, useRef, useState} from 'react';
import styles from './index.module.css';

const Brackets = () => (
  <>
    <span className={`${styles.cornerBracket} ${styles.cornerTL}`} aria-hidden="true" />
    <span className={`${styles.cornerBracket} ${styles.cornerTR}`} aria-hidden="true" />
    <span className={`${styles.cornerBracket} ${styles.cornerBL}`} aria-hidden="true" />
    <span className={`${styles.cornerBracket} ${styles.cornerBR}`} aria-hidden="true" />
  </>
);

const SplitTitle = ({lines}) => (
  <>
    {lines.map((line) => <span key={line} className={styles.titleLine}>{line}</span>)}
  </>
);

const RollingPrice = ({value}) => {
  const previousValue = useRef(value);
  const previous = previousValue.current;
  const digitCount = Math.max(previous.length, value.length);
  const previousDigits = previous.padEnd(digitCount, ' ');
  const nextDigits = value.padEnd(digitCount, ' ');

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return (
    <span className={styles.price} aria-label={`价格 ${value} 元`}>
      <span className={styles.priceDigits} aria-hidden="true" key={`${previous}-${value}`}>
        {nextDigits.split('').map((digit, index) => {
          const previousDigit = previousDigits[index];
          const changed = previousDigit !== digit;
          return (
            <span className={`${styles.priceDigit} ${changed ? styles.priceDigitChanging : ''}`} key={`${index}-${digit}`} style={{'--digit-index': index}}>
              <span className={styles.priceDigitTrack}>
                <span>{previousDigit}</span>
                <span>{digit}</span>
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default function Plan() {
  const [proPlan, setProPlan] = useState('lifetime');
  const [subMonths, setSubMonths] = useState(1);
  const subTotal = 45 * subMonths;
  const priceLabel = proPlan === 'lifetime' ? '150' : String(subTotal);
  const priceKey = `${proPlan}-${subMonths}`;

  return (
    <Layout title="计划 (Plan)" description="MinecraftTKV 授权计划与部署方案">
      <main className={styles.planPage}>
        <section className={styles.pricingSection}>
          <div className={`container ${styles.planContainer}`}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionBadge}>SECTION · 03 · PLAN</div>
              <div className={styles.sectionHeaderRow}>
                <Heading as="h1" className={styles.sectionTitle}>
                  <SplitTitle lines={['选择你的装备等级']} />
                  <span className={styles.titleEn}> / SELECT YOUR LOADOUT</span>
                </Heading>
                <span className={styles.hazardStripe} aria-hidden="true" />
              </div>
              <p className={styles.sectionSubtitle}>两档配置，从单服实用到全服战备。一次付费，长期服役。</p>
            </div>

            <div className={styles.pricingGrid}>
              <div className={styles.pricingCard}>
                <Brackets />
                <div className={styles.tierBadge}>TIER-01</div>
                <div className={styles.issueLabel}>STANDARD ISSUE</div>
                <div className={styles.tierName}>PRO</div>
                <div className={styles.planTabs} role="tablist" aria-label="PRO 授权类型" style={{'--plan-tab-index': proPlan === 'lifetime' ? 0 : 1}}>
                  <button type="button" role="tab" aria-selected={proPlan === 'lifetime'} className={`${styles.planTab} ${proPlan === 'lifetime' ? styles.planTabActive : ''}`} onClick={() => setProPlan('lifetime')}>永久买断<span>ONE-TIME</span></button>
                  <button type="button" role="tab" aria-selected={proPlan === 'sub'} className={`${styles.planTab} ${proPlan === 'sub' ? styles.planTabActive : ''}`} onClick={() => setProPlan('sub')}>订阅<span>SUBSCRIPTION</span></button>
                </div>
                <div className={styles.priceArea}>
                  <div className={styles.pricingRow}><div className={styles.priceTag}><span className={styles.currency}>¥</span><RollingPrice value={priceLabel} /><span className={styles.period}>{proPlan === 'lifetime' ? '一次性' : `/ ${subMonths} 个月`}</span></div></div>
                  <div className={styles.accessLabel} key={`label-${priceKey}`}>{proPlan === 'lifetime' ? '永久授权 · 无月费' : `按月订阅 ¥45/月 · 当前 ${subMonths} 个月，单次最多 3 个月`}</div>
                </div>
                <div className={styles.durationSlot}>
                  {proPlan === 'sub' ? <div className={styles.durationGroup} role="radiogroup" aria-label="订阅时长" style={{'--duration-index': subMonths - 1}}>{[1, 2, 3].map((month) => <button key={month} type="button" role="radio" aria-checked={subMonths === month} className={`${styles.durationChip} ${subMonths === month ? styles.durationChipActive : ''}`} onClick={() => setSubMonths(month)}>{month} 月</button>)}</div> : <div className={styles.durationHint}>买断后无需续费 · 享所有未来版本</div>}
                </div>
                <div className={styles.tierDescription} key={`description-${proPlan}`}>{proPlan === 'lifetime' ? '单服部署，覆盖核心模块与基础维护更新。' : '短期试用或临时活动部署，灵活上下机。订阅期内享 PRO 全部模块。'}</div>
                <ul className={styles.featureList}><li>单服授权 · 1× 节点</li><li>核心模块全开放</li><li>社区频道支持</li><li>版本自动更新</li></ul>
                <button type="button" className={styles.buyButton} onClick={() => {}}>{proPlan === 'lifetime' ? '永久买断 · ¥150' : `订阅 ${subMonths} 个月 · 共 ¥${subTotal}`} ↗</button>
              </div>

              <div className={`${styles.pricingCard} ${styles.pricingCardRecommended}`}>
                <Brackets />
                <span className={styles.maxCardGrid} aria-hidden="true" />
                <div className={styles.recommendedBadge}>
                  <span aria-hidden="true">◆</span>
                  <span>RECOMMENDED · 推荐</span>
                  <span aria-hidden="true">◆</span>
                </div>
                <div className={styles.tierBadge}>TIER-02</div>
                <div className={styles.issueLabel}>FULL LOADOUT</div>
                <div className={styles.tierName}>MAX</div>
                <div className={styles.planTabsPlaceholder} aria-hidden="true" />
                <div className={styles.priceArea}><div className={styles.pricingRow}><div className={`${styles.priceTag} ${styles.priceTagPlaceholder}`}><span className={styles.pricePlaceholder}>定价暂未开放</span></div></div><div className={styles.accessLabel}>价格与购买入口暂不显示</div></div>
                <div className={styles.durationSlot}><div className={styles.durationHint}>多服无限部署 · 全模块解锁</div></div>
                <div className={styles.tierDescription}>多服无限授权，全模块解锁，优先技术支持。</div>
                <ul className={styles.featureList}><li>多服无限授权 · ∞× 节点</li><li>全部高级模块解锁</li><li>优先 1v1 技术支持</li><li>永久免费版本更新</li></ul>
                <button type="button" className={`${styles.buyButton} ${styles.buyButtonMax} ${styles.buyButtonPlaceholder}`} disabled>MAX 暂未开放 · COMING SOON</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
