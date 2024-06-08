import * as styles from "./StartupProfileContact.module.scss";

export default function StartupProfileContact({ email, website, twitter, linkedin }) {
    return (
        <>
            <div className={styles.contactUsWrapper}>
                <div className={styles.contactContainer}>
                    <div className={styles.title}>Contact <span>Us</span></div>
                    <div className={styles.mobile}>
                        <div className={styles.type}>Email :</div>
                        <div className={styles.details}>{email}</div>
                    </div>
                    <div className={styles.mobile}>
                        <div className={styles.type}>Website :</div>
                        <a href={website} target="_blank" className={styles.website}>{website}</a>
                        <svg className={styles.link} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M8.962 12.0578H6.30775C5.46175 12.0578 4.74075 11.7598 4.14475 11.1638C3.54875 10.5678 3.2505 9.84653 3.25 9.00003C3.2495 8.15353 3.54775 7.43228 4.14475 6.83628C4.74175 6.24028 5.46275 5.94203 6.30775 5.94153H8.962V6.69153H6.30775C5.67275 6.69153 5.1295 6.91753 4.678 7.36953C4.226 7.82203 4 8.36553 4 9.00003C4 9.63453 4.226 10.1778 4.678 10.6298C5.13 11.0818 5.67325 11.3078 6.30775 11.3078H8.962V12.0578ZM7.375 9.37503V8.62503H12.625V9.37503H7.375ZM11.0388 12.0578V11.3078H13.6923C14.3273 11.3078 14.8705 11.0818 15.322 10.6298C15.774 10.1778 16 9.63453 16 9.00003C16 8.36553 15.774 7.82228 15.322 7.37028C14.87 6.91828 14.3268 6.69228 13.6923 6.69228H11.0388V5.94228H13.6923C14.5383 5.94228 15.2595 6.24028 15.856 6.83628C16.4525 7.43228 16.7505 8.15353 16.75 9.00003C16.7495 9.84653 16.4512 10.5678 15.8552 11.1638C15.2592 11.7598 14.5383 12.058 13.6923 12.0585L11.0388 12.0578Z" fill="#138CFD" />
                        </svg>
                    </div>
                    <div className={styles.connectContainer}>
                        <div className={styles.title}>Connect</div>
                        <div className={styles.connectButtonsContainer}>
                            <a href={twitter} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <path d="M24.8861 0H7.61821C3.41079 0 0 3.41079 0 7.61821V24.8861C0 29.0936 3.41079 32.5043 7.61821 32.5043H24.8861C29.0936 32.5043 32.5043 29.0936 32.5043 24.8861V7.61821C32.5043 3.41079 29.0936 0 24.8861 0Z" fill="white" />
                                    <path d="M24.8861 0H7.61821C3.41079 0 0 3.41079 0 7.61821V24.8861C0 29.0936 3.41079 32.5043 7.61821 32.5043H24.8861C29.0936 32.5043 32.5043 29.0936 32.5043 24.8861V7.61821C32.5043 3.41079 29.0936 0 24.8861 0Z" fill="#FB723D" />
                                    <path d="M25.339 11.6065C25.353 11.808 25.353 12.0095 25.353 12.2129C25.353 18.4087 20.6363 25.5543 12.0116 25.5543V25.5505C9.46373 25.5542 6.96862 24.8245 4.82422 23.4485C5.19472 23.4931 5.56699 23.5153 5.94029 23.5162C8.05205 23.5179 10.1031 22.8096 11.7638 21.5051C10.7853 21.4866 9.83709 21.1628 9.05167 20.579C8.26624 19.9952 7.68289 19.1805 7.38317 18.2489C8.08567 18.3844 8.80988 18.3568 9.50002 18.1682C7.31258 17.7262 5.73878 15.8043 5.73878 13.5721V13.5127C6.39089 13.8759 7.1207 14.0772 7.8668 14.0996C5.80659 12.7226 5.17148 9.98166 6.41554 7.83866C7.59271 9.28726 9.06146 10.472 10.7264 11.316C12.3913 12.16 14.2151 12.6443 16.0794 12.7374C15.8935 11.9373 15.9209 11.1024 16.159 10.3162C16.397 9.53006 16.8373 8.82016 17.4358 8.25754C19.3243 6.48224 22.2945 6.57328 24.0698 8.46082C25.1199 8.2535 26.1269 7.86855 27.0474 7.32253C26.6974 8.40821 25.9649 9.32976 24.9862 9.91577C25.9157 9.80626 26.8234 9.55744 27.6788 9.17769C27.0496 10.1201 26.2572 10.9425 25.339 11.6065Z" fill="white" />
                                </svg>
                            </a>
                            <a href={linkedin} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                                    <g clipPath="url(#clip0_1266_2363)">
                                        <path d="M30.6026 -0.00012105H2.89396C2.26527 -0.00651929 1.65971 0.236746 1.21017 0.676297C0.760633 1.11585 0.503823 1.71578 0.496094 2.34445V30.165C0.505221 30.7927 0.762646 31.3913 1.21203 31.8297C1.66142 32.2681 2.26618 32.5106 2.89396 32.5042H30.6026C31.2313 32.5092 31.8365 32.2651 32.2858 31.8253C32.7351 31.3855 32.992 30.7857 33.0004 30.157V2.33646C32.9892 1.70963 32.7311 1.11256 32.2821 0.675025C31.833 0.237492 31.2295 -0.00513568 30.6026 -0.00012105Z" fill="#FB723D" />
                                        <path d="M5.30749 12.1838H10.1325V27.7087H5.30749V12.1838ZM7.72133 4.4574C8.27474 4.4574 8.81572 4.62154 9.27582 4.92905C9.73593 5.23656 10.0945 5.67363 10.3061 6.18496C10.5178 6.69629 10.573 7.25891 10.4649 7.80165C10.3567 8.34438 10.09 8.84285 9.69852 9.23398C9.30702 9.62511 8.8083 9.89134 8.26547 9.99898C7.72263 10.1066 7.16006 10.0508 6.64893 9.83869C6.1378 9.62655 5.70107 9.26757 5.394 8.80717C5.08693 8.34678 4.9233 7.80565 4.92383 7.25224C4.92454 6.51076 5.21958 5.79988 5.74414 5.27583C6.2687 4.75177 6.97985 4.4574 7.72133 4.4574ZM13.1592 12.1838H17.7844V14.3153H17.8483C18.4931 13.095 20.065 11.8082 22.4122 11.8082C27.2985 11.7975 28.2044 15.0133 28.2044 19.1829V27.7087H23.3794V20.1554C23.3794 18.357 23.3474 16.0417 20.8723 16.0417C18.3971 16.0417 17.9762 18.0027 17.9762 20.0382V27.7087H13.1592V12.1838Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1266_2363">
                                            <rect width="32.5043" height="32.5043" fill="white" transform="translate(0.496094)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
