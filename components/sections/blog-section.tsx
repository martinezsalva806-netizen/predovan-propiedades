'use client'

import { motion } from 'framer-motion'
import { CalendarDays, ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { blogPosts } from '@/lib/data'
import { Button } from '@/components/ui/button'

export function BlogSection() {
  return (
    <section id="blog" className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(244,239,230,1),rgba(233,228,221,0.95))] py-20 text-coal-900 dark:bg-[linear-gradient(180deg,rgba(13,16,21,1),rgba(20,24,30,1))] dark:text-white">
      <div className="container-grid relative z-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-coal-500 dark:text-white/55">Novedades / Blog</div>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Contenido útil con apariencia editorial premium.</h2>
          </div>
          <Button variant="outline" className="hidden border-coal-300/30 bg-white/50 text-coal-900 dark:border-white/10 dark:bg-white/5 dark:text-white md:inline-flex">
            Ver más artículos <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.07 }}>
              <Card className="glass overflow-hidden border-white/10 bg-white/25 p-5 text-coal-900 dark:bg-white/6 dark:text-white">
                <div className="mb-4 inline-flex rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300">{post.category}</div>
                <h3 className="text-2xl font-semibold leading-tight">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-coal-700 dark:text-white/65">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-coal-500 dark:text-white/50">
                  <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-brand-500" /> Publicado recientemente</span>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
