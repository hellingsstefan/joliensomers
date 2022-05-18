import { useEffect } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import classes from './JumbotronSlider.module.scss';
import Image from 'next/image';
import Tagline from '../Tagline';
import Title from '../Title';
import Link from '../ArrowedLink';

const slide = (index, item) => (
    <div key={index} className={c(
        classes.slide,
        { [classes.current]: index === 0 }
    )}>
        <div className={classes.image}>
            <Image
                loading={index === 0 ? 'eager' : 'lazy'}
                src={item.image.src}
                width={item.image.width}
                height={item.image.height}
                alt={item.alt} />
        </div>
        <div className={classes.label}>
            <Tagline label={item.label} />
            <Title level="2" type="jumbotron">
                {item.title},<br/>
                {item.location}
            </Title>
            <Link href={item.url} label="Bekijk album" />
        </div>
    </div>
);

const handleSlider = dir => {
    const slider = document.querySelector(`.${classes.slider}`);
    const slides = slider.querySelectorAll(`.${classes.slide}`);
    const currentSlide = slider.querySelector(`.${classes.current}`);
    const nextSlide = currentSlide.nextElementSibling || slides[0];
    const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];

    if (dir === 'next') {
        currentSlide.classList.remove(classes.current);
        nextSlide.classList.add(classes.current);
    }

    if (dir === 'prev') {
        currentSlide.classList.remove(classes.current);
        prevSlide.classList.add(classes.current);
    }
};

const prev = () => handleSlider('prev');
const next = () => handleSlider('next');

const JumbotronSlider = ({ items }) => {
    useEffect(() => window.addEventListener('keydown', e => {
        if (e.keyCode === 37)
            prev();

        if (e.keyCode === 39)
            next();
    }), []);

    return (
        <div className={classes.jumbotronSlider}>
            <div className={classes.slider}>
                {items.map((item, index) => slide(index, item))}
            </div>
            <div className={classes.controls}>
                <button onClick={prev} className={c(classes.button, classes.prev)}>
                    <svg viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16L9.41 14.59L3.83 9L24 9L24 7L3.83 7L9.42 1.42L8 1.90798e-07L9.5399e-08 8L8 16Z" />
                    </svg>
                </button>
                <button onClick={next} className={c(classes.button, classes.next)}>
                    <svg viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" />
                    </svg>
                </button>
            </div>
        </div>
);};

const { arrayOf, shape, string, number } = PropTypes;

JumbotronSlider.propTypes = {
    items: arrayOf(shape({
        image: shape({
            src: string.isRequired,
            width: number.isRequired,
            height: number.isRequired,
        }).isRequired,
        alt: string.isRequired,
        label: string.isRequired,
        title: string.isRequired,
        location: string.isRequired,
        url: string.isRequired,
    })).isRequired,
};

export default JumbotronSlider;
