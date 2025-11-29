import { useSiteContent } from "../../../contexts/SiteContentContext";
import Lottie from 'react-lottie-player';
import animationData from './Reading.json';
function Hero() {
  // @ts-ignore
  const { content } = useSiteContent();
  return (
    <section className="hero py-5">
      <div className="container">
        <div className="row align-items-center gx-5">

          <div className="col-lg-6 order-2 order-lg-1">
            <h3 className="title mt-2">
              {content.about.title ?
                content.about.title :
                <>
                  We share knowledge <br /> with the world
                </>
              }
            </h3>
            <p className="lead text-muted mt-3">
              {
                content.about.subtitle ?
                  content.about.subtitle :
                  <>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Praesent fermentum quam mauris. Fusce tempor et augue a aliquet.
                    Donec non ipsum non risus egestas tincidunt at vitae nulla.
                  </>
              }
            </p>
          </div>

          <div className="col-lg-6 text-center order-1 order-lg-2 mb-4 mb-lg-0"
            style={{
              display: 'flex',
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Lottie
              loop
              play
              animationData={animationData}
              style={{ width: "80%", height: "80%" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
export default Hero;