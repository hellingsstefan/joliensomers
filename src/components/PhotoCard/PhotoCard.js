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
                {image.width}, {image.height}
                <a className={classes.link}>Naar reportage</a>
            </header>
            <Image
                src={image.src}
                alt={alt}
                width={image.width}
                height={image.height} />
        </figure>
    </Link>
);

PhotoCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    alt: PropTypes.string,
    href: PropTypes.string,
};

export default PhotoCard;
