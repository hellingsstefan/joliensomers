import PropTypes from 'prop-types';
import classes from './Article.module.scss';
import c from 'classnames';

const Breakout = ({ children, size }) => (
    <div className={c(classes.breakout, { [classes[size]]: size })}>
        {children}
    </div>
);

const Article = ({ children, large }) => {
    return (
        <article className={c(classes.article, { [classes['large']]: large })}>
            {children}
        </article>
    );
};

Article.Breakout = Breakout;
Article.Breakout.propTypes = {
    breakout: PropTypes.oneOf([ 'small', 'medium', 'large', 'full' ]),
};

Article.propTypes = {
    children: PropTypes.object.isRequired,
    large: PropTypes.bool,
};

export default Article;
