import { Link } from 'wouter';
import { links } from '@/lib/wanyen-content';

export function Footer() {
  return (
    <footer className="bg-[#2f1621] text-[#fff9f1]">
      <div className="page-wrap py-16 md:py-24">
        <div className="grid gap-16 border-b border-white/20 pb-16 md:grid-cols-12 md:pb-24">
          <div className="md:col-span-6">
            <p className="page-kicker text-white/65">Salt Lake City · Utah</p>
            <h2 className="mt-8 max-w-2xl font-editorial text-5xl font-light leading-[0.96] md:text-7xl">
              A little piece of home,
              <span className="italic text-[#ff7bac]"> served by the scoop.</span>
            </h2>
          </div>

          <div className="grid gap-12 text-sm md:col-span-5 md:col-start-8 md:grid-cols-2">
            <div>
              <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/45">
                Visit
              </p>
              <p className="leading-7">378 W Broadway, Suite 115</p>
              <p className="leading-7">Salt Lake City, UT 84101</p>
              <a
                href={links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link mt-6"
              >
                Directions <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div>
              <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/45">
                Explore
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/story" className="hover:text-[#ff7bac]">Story</Link>
                <Link href="/menu" className="hover:text-[#ff7bac]">Menu</Link>
                <Link href="/catering" className="hover:text-[#ff7bac]">Catering</Link>
                <Link href="/visit" className="hover:text-[#ff7bac]">Visit</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-10 pt-10 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/55 md:grid-cols-3 md:items-end">
          <p>© {new Date().getFullYear()} WanYen Cafe</p>
          <div className="flex gap-6 md:justify-center">
            <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
            <a href={links.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white">TikTok</a>
            <a href={links.yelp} target="_blank" rel="noopener noreferrer" className="hover:text-white">Yelp</a>
          </div>
          <p className="md:text-right">Asian-inspired dessert cafe</p>
        </div>
      </div>
    </footer>
  );
}
