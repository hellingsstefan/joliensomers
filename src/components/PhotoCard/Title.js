import PropTypes from 'prop-types';
import classes from './PhotoCard.module.scss';

const Title = ({ label, level = '3' }) => {
    const Tag = `h${level}`;

    return <Tag className={classes.title}>{label}</Tag>;
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    level: PropTypes.oneOf([ '1', '2', '3', '4', '5', '6' ]),
};

export default Title;
