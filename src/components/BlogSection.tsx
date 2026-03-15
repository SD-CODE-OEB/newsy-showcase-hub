import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  { title: "Minister Ponguleti Srinivasa Reddy announced the government aims to complete 1 lakh Indiramma houses by March 2026.", date: "March 10, 2026", author: "Ponguleti Srinivas Reddy", category: "Politics" },
  { title: "Distribution of Eid-ka-Tohfa by the Minister.", date: "March 8, 2026", author: "Ponguleti Srinivas Reddy", category: "Politics" },
  { title: "Inauguration of Development Works", date: "March 5, 2026", author: "Ponguleti Srinivas Reddy", category: "Politics" },
  { title: "Attending the Training Session for Local Public Representatives.", date: "March 2, 2026", author: "Ponguleti Srinivas Reddy", category: "Politics" },
  { title: "Visiting the Sacred Place in Khammam District.", date: "February 28, 2026", author: "Ponguleti Srinivas Reddy", category: "Politics" },
];

const BlogSection = () => (
  <section className="container py-8">
    <div className="section-divider mb-3" />
    <h2 className="section-title">Latest News</h2>
    <div className="mt-5 space-y-3">
      {blogPosts.map((post, i) => (
        <motion.article
          key={i}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.35 }}
          className="bg-card border border-border rounded-xl p-4 md:p-5 hover:shadow-md hover:border-accent/30 transition-all duration-300 cursor-pointer group flex items-center justify-between gap-4"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                {post.category}
              </span>
            </div>
            <h3 className="font-heading font-bold text-foreground text-base md:text-lg group-hover:text-accent transition-colors duration-200">
              {post.title}
            </h3>
            <div className="flex gap-4 mt-1.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
              <span className="flex items-center gap-1"><User size={11} /> {post.author}</span>
            </div>
          </div>
          <ArrowRight size={18} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 shrink-0" />
        </motion.article>
      ))}
    </div>
  </section>
);

export default BlogSection;
