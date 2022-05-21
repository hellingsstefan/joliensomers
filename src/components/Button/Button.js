import PropTypes from 'prop-types';
import classes from './Button.module.scss';
import Link from 'next/link';
import Icon from '@components/Icon';

const iconBefore = (icon, iconPosition) => (iconPosition === 'before' && <Icon icon={icon} />);
const iconAfter = (icon, iconPosition) => (iconPosition === 'after' && <Icon icon={icon} />);

const Button = ({ href, label, icon = null, iconPosition = 'after' }) => (
    <Link href={href} passHref>
        <a className={classes.button}>
            {iconBefore(icon, iconPosition)}
            {label}
            {iconAfter(icon, iconPosition)}
        </a>
    </Link>
);

Button.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    iconPosition: PropTypes.oneOf([ 'before', 'after' ]),
};

export default Button;
