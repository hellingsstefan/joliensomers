import { useContext } from 'react';
import StyleContext from './StyleContext';
import c from 'classnames';
import styles from './pageHeader.module.scss';
import Logo from '../Logo';
import Nav from '../Nav';

export default function PageHeader(props) {
    const { style, setStyle } = useContext(StyleContext);

    setStyle(props.style);
    return (
        <header className={c(styles.pageHeader, styles[style])}>
            <Logo />
            <Nav />
        </header>
    );
}
