import { useContext } from 'react';
import PageHeaderStyleContext from '../PageHeader/StyleContext';
import styles from './MenuButton.module.scss';
import c from 'classnames';

const clickHandler = (event, props) => {
    event.preventDefault();
    props.onClick();
};

function MenuButton(props) {
    const { style } = useContext(PageHeaderStyleContext);

    return (
        <a
            href="#"
            className={c(styles.menuButton, styles[style])}
            onClick={event => clickHandler(event, props)}>
            <span className={styles.menuButton__line}></span>
            <span className={styles.menuButton__line}></span>
            <span className={styles.menuButton__line}></span>
        </a>
    );
}

export default MenuButton;
