import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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

const KOOK_URL = 'https://kook.vip/A33qtO';
const AFDIAN_URL = 'https://afdian.com/a/TOMsuppn';
const BILIBILI_URL = 'https://space.bilibili.com/454944513';
const LITE_PRICE = 60;
const PRO_MONTHLY_PRICE = 60;
const MAX_PRICE = 850;

const PurchaseMenu = ({id, onClose, isEnglish}) => (
  <div id={id} className={styles.purchaseMenu} role="menu" aria-label={isEnglish ? 'Choose a purchase channel' : '选择购买渠道'}>
    <a className={styles.purchaseOption} href={KOOK_URL} target="_blank" rel="noopener noreferrer" role="menuitem" onClick={onClose}><span>{isEnglish ? 'Purchase through KOOK' : '通过 KOOK 购买'}</span><span aria-hidden="true">↗</span></a>
    <a className={styles.purchaseOption} href={AFDIAN_URL} target="_blank" rel="noopener noreferrer" role="menuitem" onClick={onClose}><span>{isEnglish ? 'Purchase through Afdian' : '通过爱发电购买'}</span><span aria-hidden="true">↗</span></a>
    <a className={styles.purchaseOption} href={BILIBILI_URL} target="_blank" rel="noopener noreferrer" role="menuitem" onClick={onClose}><span>{isEnglish ? 'Contact the author to purchase' : '通过联系作者购买'}</span><span aria-hidden="true">↗</span></a>
  </div>
);

