import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from 'reactstrap';

function AboutButton() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpoint = 550;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <NavLink tag={Link} to="/about" className="cursor"><svg width={windowWidth < breakpoint ? "80" : "99"} height={windowWidth < breakpoint ? "80" : "99"} viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="circleButton">
                <g id="spin" className="atagAbout">
                    <ellipse className="hoverColour" cx="49.0001" cy="49.0074" rx="25" ry="25.0038" fill="currentColor" />
                    <path className="buttonDark" d="M48.9124 9.21713L51.5956 0L52.718 0.0702257L54.2087 9.56825L52.8583 9.48047L52.5952 7.44393L50.7713 7.32103L50.2452 9.30491L48.9124 9.21713ZM52.4199 6.16231L51.9814 2.72125H51.9639L51.087 6.07453L52.4199 6.16231Z" fill="black" />
                    <path className="buttonDark" d="M55.8572 9.84919L57.9792 0.719849L59.8908 1.15876C60.3117 1.2641 60.6449 1.40455 60.908 1.59767C61.1886 1.79079 61.3815 2.01902 61.5218 2.28237C61.6621 2.54572 61.7323 2.80906 61.7498 3.10752C61.7673 3.40598 61.7323 3.70444 61.6797 4.0029L61.6095 4.33647C61.5569 4.58226 61.4867 4.79294 61.3991 4.95095C61.3289 5.10896 61.2237 5.24941 61.1185 5.35475C60.9255 5.56542 60.6449 5.70587 60.3117 5.81121C60.5923 6.02189 60.7677 6.30279 60.8379 6.61881C60.908 6.93483 60.908 7.33862 60.7852 7.8302L60.68 8.33934C60.4871 9.14694 60.1539 9.70874 59.6628 10.0599C59.1718 10.3934 58.5054 10.4637 57.646 10.2705L55.8572 9.84919ZM58.1546 5.91655L57.4706 8.84848L58.0318 8.97137C58.2949 9.0416 58.5054 9.0416 58.6807 9.00648C58.8561 8.97137 58.9789 8.88359 59.1016 8.76069C59.2069 8.6378 59.2945 8.49735 59.3472 8.30423C59.4173 8.12866 59.4699 7.91799 59.5225 7.68975C59.5751 7.46152 59.6102 7.25084 59.6278 7.07528C59.6453 6.89971 59.6278 6.7417 59.5751 6.60125C59.5225 6.4608 59.4173 6.33791 59.2945 6.25012C59.1718 6.16234 58.9789 6.09212 58.7333 6.03945L58.1546 5.91655ZM59.0139 2.24726L58.4352 4.75783L59.0315 4.89828C59.4699 5.00362 59.7856 4.95095 59.9785 4.77538C60.1714 4.59982 60.3293 4.2838 60.417 3.88001C60.5046 3.47621 60.5046 3.14264 60.3819 2.89685C60.2591 2.65106 59.9785 2.47549 59.5576 2.38771L59.0139 2.24726Z" fill="black" />
                    <path className="buttonDark" d="M64.9767 4.89822C65.117 4.54709 65.3099 4.26619 65.5379 4.05551C65.7659 3.84484 66.029 3.68683 66.3096 3.59905C66.5727 3.51126 66.8532 3.47615 67.1339 3.49371C67.4145 3.51126 67.6775 3.56393 67.9406 3.66927C68.2036 3.77461 68.4141 3.91506 68.6245 4.10818C68.835 4.3013 69.0104 4.52954 69.1331 4.77533C69.2559 5.03867 69.3085 5.31958 69.326 5.63559C69.326 5.95161 69.2734 6.28518 69.1156 6.63631L67.204 11.201C67.0462 11.5697 66.8533 11.8506 66.6253 12.0612C66.3973 12.2719 66.1517 12.4124 65.8887 12.5002C65.6081 12.5879 65.3275 12.6406 65.0469 12.6231C64.7663 12.6055 64.5032 12.5528 64.2402 12.4475C63.9946 12.3422 63.7666 12.2017 63.5562 12.0086C63.3457 11.8155 63.1879 11.5872 63.0651 11.3239C62.9248 11.0605 62.8547 10.7796 62.8547 10.4812C62.8371 10.1652 62.9073 9.83158 63.0651 9.46289L64.9767 4.89822ZM64.2928 9.98959C64.17 10.288 64.17 10.5338 64.2752 10.7445C64.3805 10.9552 64.5558 11.1132 64.7838 11.201C65.0118 11.2888 65.2398 11.3063 65.4678 11.2361C65.6958 11.1659 65.8711 10.9727 65.9939 10.6743L67.9055 6.10962C68.0283 5.81116 68.0458 5.54781 67.9406 5.33713C67.8354 5.12646 67.66 4.96845 67.432 4.88067C67.204 4.79288 66.976 4.77533 66.748 4.84555C66.52 4.91578 66.3447 5.1089 66.2219 5.40736L64.2928 9.98959Z" fill="black" />
                    <path className="buttonDark" d="M77.0251 8.70803L73.1318 14.8528C72.9739 15.1161 72.7635 15.3268 72.5355 15.4848C72.3075 15.6428 72.062 15.7482 71.7814 15.8008C71.5008 15.8711 71.2202 15.8711 70.9396 15.8184C70.659 15.7657 70.3959 15.6779 70.1328 15.5199C69.8698 15.3619 69.6769 15.1688 69.519 14.923C69.3612 14.6772 69.256 14.4314 69.1858 14.1505C69.1157 13.8696 69.1156 13.5887 69.1507 13.3078C69.1858 13.0269 69.291 12.7636 69.4664 12.5002L73.3597 6.35547L74.4997 7.07528L70.6765 13.1323C70.5011 13.4132 70.431 13.6589 70.4836 13.8872C70.5362 14.0979 70.659 14.2734 70.8519 14.3963C71.0448 14.5192 71.2552 14.5543 71.4832 14.5192C71.7112 14.4841 71.9041 14.3085 72.0795 14.0276L75.9027 8.00577L77.0251 8.70803Z" fill="black" />
                    <path className="buttonDark" d="M74.5347 18.6625L79.8661 12.5529L78.6911 11.5346L79.5153 10.5865L82.865 13.5185L82.0408 14.4665L80.8657 13.4482L75.5343 19.5579L74.5347 18.6625Z" fill="black" />
                    <path className="buttonDark" d="M79.9012 24.0348L88.7753 20.3655L89.4241 21.2784L82.9528 28.3712L82.1811 27.2652L83.6017 25.7904L82.5494 24.2981L80.6729 25.1233L79.9012 24.0348ZM84.4785 24.8599L86.8812 22.3669L86.8637 22.3494L83.7069 23.7539L84.4785 24.8599Z" fill="black" />
                    <path className="buttonDark" d="M83.7771 29.8635L92.2127 25.808L93.0545 27.5812C93.2474 27.9674 93.3351 28.3361 93.3526 28.6521C93.3702 28.9681 93.3175 29.2842 93.1948 29.5475C93.072 29.8109 92.9142 30.0566 92.6862 30.2498C92.4582 30.4429 92.2127 30.6184 91.9496 30.7413L91.6339 30.8818C91.4059 30.9871 91.1955 31.0749 91.0201 31.11C90.8447 31.1451 90.6869 31.1627 90.5291 31.1451C90.2485 31.11 89.9503 31.0047 89.6697 30.794C89.6697 31.1451 89.582 31.4436 89.3716 31.7069C89.1787 31.9703 88.8455 32.1985 88.407 32.4268L87.9335 32.655C87.1969 33.0061 86.5305 33.1115 85.9693 32.9359C85.4081 32.7603 84.9346 32.2863 84.5488 31.4963L83.7771 29.8635ZM88.2667 29.1964L85.5659 30.4956L85.8115 31.0222C85.9342 31.268 86.057 31.4436 86.1973 31.5489C86.3376 31.6543 86.4779 31.7069 86.6533 31.7245C86.8111 31.7421 86.9865 31.7069 87.1619 31.6367C87.3372 31.5665 87.5301 31.4787 87.7406 31.3909C87.951 31.2856 88.1264 31.1803 88.2843 31.0925C88.4246 30.9871 88.5473 30.8818 88.6175 30.7589C88.6876 30.6184 88.7227 30.478 88.7052 30.32C88.6876 30.162 88.635 29.9689 88.5298 29.7406L88.2667 29.1964ZM91.6515 27.5636L89.319 28.6872L89.582 29.2315C89.775 29.6353 90.0029 29.8635 90.2835 29.8986C90.5466 29.9337 90.8798 29.8635 91.2656 29.688C91.6515 29.5124 91.897 29.2842 92.0022 29.0384C92.125 28.7926 92.0724 28.4766 91.8795 28.0728L91.6515 27.5636Z" fill="black" />
                    <path className="buttonDark" d="M93.335 33.919C93.7033 33.8137 94.0365 33.7786 94.3522 33.8313C94.6678 33.8839 94.9484 33.9717 95.194 34.1297C95.4219 34.2877 95.6324 34.4809 95.7902 34.7091C95.9481 34.9373 96.0708 35.1831 96.1585 35.4465C96.2287 35.7098 96.2638 35.9731 96.2462 36.2716C96.2287 36.5701 96.1585 36.8334 96.0358 37.0968C95.913 37.3601 95.7201 37.5883 95.4746 37.7815C95.229 37.9921 94.9309 38.1501 94.5626 38.2379L89.8099 39.5898C89.4241 39.6951 89.0909 39.7302 88.7752 39.6776C88.4771 39.6249 88.1965 39.5196 87.9685 39.3791C87.723 39.2211 87.5125 39.028 87.3547 38.7997C87.1968 38.5715 87.0741 38.3257 86.9864 38.0624C86.8987 37.799 86.8812 37.5357 86.8987 37.2372C86.9162 36.9563 86.9864 36.6754 87.1091 36.4296C87.2319 36.1663 87.4073 35.938 87.6353 35.7274C87.8633 35.5167 88.1789 35.3587 88.5472 35.2533L93.335 33.919ZM88.9506 36.5701C88.6349 36.6579 88.442 36.8159 88.3368 37.0265C88.2315 37.2372 88.2315 37.4654 88.2842 37.7112C88.3543 37.9395 88.4771 38.1326 88.6875 38.2555C88.8804 38.3784 89.1435 38.4135 89.4592 38.3257L94.2119 36.9739C94.5275 36.8861 94.7204 36.7281 94.8257 36.5174C94.9309 36.3067 94.9484 36.0785 94.8783 35.8327C94.8081 35.6045 94.6854 35.4113 94.4749 35.2884C94.2645 35.1656 94.0189 35.1304 93.7033 35.2182L88.9506 36.5701Z" fill="black" />
                    <path className="buttonDark" d="M97.8948 45.7345L90.6693 46.5246C90.3712 46.5597 90.0731 46.5421 89.81 46.4543C89.5469 46.3666 89.3014 46.2437 89.0734 46.0681C88.8454 45.8925 88.6701 45.6819 88.5298 45.4185C88.3894 45.1552 88.3018 44.8918 88.2667 44.5934C88.2316 44.2949 88.2667 44.014 88.3368 43.7507C88.4245 43.4873 88.5473 43.2415 88.7402 43.0133C88.9156 42.7851 89.126 42.6095 89.3716 42.469C89.6171 42.3286 89.8977 42.2408 90.1958 42.2057L97.4213 41.4156L97.5616 42.7499L90.4764 43.5224C90.1432 43.5575 89.9152 43.6629 89.7749 43.8384C89.6346 44.014 89.582 44.2247 89.5995 44.4529C89.6171 44.6811 89.7223 44.8743 89.8977 45.0147C90.0731 45.1552 90.3186 45.2078 90.6518 45.1727L97.737 44.4002L97.8948 45.7345Z" fill="black" />
                    <path className="buttonDark" d="M88.5823 49.9481L96.6847 50.2817L96.7548 48.7367L98.0175 48.7894L97.8421 53.2311L96.5794 53.1785L96.6496 51.6335L88.5472 51.2999L88.5823 49.9481Z" fill="black" />
                    <path className="buttonDark" d="M87.7581 57.5149L96.1586 62.1498L95.8604 63.2032L86.2849 62.5887L86.6532 61.3071L88.7051 61.4827L89.2137 59.727L87.3898 58.779L87.7581 57.5149ZM89.9853 61.6055L93.4227 61.9216V61.904L90.3536 60.3239L89.9853 61.6055Z" fill="black" />
                    <path className="buttonDark" d="M85.6185 64.2039L94.0541 68.2769L93.1948 70.0502C93.0018 70.4364 92.7914 70.7348 92.5459 70.9631C92.3003 71.1738 92.0373 71.3318 91.7567 71.402C91.4761 71.4722 91.1955 71.4898 90.8973 71.4547C90.5992 71.402 90.3186 71.3142 90.038 71.1738L89.7223 71.0333C89.4943 70.928 89.3014 70.8051 89.1611 70.6997C89.0208 70.5944 88.9156 70.4715 88.8279 70.3311C88.6701 70.0853 88.5824 69.7868 88.5648 69.4357C88.2842 69.6464 87.9861 69.7692 87.6704 69.7868C87.3372 69.7868 86.9514 69.699 86.5129 69.4708L86.0394 69.2426C85.3028 68.8914 84.8118 68.435 84.5838 67.8732C84.3558 67.3289 84.4435 66.6442 84.8293 65.8542L85.6185 64.2039ZM88.9507 67.2938L86.2499 65.9946L86.0044 66.5213C85.8816 66.7671 85.829 66.9778 85.829 67.1533C85.829 67.3289 85.8816 67.4869 85.9693 67.6098C86.057 67.7327 86.1973 67.8556 86.3551 67.9609C86.5129 68.0663 86.7059 68.1541 86.9163 68.2594C87.1268 68.3647 87.3197 68.435 87.495 68.4876C87.6704 68.5403 87.8283 68.5579 87.9686 68.5403C88.1089 68.5227 88.2492 68.4525 88.3719 68.3296C88.4947 68.2067 88.5999 68.0487 88.7051 67.838L88.9507 67.2938ZM92.3354 68.9265L90.0205 67.8029L89.7574 68.3472C89.5645 68.751 89.5294 69.067 89.6697 69.3128C89.81 69.541 90.0731 69.7517 90.4589 69.9448C90.8447 70.1204 91.1604 70.1906 91.4235 70.1204C91.6865 70.0501 91.9145 69.8219 92.1074 69.4181L92.3354 68.9265Z" fill="black" />
                    <path className="buttonDark" d="M88.4596 74.1759C88.7577 74.3866 89.0032 74.6324 89.1611 74.9133C89.3189 75.1942 89.4241 75.4751 89.4417 75.756C89.4768 76.0369 89.4417 76.3178 89.3715 76.5812C89.3014 76.8621 89.1786 77.1079 89.0208 77.3185C88.8629 77.5468 88.67 77.7399 88.442 77.8979C88.214 78.0559 87.951 78.1788 87.6704 78.249C87.3898 78.3017 87.0916 78.3017 86.776 78.249C86.4603 78.1964 86.1622 78.0559 85.8465 77.8277L81.8128 74.966C81.4972 74.7377 81.2516 74.492 81.0938 74.2111C80.936 73.9302 80.8483 73.6668 80.8132 73.3859C80.7781 73.0874 80.8132 72.8065 80.8833 72.5432C80.9535 72.2798 81.0763 72.0165 81.2341 71.8058C81.3919 71.5776 81.5849 71.3845 81.8128 71.2265C82.0408 71.0685 82.3039 70.9456 82.5845 70.8929C82.8651 70.8227 83.1457 70.8051 83.4614 70.8753C83.7595 70.928 84.0752 71.0685 84.4084 71.2967L88.4596 74.1759ZM83.6367 72.4203C83.3737 72.2272 83.1282 72.1745 82.9002 72.2272C82.6722 72.2798 82.4793 72.4203 82.339 72.6134C82.1987 72.8065 82.1285 73.0348 82.1636 73.263C82.1811 73.4912 82.3214 73.7019 82.5845 73.895L86.6181 76.7567C86.8812 76.9499 87.1267 77.0025 87.3547 76.9499C87.5827 76.8972 87.7756 76.7567 87.9159 76.5636C88.0562 76.3705 88.1264 76.1423 88.0913 75.914C88.0562 75.6858 87.9334 75.4751 87.6704 75.282L83.6367 72.4203Z" fill="black" />
                    <path className="buttonDark" d="M82.1285 85.1312L76.99 80.0047C76.7795 79.794 76.6041 79.5482 76.4989 79.2849C76.3937 79.0215 76.3411 78.7582 76.3411 78.4597C76.3411 78.1788 76.3937 77.8979 76.4989 77.6346C76.6041 77.3712 76.762 77.1254 76.9724 76.9147C77.1829 76.7041 77.4284 76.5461 77.6915 76.4407C77.9545 76.3354 78.2351 76.2827 78.5157 76.2827C78.7963 76.2827 79.0769 76.3354 79.34 76.4407C79.6031 76.5461 79.8486 76.7041 80.059 76.9147L85.1975 82.0412L84.2505 82.9893L79.1997 77.9506C78.9717 77.7223 78.7262 77.5994 78.5157 77.5994C78.2877 77.5994 78.0948 77.6872 77.937 77.8452C77.7791 78.0208 77.6915 78.2139 77.6915 78.4246C77.6915 78.6528 77.8142 78.8811 78.0422 79.1093L83.093 84.148L82.1285 85.1312Z" fill="black" />
                    <path className="buttonDark" d="M72.9738 80.5314L77.7791 87.0624L79.0243 86.1494L79.7784 87.1677L76.2008 89.8012L75.4466 88.7829L76.6918 87.87L71.9041 81.3214L72.9738 80.5314Z" fill="black" />
                    <path className="buttonDark" d="M66.5727 84.6044L68.2212 94.0674L67.1865 94.4887L61.6797 86.6234L62.9249 86.1143L64.0648 87.8173L65.7484 87.115L65.345 85.096L66.5727 84.6044ZM64.7488 88.9058L66.6604 91.785L66.6779 91.7675L65.9939 88.3791L64.7488 88.9058Z" fill="black" />
                    <path className="buttonDark" d="M60.0311 87.115L62.1357 96.2443L60.2241 96.6832C59.8032 96.771 59.4349 96.8061 59.1192 96.7359C58.786 96.6832 58.5054 96.5604 58.2774 96.3848C58.0319 96.2092 57.8565 95.9985 57.6987 95.7352C57.5408 95.4718 57.4531 95.1909 57.383 94.8925L57.3128 94.5589C57.2602 94.3131 57.2251 94.1025 57.2251 93.9093C57.2251 93.7338 57.2427 93.5582 57.2953 93.4177C57.383 93.1368 57.5584 92.8911 57.8214 92.6453C57.4882 92.575 57.2076 92.417 56.9971 92.1537C56.7867 91.8903 56.6289 91.5392 56.5061 91.0476L56.3833 90.5385C56.1904 89.7309 56.243 89.0813 56.5412 88.5546C56.8393 88.0455 57.4005 87.6768 58.2599 87.4837L60.0311 87.115ZM59.6979 91.6621L59.0315 88.7302L58.4703 88.8531C58.2072 88.9057 58.0143 88.9935 57.874 89.1164C57.7337 89.2393 57.646 89.3622 57.611 89.5202C57.5583 89.6782 57.5584 89.8538 57.5759 90.0469C57.611 90.24 57.646 90.4507 57.6987 90.6614C57.7513 90.8896 57.8039 91.0827 57.874 91.2583C57.9442 91.4163 58.0143 91.5568 58.1196 91.6621C58.2248 91.7674 58.3651 91.8201 58.5229 91.8377C58.6808 91.8552 58.8737 91.8377 59.1192 91.785L59.6979 91.6621ZM60.5573 95.3314L59.9785 92.8208L59.3823 92.9613C58.9438 93.0666 58.6808 93.2422 58.5755 93.488C58.4703 93.7338 58.4703 94.0849 58.5755 94.4887C58.6632 94.8925 58.8211 95.191 59.0315 95.349C59.242 95.507 59.5752 95.5421 60.0136 95.4543L60.5573 95.3314Z" fill="black" />
                    <path className="buttonDark" d="M53.9982 95.5772C54.0157 95.9459 53.9807 96.297 53.8579 96.5955C53.7351 96.894 53.5773 97.1398 53.3669 97.3504C53.1739 97.5435 52.9284 97.7016 52.6829 97.8069C52.4198 97.9122 52.1568 97.9825 51.8762 98C51.5956 98.0176 51.3325 97.9825 51.0519 97.8947C50.7713 97.8069 50.5258 97.684 50.2978 97.5084C50.0698 97.3329 49.8944 97.1046 49.7366 96.8237C49.5963 96.5428 49.5086 96.2093 49.4735 95.8406L49.1754 90.8897C49.1578 90.5034 49.1929 90.1523 49.3157 89.8714C49.4384 89.5905 49.5963 89.3447 49.7892 89.1516C49.9996 88.9409 50.2276 88.7829 50.4907 88.6775C50.7538 88.5722 51.0168 88.502 51.2974 88.4844C51.578 88.4669 51.8411 88.502 52.1217 88.5898C52.4023 88.6775 52.6478 88.8004 52.8583 88.976C53.0863 89.1516 53.2792 89.3623 53.4195 89.6432C53.5598 89.9241 53.6475 90.2576 53.6825 90.6439L53.9982 95.5772ZM52.3672 90.7141C52.3497 90.3981 52.2445 90.1523 52.0515 90.0118C51.8586 89.8714 51.6482 89.8012 51.4026 89.8187C51.1571 89.8363 50.9467 89.9241 50.7713 90.0821C50.5959 90.2401 50.5258 90.4859 50.5433 90.8194L50.8414 95.7528C50.859 96.0688 50.9642 96.3146 51.1571 96.455C51.35 96.5955 51.5605 96.6657 51.806 96.6482C52.0515 96.6306 52.262 96.5428 52.4374 96.3848C52.6127 96.2268 52.6829 95.981 52.6654 95.6475L52.3672 90.7141Z" fill="black" />
                    <path className="buttonDark" d="M41.5115 97.4733L42.2831 90.24C42.3182 89.9416 42.4059 89.6607 42.5287 89.4149C42.669 89.1691 42.8443 88.9584 43.0723 88.7829C43.3003 88.6073 43.5458 88.4668 43.8089 88.3791C44.072 88.2913 44.3701 88.2737 44.6682 88.2913C44.9664 88.3264 45.2294 88.4142 45.475 88.5546C45.7205 88.6951 45.9309 88.8706 46.1063 89.0989C46.2817 89.3271 46.422 89.5729 46.5097 89.8362C46.5974 90.0996 46.6149 90.398 46.5798 90.6965L45.8082 97.9298L44.4753 97.7893L45.247 90.6965C45.282 90.3629 45.2294 90.1171 45.0891 89.9416C44.9488 89.766 44.7559 89.6607 44.5279 89.6431C44.2999 89.6256 44.0895 89.6782 43.9141 89.8187C43.7387 89.9591 43.6335 90.1874 43.5984 90.5209L42.8268 97.6137L41.5115 97.4733Z" fill="black" />
                    <path className="buttonDark" d="M39.3719 87.4486L37.2849 95.2787L38.7931 95.6825L38.4599 96.9115L34.1632 95.7703L34.4964 94.5414L35.9871 94.9452L38.0741 87.115L39.3719 87.4486Z" fill="black" />
                    <path className="buttonDark" d="M32.199 85.0082L25.8504 92.2064L24.8683 91.6621L27.5515 82.445L28.7266 83.0946L28.0952 85.0434L29.6911 85.9212L31.0064 84.3411L32.199 85.0082ZM27.7269 86.2723L26.6571 89.5729L26.6747 89.5905L28.8844 86.9395L27.7269 86.2723Z" fill="black" />
                    <path className="buttonDark" d="M26.131 81.4443L20.3261 88.8004L18.7828 87.589C18.4495 87.3257 18.204 87.0448 18.0462 86.7463C17.8883 86.4479 17.8006 86.167 17.7831 85.8685C17.7656 85.5701 17.8182 85.2892 17.9234 85.0258C18.0286 84.7625 18.1865 84.4991 18.3794 84.2533L18.5898 83.99C18.7477 83.7969 18.888 83.6388 19.0283 83.516C19.1686 83.4106 19.3089 83.3228 19.4492 83.2702C19.7122 83.1648 20.0279 83.1473 20.3787 83.1999C20.2208 82.8839 20.1682 82.5679 20.2384 82.2519C20.3085 81.9359 20.4839 81.5847 20.7996 81.1809L21.1328 80.7596C21.6414 80.11 22.185 79.7413 22.7813 79.636C23.3601 79.5306 24.0089 79.7589 24.6929 80.3031L26.131 81.4443ZM20.0455 86.9746L21.6414 84.9556L21.1679 84.5869C20.8171 84.306 20.519 84.2182 20.2559 84.2884C19.9928 84.3762 19.7298 84.5693 19.4667 84.9205C19.2037 85.254 19.0809 85.5525 19.0809 85.8158C19.0809 86.0792 19.2563 86.3601 19.607 86.641L20.0455 86.9746ZM22.378 84.0075L24.2369 81.655L23.781 81.3038C23.5705 81.1283 23.3776 81.0405 23.2022 81.0054C23.0268 80.9703 22.869 80.9878 22.7287 81.0405C22.5884 81.0932 22.4306 81.1985 22.3078 81.339C22.1675 81.4794 22.0447 81.6374 21.9044 81.813C21.7641 82.0061 21.6414 82.1641 21.5537 82.3221C21.466 82.4801 21.4134 82.6206 21.3958 82.7786C21.3958 82.9366 21.4309 83.077 21.5011 83.2175C21.5888 83.3579 21.7115 83.4984 21.9044 83.6564L22.378 84.0075Z" fill="black" />
                    <path className="buttonDark" d="M15.8013 82.0412C15.5207 82.287 15.2226 82.4625 14.9245 82.5679C14.6263 82.6557 14.3282 82.6908 14.03 82.6557C13.7494 82.6206 13.4864 82.5328 13.2409 82.4099C12.9953 82.2694 12.7673 82.1114 12.592 81.9007C12.4166 81.7076 12.2588 81.4618 12.1535 81.1985C12.0483 80.9351 11.9957 80.6542 11.9781 80.3733C11.9781 80.0924 12.0483 79.794 12.1711 79.5131C12.2938 79.2146 12.5043 78.9513 12.7849 78.6879L16.4502 75.3697C16.7484 75.1064 17.029 74.9308 17.3271 74.8431C17.6253 74.7553 17.9059 74.7202 18.1865 74.7553C18.4846 74.7904 18.7477 74.8782 18.9932 75.0011C19.2387 75.1415 19.4667 75.2995 19.6421 75.5102C19.8174 75.7209 19.9753 75.9491 20.0805 76.2125C20.1857 76.4758 20.2383 76.7567 20.2383 77.0376C20.2559 77.3185 20.1857 77.617 20.0805 77.8979C19.9577 78.1788 19.7473 78.4597 19.4667 78.723L15.8013 82.0412ZM18.5547 77.7223C18.8003 77.5116 18.9055 77.2834 18.9055 77.0376C18.9055 76.7918 18.8178 76.5987 18.6424 76.4056C18.4846 76.23 18.2741 76.1247 18.0462 76.0896C17.8182 76.0545 17.5726 76.1598 17.3271 76.3705L13.6793 79.6886C13.4338 79.8993 13.3285 80.1275 13.3285 80.3733C13.3285 80.6016 13.4162 80.8122 13.5916 81.0054C13.7494 81.1809 13.9599 81.2863 14.1879 81.3214C14.4159 81.3565 14.6614 81.2512 14.9069 81.0405L18.5547 77.7223Z" fill="black" />
                    <path className="buttonDark" d="M6.50647 73.5088L12.6271 69.5937C12.8901 69.4357 13.1532 69.3303 13.4338 69.2776C13.7144 69.225 13.995 69.2425 14.2756 69.2952C14.5562 69.3479 14.8193 69.4708 15.0473 69.6288C15.2928 69.7868 15.4857 69.9975 15.6435 70.2433C15.8014 70.489 15.9066 70.7524 15.9417 71.0333C15.9943 71.3142 15.9768 71.5951 15.9242 71.876C15.854 72.1569 15.7488 72.4203 15.5909 72.6485C15.4331 72.8767 15.2226 73.0874 14.9596 73.2454L8.83897 77.1605L8.11993 76.0369L14.1353 72.192C14.4159 72.0165 14.5738 71.8058 14.6264 71.5951C14.679 71.3844 14.6264 71.1737 14.5036 70.9631C14.3808 70.7699 14.2055 70.6471 13.9775 70.5944C13.767 70.5417 13.504 70.6119 13.2234 70.7875L7.22551 74.6324L6.50647 73.5088Z" fill="black" />
                    <path className="buttonDark" d="M12.9777 65.5732L5.55935 68.8387L6.1907 70.2608L5.03322 70.77L3.24438 66.6969L4.40186 66.1877L5.03322 67.6098L12.4516 64.3443L12.9777 65.5732Z" fill="black" />
                    <path className="buttonDark" d="M10.3998 58.4103L0.824261 57.9538L0.631348 56.8478L9.50536 53.1785L9.73335 54.4952L7.82176 55.2326L8.13743 57.0409L10.1893 57.076L10.3998 58.4103ZM6.61166 55.7066L3.38475 56.9355V56.9707L6.83965 57.0409L6.61166 55.7066Z" fill="black" />
                    <path className="buttonDark" d="M9.40014 51.4579L0.0350752 51.6159L0 49.6496C0 49.2282 0.0526127 48.8595 0.175376 48.5435C0.298139 48.2275 0.473515 47.9817 0.683966 47.7886C0.894417 47.5955 1.15748 47.455 1.43808 47.3673C1.71868 47.2795 2.01682 47.2268 2.3325 47.2268H2.66571C2.92878 47.2268 3.13923 47.2444 3.3146 47.2795C3.48998 47.3146 3.64782 47.3673 3.77058 47.455C4.01611 47.5955 4.22656 47.8237 4.41947 48.1222C4.55977 47.8062 4.77022 47.5604 5.06836 47.4199C5.34896 47.2619 5.75233 47.1917 6.24338 47.1741H6.76951C7.59377 47.1566 8.22512 47.3497 8.6811 47.7359C9.11954 48.1222 9.34753 48.7542 9.36507 49.632L9.40014 51.4579ZM1.28024 50.2465L3.85827 50.2114L3.84073 49.6145C3.84073 49.1756 3.71797 48.8595 3.48998 48.7191C3.26199 48.5786 2.92878 48.4909 2.50787 48.5084C2.08697 48.5084 1.7713 48.6138 1.56084 48.7718C1.35039 48.9473 1.26271 49.2633 1.26271 49.7023L1.28024 50.2465ZM5.03329 50.1938L8.03221 50.1412V49.5618C8.03221 49.2985 7.9796 49.0702 7.90945 48.9298C7.82176 48.7718 7.71654 48.6664 7.57623 48.5786C7.43593 48.5084 7.26056 48.4558 7.06765 48.4382C6.87473 48.4206 6.66428 48.4206 6.43629 48.4206C6.2083 48.4206 5.99785 48.4382 5.82248 48.4733C5.6471 48.5084 5.5068 48.5611 5.38404 48.6313C5.26127 48.7191 5.17359 48.842 5.12097 49C5.06836 49.158 5.03329 49.3511 5.05082 49.5969L5.03329 50.1938Z" fill="black" />
                    <path className="buttonDark" d="M2.43775 43.7857C2.06946 43.7331 1.75378 43.6102 1.47318 43.4346C1.21012 43.259 0.999669 43.0484 0.841831 42.8026C0.70153 42.5568 0.596305 42.311 0.543692 42.0301C0.491079 41.7492 0.491079 41.4683 0.526154 41.2049C0.561229 40.9416 0.666455 40.6782 0.789218 40.4325C0.929519 40.1867 1.10489 39.9584 1.31535 39.7829C1.54333 39.6073 1.8064 39.4668 2.10454 39.3966C2.40268 39.3088 2.75343 39.2913 3.12172 39.3615L7.99716 40.134C8.38299 40.2042 8.7162 40.3096 8.96173 40.4851C9.22479 40.6607 9.41771 40.8714 9.57555 41.0996C9.73338 41.3454 9.83861 41.6087 9.89122 41.8896C9.94383 42.1705 9.94384 42.4514 9.90876 42.7148C9.87368 42.9781 9.76846 43.2415 9.6457 43.4873C9.52293 43.7331 9.33002 43.9437 9.10203 44.1193C8.89158 44.3124 8.62852 44.4353 8.33038 44.5231C8.03224 44.6109 7.68149 44.6284 7.29566 44.5582L2.43775 43.7857ZM7.52365 43.2239C7.83933 43.2766 8.10239 43.2239 8.27776 43.0659C8.45314 42.9079 8.55837 42.7148 8.61098 42.469C8.66359 42.2232 8.61098 42.0125 8.48822 41.8019C8.36545 41.6087 8.13746 41.4683 7.82179 41.4156L2.9288 40.6431C2.61313 40.5905 2.35006 40.6431 2.17469 40.8011C1.99931 40.9591 1.89409 41.1523 1.84147 41.3981C1.8064 41.6438 1.84147 41.8545 1.96424 42.0652C2.087 42.2583 2.31499 42.3988 2.63066 42.4514L7.52365 43.2239Z" fill="black" />
                    <path className="buttonDark" d="M3.29705 31.11L10.1718 33.445C10.4699 33.5503 10.7154 33.6908 10.9259 33.8663C11.1363 34.0595 11.2942 34.2701 11.4345 34.5335C11.5572 34.7968 11.6274 35.0602 11.6625 35.3411C11.68 35.622 11.6449 35.9204 11.5573 36.2013C11.4696 36.4823 11.3117 36.728 11.1188 36.9387C10.9259 37.1494 10.6979 37.3074 10.4524 37.4479C10.1893 37.5707 9.92625 37.641 9.64565 37.6761C9.34751 37.7112 9.06691 37.6585 8.76877 37.5707L1.89404 35.2357L2.33248 33.9717L9.08445 36.2716C9.40013 36.3769 9.66319 36.3769 9.8561 36.2891C10.049 36.2013 10.1893 36.0258 10.277 35.7975C10.3472 35.5693 10.3472 35.3586 10.2419 35.1655C10.1367 34.9724 9.94379 34.8144 9.62812 34.7091L2.87615 32.4092L3.29705 31.11Z" fill="black" />
                    <path className="buttonDark" d="M13.5215 31.2329L6.33107 27.4758L5.61203 28.8628L4.48962 28.2834L6.54152 24.3332L7.66393 24.9126L6.94489 26.282L14.1353 30.039L13.5215 31.2329Z" fill="black" />
                    <path className="buttonDark" d="M17.5026 24.737L11.8555 16.9595L12.592 16.1168L20.9925 20.7517L20.0981 21.7524L18.3268 20.7166L17.1167 22.086L18.3619 23.7188L17.5026 24.737ZM17.2395 20.0846L14.2581 18.3289L14.2406 18.3465L16.3451 21.0853L17.2395 20.0846Z" fill="black" />
                    <path className="buttonDark" d="M22.2727 19.593L16.3625 12.3246L17.8883 11.0781C18.2215 10.8147 18.5547 10.6216 18.8704 10.5338C19.1861 10.4461 19.4842 10.4285 19.7824 10.4636C20.0805 10.4987 20.3436 10.6216 20.5891 10.7972C20.8346 10.9727 21.0451 11.1659 21.2555 11.4117L21.466 11.675C21.6238 11.8681 21.7466 12.0437 21.8343 12.2193C21.922 12.3773 21.9746 12.5353 21.9921 12.6933C22.0272 12.9742 21.9921 13.2902 21.8518 13.6238C22.185 13.536 22.5182 13.5711 22.7988 13.694C23.0794 13.8169 23.4127 14.0802 23.7283 14.4665L24.0615 14.8703C24.5877 15.5023 24.8332 16.1343 24.7981 16.7137C24.7631 17.3106 24.4123 17.8724 23.7283 18.4342L22.2727 19.593ZM18.204 12.4475L19.835 14.4489L20.3085 14.0627C20.6593 13.7818 20.8171 13.5009 20.7996 13.2375C20.782 12.9742 20.6242 12.6582 20.3611 12.3246C20.0981 11.991 19.835 11.8155 19.5544 11.7452C19.2913 11.6926 18.9756 11.7979 18.6424 12.0788L18.204 12.4475ZM20.5716 15.3794L22.4656 17.7144L22.9216 17.3457C23.1321 17.1702 23.2724 17.0122 23.3425 16.8542C23.4127 16.6961 23.4302 16.5381 23.4127 16.3801C23.3951 16.2221 23.325 16.0641 23.2022 15.9061C23.0794 15.7481 22.9742 15.5725 22.8164 15.397C22.6761 15.2214 22.5182 15.0634 22.3955 14.9405C22.2727 14.8176 22.1324 14.7298 21.9921 14.6947C21.8518 14.6596 21.694 14.6596 21.5537 14.7123C21.3958 14.7474 21.2205 14.8352 21.0275 14.9932L20.5716 15.3794Z" fill="black" />
                    <path className="buttonDark" d="M23.9212 9.35758C23.7283 9.02401 23.6231 8.70799 23.6056 8.39198C23.5705 8.07596 23.6056 7.7775 23.7108 7.4966C23.7985 7.23325 23.9388 6.98746 24.1317 6.77679C24.3246 6.56611 24.5351 6.39054 24.763 6.25009C24.991 6.10964 25.2541 6.02186 25.5347 5.96919C25.8153 5.91652 26.0959 5.91652 26.3765 5.96919C26.6571 6.03942 26.9202 6.16231 27.1832 6.33787C27.4463 6.53099 27.6567 6.77679 27.8497 7.11036L30.2874 11.4117C30.4803 11.7628 30.5855 12.0788 30.6206 12.3948C30.6381 12.7109 30.6206 12.9918 30.5154 13.2551C30.4277 13.536 30.2874 13.7818 30.0945 13.9925C29.9016 14.2032 29.6911 14.3787 29.4631 14.5192C29.2351 14.6596 28.9721 14.7474 28.6915 14.8001C28.4109 14.8527 28.1303 14.8352 27.8497 14.7825C27.5691 14.7298 27.306 14.607 27.0429 14.4314C26.7799 14.2558 26.5694 13.9925 26.3765 13.6414L23.9212 9.35758ZM27.534 12.9918C27.6918 13.2727 27.8847 13.4307 28.1303 13.4833C28.3582 13.536 28.5862 13.4833 28.7967 13.3604C29.0071 13.2376 29.165 13.062 29.2351 12.8513C29.3228 12.6231 29.2702 12.3773 29.1124 12.0964L26.6571 7.79506C26.4993 7.51416 26.3063 7.35615 26.0608 7.30348C25.8328 7.25081 25.6048 7.30348 25.3944 7.42637C25.1839 7.54927 25.0261 7.72483 24.956 7.93551C24.8683 8.16374 24.9209 8.40953 25.0787 8.69044L27.534 12.9918Z" fill="black" />
                    <path className="buttonDark" d="M34.321 2.12433L36.7938 8.95378C36.899 9.23468 36.9341 9.53314 36.9341 9.81405C36.9166 10.0949 36.8464 10.3583 36.7236 10.6216C36.6009 10.885 36.443 11.1132 36.2326 11.3063C36.0221 11.4995 35.7766 11.6575 35.496 11.7628C35.2154 11.8681 34.9348 11.9033 34.6542 11.8857C34.3736 11.8681 34.1105 11.7979 33.8475 11.675C33.5844 11.5521 33.3564 11.3941 33.1635 11.1834C32.9706 10.9728 32.8128 10.727 32.7075 10.4461L30.2347 3.61663L31.4974 3.16016L33.9352 9.86671C34.0404 10.1827 34.1982 10.3759 34.4087 10.4812C34.6191 10.5865 34.8296 10.5865 35.04 10.4987C35.268 10.411 35.4259 10.2705 35.5136 10.0774C35.6012 9.88427 35.6012 9.62093 35.4785 9.30491L33.0408 2.59835L34.321 2.12433Z" fill="black" />
                    <path className="buttonDark" d="M40.6346 10.1828L39.0738 2.2297L37.548 2.52816L37.3025 1.28165L41.6693 0.421387L41.9149 1.66789L40.3891 1.96635L41.9499 9.91942L40.6346 10.1828Z" fill="black" />
                </g>
                <g className="arrowColorAbout">
                    <path id="arrowHover" d="M49.1501 43L55.0001 48.6842M49.1501 55L55.0001 48.6842M55.0001 48.6842H42.0001" stroke="color" stroke="currentColor" stroke-width="1.2" />
                </g>
            </g>
        </svg>
        </NavLink>
    )
}

export default AboutButton;