import PropTypes from 'prop-types';
import classes from './Figure.module.scss';
import Image from 'next/image';
import Figcaption from './Figcaption';

const Figure = ({ src: image, caption, alt }) => (
    <figure className={classes.figure}>
        <Image src={image} alt={alt} />
        {caption && (<Figcaption text={caption} />)}
    </figure>
);

Figure.propTypes = {
    src: PropTypes.object.isRequired,
    alt: PropTypes.string,
    caption: PropTypes.string,
};

export default Figure;