const RollingPrice = ({value, isEnglish}) => {
  const previousValue = useRef(value);
  const previous = previousValue.current;
  const digitCount = Math.max(previous.length, value.length);
  const previousDigits = previous.padEnd(digitCount, ' ');
  const nextDigits = value.padEnd(digitCount, ' ');

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return (
    <span className={styles.price} aria-label={isEnglish ? `Price: ${value} yuan` : `价格 ${value} 元`}>
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
  const {i18n} = useDocusaurusContext();
  const isEnglish = i18n.currentLocale === 'en';
  const [proPlan, setProPlan] = useState('lifetime');
  const [subMonths, setSubMonths] = useState(1);
  const [purchaseMenuOpen, setPurchaseMenuOpen] = useState(null);
  const purchaseMenuRef = useRef(null);
  const subTotal = PRO_MONTHLY_PRICE * subMonths;
  const priceLabel = proPlan === 'lifetime' ? '170' : String(subTotal);
  const priceKey = `${proPlan}-${subMonths}`;

  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === 'Escape' || (event.type === 'mousedown' && !purchaseMenuRef.current?.contains(event.target))) {
        setPurchaseMenuOpen(null);
      }
    };

    document.addEventListener('keydown', closeMenu);
    document.addEventListener('mousedown', closeMenu);
    return () => {
      document.removeEventListener('keydown', closeMenu);
      document.removeEventListener('mousedown', closeMenu);
    };
  }, []);

  return (
    <Layout title={isEnglish ? 'Plans' : '计划 (Plan)'} description={isEnglish ? 'MinecraftTKV licensing and deployment plans' : 'MinecraftTKV 授权计划与部署方案'}>
      <main className={styles.planPage}>
        <section className={styles.pricingSection}>
          <div className={`container ${styles.planContainer}`}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionBadge}>SECTION · 03 · PLAN</div>
              <div className={styles.sectionHeaderRow}>
                <Heading as="h1" className={styles.sectionTitle}>
                  <SplitTitle lines={[isEnglish ? 'Choose your loadout' : '选择你的装备等级']} />
                  <span className={styles.titleEn}> / SELECT YOUR LOADOUT</span>
                </Heading>
                <span className={styles.hazardStripe} aria-hidden="true" />
              </div>
              <p className={styles.sectionSubtitle}>{isEnglish ? 'Three plans, from a lightweight deployment to full server readiness. Pay once, deploy for the long term.' : '三档配置，从轻量部署到全服战备。一次付费，长期服役。'}</p>
            </div>

            <div className={styles.pricingGrid} ref={purchaseMenuRef}>
              <div className={styles.pricingCard}>
                <Brackets />
                <div className={styles.tierBadge}>TIER-00</div>
                <div className={styles.issueLabel}>STARTER KIT</div>
                <div className={styles.tierName}>LITE</div>
                <div className={styles.planTabsPlaceholder} aria-hidden="true" />
                <div className={styles.priceArea}><div className={styles.pricingRow}><div className={styles.priceTag}><span className={styles.currency}>¥</span><RollingPrice value={String(LITE_PRICE)} isEnglish={isEnglish} /><span className={styles.period}>{isEnglish ? 'one-time' : '一次性'}</span></div></div><div className={styles.accessLabel}>{isEnglish ? 'Lifetime license · no monthly fee' : '永久授权 · 无月费'}</div></div>
                <div className={styles.durationSlot}><div className={styles.durationHint}>{isEnglish ? 'Lightweight license · one-server deployment' : '轻量级授权 · 单服部署'}</div></div>
                <div className={styles.tierDescription}>{isEnglish ? 'Essential features for small-server deployments.' : '适合小型服务器的基础功能部署。'}</div>
                <ul className={styles.featureList}><li>{isEnglish ? 'One server · 1× node' : '单服授权 · 1× 节点'}</li><li>{isEnglish ? 'Essential modules' : '常用基础模块'}</li><li>{isEnglish ? 'Community support' : '社区频道支持'}</li><li>{isEnglish ? 'Maintenance updates' : '维护更新'}</li></ul>
                <div className={styles.purchaseMenuWrap}>
                  {purchaseMenuOpen === 'lite' && <PurchaseMenu id="purchase-menu-lite" onClose={() => setPurchaseMenuOpen(null)} isEnglish={isEnglish} />}
                  <button type="button" className={styles.buyButton} aria-expanded={purchaseMenuOpen === 'lite'} aria-controls="purchase-menu-lite" onClick={() => setPurchaseMenuOpen((open) => open === 'lite' ? null : 'lite')}>LITE · ¥60 ↗</button>
                </div>
              </div>

              <div className={styles.pricingCard}>
                <Brackets />
                <div className={styles.tierBadge}>TIER-01</div>
                <div className={styles.issueLabel}>STANDARD ISSUE</div>
                <div className={styles.tierName}>PRO</div>
                <div className={styles.planTabs} role="tablist" aria-label={isEnglish ? 'PRO license type' : 'PRO 授权类型'} style={{'--plan-tab-index': proPlan === 'lifetime' ? 0 : 1}}>
                  <button type="button" role="tab" aria-selected={proPlan === 'lifetime'} className={`${styles.planTab} ${proPlan === 'lifetime' ? styles.planTabActive : ''}`} onClick={() => setProPlan('lifetime')}>{isEnglish ? 'One-time' : '永久买断'}<span>ONE-TIME</span></button>
                  <button type="button" role="tab" aria-selected={proPlan === 'sub'} className={`${styles.planTab} ${proPlan === 'sub' ? styles.planTabActive : ''}`} onClick={() => setProPlan('sub')}>{isEnglish ? 'Subscription' : '订阅'}<span>SUBSCRIPTION</span></button>
                </div>
                <div className={styles.priceArea}>
                  <div className={styles.pricingRow}><div className={styles.priceTag}><span className={styles.currency}>¥</span><RollingPrice value={priceLabel} isEnglish={isEnglish} /><span className={styles.period}>{proPlan === 'lifetime' ? (isEnglish ? 'one-time' : '一次性') : (isEnglish ? `/ ${subMonths} months` : `/ ${subMonths} 个月`)}</span></div></div>
                  <div className={styles.accessLabel} key={`label-${priceKey}`}>{proPlan === 'lifetime' ? (isEnglish ? 'Lifetime license · no monthly fee' : '永久授权 · 无月费') : (isEnglish ? `¥60/month · ${subMonths} month${subMonths > 1 ? 's' : ''} selected, maximum 3 months per order` : `按月订阅 ¥60/月 · 当前 ${subMonths} 个月，单次最多 3 个月`)}</div>
                </div>
                <div className={styles.durationSlot}>
                  {proPlan === 'sub' ? <div className={styles.durationGroup} role="radiogroup" aria-label={isEnglish ? 'Subscription duration' : '订阅时长'} style={{'--duration-index': subMonths - 1}}>{[1, 2, 3].map((month) => <button key={month} type="button" role="radio" aria-checked={subMonths === month} className={`${styles.durationChip} ${subMonths === month ? styles.durationChipActive : ''}`} onClick={() => setSubMonths(month)}>{isEnglish ? `${month} mo` : `${month} 月`}</button>)}</div> : <div className={styles.durationHint}>{isEnglish ? 'No renewals · includes every future release' : '买断后无需续费 · 享所有未来版本'}</div>}
                </div>
                <div className={styles.tierDescription} key={`description-${proPlan}`}>{proPlan === 'lifetime' ? (isEnglish ? 'One-server deployment with all core modules and maintenance updates.' : '单服部署，覆盖核心模块与基础维护更新。') : (isEnglish ? 'Ideal for trials or short events. Get every PRO module while your subscription is active.' : '短期试用或临时活动部署，灵活上下机。订阅期内享 PRO 全部模块。')}</div>
                <ul className={styles.featureList}><li>{isEnglish ? 'One server · 1× node' : '单服授权 · 1× 节点'}</li><li>{isEnglish ? 'All core modules' : '核心模块全开放'}</li><li>{isEnglish ? 'Ticket support' : '工单咨询'}</li><li>{isEnglish ? 'Automatic version updates' : '版本自动更新'}</li></ul>
                <div className={styles.purchaseMenuWrap}>
                  {purchaseMenuOpen === 'pro' && <PurchaseMenu id="purchase-menu" onClose={() => setPurchaseMenuOpen(null)} isEnglish={isEnglish} />}
                  <button type="button" className={styles.buyButton} aria-expanded={purchaseMenuOpen === 'pro'} aria-controls="purchase-menu" onClick={() => setPurchaseMenuOpen((open) => open === 'pro' ? null : 'pro')}>{proPlan === 'lifetime' ? (isEnglish ? 'PRO BASE · ¥170' : 'PRO 基础 · ¥170') : (isEnglish ? `${subMonths}-MONTH SUBSCRIPTION · ¥${subTotal}` : `订阅 ${subMonths} 个月 · 共 ¥${subTotal}`)} ↗</button>
                </div>
              </div>

              <div className={`${styles.pricingCard} ${styles.pricingCardRecommended}`}>
                <Brackets />
                <span className={styles.maxCardGrid} aria-hidden="true" />
                <div className={styles.recommendedBadge}>
                  <span aria-hidden="true">◆</span>
                  <span>{isEnglish ? 'RECOMMENDED' : 'RECOMMENDED · 推荐'}</span>
                  <span aria-hidden="true">◆</span>
                </div>
                <div className={styles.tierBadge}>TIER-02</div>
                <div className={styles.issueLabel}>FULL LOADOUT</div>
                <div className={styles.tierName}>MAX</div>
                <div className={styles.planTabsPlaceholder} aria-hidden="true" />
                <div className={styles.priceArea}><div className={styles.pricingRow}><div className={styles.priceTag}><span className={styles.currency}>¥</span><RollingPrice value={String(MAX_PRICE)} isEnglish={isEnglish} /><span className={styles.period}>{isEnglish ? 'one-time' : '一次性'}</span></div></div><div className={styles.accessLabel}>{isEnglish ? 'Lifetime license · up to 12 servers' : '永久授权 · 多达 12 个授权'}</div></div>
                <div className={styles.durationSlot}><div className={styles.durationHint}>{isEnglish ? 'Up to 12 licensed servers · every module unlocked' : '多达 12 个授权 · 全模块解锁'}</div></div>
                <div className={styles.tierDescription}>{isEnglish ? 'Up to 12 server licenses, every module unlocked, and the complete Plastic suite.' : '多达 12 个授权，全模块解锁，并包含 Plastic 完整套件。'}</div>
                <ul className={styles.featureList}><li>{isEnglish ? 'Up to 12 server licenses' : '多达 12 个授权'}</li><li>{isEnglish ? 'Complete Plastic edition' : 'Plastic 完整版'}</li><li>{isEnglish ? 'PlasticForAntiXrayer activation credential (¥60 value)' : 'PlasticForAntiXrayer 激活凭证（价值 ¥60）'}</li><li>{isEnglish ? 'Priority 1:1 technical support' : '优先 1v1 技术支持'}</li><li>{isEnglish ? 'Free updates for life' : '永久免费版本更新'}</li></ul>
                <div className={styles.purchaseMenuWrap}>
                  {purchaseMenuOpen === 'max' && <PurchaseMenu id="purchase-menu-max" onClose={() => setPurchaseMenuOpen(null)} isEnglish={isEnglish} />}
                  <button type="button" className={`${styles.buyButton} ${styles.buyButtonMax}`} aria-expanded={purchaseMenuOpen === 'max'} aria-controls="purchase-menu-max" onClick={() => setPurchaseMenuOpen((open) => open === 'max' ? null : 'max')}>MAX · ¥850 ↗</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
