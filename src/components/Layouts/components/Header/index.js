import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner, } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';

// để đặt tên classnames có dấu - thì phải dùng bind
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tik Tok" />
                </div>
                <div className={cx('serach')}>
                    <input type="text" placeholder="Search accounts and videos..." spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon = {faCircleXmark} />
                    </button>
                        <FontAwesomeIcon className = {cx('loading')} icon = {faSpinner} />
                    <button className = {cx('search-btn')}>
                        <FontAwesomeIcon icon = {faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('acctions')}>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
