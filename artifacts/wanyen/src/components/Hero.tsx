import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { images, links } from '@/lib/wanyen-content';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 900], [0, 110]);

  return (
    <section className="relative flex min-h-[44rem] h-[100svh] max-h-[70rem] items-end overflow-hidden bg-[#d92a6f] text-white md:items-center">
      <div className="absolute inset-0 md:hidden">
        <motion.img
          style={{ y: imageY }}
          src={images.interior}
          alt="Inside WanYen Cafe"
          className="h-[112%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#5c1736] via-[#5c1736]/72 to-[#d92a6f]/18" />
      </div>

      <div className="absolute inset-y-0 right-0 hidden w-[47%] overflow-hidden md:block [clip-path:polygon(13%_0,100%_0,100%_100%,0_100%)]">
        <motion.img
          style={{ y: imageY }}
          src={images.interior}
          alt="Inside WanYen Cafe"
          className="h-[112%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#5c1736]/12" />
      </div>

      <div className="absolute left-[52%] top-0 hidden h-full w-px rotate-[5deg] bg-white/28 md:block" />

      <div className="page-wrap relative z-10 pb-16 pt-36 md:pb-0 md:pt-24">
        <div className="max-w-4xl md:w-[58%]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-4 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/75"
          >
            <span className="h-px w-10 bg-current" />
            Asian-inspired dessert cafe
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="mt-7 font-editorial text-[clamp(4.4rem,10vw,9.5rem)] font-light leading-[0.82] tracking-[-0.055em]"
          >
            Scoop the
            <span className="block pl-[8%] italic text-[#ffd23f]">happiness.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease }}
            className="mt-9 grid max-w-2xl gap-8 border-t border-white/35 pt-7 sm:grid-cols-[1fr_auto] sm:items-end md:mt-12"
          >
            <p className="max-w-lg text-sm leading-7 text-white/78 md:text-base">
              Small-batch ice cream and desserts, made from scratch in Salt Lake City and inspired by memories of home.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/menu" className="border-b border-white pb-2 text-[0.66rem] font-bold uppercase tracking-[0.17em]">
                View menu
              </Link>
              <a
                href={links.order}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white bg-white px-5 py-3 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-[#a02e5a] transition-colors hover:bg-transparent hover:text-white"
              >
                Order online
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-7 right-7 z-10 hidden rotate-90 origin-bottom-right text-[0.58rem] font-bold uppercase tracking-[0.22em] text-white/65 md:block">
        Downtown Salt Lake City · Suite 115
      </div>
    </section>
  );
}
