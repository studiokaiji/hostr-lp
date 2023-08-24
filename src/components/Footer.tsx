import { Link } from "./Link";
import { Section } from "./Section";

export const Footer = () => (
  <footer className="bg-primary text-white">
    <Section>
      <div>
        <p className="text-8xl font-bold font-sans">Hostr</p>
        <p className="text-2xl">Decentralized web hosting solution on Nostr.</p>
      </div>
      <div className="space-y-2 mt-10">
        <p>
          github:{" "}
          <Link href="https://github.com/studiokaiji/nostr-webhost">
            https://github.com/studiokaiji/nostr-webhost
          </Link>
        </p>
        <p>
          website: <Link href="https://hostr.cc">https://hostr.cc</Link>
        </p>
        <p>
          relay: <Link href="wss://hostr.cc">wss://hostr.cc</Link>
        </p>
        <p>
          web_server: <Link href="https://h.hostr.cc">https://h.hostr.cc</Link>
        </p>
      </div>
    </Section>
  </footer>
);
