import PropTypes from 'prop-types';
import c from 'classnames';
import classes from './Icon.module.scss';

const icons = [
    'facebook',
    'instagram',
    'twitter',
    'arrow-left',
    'arrow-right',
    'email',
    'chevron-down',
    'checkmark',
];

const Icon = ({ icon }) => (<span className={c(classes.icon, classes[icon])} />);

Icon.propTypes = {
    icon: PropTypes.oneOf(icons).isRequired,
};

export default Icon;
