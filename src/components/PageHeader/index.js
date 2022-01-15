import { useContext } from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';
import classes from './pageHeader.module.scss';
import Logo from '../Logo';
import Nav from '../Nav';
import { StyleContext } from '../../context/StyleContext';

function PageHeader({ style }) {
    const { setStyle } = useContext(StyleContext);

    setStyle(style);

    return (
        <header className={c(classes.pageHeader, classes[style])}>
            <Logo />
            <Nav />
        </header>
    );
}

PageHeader.propTypes = {
    style: PropTypes.string,
};

PageHeader.defaultProps = {
    style: 'light',
};

export default PageHeader;
