import React, { Component } from 'react';
import c from 'classnames';
import styles from './Nav.module.scss';
import Link from 'next/link';
import MenuButton from '../MenuButton';

const items = [
    {
        href: '/portfolio',
        label: 'Portfolio',
    },
    {
        href: '/over',
        label: 'Over',
    },
    {
        href: '/contact',
        label: 'Contact',
    },
    {
        href: '/contact2',
        label: 'Contact',
    },
    {
        href: '/contact3',
        label: 'Contact',
    },
];

class Nav extends Component {

    constructor() {
        super();
        this.navRef = React.createRef();
        this.containerRef = React.createRef();
    }

    state = {
        mode: 'initMode',
        isOpen: false,
        neededWidth: false,
        resizeTimer: null,
    }

    componentDidMount() {
        this._init();
        window.addEventListener('resize', this._resizeHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._resizeHandler);
    }

    _resizeHandler = () => {
        if (!this.resizeTimer)
            this.resizeTimer = setTimeout(this._init, 250);
    }

    _setRootMode = mode => {
        document.body.classList.add(`nav-${mode}`);
    }

    _init = () => {
        this._setRootMode('initMode');
        this.resizeTimer = null;

        let { neededWidth, availableWidth, mode } = this.state;
        const { containerRef, navRef } = this;
        const containerWidth = containerRef.current.offsetWidth;

        availableWidth = navRef.current.offsetWidth;

        if (!neededWidth)
            neededWidth = containerWidth;

        mode = availableWidth < neededWidth ? 'overlayMode' : false;

        this.setState({ mode, neededWidth, availableWidth }, () => this._handleRootClasses());
    }

    _handleRootClasses = () => {
        const { mode } = this.state;

        document.body.classList.remove('nav-initMode');
        document.body.classList.remove('nav-overlayMode');

        if (mode)
            document.body.classList.add(`nav-${mode}`);
    }

    _handleToggle = () => {
        const { isOpen } = this.state;

        (isOpen)
            ? this._openNav()
            : this._closeNav();
    }

    _openNav() {
        document.body.classList.add('nav-isOpen');
        this._attachAnimation();
    }

    _closeNav() {
        document.body.classList.remove('nav-isOpen');
        this._attachAnimation();
    }

    _toggleNav = () => this.setState({ isOpen: !this.state.isOpen }, () => this._handleToggle());

    _attachAnimation = () => {
        const target = this.navRef.current;

        target.classList.add(styles.transitioning);
        target.addEventListener("transitionend", this._cleanupAnimation, false);
    }

    _cleanupAnimation = () => {
        const target = this.navRef.current;

        target.classList.remove(styles.transitioning);
        target.removeEventListener("transitionend", this._cleanupAnimation, false);
    }

    render() {
        const { mode } = this.state;

        return (
            <nav
                ref={this.navRef}
                className={c({
                    [styles.nav]: true,
                    [styles[mode]]: mode,
                })}>
                <MenuButton onClick={this._toggleNav} />
                <div
                    ref={this.containerRef}
                    className={styles.navContainer}>
                    {items.map(({ href, label }) => (
                        <Link href={href} key={href}>
                            <a className={styles.navLink}>{label}</a>
                        </Link>
                    ))}
                </div>
            </nav>
        );
    }
}

export default Nav;
