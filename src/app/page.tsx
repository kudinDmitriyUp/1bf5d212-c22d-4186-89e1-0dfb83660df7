"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagMediaSplitAbout from '@/components/sections/about/TagMediaSplitAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FeatureCardThirteen from '@/components/sections/feature/FeatureCardThirteen';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Users, AlertTriangle, Globe, Heart } from "lucide-react";

export default function UkraineAwarenessPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="smallSizeLargeTitles"
      background="animatedGrid"
      cardStyle="gradient-radial"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766138827427-su18wdqv.jpg"
          logoAlt="Ukraine Awareness Platform"
          brandName="Ukraine Situation"
          button={{
            text: "Learn More",
            href: "about"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="UKRAINE"
          description="Understanding the conflict, humanitarian crisis, and path to peace. Stay informed about the situation affecting millions of lives."
          buttons={[
            {
              text: "Learn About Crisis",
              href: "about"
            },
            {
              text: "How to Help",
              href: "contact"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766138828727-tdksuc9z.jpg",
              imageAlt: "Ukraine humanitarian situation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766138829662-n6gkk7yp.jpg",
              imageAlt: "Ukraine resilience and community"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766138830606-x74jzjsv.jpg",
              imageAlt: "Ukraine awareness and documentation"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
          className="min-h-screen"
          ariaLabel="Hero section with carousel images about Ukraine situation"
        />
      </div>

      <div id="about" data-section="about">
        <TagMediaSplitAbout
          variant="border"
          title="Understanding the Ukraine Situation"
          description="A comprehensive overview of the conflict, its origins, current developments, and humanitarian impact on the region."
          tag="Context"
          textboxLayout="default"
          contentTag="CURRENT CRISIS"
          contentTitle="The Humanitarian Emergency"
          contentDescription="Since 2022, millions of Ukrainians have been displaced, entire cities have been affected, and international attention has focused on supporting civilians and documenting the ongoing situation. This platform exists to provide factual, verified information about what is happening and how the international community is responding."
          contentButtons={[
            {
              text: "Read Full Context",
              href: "contact"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766138831995-01c7r7mz.jpg"
          imageAlt="Ukraine map and geographical context"
          imagePosition="right"
          useInvertedBackground="noInvert"
          ariaLabel="About section detailing Ukraine situation context"
        />
      </div>

      <div id="impact" data-section="impact">
        <MetricCardThree
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Displaced Persons",
              value: "14+ Million"
            },
            {
              id: "2",
              icon: AlertTriangle,
              title: "Affected Population",
              value: "41+ Million"
            },
            {
              id: "3",
              icon: Globe,
              title: "Countries Receiving Refugees",
              value: "50+"
            },
            {
              id: "4",
              icon: Heart,
              title: "Humanitarian Aid Programs",
              value: "500+"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          title="Crisis Scale and Impact"
          description="Key figures showing the magnitude of the humanitarian emergency and international response"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Metrics section showing crisis impact statistics"
        />
      </div>

      <div id="news" data-section="news">
        <BlogCardOne
          blogs={[
            {
              id: "1",
              category: "Humanitarian",
              title: "Understanding the Humanitarian Crisis",
              excerpt: "An overview of the civilian impact, displacement figures, and ongoing humanitarian response efforts across the region.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766138837671-sxr85pet.jpg",
              imageAlt: "Humanitarian crisis documentation",
              authorName: "Information Team",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766138837671-sxr85pet.jpg",
              date: "Updated Daily"
            },
            {
              id: "2",
              category: "Aid & Support",
              title: "Ways to Support Ukrainian Communities",
              excerpt: "Verified organizations and methods for providing humanitarian assistance, from direct aid to advocacy efforts.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766138836076-ls9cfifr.jpg",
              imageAlt: "Aid and support resources",
              authorName: "Information Team",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766138836076-ls9cfifr.jpg",
              date: "Updated Daily"
            },
            {
              id: "3",
              category: "Documentation",
              title: "Verified Facts and Documentation",
              excerpt: "Fact-checked information, verified reports, and documentation from international organizations and media sources.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766138839276-ikchfrbz.jpg",
              imageAlt: "Documentation and verified information",
              authorName: "Information Team",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766138839276-ikchfrbz.jpg",
              date: "Updated Daily"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          carouselMode="buttons"
          title="Latest Updates and Information"
          description="Stay informed with verified articles, humanitarian updates, and factual reporting about the situation"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Blog section with latest Ukraine situation articles"
        />
      </div>

      <div id="resources" data-section="resources">
        <FeatureCardThirteen
          features={[
            {
              id: "01",
              title: "Humanitarian Organizations",
              description: "Connect with verified international and local organizations providing emergency aid, medical support, and humanitarian assistance to affected populations."
            },
            {
              id: "02",
              title: "Verified Information Sources",
              description: "Access fact-checked reporting from international news organizations, UN agencies, and verified documentation platforms."
            },
            {
              id: "03",
              title: "Support Mechanisms",
              description: "Learn about financial assistance programs, volunteer opportunities, and direct ways to contribute to relief efforts."
            },
            {
              id: "04",
              title: "Educational Resources",
              description: "Understand the historical context, geopolitical factors, and long-term implications of the situation."
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          title="Resources and Support"
          description="Essential resources and verified information for understanding and supporting the humanitarian response"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Resources section with support information"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Stay Informed About the Situation"
          inputPlaceholder="Enter your email for updates"
          buttonText="Subscribe"
          useInvertedBackground="noInvert"
          ariaLabel="Contact section for newsletter signup"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Information",
              items: [
                {
                  label: "About the Situation",
                  href: "about"
                },
                {
                  label: "Latest Updates",
                  href: "news"
                },
                {
                  label: "Verified Facts",
                  href: "resources"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "How to Help",
                  href: "contact"
                },
                {
                  label: "Organizations",
                  href: "resources"
                },
                {
                  label: "Donate",
                  href: "contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Terms of Use",
                  href: "#"
                },
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Ukraine Awareness Platform | Committed to factual, respectful information"
          ariaLabel="Footer with links and information"
        />
      </div>
    </ThemeProvider>
  );
}