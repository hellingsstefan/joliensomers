import PropTypes from "prop-types";
import classes from './Blockquote.module.scss';

const Blockquote = ({ quote, caption }) => (
    <figure className={classes.wrapper}>
        <blockquote className={classes.blockquote}>
            {typeof quote === 'string'
                ? (<p>{quote}</p>)
                : quote}
        </blockquote>
        {caption && (<figcaption className={classes.caption}>{caption}</figcaption>)}
    </figure>
);

Blockquote.propTypes = {
    quote: PropTypes.string.isRequired,
    caption: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
};

export default Blockquote;
