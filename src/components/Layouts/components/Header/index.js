import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// để đặt tên classnames có dấu - thì phải dùng bind
const cx = classNames.bind(styles);
function Header() {
    return <header className={cx('wrapper')} >
        <div className={cx('inner')}></div>
    </header>;
}

export default Header;
