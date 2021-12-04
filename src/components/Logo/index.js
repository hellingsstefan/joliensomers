import { useContext } from 'react';
import c from 'classnames';
import Link from 'next/link';
import styles from './Logo.module.scss';
import { StyleContext } from '../../context/StyleContext';

function Logo() {
    const { style } = useContext(StyleContext);

    return (
        <Link href="/">
            <a className={c(styles.logo, styles[style])}>
                <svg width="150" height="30" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8091 16.9448C13.8197 16.7534 12.6069 16.5619 11.1069 16.4981C2.96832 16.1151 0.000141846 20.0402 0.000141846 22.3059C-0.031774 28.3371 5.3301 29.9008 8.07486 29.9965C13.3729 30.188 15.3517 22.4974 15.9262 18.1574C17.4262 18.5723 17.7135 18.8914 17.7135 18.8914C17.7135 18.8914 18.0965 19.1786 18.2879 18.9552C18.5114 18.4447 18.1284 18.1894 18.1284 18.1894C18.0965 18.1894 17.49 17.7426 16.0538 17.2958C16.1177 16.6895 16.1496 16.2109 16.1496 15.8598C16.3092 9.66908 17.7454 2.2976 17.905 1.88276C18.0645 1.436 18.4475 0.733957 17.3305 0.382933C16.2772 0.0319108 16.2134 0.829689 16.2134 0.829689C16.2134 0.829689 15.0325 3.70169 14.8729 4.2761C14.6815 5.04196 15.1602 5.48872 15.4793 4.78667L15.9262 4.2761C15.9262 4.2761 15.3198 9.47762 15.2559 10.9455C15.224 12.2858 15.0644 14.8068 14.8091 16.9448ZM11.4899 17.5192C12.8303 17.6469 13.8836 17.7745 14.7134 17.9341C14.6176 21.6996 12.4154 29.1349 7.7557 28.7839C2.90449 28.4009 0.829955 24.9545 0.957619 23.4547C1.27678 19.2105 6.03225 17.0406 11.4899 17.5192Z" />
                    <path d="M22.9621 16.1151C22.6111 15.8918 22.3238 15.6046 22.0685 15.2854C21.4621 14.5196 21.6855 13.3708 22.2281 13.3389C22.8345 13.307 23.0898 14.5515 22.9621 16.1151ZM20.9195 15.0302C21.3025 16.1151 21.9727 16.8491 22.8025 17.3278V17.3597C22.6111 18.3808 21.7493 19.402 21.0472 19.3382C19.9939 19.2424 19.9301 17.8702 19.9939 17.3278C20.2174 15.7641 20.8238 15.0621 20.9195 15.0302ZM28.3878 17.3278C32.5369 14.9663 34.6433 3.98889 31.4518 3.19111C30.1113 2.872 28.2921 4.81859 27.3027 9.09468C26.8559 11.0413 26.4729 14.3281 27.175 16.8172C26.0899 17.0406 24.9409 16.9767 23.9515 16.6257C24.526 13.1474 22.8983 12.1901 22.1323 12.2539C21.2706 12.3177 20.7599 12.8602 20.6961 13.4665C20.5046 13.4984 20.2812 13.5942 20.0897 13.8494C19.7067 14.3281 19.1003 15.1578 18.9088 17.232C18.8131 18.2851 19.1641 20.104 20.7599 20.2636C22.1961 20.4231 23.377 19.051 23.7281 17.7107C24.909 18.0617 26.3133 17.9979 27.4623 17.6788C28.0687 19.051 29.0581 20.0083 30.6858 20.104C33.7816 20.2636 35.4732 16.8172 35.6966 16.3704C36.3349 15.094 35.8881 14.36 35.6008 14.8706C34.5795 16.6895 33.1433 19.2105 31.0368 19.1786C29.856 19.1786 28.8027 18.4127 28.3878 17.3278ZM28.1006 16.3704C27.4304 13.9133 27.8772 11.3604 28.324 9.47761C29.09 6.12694 30.3347 4.21227 31.1007 4.43565C32.4731 4.88241 31.4837 14.0409 28.1006 16.3704Z" />
                    <path d="M41.8304 16.2747C42.4687 14.9982 42.0219 14.2643 41.7347 14.8068C41.0006 16.147 39.4048 19.0191 37.7132 19.0829C35.2238 19.2105 36.4366 14.711 36.4366 14.5515C36.4366 13.9771 35.4472 13.9133 35.2238 14.4877C35.2238 14.4877 34.9685 15.9237 34.9047 16.6257C34.8408 17.2001 35.0961 20.1679 37.5856 20.1359C39.8516 20.1359 41.607 16.7214 41.8304 16.2747ZM35.9579 10.9136C35.2876 10.8179 34.9685 11.6157 34.9685 11.9029C34.9366 12.222 35.0642 12.7326 35.6706 12.8283C36.1494 12.8921 36.5643 12.573 36.6281 12.1262C36.6919 11.6795 36.66 11.0093 35.9579 10.9136Z" />
                    <path d="M41.395 15.1897C41.1078 15.9556 41.0121 16.53 39.9588 17.7107C39.5439 15.8918 40.8525 12.8283 41.4908 12.924C42.0653 13.0517 41.778 14.2005 41.395 15.1897ZM41.7461 18.9552C41.2036 18.9552 40.6929 18.7638 40.4057 18.5085C40.8525 17.966 41.7461 16.881 42.2568 15.5726C42.7036 14.4238 43.4377 12.8921 42.1291 12.0305C40.3737 10.9455 38.8418 14.36 38.7779 16.0513C38.7141 17.7426 39.0652 20.0402 41.9695 20.104C44.3951 20.1359 46.0548 16.7534 46.2782 16.3066C46.9484 15.0302 46.5335 14.2962 46.2463 14.8068C45.4484 16.147 44.0441 18.9552 41.7461 18.9552Z" />
                    <path d="M47.1621 16.179C47.0663 17.4554 46.7153 19.4977 47.96 19.5935C49.5558 19.6892 50.3218 15.7003 50.5771 15.7641C51.0558 15.8918 49.7473 19.8168 53.0346 19.9126C55.4283 20.0083 57.0241 16.8172 57.2475 16.3704C57.8858 15.094 57.4709 14.36 57.1837 14.8706C56.4496 16.2109 54.9815 19.0829 53.0346 18.9233C50.5133 18.7319 52.4601 14.1366 52.0133 13.658C51.5027 13.0517 50.8005 12.9878 50.5133 13.6899C50.1941 14.3919 48.7579 18.3808 48.2792 18.2851C47.6408 18.1255 48.5664 15.8598 48.0557 14.4877C47.6408 13.4027 46.8429 13.7218 46.5238 14.2962C46.2046 14.8068 46.0131 15.1259 45.8216 15.4769C45.5344 16.0513 46.045 16.5619 46.2685 16.3066C46.6834 15.5407 46.9068 15.0302 47.0025 15.0302C47.2259 15.0302 47.2259 15.5088 47.1621 16.179Z" />
                    <path d="M76.2806 0H76.2487C70.2485 0 60.2269 2.23378 60.0354 6.35032C59.8758 9.89246 66.2271 11.7433 70.9507 13.4027C74.5572 14.6472 79.9509 15.7003 79.8871 17.4873C79.8233 19.2743 74.7806 20.0083 72.8337 19.9445C67.3122 19.7211 63.2589 16.9767 63.2589 16.9767C62.5568 16.53 62.3972 17.1363 62.3972 17.1363C62.3972 17.1363 65.9079 20.8699 72.8018 21.0614C79.0892 21.2528 81.3872 18.6999 81.451 17.615C81.5786 15.2216 76.3125 14.0728 72.6422 12.8283C67.8548 11.1689 61.1844 9.1585 61.2482 6.2865C61.3121 4.37183 68.6208 1.08498 75.4827 1.21262C81.3233 1.30836 81.7701 3.28685 81.7063 3.89316C81.451 5.90356 78.3551 6.5737 77.7168 6.44605C77.27 6.22268 76.7593 7.30765 77.7168 7.40339C79.185 7.7225 82.951 6.12694 83.0787 3.82934C83.2383 0.989245 79.153 0 76.2806 0Z" />
                    <path d="M83.14 17.3278C83.1719 16.6895 83.7145 15.2854 84.0656 15.0302C84.4167 15.9875 85.0869 16.7853 85.9805 17.2958C85.6933 18.2851 84.9911 19.402 84.1933 19.3382C83.14 19.2743 83.1081 18.0298 83.14 17.3278ZM86.172 16.1151C85.5656 15.7322 85.1188 15.2216 84.9592 14.6791C84.7677 14.1366 84.8316 13.3708 85.3741 13.3389C86.1401 13.275 86.2039 14.9663 86.172 16.1151ZM90.2573 15.4131C89.5232 16.8491 88.2147 16.9767 87.1614 16.5619C87.1934 16.3704 87.2253 16.179 87.2253 15.9875C87.4487 13.2112 86.1082 12.1901 85.2784 12.2539C84.4167 12.3177 83.9698 12.8283 83.8422 13.4665C82.789 13.6261 82.1506 16.0832 82.0549 17.232C81.9591 18.3808 82.374 20.1679 83.906 20.2636C85.5018 20.3593 86.4593 19.051 86.9061 17.615C89.2998 18.1574 90.6084 16.7214 90.9594 15.6684C91.1828 14.8706 90.7998 14.4558 90.5764 14.8706L90.2573 15.4131Z" />
                    <path d="M105.779 16.3704C106.417 15.0621 106.002 14.36 105.715 14.8706C104.981 16.2109 103.417 19.2105 101.566 19.0829C99.0446 18.9233 100.736 14.2643 100.321 13.8175C99.7787 13.2112 98.9169 13.0836 98.6297 13.8175C98.3425 14.5196 96.9382 18.5723 96.6509 18.5085C96.3318 18.4447 96.619 15.4131 96.619 14.9025C96.5871 13.4665 95.2466 13.307 94.7679 14.1686C94.5445 14.6153 92.9487 18.8595 92.438 18.6361C92.1189 18.5085 92.7253 15.796 92.3742 14.7749C91.9912 13.6899 91.321 13.6899 90.938 14.2962C90.6188 14.8068 90.4273 15.1259 90.2358 15.4769C89.9486 16.0513 90.4592 16.5619 90.6826 16.3066C91.0976 15.5407 91.2252 15.3174 91.321 15.3174C92.055 15.3174 90.4912 20.0721 92.2146 20.2317C93.6827 20.3593 94.8956 15.4131 95.3105 15.445C96.1403 15.4769 94.704 19.7849 96.3956 19.8487C97.9914 19.8807 99.0127 14.6153 99.268 14.6472C99.5234 14.6472 97.9595 20.104 101.374 20.1998C103.864 20.2636 105.524 16.8172 105.779 16.3704Z" />
                    <path d="M105.32 15.1897C105.033 15.9556 104.937 16.53 103.884 17.7107C103.469 15.8918 104.778 12.8283 105.416 12.924C105.991 13.0517 105.703 14.2005 105.32 15.1897ZM105.671 18.9552C105.129 18.9552 104.618 18.7638 104.331 18.5085C104.778 17.966 105.671 16.881 106.182 15.5726C106.629 14.4238 107.363 12.8921 106.054 12.0305C104.299 10.9455 102.767 14.36 102.703 16.0513C102.639 17.7426 102.99 20.0402 105.895 20.104C108.32 20.1359 109.98 16.7534 110.203 16.3066C110.874 15.0302 110.459 14.2962 110.172 14.8068C109.374 16.147 107.969 18.9552 105.671 18.9552Z" />
                    <path d="M111.917 14.711C112.332 14.711 112.332 14.2005 112.683 14.4877C112.875 14.6791 112.332 15.2216 112.428 16.6895C112.428 17.2958 112.556 19.753 114.949 19.8807C117.151 20.0083 118.715 16.8172 118.971 16.3704C119.609 15.094 119.13 14.3919 118.875 14.9025C118.109 16.2428 116.673 18.8276 115.141 18.8276C113.864 18.8276 113.704 17.7107 113.736 16.3385C113.736 14.9663 114.151 14.9982 114.215 14.2643C114.215 14.1686 114.375 13.3708 113.928 13.1155C113.194 12.7006 112.524 13.2112 112.332 13.307C112.236 13.3389 112.013 13.4346 111.885 13.275C111.726 13.1155 112.045 12.7964 112.045 12.5092C112.077 12.2858 111.821 11.5199 111.343 11.488C110.768 11.4242 110.449 12.573 110.449 13.5942C110.449 14.2324 110.513 14.1686 110.385 14.36C110.066 14.8706 109.97 15.1259 109.779 15.4769C109.492 16.0513 109.97 16.6576 110.162 16.3704C110.609 15.6046 110.896 15.1578 111.055 14.8068C111.183 14.5196 111.502 14.711 111.917 14.711Z" />
                    <path d="M118.44 16.2109C117.993 16.3385 117.993 16.7853 117.993 16.7853C118.44 18.6361 119.397 20.0402 121.568 20.1679C124.695 20.3593 126.419 16.8491 126.674 16.4023C127.312 15.1259 126.866 14.3919 126.578 14.9025C125.812 16.2428 124.312 19.2424 121.95 19.2424C121.28 19.2424 120.674 19.0191 120.195 18.5723C121.089 18.7319 122.302 17.8064 122.461 16.2109C122.493 15.5088 121.599 13.3708 121.568 12.6687C121.536 12.1582 121.695 10.9136 120.61 10.8817C120.004 10.8817 119.844 11.4561 119.748 12.1582C119.429 14.1366 118.791 15.0621 118.599 15.4769C118.376 15.9237 119.046 16.2428 119.174 16.0194C119.621 15.2854 120.195 14.1047 120.259 13.0836C120.61 13.7218 121.248 14.2005 121.248 16.0194C121.248 17.0086 120.929 17.7745 119.78 17.8702C119.716 17.8702 119.653 17.8702 119.589 17.9022C119.365 17.5511 119.142 17.1363 119.014 16.6576C118.95 16.4662 118.855 16.0832 118.44 16.2109Z" />
                    <path d="M21.3543 29.6534H20.3641V24.9075H23.0848V25.7321H21.3543V26.9559H22.9647V27.7772H21.3543V29.6534Z" />
                    <path d="M34.9708 27.274C34.9708 28.0596 34.776 28.6634 34.3864 29.0854C33.9968 29.5074 33.4384 29.7184 32.7111 29.7184C31.9839 29.7184 31.4254 29.5074 31.0358 29.0854C30.6462 28.6634 30.4514 28.0574 30.4514 27.2675C30.4514 26.4776 30.6462 25.8749 31.0358 25.4594C31.4276 25.0417 31.9882 24.8329 32.7176 24.8329C33.447 24.8329 34.0044 25.0428 34.3896 25.4626C34.7771 25.8825 34.9708 26.4863 34.9708 27.274ZM31.5066 27.274C31.5066 27.8042 31.6073 28.2035 31.8085 28.4718C32.0098 28.7402 32.3107 28.8744 32.7111 28.8744C33.5141 28.8744 33.9156 28.3409 33.9156 27.274C33.9156 26.2049 33.5163 25.6704 32.7176 25.6704C32.3172 25.6704 32.0153 25.8057 31.8118 26.0762C31.6083 26.3445 31.5066 26.7438 31.5066 27.274Z" />
                    <path d="M44.4348 29.6534H43.4283V25.7451H42.1394V24.9075H45.7237V25.7451H44.4348V29.6534Z" />
                    <path d="M57.4116 27.274C57.4116 28.0596 57.2168 28.6634 56.8272 29.0854C56.4376 29.5074 55.8792 29.7184 55.152 29.7184C54.4247 29.7184 53.8663 29.5074 53.4767 29.0854C53.0871 28.6634 52.8923 28.0574 52.8923 27.2675C52.8923 26.4776 53.0871 25.8749 53.4767 25.4594C53.8685 25.0417 54.4291 24.8329 55.1585 24.8329C55.8879 24.8329 56.4452 25.0428 56.8305 25.4626C57.2179 25.8825 57.4116 26.4863 57.4116 27.274ZM53.9475 27.274C53.9475 27.8042 54.0481 28.2035 54.2494 28.4718C54.4507 28.7402 54.7516 28.8744 55.152 28.8744C55.955 28.8744 56.3565 28.3409 56.3565 27.274C56.3565 26.2049 55.9571 25.6704 55.1585 25.6704C54.758 25.6704 54.4561 25.8057 54.2526 26.0762C54.0492 26.3445 53.9475 26.7438 53.9475 27.274Z" />
                    <path d="M66.8464 26.9883H68.7295V29.4489C68.4243 29.5485 68.1364 29.6177 67.8659 29.6567C67.5975 29.6978 67.3226 29.7184 67.0412 29.7184C66.3248 29.7184 65.7772 29.5084 65.3984 29.0886C65.0218 28.6666 64.8335 28.0617 64.8335 27.274C64.8335 26.5079 65.0521 25.9106 65.4893 25.4821C65.9287 25.0536 66.5369 24.8394 67.3139 24.8394C67.8009 24.8394 68.2706 24.9368 68.723 25.1315L68.3886 25.9366C68.0423 25.7635 67.6819 25.6769 67.3074 25.6769C66.8724 25.6769 66.5239 25.823 66.262 26.1151C66.0001 26.4073 65.8692 26.8001 65.8692 27.2935C65.8692 27.8085 65.9741 28.2024 66.1841 28.4751C66.3962 28.7456 66.7036 28.8809 67.1061 28.8809C67.3161 28.8809 67.5293 28.8592 67.7457 28.8159V27.8259H66.8464V26.9883Z" />
                    <path d="M77.5182 27.0143H77.8428C78.161 27.0143 78.3958 26.9613 78.5473 26.8552C78.6989 26.7492 78.7746 26.5826 78.7746 26.3553C78.7746 26.1303 78.6967 25.9701 78.5409 25.8749C78.3872 25.7797 78.148 25.7321 77.8233 25.7321H77.5182V27.0143ZM77.5182 27.8323V29.6534H76.5117V24.9075H77.8948C78.5398 24.9075 79.017 25.0255 79.3265 25.2614C79.6361 25.4951 79.7908 25.8511 79.7908 26.3294C79.7908 26.6085 79.714 26.8574 79.5603 27.076C79.4066 27.2924 79.1891 27.4623 78.9077 27.5856C79.622 28.6525 80.0873 29.3418 80.3038 29.6534H79.1869L78.0539 27.8323H77.5182Z" />
                    <path d="M90.4561 29.6534L90.1119 28.5238H88.3815L88.0373 29.6534H86.9529L88.6282 24.8881H89.8587L91.5404 29.6534H90.4561ZM89.8717 27.6798C89.5535 26.6561 89.3738 26.0772 89.3327 25.9431C89.2938 25.8089 89.2656 25.7029 89.2483 25.6249C89.1769 25.902 88.9723 26.5869 88.6347 27.6798H89.8717Z" />
                    <path d="M99.7804 29.6534H98.7902V24.9075H101.511V25.7321H99.7804V26.9559H101.391V27.7772H99.7804V29.6534Z" />
                    <path d="M109.089 29.6534V24.9075H110.095V29.6534H109.089Z" />
                    <path d="M120.673 29.6534H117.939V24.9075H120.673V25.7321H118.945V26.7741H120.553V27.5986H118.945V28.8224H120.673V29.6534Z" />
                </svg>
            </a>
        </Link>
    );
}

export default Logo;
