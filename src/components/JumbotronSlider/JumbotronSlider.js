import { useEffect } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import classes from './JumbotronSlider.module.scss';
import Image from 'next/image';
import Tagline from 'components/Tagline';
import Title from 'components/Title';
import Link from 'components/ArrowedLink';
import Icon from 'components/Icon';

const slide = (index, item) => (
    <div key={index} className={c(
        classes.slide,
        { [classes.current]: index === 0 }
    )}>
        <div className={classes.image}>
            <Image
                {...item.image.src}
                loading={index === 0 ? 'eager' : 'lazy'}
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
                    <Icon icon="arrow-left" />
                </button>
                <button onClick={next} className={c(classes.button, classes.next)}>
                    <Icon icon="arrow-right" />
                </button>
            </div>
        </div>
);};

const { arrayOf, shape, string, number } = PropTypes;

JumbotronSlider.propTypes = {
    items: arrayOf(shape({
        image: shape({
            src: shape({
                blurDataURL: string,
                src: string.isRequired,
                width: number.isRequired,
                height: number.isRequired,
            }).isRequired,
        }).isRequired,
        alt: string.isRequired,
        label: string.isRequired,
        title: string.isRequired,
        location: string.isRequired,
        url: string.isRequired,
    })).isRequired,
};

export default JumbotronSlider;
