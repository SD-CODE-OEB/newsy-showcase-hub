import { Facebook, Twitter, Youtube, Instagram, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { name: "Twitter (X)", icon: Twitter, color: "bg-foreground text-background", handle: "@INC_Ponguleti", followers: "23.9K", url: "https://x.com/INC_Ponguleti" },
  { name: "Facebook", icon: Facebook, color: "bg-social-facebook", handle: "@Ponguleti", followers: "177K", url: "https://www.facebook.com/Ponguleti/photos" },
  { name: "Youtube", icon: Youtube, color: "bg-social-youtube", handle: "Minister Ponguleti Official", followers: "9.08K", url: "https://www.youtube.com/@MinisterPonguletiOfficial" },
  { name: "Instagram", icon: Instagram, color: "bg-social-instagram", handle: "@ponguleti_srinivasareddy", followers: "89.9K", url: "https://www.instagram.com/ponguleti_srinivasareddy/" },
];

const SocialConnect = ({ compact = false }: { compact?: boolean }) => (
  <section className={compact ? "" : "container py-4"}>
    {!compact && <div className="section-divider mb-3" />}
    <h2 className="section-title">Stay Connected</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
      {socials.map((s, i) => (
        <motion.a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ y: -4 }}
          className={`${s.color} text-accent-foreground p-4 rounded-xl flex flex-col items-center gap-2 hover:shadow-lg transition-shadow duration-300 group`}
        >
          <s.icon size={24} className="group-hover:scale-110 transition-transform" />
          <span className="font-bold text-sm">{s.name}</span>
          {!compact && (
            <>
              <span className="text-xs opacity-80">{s.handle}</span>
              <span className="text-lg font-bold">{s.followers}</span>
              <span className="text-[10px] uppercase tracking-wider opacity-70 flex items-center gap-1">
                Follow <ExternalLink size={9} />
              </span>
            </>
          )}
        </motion.a>
      ))}
    </div>
  </section>
);

export default SocialConnect;
