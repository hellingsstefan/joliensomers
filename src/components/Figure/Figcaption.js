import PropTypes from 'prop-types';
import classes from './Figcaption.module.scss';
import c from 'classnames';

function Figcaption({ text }) {
    return (
        <figcaption className={c(classes.figcaption)}>
            {text}
        </figcaption>
    );
}

Figcaption.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Figcaption;
