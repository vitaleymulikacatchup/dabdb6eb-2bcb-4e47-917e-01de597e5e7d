"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          logoAlt="Wifies Logo"
          buttonText="Get Started"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero
          title="Welcome to Wifies"
          subtitle="Your playground for all things fun and trendy"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="Get to know us"
          descriptions={[
            "We bring together creativity and technology to help businesses thrive.",
            "Our team is passionate about making a difference in the world through innovative solutions.",
            "Join us on our journey to inspire and empower others!"
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Purchase"
          steps={[
            { title: "Step 1", description: "Create an account", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Deposit funds", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Complete your purchase", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Our Tokenomics"
          description="We believe in transparency and sustainability."
          cardItems={[
            { id: 1, title: "Liquidity", description: "Available liquidity for trading" },
            { id: 2, title: "Supply", description: "Total token supply available" },
            { id: 3, title: "Ownership", description: "Distributed among our community" }
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ
          items={[
            { title: "What is Wifies?", content: "Wifies is a fun, trendy platform for modern SaaS solutions." },
            { title: "How do I sign up?", content: "Simply click the Get Started button to create an account." },
            { title: "What payment methods do you accept?", content: "We accept all major payment methods!" },
            { title: "Can I contact support?", content: "Absolutely! Our support team is available 24/7." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoAlt="Wifies Logo"
          logoText="Wifies"
          items={[
            { label: "Privacy Policy", onClick: () => { /* handle privacy click */ } },
            { label: "Terms of Service", onClick: () => { /* handle terms click */ } },
            { label: "Contact", onClick: () => { /* handle contact click */ } }
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}