import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = className.bind(styles);

function Button({
    to,
    href,
    text = false,
    primary = false,
    disable = false,
    rounded = false,
    small = false,
    large = false,
    outline = false,
    children,
    onClick,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    //c1
    if (disable) {
        delete props.disable;
    }

    //c2
    // if (disable) {
    //     Object.keys(children).forEach((key) => {
    //         if (KeyboardEvent.startsWith('on') && typeof props[key] === 'function') {
    //             delete props[key];
    //         }
    //     });
    // }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        small,
        large,
        disable,
        rounded,
        [className] : className
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
