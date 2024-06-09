import { useEffect, useRef } from "react";
import styles from "../swiper/CubeSwiper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCube, EffectCoverflow } from "swiper";

SwiperCore.use([EffectCube, EffectCoverflow]);

function cubeSwiper() {
  const mainSwiperRef = useRef(null);
  const pageSwiperRef = useRef([]);

  useEffect(() => {
    createSwiperCubes(mainSwiperRef.current, "cube");
    createSwiperCubes(
      document.querySelector(".swiper-coverflow-cubes"),
      "coverflow"
    );
  }, []);

  const createSwiperCubes = (demoEl, mainEffect) => {
    const totalSlides = 4;
    let mainSwiper;
    const pageSwipers = [];
    demoEl
      .querySelectorAll(`.${styles.swiperCubesPagination} .swiper`)
      .forEach((el, index) => {
        const pageSwiper = new SwiperCore(el, {
          effect: "cube",
          cubeEffect: {
            shadow: false,
          },
          createElements: true,
          simulateTouch: false,
          allowTouchMove: false,
        });
        el.addEventListener("click", () => {
          mainSwiper.slideTo(index);
        });
        pageSwipers.push(pageSwiper);
      });

    const mainSwiperEl = demoEl.querySelector(".swiper-main");
    mainSwiper = new SwiperCore(mainSwiperEl, {
      effect: mainEffect,
      createElements: true,
      coverflowEffect: {
        depth: 200,
      },
      on: {
        setTransition(swiper, transition) {
          pageSwipers.forEach((pageSwiper) => {
            pageSwiper.setTransition(transition);
          });
        },
        progress(swiper, progress) {
          const progressPerSlide = (1 / (totalSlides - 1)) * 2;
          for (let i = 0; i < totalSlides; i += 1) {
            let pageSwiperProgress =
              (progress + (progressPerSlide / 2) * (1 - i)) / progressPerSlide;
            pageSwiperProgress = Math.max(Math.min(pageSwiperProgress, 1), 0);
            pageSwipers[i].setProgress(pageSwiperProgress);
          }
        },
      },
    });
  };

  return (
    <div id="app">
      <div className={styles.container}>
        <h2>Cube Swiper</h2>
        <div
          className={`${styles.swiperAllCubes} swiper-all-cubes`}
          ref={mainSwiperRef}
        >
          <div className="swiper swiper-main">
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt="4"
              />
            </SwiperSlide>
          </div>
          <div className={styles.swiperCubesPagination}>
            {[1, 2, 3, 4].map((num) => (
              <Swiper key={num} className="swiper">
                <SwiperSlide className={styles.swiperSlideNumber}>
                  {num}
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`https://swiperjs.com/demos/images/nature-${num}.jpg`}
                    alt={num}
                  />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlideNumber}>
                  {num}
                </SwiperSlide>
              </Swiper>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h2>Coverflow Swiper</h2>
        <div
          className={`${styles.swiperCoverflowCubes} swiper-coverflow-cubes`}
        >
          <div className="swiper swiper-main">
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt="4"
              />
            </SwiperSlide>
          </div>
          <div className={styles.swiperCubesPagination}>
            {[1, 2, 3, 4].map((num) => (
              <Swiper key={num} className="swiper">
                <SwiperSlide className={styles.swiperSlideNumber}>
                  {num}
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`https://swiperjs.com/demos/images/nature-${num}.jpg`}
                    alt={num}
                  />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlideNumber}>
                  {num}
                </SwiperSlide>
              </Swiper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default cubeSwiper;
