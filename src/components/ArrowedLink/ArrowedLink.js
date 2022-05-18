import PropTypes from 'prop-types';
import Link from 'next/link';
import classes from './ArrowedLink.module.scss';

const ArrowedLink = ({ label, href }) => (
    <Link href={href} passHref>
        <a className={classes.link}>
            {label}
            <span className={classes.arrow}></span>
        </a>
    </Link>
);

ArrowedLink.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default ArrowedLink;
