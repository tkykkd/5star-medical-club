import {useEffect} from 'react';
import {assets, ORIGIN} from './content/assets';
import {I18nProvider, useI18n} from './i18n/context';
import {useSiteCopy} from './i18n/useSiteCopy';
import {Header} from './components/Header';
import {Hero} from './components/Hero';
import {Ribbon} from './components/Ribbon';
import {NewsSection} from './components/NewsSection';
import {IntroAndPromo} from './components/IntroAndPromo';
import {VipSection} from './components/VipSection';
import {AboutSection} from './components/AboutSection';
import {BlockSection} from './components/BlockSection';
import {DoctorsSection} from './components/DoctorsSection';
import {RegenerativeSection} from './components/RegenerativeSection';
import {TreatmentsSection} from './components/TreatmentsSection';
import {LocationSection} from './components/LocationSection';
import {MembershipSection} from './components/MembershipSection';
import {InterviewsSection} from './components/InterviewsSection';
import {TopicsSection} from './components/TopicsSection';
import {GroupSection} from './components/GroupSection';
import {Footer} from './components/Footer';

function AppShell() {
  const copy = useSiteCopy();
  const {locale} = useI18n();

  useEffect(() => {
    document.documentElement.lang = locale === 'ja' ? 'ja' : 'th';
    document.title = copy.ui.docTitle;
  }, [locale, copy.ui.docTitle]);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8e4dc]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-slate-900"
      >
        {copy.ui.skipToContent}
      </a>
      <Header logoSrc={assets.logoLight} officialUrl={ORIGIN} />
      <main id="main">
        <Hero
          logoSrc={assets.logoDark}
          videoSrc={assets.videoIntro}
          videoPoster={assets.heroNight}
          copy={copy.hero}
          disclaimer={copy.disclaimerShort}
        />
        <Ribbon text={copy.ribbon} officialUrl={ORIGIN} />
        <NewsSection />
        <IntroAndPromo intro={copy.intro} promos={copy.promoStrip} assets={assets} />
        <VipSection eyebrow={copy.vip.eyebrow} title={copy.vip.title} paras={copy.vip.paras} />
        <AboutSection title={copy.about.title} subtitle={copy.about.subtitle} blocks={copy.about.blocks} />
        <BlockSection id="medical-support" title={copy.medicalSupport.title} body={copy.medicalSupport.body} />
        <DoctorsSection />
        <RegenerativeSection title={copy.regenerative.title} body={copy.regenerative.body} />
        <TreatmentsSection intro={copy.treatmentsIntro} />
        <LocationSection location={copy.location} />
        <MembershipSection
          benefits={copy.memberBenefits}
          membership={copy.membershipSales}
          passport={copy.passport}
          magazine={copy.magazine}
        />
        <InterviewsSection />
        <TopicsSection />
        <GroupSection group={copy.group} strip={copy.clinicStrip} groupLogo={assets.groupLogoStrip} />
        <Footer contact={copy.contact} legal={copy.legalFooter} logoSrc={assets.logoFooter} officialUrl={ORIGIN} />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppShell />
    </I18nProvider>
  );
}
