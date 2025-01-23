import styles from "./Main.module.scss";
import logoWhite from "../../assets/logo_white.svg";
import userLogo from "../../assets/user_logo.svg";
import manWithPhone from "../../assets/man_with_phone.svg";
import conditionCar from "../../assets/condition_car.webp";
import {Helmet} from 'react-helmet';

export const MainPageUi = () => {
    return (
        <>
            <Helmet>
                <title>Главная страница</title>
                <meta name="description" content="Описание главной страницы"/>
                <meta name="keywords" content="ключевые слова, главная"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
                    rel="stylesheet"></link>
            </Helmet>
            <div className={styles.main_page}>
                <div className={styles.main_page_head}>
                    <header className={styles.header}>
                        <a className={styles.header_link} href="/" target="_blank">
                            <img src={logoWhite} className={styles.logo} alt="Invite"/>
                        </a>
                        <div className={styles.header_element}>Преимущества</div>
                        <div className={styles.header_element}>Выгода</div>
                        <div className={styles.header_element}>Прозрачность</div>
                        <a href="/login" className={styles.header_start}>Зарабатывать</a>
                        <a href="/login" className={styles.header_user}><img src={userLogo} className={styles.user_logo}
                                                                             alt="user logo"/></a>
                    </header>
                    <div className={styles.content}>
                        <h1>Приводи клиентов – зарабатывай с нами !</h1>
                        <p>Мы платим до 150.000₽ за каждого приведенного вами клиента</p>
                        <button className={styles.btn_main}>Начать зарабатывать</button>
                    </div>
                </div>
                <div className={styles.main_page_conditions}>
                    <div className={styles.txt}>
                        <h2>Прозрачная сделка</h2>
                        <p>Привлекайте покупателей в автосалон и получайте вознаграждение за <br/> успешную сделку</p>
                        <ul className={styles.list}>
                            <li>
                                <details>
                                    <summary>
                                        <span>01</span>
                                        <span>Выгода для покупателя</span>
                                    </summary>
                                    <p>Для клиента: оплатим первые три платежа по кредиту, предоставим максимальную
                                        скидку,
                                        а также подарим путевку в Турцию на двоих.</p>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>
                                        <span>02</span>
                                        <span>Полная прозрачность</span>
                                    </summary>
                                    <p>111</p>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>
                                        <span>03</span>
                                        <span>Менеджер всегда на связи</span>
                                    </summary>
                                    <p>1111</p>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <img width={381} height={386} src={manWithPhone} alt="Человек с телефоном в руке"/>
                    <div className={styles.car}>
                        <div>+100</div>
                        <div>Автосалонов</div>
                        <img width={231} height={153} src={conditionCar} alt="Машина"/>
                    </div>
                </div>
            </div>
        </>
    )
}