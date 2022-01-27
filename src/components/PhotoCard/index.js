import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import classes from './PhotoCard.module.scss';

const PhotoCard = ({ title, category, image, alt = '', href = '/' }) => (
    <Link href={href} passHref>
        <figure tabIndex="0" className={classes.photoCard}>
            <header className={classes.header}>
                <p className={classes.category}>{category}</p>
                <h3 className={classes.title}>{title}</h3>
                <a className={classes.link}>Naar reportage</a>
            </header>
            <Image src={image} alt={alt} />
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
