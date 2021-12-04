import { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuButton.module.scss';
import c from 'classnames';
import { StyleContext } from '../../context/StyleContext';

const clickHandler = (event, onClick) => {
    event.preventDefault();
    onClick();
};

function MenuButton({ onClick }) {
    const { style } = useContext(StyleContext);

    return (
        <a
            href="#"
            className={c(styles.menuButton, styles[style])}
            onClick={event => clickHandler(event, onClick)}>
            <span className={styles.menuButton__line}></span>
            <span className={styles.menuButton__line}></span>
            <span className={styles.menuButton__line}></span>
        </a>
    );
}

MenuButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default MenuButton;
