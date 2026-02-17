import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const images = [
  'https://cdn.poehali.dev/projects/b69ef7ac-a016-4d93-849c-25b196689e6a/files/bcb4136c-d204-4c53-8d67-2af7538a74cf.jpg',
  'https://cdn.poehali.dev/projects/b69ef7ac-a016-4d93-849c-25b196689e6a/files/11b5646e-6c8c-4ae7-acca-fb50faec3886.jpg',
  'https://cdn.poehali.dev/projects/b69ef7ac-a016-4d93-849c-25b196689e6a/files/16f6517f-617a-4974-b889-65fa3ccf65a7.jpg',
  'https://cdn.poehali.dev/projects/b69ef7ac-a016-4d93-849c-25b196689e6a/files/c4ff6171-4705-42b0-a11c-fc89169caa05.jpg',
];

const advantages = [
  { icon: 'TrendingUp', title: 'Пассивный доход', desc: 'Стабильно растущий заработок' },
  { icon: 'Heart', title: 'Качество продуктов', desc: 'Премиальная линейка NL' },
  { icon: 'Users', title: 'Сильная команда', desc: 'Поддержка на каждом этапе' },
  { icon: 'Rocket', title: 'Быстрый старт', desc: 'Лояльное погружение в бизнес' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {images.map((src, index) => (
            <div
              key={src}
              className={cn(
                'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                currentIndex === index ? 'opacity-100' : 'opacity-0'
              )}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-8 md:px-16">
            <div className="flex max-w-2xl flex-col gap-8">
              <div
                className={cn(
                  'transform transition-all duration-700 ease-out',
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                )}
              >
                <span className="inline-block rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-400 backdrop-blur-sm">
                  Партнёр NL International
                </span>
              </div>

              <div
                className={cn(
                  'transform transition-all duration-1000 delay-200 ease-out',
                  isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                )}
              >
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    Построй свой <br />
                    <span className="text-emerald-400">стабильный доход</span>
                  </h1>
                  <p className="max-w-lg text-lg font-light leading-relaxed text-white/80 md:text-xl">
                    Помогаю людям выйти на пассивно-растущий доход через продукты NL International. 
                    Лояльное погружение, поддержка и проверенная система.
                  </p>
                  <p className="text-sm text-white/50">
                    ID партнёра: 007-5875871
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  'flex flex-wrap gap-4 transform transition-all duration-1000 delay-500 ease-out',
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                )}
              >
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
                >
                  <Icon name="MessageCircle" size={20} />
                  Написать в Telegram
                </a>
                <a
                  href="#advantages"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
                >
                  Узнать больше
                  <Icon name="ArrowDown" size={18} />
                </a>
              </div>

              <div
                className={cn(
                  'flex gap-6 pt-2 transform transition-all duration-1000 delay-700 ease-out',
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                )}
              >
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 transition-colors hover:text-emerald-400"
                  aria-label="Telegram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                <a
                  href="https://vk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 transition-colors hover:text-emerald-400"
                  aria-label="VKontakte"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 transition-colors hover:text-emerald-400"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'h-1 transition-all duration-300',
                currentIndex === index ? 'w-12 bg-emerald-400' : 'w-8 bg-white/40 hover:bg-white/60'
              )}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section id="advantages" className="bg-black py-24">
        <div className="container mx-auto px-8 md:px-16">
          <div
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Почему <span className="text-emerald-400">NL International</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
              Проверенная система, качественные продукты и реальные результаты партнёров по всему миру
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:bg-emerald-500/5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3">
                  <Icon name={item.icon} size={28} className="text-emerald-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-gray-950 py-24">
        <div className="container mx-auto px-8 md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Готовы начать свой путь к <span className="text-emerald-400">финансовой свободе</span>?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Я помогу вам разобраться в продуктах компании, выстроить систему и выйти на стабильный доход. 
              Каждый начинает с первого шага — напишите мне, и мы обсудим ваш план.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <Icon name="MessageCircle" size={22} />
                Связаться со мной
              </a>
            </div>
            <p className="mt-6 text-sm text-white/40">
              ID партнёра NL International: 007-5875871
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
