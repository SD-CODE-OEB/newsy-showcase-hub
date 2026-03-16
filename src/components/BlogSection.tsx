import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  { title: "భూ రికార్డులు లేని గ్రామాల్లో అధునాతన 'రోవర్' టెక్నాలజీతో రీ-సర్వే నిర్వహించి రైతులకు 'భూదార్' కార్డులు అందజేసే ప్రక్రియకు పునాది.", date: "March 10, 2026", author: "పొంగులేటి శ్రీనివాసరెడ్డి", category: "Politics" },
  { title: "మౌలిక వసతుల మెరుగుదలనే ధ్యేయంగా అభివృద్ధి పనులకు శంకుస్థాపన.", date: "March 8, 2026", author: "పొంగులేటి శ్రీనివాసరెడ్డి", category: "Politics" },
  { title: "ప్రజాపాలన-ప్రగతి ప్రణాళికలో భాగంగా స్థానిక ప్రజాప్రతినిధులకు శిక్షణ కార్యక్రమంలో ప్రసంగం.", date: "March 5, 2026", author: "పొంగులేటి శ్రీనివాసరెడ్డి", category: "Politics" },
  { title: "ప్రజాపాలన-ప్రగతి ప్రణాళికలో భాగంగా స్థానిక ప్రజాప్రతినిధులకు శిక్షణ కార్యక్రమంలో ప్రసంగం.", date: "March 2, 2026", author: "పొంగులేటి శ్రీనివాసరెడ్డి", category: "Politics" },
  { title: "ఖమ్మం జిల్లాలో అభివృద్ధి, సంక్షేమ కార్యక్రమాల అమలుపై అధికారులతో సమీక్షా సమావేశంలో మంత్రి పొంగులేటి.", date: "February 28, 2026", author: "పొంగులేటి శ్రీనివాసరెడ్డి", category: "Politics" },
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
