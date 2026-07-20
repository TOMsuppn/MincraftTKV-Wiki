import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './plastic.module.css';

const features = [
  {
    code: 'P-01',
    align: 'left',
    lines: ['试试', '我的世界顶尖', '反作弊'],
    linesEn: ['Try a leading', 'Minecraft', 'anti-cheat'],
    kicker: 'DETECTION MATRIX',
    image: '/img/plastic/detection-matrix.png',
  },
  {
    code: 'P-02',
    align: 'right',
    lines: ['快速接入', '实时拦截', '稳定巡航'],
    linesEn: ['Fast setup', 'real-time blocks', 'steady protection'],
    kicker: 'LIVE GUARD',
    image: '/img/plastic/live-guard.png',
  },
  {
    code: 'P-03',
    align: 'left',
    lines: ['低延迟', '高压场景', '持续守护'],
    linesEn: ['Low latency', 'high-pressure play', 'always protected'],
    kicker: 'SERVER SHIELD',
    image: '/img/plastic/server-shield.png',
  },
];

function ExternalArrow() {
  return (
    <svg className={styles.externalIcon} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6 5h9v9" />
      <path d="M15 5 5 15" />
    </svg>
  );
}

function FeatureVisual({code, image}) {
  return (
    <div className={styles.featureVisual} aria-hidden="true">
      <div className={styles.visualFrame}>
        <img className={styles.visualImage} src={image} alt="" loading="lazy" />
        <span className={styles.visualCode}>{code}</span>
      </div>
    </div>
  );
}

function FeatureRow({feature, isEnglish}) {
  const copy = (
    <div className={styles.featureCopy}>
      <div className={styles.featureKicker}>{feature.kicker}</div>
      <Heading as="h2" className={styles.featureTitle}>
        {(isEnglish ? feature.linesEn : feature.lines).map((line) => (
          <span key={line}>{line}</span>
        ))}
      </Heading>
    </div>
  );

  const visual = <FeatureVisual code={feature.code} image={feature.image} />;

  return (
    <section className={`${styles.featureRow} ${feature.align === 'right' ? styles.featureRowright : ''}`}>
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
    </section>
  );
}

export default function Plastic() {
  const {i18n} = useDocusaurusContext();
  const isEnglish = i18n.currentLocale === 'en';

  return (
    <Layout
      title="Plastic For MinecraftTKV"
      description={isEnglish ? 'Plastic anti-cheat for MinecraftTKV' : 'Plastic For MinecraftTKV'}>
      <main className={styles.plasticPage}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroShell}>
              <div className={styles.heroEyebrow}>
                <span className={styles.statusDot} />
                PLASTIC · MINECRAFTTKV
              </div>
              <Heading as="h1" className={styles.heroTitle}>
                Plastic For MinecraftTKV
              </Heading>
              <a
                className={styles.heroButton}
                href="https://kook.vip/A33qtO"
                target="_blank"
                rel="noopener noreferrer">
                {isEnglish ? 'Get Plastic' : '获取Plastic'}
                <ExternalArrow />
              </a>
            </div>
          </div>
        </section>

        <section className={styles.featuresSection} aria-label={isEnglish ? 'Plastic features' : 'Plastic 功能展示'}>
          <div className="container">
            <div className={styles.featuresTrack}>
              {features.map((feature) => (
                <FeatureRow key={feature.code} feature={feature} isEnglish={isEnglish} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
