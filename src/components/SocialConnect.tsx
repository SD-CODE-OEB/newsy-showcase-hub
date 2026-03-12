import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const socials = [
  { name: "Facebook", icon: Facebook, color: "bg-social-facebook", handle: "@NewsChannelOfficial" },
  { name: "Twitter", icon: Twitter, color: "bg-social-twitter", handle: "@NewsChannel" },
  { name: "Youtube", icon: Youtube, color: "bg-social-youtube", handle: "NewsChannel TV" },
  { name: "Instagram", icon: Instagram, color: "bg-social-instagram", handle: "@newschannel.ig" },
];

const SocialConnect = ({ compact = false }: { compact?: boolean }) => (
  <section className={compact ? "" : "container py-6"}>
    {!compact && <div className="section-divider mb-2" />}
    <h2 className="section-title">Social Connect</h2>
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {socials.map((s) => (
        <a
          key={s.name}
          href="#"
          className={`${s.color} text-accent-foreground px-5 py-2 rounded text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity`}
        >
          <s.icon size={16} />
          {s.name}
        </a>
      ))}
    </div>
    {!compact && (
      <div className="flex flex-wrap justify-center gap-6 mt-4 text-xs text-muted-foreground">
        {socials.map((s) => (
          <span key={s.name}>{s.handle}</span>
        ))}
      </div>
    )}
  </section>
);

export default SocialConnect;
