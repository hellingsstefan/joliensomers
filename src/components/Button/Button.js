import PropTypes from 'prop-types';
import classes from './Button.module.scss';
import Link from 'next/link';

const Button = ({ href, label }) => (
    <Link href={href} passHref>
        <a className={classes.button}>
            {label}
        </a>
    </Link>
);

Button.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Button;
