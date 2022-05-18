import PropTypes from 'prop-types';
import classes from './Tagline.module.scss';

const Tagline = ({ label, htmlTag }) => {
    const Tag = htmlTag;

    return (
        <Tag className={classes.tagline}>
            {label}
        </Tag>
    );
};

Tagline.propTypes = {
    label: PropTypes.string.isRequired,
    htmlTag: PropTypes.string,
};

Tagline.defaultProps = {
    htmlTag: 'p',
};

export default Tagline;
