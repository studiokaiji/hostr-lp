import { H1 } from "./components/H1";
import { Section } from "./components/Section";

import { ReactComponent as HostrIcon } from "./assets/Hostr.svg";
import { ReactComponent as FeaturesIcon } from "./assets/Features.svg";
import { ReactComponent as GettingStartedIcon } from "./assets/Getting_Started.svg";
import { ReactComponent as UnderArrow } from "./assets/Under_Arrow.svg";
import { SectionHeading } from "./components/SectionHeading";
import { Feature } from "./components/Feature";
import { Link } from "./components/Link";
import { Card } from "./components/Card";
import { Code } from "./components/Code";
import { Footer } from "./components/Footer";
import { TypeWriter } from "./components/TypeWriter";
import { useMemo } from "react";

function App() {
  const htmlTag = useMemo(
    () => window.location.pathname.split("/").slice(-1)?.[0] || "hostr-lp",
    []
  );
  const cssPath = useMemo(() => {
    const cssList = Array.from(document.styleSheets);
    const nostrCss = cssList.filter((s) => s?.href?.includes(htmlTag));
    return htmlTag + nostrCss?.[0]?.href?.split(htmlTag)?.[1] || "";
  }, [htmlTag]);
  const jsPath = useMemo(
    () =>
      htmlTag + Array.from(document.scripts)?.[0]?.src?.split(htmlTag)?.[1] ||
      "",
    [htmlTag]
  );

  return (
    <div className="font-mono">
      <main>
        <Section id="hero" className="h-screen">
          <div className="h-full flex flex-col justify-end">
            <H1 className="font-sans">Hostr</H1>
            <p className="text-2xl">
              Decentralized web hosting solution on Nostr.
            </p>
            <div className="flex flex-col md:flex-row justify-between md:items-end space-y-8">
              <div className="mt-10 font-medium space-y-2 break-words max-w-[80%]">
                <TypeWriter
                  delay={300}
                  textList={[
                    "connected_relay: wss://r.hostr.cc",
                    `HTML Tag: ${htmlTag}`,
                    `CSS Tag: ${cssPath}`,
                    `JS Tag: ${jsPath}`,
                  ]}
                />
              </div>
              <a href="#what-is-hostr">
                <div className="flex space-x-3 items-center cursor-pointer">
                  <p className="text-xl select-none whitespace-nowrap">
                    Scroll Down
                  </p>
                  <UnderArrow
                    className="animate-bounce"
                    width={20}
                    height={20}
                  />
                </div>
              </a>
            </div>
          </div>
        </Section>
        <Section
          className="bg-primary text-white text-center"
          id="what-is-hostr"
        >
          <div className="max-w-2xl mx-auto">
            <SectionHeading icon={HostrIcon} title="What is Hostr?" />
            <div className="font-medium mt-8 space-y-4">
              <p>
                Hostr is a decentralized web hosting solution using Nostr, a
                simple, open protocol that enables global, decentralized,
                censorship-resistant social media.
              </p>
              <p>
                It provides free anti-censorship and fault-tolerant web hosting
                using relays that can be set up by anyone.
              </p>
            </div>
          </div>
        </Section>
        <Section className="bg-secondary" id="features">
          <SectionHeading icon={FeaturesIcon} title="Features" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-white">
            {[
              {
                emoji: "🌐",
                title: "Decentralized Hosting",
                description:
                  "Hostr uses Nostr protocol relays to enable distributed hosting of SPAs. This improves availability and resilience to network failures.",
              },
              {
                emoji: "🛠️",
                title: "Fast Deployment",
                description:
                  "The built SPA is instantly deployed to the Nostr network with a single deploy command.",
              },
              {
                emoji: "🕺",
                title: "Built-in Web Server",
                description:
                  "Instantly view data on your relay on your local machine or on a server you control.",
              },
              {
                emoji: "🚀",
                title: "Ready-To-Use Relay",
                description: (
                  <>
                    <Link href="wss://r.hostr.cc">wss://r.hostr.cc</Link> is a
                    public relay for web hosting. Anyone can get started with
                    decentralized web hosting today.
                  </>
                ),
              },
            ].map((feature) => (
              <Feature key={feature.title} {...feature} />
            ))}
          </div>
        </Section>
        <Section id="getting-started">
          <Card className="w-full max-w-3xl mx-auto p-8 md:p-16 leading-loose space-y-8">
            <SectionHeading icon={GettingStartedIcon} title="Getting Started" />
            <div className="space-y-6">
              <div>
                <p>1. Install CLI tool (Golang Required)</p>
                <Code shell>
                  go install github.com/studiokaiji/nostr-webhost/hostr@latest
                </Code>
              </div>
              <div>
                <p>2. Set private key</p>
                <Code shell>hostr set-private "nsec or hex private key"</Code>
                <p className="text-gray-500">
                  Or if you want to generate private key
                </p>
                <Code shell>hostr generate-key</Code>
              </div>
              <div>
                <p>3. Add relay</p>
                <Code shell>hostr add-relay wss://r.hostr.cc</Code>
              </div>
              <div>
                <p>
                  4. Deploy SPA (If you haven't built the SPA yet, do so before
                  this step.)
                </p>
                <Code shell>hostr deploy /BUILT/SPA/DIR/PATH</Code>
              </div>
              <div>
                <p>5. Start web server</p>
                <Code shell>hostr start</Code>
              </div>
              <div>
                <p>
                  6. Access to http://localhost:3000/e/
                  {"{event-id-of-index.html}"}
                </p>
              </div>
            </div>
          </Card>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
