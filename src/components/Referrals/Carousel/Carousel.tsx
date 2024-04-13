import React, { useCallback } from 'react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { DotButton, useDotButton } from './DotButtons';
import style from './Carousel.module.scss';
import clsx from 'clsx';
import { CarouselCard } from '../CarouselCard/CarouselCard';

type CarouselProps = {
    slides: number[];
    options?: EmblaOptionsType;
};

export const Carousel: React.FC<CarouselProps> = props => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    // const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (!autoplay) return;

        const resetOrStop =
            autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

        resetOrStop();
    }, []);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onNavButtonClick
    );

    return (
        <div className={style.referralWrapper}>
            <div className={style.middleBackground}></div>
            <section className={style.embla}>
                <div className={style.embla__viewport} ref={emblaRef}>
                    <div className={style.embla__container}>
                        {slides.map(index => (
                            <div className={style.embla__slide} key={index}>
                                <div className={style.embla__slide__content}>
                                    <CarouselCard />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.controlsWrapper}>
                    <div className={style.embla__controls}>
                        <div className={style.embla__dots}>
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={clsx(style.embla__dot, {
                                        [style.selected]: index === selectedIndex
                                    })}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
