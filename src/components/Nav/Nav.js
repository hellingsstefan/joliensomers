import React, { Component, useContext } from 'react';
import c from 'classnames';
import classes from './Nav.module.scss';
import Link from 'next/link';
import MenuButton from '../MenuButton';
import Social from '../../components/Social';
import attachAnimation from '../../utils/transitioning';
import { StyleContext } from '../../context/StyleContext';

const items = [
    {
        href: '/',
        label: 'Home',
        overlayModeOnly: true,
    },
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
        href: '/textpage',
        label: 'Textpage',
    },
];

class Nav extends Component {

    static contextType = StyleContext;

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
        attachAnimation(this.navRef.current, 'nav-transitioning');
    }

    _closeNav() {
        document.body.classList.remove('nav-isOpen');
        attachAnimation(this.navRef.current, 'nav-transitioning');
    }

    _toggleNav = () => this.setState({ isOpen: !this.state.isOpen }, () => this._handleToggle());

    render() {
        const { mode } = this.state;
        const [ style ] = this.context;

        return (
            <nav
                ref={this.navRef}
                className={c({
                    [classes.nav]: true,
                    [classes[mode]]: mode,
                    [classes[style]]: style,
                })}>
                <MenuButton onClick={this._toggleNav} />
                <div
                    ref={this.containerRef}
                    className={classes.navContainer}>
                    {items.map(({ href, label, overlayModeOnly }) => (
                        <Link
                            href={href}
                            key={href}>
                            <a
                                className={c(classes.navLink, { [classes.overlayModeOnly]: overlayModeOnly })}
                                onClick={this._toggleNav}>
                                {label}
                            </a>
                        </Link>
                    ))}
                    <Social style="in-overlay-nav" />
                </div>
            </nav>
        );
    }
}

export default Nav;
