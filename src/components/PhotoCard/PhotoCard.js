import PropTypes from 'prop-types';
import classes from './PhotoCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Title from '../Title';
import Tagline from '../Tagline';

const PhotoCard = ({ title, category, image, alt = '', href = '/' }) => (
    <Link href={href} passHref>
        <figure tabIndex="0" className={classes.photoCard}>
            <header className={classes.header}>
                <Tagline label={category} />
                <Title label={title} level="3" />
                <a className={classes.link}>Naar reportage</a>
            </header>
            <Image
                {...image.src}
                alt={alt} />
        </figure>
    </Link>
);

const { number, shape, string } = PropTypes;

PhotoCard.propTypes = {
    title: string.isRequired,
    category: string.isRequired,
    image: shape({
        src: shape({
            blurDataURL: string,
            src: string.isRequired,
            width: number.isRequired,
            height: number.isRequired,
        }).isRequired,
    }).isRequired,
    alt: string,
    href: string,
};

export default PhotoCard;
