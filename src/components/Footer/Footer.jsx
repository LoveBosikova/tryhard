import styles from './footer.scss';

export default function Footer (props) {
    return (
        <section className="footer">
            <div className="footer__wrap">
                <p className="footer__text">Copyright © 2023. All rights are reserved</p>
                <div className="footer__contacts">
                    <a href="" className="footer__iconWrap">
                        <svg className="footer__icon footer__icon--linkedIn" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M8 11l0 5"></path>
                            <path d="M8 8l0 .01"></path>
                            <path d="M12 16l0 -5"></path>
                            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                        </svg>
                    </a>
                    <a href="" className="footer__iconWrap">
                        <svg className="footer__icon footer__icon--git" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}