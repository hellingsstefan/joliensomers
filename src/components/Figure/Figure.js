import PropTypes from 'prop-types';
import classes from './Figure.module.scss';
import c from 'classnames';
import Image from 'next/image';
import Figcaption from './Figcaption';

function Figure({ src: image, caption, alt }) {
    return (
        <figure className={classes.figure}>
            <Image src={image} alt={alt} />
            {caption && (<Figcaption text={caption} />)}
        </figure>
    );
}

Figure.propTypes = {
    image: PropTypes.object.isRequired,
    alt: PropTypes.string,
    caption: PropTypes.string,
};

export default Figure;
