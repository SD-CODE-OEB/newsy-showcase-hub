import { motion } from "framer-motion";
import { TrendingUp, Clock } from "lucide-react";

const posts = [
  { title: "Campaign Trail: Key Moments from Yesterday", img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&h=300&fit=crop", tag: "Politics", time: "2h ago" },
  { title: "Exclusive Interview with Party Leaders", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop", tag: "Exclusive", time: "4h ago" },
  { title: "Policy Roundup: What Changes Ahead", img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=300&fit=crop", tag: "Analysis", time: "6h ago" },
  { title: "Community Outreach Program Launched", img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop", tag: "Community", time: "8h ago" },
];

const TrendingPosts = () => (
  <section className="container py-8">
    <div className="section-divider mb-3" />
    <h2 className="section-title flex items-center justify-center gap-2">
      <TrendingUp size={24} className="text-accent" />
      Trending Now
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-5">
      {posts.map((post, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-xl bg-muted aspect-[4/3]">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute top-2 left-2 px-2 py-0.5 bg-accent text-accent-foreground text-[10px] font-bold uppercase rounded-full tracking-wider">
              {post.tag}
            </span>
          </div>
          <div className="mt-2.5">
            <p className="text-xs md:text-sm font-semibold text-foreground leading-tight group-hover:text-accent transition-colors duration-200">
              {post.title}
            </p>
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground mt-1">
              <Clock size={10} /> {post.time}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TrendingPosts;
