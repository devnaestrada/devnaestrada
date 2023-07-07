import Link from 'next/link';

import HomeFeed from './HomeFeed';

export default function Home() {
  return (
    <>
      <header
        className={`
          h-[80px]
        `}
      >
        <div
          className={`
            container
            mx-auto
            h-full
          `}
        >
          <div
            className={`
              grid
              grid-cols-1
              h-full
              items-center
              lg:grid-cols-2
            `}
          >
            <div>
              logo
            </div>

            <div
              className={`
                grid
                grid-cols-1
                lg:grid-flow-col
                lg:auto-cols-max
              `}
            >
              <nav
                className={`
                  mr-8
                `}
              >
                <ul
                  className={`
                    grid
                    grid-flow-col
                    auto-cols-max
                    gap-x-3
                    h-full
                    items-center
                    justify-end
                  `}
                >
                  {[
                    {
                      id: 1,
                      label: 'Home',
                      href: '#',
                      target: '_self',
                      a11y: 'Ir para a página inicial',
                    },
                    {
                      id: 2,
                      label: 'Sobre',
                      href: '#',
                      target: '_self',
                      a11y: 'Ir para a página sobre nós',
                    },
                    {
                      id: 3,
                      label: 'Episódios',
                      href: '#',
                      target: '_self',
                      a11y: 'Ir para a página Episódios',
                    },
                    {
                      id: 4,
                      label: 'Contato',
                      href: '#',
                      target: '_self',
                      a11y: 'Ir para a página Contato',
                    },
                  ].map(({ id, ...link }) => (
                    <li key={`nav-${id}`}>
                      <Link
                        href={link.href}
                        aria-label={link.a11y}
                        target={link.target}
                        className={`
                          focus:font-bold
                          outline-none
                        `}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <Link
                  href="https://apoia.se/frontin"
                  target="_blank"
                  className={`
                    py-2
                    px-4
                    inline-block
                    bg-primary
                    text-black
                    rounded-sm
                  `}
                >
                  Apoia-se
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* BANNER */}
        <div
          className={`
            bg-black
            text-white
          `}
        >
          <div
            className={`
              container
              mx-auto
            `}
          >
            <div
              className={`
                py-8
                text-center
              `}
            >
              <h2
                className={`
                  text-6xl
                  weight-bold
                  mb-2
                `}
              >
                Podcast sobre desenvolvimento web, carreira e tecnologia.
              </h2>

              <p
                className={`
                  mb-1
                  last:mb-0
                `}
              >
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div
          className={`
            py-10
          `}
        >
          <div
            className={`
              container
              mx-auto
            `}
          >
            {/* SEARCH */}
            {/* <div
              className={`
                grid
                justify-end
                lg:grid-flow-col
                lg:auto-cols-max
              `}
            >
              <form
                action="#"
                role="search"
                className={`
                  w-[50vw]
                `}
              >
                <input
                  type="text"
                  aria-label="Buscar episódios"
                  placeholder="Buscar episódios"
                  className={`
                    border-2
                    border-black
                  `}
                />
                <button
                  type="submit"
                >
                  Buscar
                </button>
              </form>
            </div> */}

            <HomeFeed />
          </div>
        </div>
      </main>

      <footer
        className={`
          bg-black
          text-white
        `}
      >
        <div
          className={`
            container
            mx-auto
          `}
        >
          <div
            className={`
              grid
              grid-cols-1
              py-10
              lg:grid-cols-3
            `}
          >
            <div
              className={`

              `}
            >
              ITEM 1

            </div>
            <div
              className={`

              `}
            >
              ITEM 2

            </div>
            <div
              className={`

              `}
            >
              ITEM 3

            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
