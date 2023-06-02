import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header>
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
                lg:grid-cols-2
              `}
            >
              <nav>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Sobre</a>
                  </li>
                  <li>
                    <a href="#">Episódios</a>
                  </li>
                  <li>
                    <a href="#">Contato</a>
                  </li>
                </ul>
              </nav>

              <div>
                <a
                  href="#"
                  target="_blank"
                >
                  Apoia-se
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div>
          <div
            className={`
              container
              mx-auto
            `}
          >
            <div>
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

        <div>
          <div
            className={`
              container
              mx-auto
            `}
          >
            MAIN
          </div>
        </div>
      </main>

      <footer>
        <div
          className={`
            container
            mx-auto
          `}
        >
          wrapper
        </div>
      </footer>
    </>
  );
}
