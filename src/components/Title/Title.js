import PropTypes from 'prop-types';
import classes from './Title.module.scss';
import c from 'classnames';

const Title = ({ label, level = '3', type, ...props }) => {
    const Tag = `h${level}`;

    return <Tag className={c(classes.title, { [classes[type]]: type })}>{label || props.children}</Tag>;
};

Title.propTypes = {
    label: PropTypes.string,
    level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]),
    type: PropTypes.oneOf([ 'default', 'display', 'jumbotron' ]),
};

Title.defaultProps = {
    type: 'default',
};

export default Title;
