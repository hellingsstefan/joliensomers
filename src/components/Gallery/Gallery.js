import PropTypes from 'prop-types';
import classes from './Gallery.module.scss';
import c from 'classnames';

const Gallery = ({ type = false, children }) => (
    <div className={c(classes.gallery, { [classes[type]]: type })}>
        {type && type === 'fixed-2-3'
            ? (children.map((child, index) => (index < 6 && (child))))
            : (children)
        }
    </div>
);

Gallery.propTypes = {
    type: PropTypes.oneOf([ 'fixed-2-3', 'repeating-2-3' ]),
    children: PropTypes.node.isRequired,
};

export default Gallery;
