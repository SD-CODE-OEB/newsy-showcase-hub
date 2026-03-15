import { motion } from "framer-motion";
import { TrendingUp, Clock } from "lucide-react";
import trending1 from "@/assets/trending1.jpg";
import trending2 from "@/assets/trending2.jpg";
import trending3 from "@/assets/trending3.jpg";
import trending4 from "@/assets/trending4.jpg";

const posts = [
  { title: "Distribution of Eid-ka-Tohfa by the Minister.", img: trending1, tag: "Politics", time: "2h ago" },
  { title: "Inauguration of Development Works.", img: trending2, tag: "Exclusive", time: "4h ago" },
  { title: "Attending the Training Session for Local Public Representatives.", img: trending3, tag: "Analysis", time: "6h ago" },
  { title: "Visiting the Sacred Place in Khammam District.", img: trending4, tag: "Community", time: "8h ago" },
];


const TrendingPosts = () =>
<section className="container py-8">
    <div className="section-divider mb-3" />
    <h2 className="section-title flex items-center justify-center gap-2 text-left">
      <TrendingUp size={24} className="text-accent" />
      Trending Now
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-5">
      {posts.map((post, i) =>
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.4 }}
      className="group cursor-pointer">
      
          <div className="relative overflow-hidden rounded-xl bg-muted aspect-[4/3]">
            <img
          src={post.img}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-secondary-foreground shadow-sm rounded-xl border-0" />
            

        
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
    )}
    </div>
  </section>;


export default TrendingPosts;