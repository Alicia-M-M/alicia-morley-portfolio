import React from 'react'
import {
    Link
} from "react-router-dom";

function HomeButton() {
    return (
        <Link to="/home"><svg className="img-fluid cursor homeButton" width="512" height="138" viewBox="0 0 512 138" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="buttonDark" d="M94.6096 46.008C95.7982 45.8886 96.547 45.7215 96.8679 45.4828C99.0311 44.6474 100.101 43.2869 100.101 41.4251C99.8631 39.7662 99.1618 38.9427 97.9733 38.9427C97.4146 38.9427 96.9273 39.0023 96.5113 39.1217C93.1952 39.8616 91.5312 41.1744 91.5312 43.0362C91.5431 44.5997 92.5653 45.5902 94.6096 46.008Z" fill="black" />
            <path className="buttonDark" d="M134.653 77.0976L135.449 76.7157H135.437C135.188 76.7515 134.926 76.7873 134.653 76.8232V77.0976Z" fill="black" />
            <path className="buttonDark" d="M165.995 46.008C167.183 45.8886 167.932 45.7215 168.253 45.4828C170.416 44.6474 171.486 43.2869 171.486 41.4251C171.248 39.7662 170.547 38.9427 169.359 38.9427C168.8 38.9427 168.313 39.0023 167.897 39.1217C164.58 39.8616 162.917 41.1744 162.917 43.0362C162.928 44.5997 163.951 45.5902 165.995 46.008Z" fill="black" />
            <path className="buttonDark" d="M234.207 55.6631C233.743 55.6631 233.018 55.7824 232.044 56.0092C226.957 60.9024 222.321 63.349 218.114 63.349C213.728 63.349 210.661 61.3081 208.926 57.2265C207.975 52.5839 207.357 49.9583 207.084 49.3258C205.99 46.9269 204.077 45.7096 201.343 45.6857L199.465 45.6141C195.376 45.6857 191.787 47.1895 188.709 50.1254C186.45 52.5243 184.858 54.9231 183.871 57.31C182.314 59.0525 180.828 60.5921 179.45 61.9049C178.237 62.5613 177.524 63.1699 177.286 63.7547C169.608 70.7007 163.63 74.1737 159.351 74.1737C157.794 74.1737 157.021 73.6724 157.021 72.6699C157.021 70.5455 157.758 68.1705 159.22 65.533C160.29 64.5544 161.419 62.2748 162.596 58.6825V57.7039C162.596 56.4865 161.859 55.7347 160.397 55.4363H160.147C159.125 55.484 158.614 55.5795 158.614 55.7108C158.602 55.7108 158.531 55.8182 158.412 56.045C158.008 56.2479 157.782 56.4985 157.782 56.7969C154.157 61.8333 150.163 65.9268 145.801 69.0656C140.417 71.7748 135.283 73.1234 130.409 73.1234C127.806 72.9325 125.822 72.5864 124.455 72.0732C119.32 69.6266 116.765 66.7742 116.765 63.5041C116.765 60.7949 117.763 57.9664 119.76 55.0067C123.456 51.653 126.392 49.9702 128.567 49.9702H129.958C130.184 49.9702 130.623 50.1135 131.241 50.388C132.977 52.2498 134.272 53.1807 135.104 53.1807C136.245 52.8584 136.816 52.1901 136.816 51.1876V50.6625C135.116 47.6311 132.977 46.1154 130.374 46.1154C128.009 46.1154 125.94 46.4615 124.181 47.1656C119.189 49.4929 115.802 52.393 113.948 55.8421H113.77C111.725 58.1932 109.823 60.2102 108.064 61.8929C106.852 62.5493 106.139 63.158 105.901 63.7428C98.2112 70.7245 92.2327 74.1975 87.9539 74.1975C86.3968 74.1975 85.6243 73.6963 85.6243 72.6938C85.6243 70.5694 86.3612 68.1944 87.8231 65.5569C88.8928 64.5782 90.022 62.2987 91.1986 58.7064V57.7277C91.1986 56.5104 90.4617 55.7585 88.9998 55.4602H88.7502C87.728 55.5079 87.2169 55.6034 87.2169 55.7347C87.2051 55.7347 87.1337 55.8421 87.0149 56.0569C86.278 56.2837 85.4579 56.952 84.5308 58.0858C82.8787 59.8521 80.0024 62.5971 75.8899 66.2968C71.2189 68.8627 67.6769 70.2114 65.2404 70.3546H63.4694C61.4013 70.3546 59.3926 69.4356 57.4434 67.5977C55.6368 64.7572 54.7216 62.6567 54.7216 61.3081V60.8904C54.7216 59.7686 55.3634 58.5632 56.6352 57.2504C63.3387 47.0463 67.879 39.0501 70.2561 33.2618C76.3535 18.5941 79.3962 8.77194 79.3962 3.80714V3.67586C79.3962 1.8618 78.6949 0.632535 77.3043 0H76.8527C74.9985 0 73.3107 0.871227 71.8012 2.62562C70.9693 4.21292 70.2799 5.34671 69.745 6.01505C69.5549 6.01505 68.0929 8.3423 65.3592 13.0087C61.6628 19.3221 58.2159 27.199 55.0187 36.6393C53.4855 39.8616 52.7248 41.9024 52.7248 42.7975C50.8825 47.2611 49.7771 51.653 49.4087 55.9972C49.3849 55.9972 49.373 56.0092 49.3492 56.0092C44.2622 60.9024 39.6268 63.349 35.4193 63.349C31.0334 63.349 27.9669 61.3081 26.2316 57.2265C25.2808 52.5839 24.6627 49.9583 24.3894 49.3258C23.2959 46.9269 21.3823 45.7096 18.6486 45.6857L16.7707 45.6141C12.682 45.6857 9.09253 47.1895 6.01414 50.1254C2.13942 54.2428 0.142628 58.3364 0 62.4061C0 63.1938 0.166399 64.1008 0.487312 65.1033C2.13942 68.6479 4.54032 70.4143 7.69002 70.4143H7.83265C11.9689 70.4143 15.7842 68.0512 19.2904 63.3132C20.8474 60.4966 21.5844 59.0883 21.5249 59.0883L21.7983 59.2673C24.5558 64.9363 29.0485 67.7648 35.2766 67.7648H35.8353C36.3939 67.7648 37.1783 67.717 38.2005 67.6216C42.8478 66.4281 46.6631 64.5305 49.6345 61.9526C49.6939 62.2629 49.7534 62.5732 49.8366 62.8954C52.1543 70.6052 56.8016 74.472 63.7665 74.472C68.9725 74.472 74.1546 72.5983 79.3368 68.8389C80.3827 67.9796 81.3335 67.168 82.225 66.3923C81.393 69.006 80.977 71.0587 80.977 72.5386C80.977 76.7635 83.2234 78.864 87.6924 78.864C93.5401 78.864 100.743 74.9375 109.277 67.0845C110.323 66.3565 111.238 65.6046 112.046 64.8408C112.474 67.8364 114.554 70.7484 118.286 73.5889C121.864 76.0355 125.845 77.2647 130.231 77.2647C131.016 77.2647 132.525 77.0738 134.76 76.7038H135.449C137.089 76.477 138.04 76.3338 138.278 76.2503C144.363 74.9494 148.856 72.825 151.756 69.8891C152.16 69.4953 152.541 69.1253 152.921 68.7553C152.541 70.283 152.338 71.548 152.338 72.5506C152.338 76.7754 154.585 78.8759 159.054 78.8759C164.902 78.8759 172.104 74.9494 180.638 67.0964C181.577 66.44 182.421 65.7717 183.17 65.0795C183.17 65.0914 183.17 65.0914 183.182 65.1033C184.834 68.6479 187.235 70.4143 190.384 70.4143H190.527C194.663 70.4143 198.479 68.0512 201.985 63.3132C203.542 60.4966 204.279 59.0883 204.219 59.0883L204.493 59.2673C207.25 64.9363 211.743 67.7648 217.971 67.7648H218.53C219.088 67.7648 219.873 67.717 220.895 67.6216C225.602 66.4042 229.464 64.4827 232.46 61.8571C234.706 60.246 235.835 58.8496 235.835 57.6561C235.847 56.8446 235.3 56.1763 234.207 55.6631ZM19.7777 50.6625C19.7777 51.4979 19.2904 53.1091 18.3158 55.484C14.9046 62.5971 11.5529 66.1536 8.24865 66.1536H7.55928C5.53872 65.5449 4.52843 64.065 4.52843 61.7139C4.52843 60.2698 5.07518 58.7541 6.16866 57.1668C8.92613 52.202 12.7533 49.7674 17.6264 49.8628C19.0646 49.9344 19.7896 49.9225 19.7896 49.827V50.6625H19.7777ZM73.9407 6.64758H73.8931C73.8931 6.44469 73.905 6.45663 73.9407 6.64758ZM56.3737 45.4948C60.3435 34.0017 63.9924 25.0985 67.3085 18.7851C70.6483 12.2807 72.8828 8.39004 74.0001 7.12497C74.012 7.20851 74.012 7.26818 74.0239 7.35173C74.0239 8.6526 73.1087 12.3285 71.2783 18.3674C67.1421 29.4427 63.4575 37.7731 60.2009 43.3704C57.3958 48.2875 55.5179 51.3785 54.5789 52.6555C54.567 52.4765 54.5433 52.3214 54.4957 52.2498C55.0068 50.0419 55.6368 47.7981 56.3737 45.4948ZM202.484 50.6625C202.484 51.4979 201.997 53.1091 201.022 55.484C197.611 62.5971 194.259 66.1536 190.955 66.1536H190.254C188.233 65.5449 187.223 64.065 187.223 61.7139C187.223 61.332 187.27 60.9501 187.342 60.5563C188.186 59.5179 188.613 58.7541 188.613 58.2887V58.0022C188.613 57.871 188.578 57.7755 188.554 57.6561C188.661 57.4891 188.744 57.3339 188.851 57.1668C191.609 52.202 195.436 49.7674 200.309 49.8628C201.747 49.9344 202.472 49.9225 202.472 49.827V50.6625H202.484Z" fill="black" />
            <path className="buttonDark" d="M509.265 56.2598C508.825 56.2598 508.266 56.3195 507.589 56.4388C504.082 58.5393 498.77 63.8025 491.638 72.2402C489.546 74.7107 488.203 76.1906 487.597 76.7277C487.514 76.489 487.466 76.1787 487.466 75.7371V73.3621C487.466 71.5003 487.882 68.1586 488.714 63.3609V63.1461C488.714 61.9049 488.025 61.2007 486.658 61.0098H486.313C485.196 61.0098 484.019 62.1794 482.76 64.5066C479.42 69.7698 477.031 72.5625 475.581 72.8608C475.486 72.7892 475.319 72.7534 475.058 72.7534C474.036 72.3119 473.524 71.2019 473.524 69.4356C473.596 69.2327 473.703 68.2183 473.857 66.4042C474.606 63.8263 475.2 61.702 475.664 60.0311C476.579 58.8973 477.15 57.9068 477.364 57.0594C477.173 56.5701 476.948 56.2001 476.698 55.8898C476.722 55.7466 476.734 55.6273 476.734 55.5556C476.318 54.5293 475.652 54.0161 474.749 54.0161C474.119 54.207 473.548 54.4935 473.037 54.8873C472.704 55.6989 472.395 56.4866 472.11 57.2504C471.932 57.5249 471.753 57.8113 471.575 58.1455C463.778 66.0223 455.28 69.9607 446.08 69.9607H444.832C442.004 69.9607 439.543 69.3879 437.451 68.2421C435.383 67.0487 433.862 64.8408 432.887 61.5946V61.4633C432.887 61.3439 432.959 61.2365 433.101 61.153C439.163 59.2912 442.752 58.0619 443.893 57.4771C448.767 54.3025 451.465 51.2353 451.976 48.2517C451.976 46.1273 450.264 44.8384 446.853 44.3729H446.223C444.785 44.3729 443.204 44.8026 441.493 45.6618C439.104 46.175 435.906 48.3233 431.913 52.0946C430.534 54.1951 429.524 55.9734 428.858 57.4413C428.668 57.6442 428.478 57.8352 428.288 58.0739C426.636 59.8402 423.759 62.5851 419.647 66.2849C414.976 68.8508 411.434 70.1994 408.997 70.3426H407.226C405.158 70.3426 403.149 69.4237 401.2 67.5857C399.394 64.7453 398.478 62.6448 398.478 61.2962V60.8785C398.478 59.7566 399.12 58.5512 400.392 57.2384C407.096 47.0343 411.636 39.0381 414.013 33.2498C420.098 18.5822 423.141 8.77194 423.141 3.80714V3.67586C423.141 1.8618 422.44 0.632535 421.049 0H420.598C418.743 0 417.056 0.871227 415.546 2.62562C414.714 4.21292 414.025 5.34671 413.49 6.01505C413.3 6.01505 411.838 8.3423 409.104 13.0087C405.408 19.3221 401.961 27.199 398.764 36.6393C397.23 39.8616 396.47 41.9024 396.47 42.7975C394.544 47.4759 393.427 52.0827 393.094 56.6178C392.108 57.322 391.145 58.7303 390.194 60.8666C386.391 66.9055 383.098 71.2974 380.341 74.0424C376.561 77.0738 373.507 78.5895 371.177 78.5895H370.618C370.345 78.5895 370.012 78.482 369.644 78.2792C367.481 77.2767 366.292 74.7704 366.054 70.7604C366.054 67.2396 367.599 61.9407 370.69 54.8515C372.758 51.7962 373.994 49.8032 374.41 48.8723C374.41 47.5714 373.721 46.7956 372.354 46.5689H371.106C365.21 49.3616 360.73 51.2473 357.663 52.202C355.5 53.0852 354.181 53.8132 353.693 54.3741L352.41 56.4746C352.421 56.5104 352.433 56.5224 352.445 56.5582C352.41 56.582 352.374 56.594 352.338 56.6178C343.59 63.3251 335.58 66.6907 328.317 66.6907H326.226C325.786 66.6907 325.56 66.5474 325.56 66.2729C325.928 64.7095 326.119 63.2773 326.119 61.9765C326.119 60.9262 325.905 59.876 325.489 58.8257C324.324 56.0569 321.875 54.6606 318.143 54.6606C316.753 54.6606 315.041 55.0067 313.021 55.7108C312.878 55.8063 312.747 55.9018 312.605 56.0092C311.63 56.0688 310.608 56.8804 309.526 58.4796C307.422 60.4488 305.913 62.5851 304.998 64.9005C304.118 65.8075 303.108 66.7265 301.967 67.6693C298.461 71.1661 294.764 72.9086 290.854 72.9086H290.438C289.047 72.9086 286.848 71.8464 283.853 69.722C282.581 68.6241 281.5 67.2754 280.62 65.6643C278.79 62.3823 276.436 60.7353 273.584 60.7353C271.516 60.7353 269.388 61.6662 267.213 63.528C266.405 64.8169 265.823 65.7001 265.454 66.1775C264.349 62.4658 262.328 60.5801 259.381 60.5801H257.99C256.742 60.5801 255.03 61.2962 252.867 62.7164C251.869 63.6115 251.168 64.2799 250.787 64.7214C251.049 63.9457 251.477 62.8 252.107 61.2485C253.913 57.7039 254.828 55.7227 254.828 55.305V54.8992C254.828 54.219 254.198 53.7416 252.95 53.4671C251.631 53.4671 250.443 54.6128 249.397 56.8923C245.89 63.9338 242.943 70.9632 240.554 77.9808C240.554 79.401 241.291 80.2126 242.753 80.3916H242.966C243.644 80.3916 244.607 79.7233 245.855 78.3985C252.142 69.2805 256.385 64.7214 258.56 64.7214H258.703C258.774 64.7214 258.81 64.8169 258.81 64.9959C259.737 64.9959 260.438 66.8219 260.902 70.4859C261.116 75.3074 262.126 77.7182 263.933 77.7182L264.634 77.575C265.312 77.575 266.429 75.761 268.01 72.1209C269.709 67.3709 271.528 64.984 273.477 64.984H273.75C274.452 64.984 275.937 66.7861 278.207 70.4023C282.546 74.9017 286.729 77.1454 290.747 77.1454H292.696C295.929 77.1454 299.685 75.4149 303.976 71.9896C303.999 72.5028 304.047 73.0041 304.118 73.4695C305.331 77.0857 307.506 78.8878 310.667 78.8878H311.915C315.54 78.8878 318.833 77.0976 321.804 73.5053C322.921 71.7748 323.706 70.9155 324.169 70.9155C324.514 70.9155 325.001 70.9632 325.631 71.0587C334.641 71.0587 343.139 68.3973 351.126 63.0864C354.894 60.6398 356.891 58.8377 357.176 57.6681C358.281 56.8446 359.256 56.2479 360.112 55.9256C362.774 54.7799 364.652 54.1593 365.757 54.0638V54.1474L364.854 57.0475C362.584 62.06 361.443 66.7742 361.443 71.2139C361.443 73.565 361.704 75.3313 362.239 76.489C364.509 80.9167 367.421 83.1366 370.939 83.1366H371.153C374.362 82.7427 376.847 82.0386 378.641 81.0361C383.776 77.5392 387.437 73.9588 389.647 70.3068C391.406 67.729 392.821 65.5807 393.926 63.8263C396.339 70.9155 400.867 74.4601 407.547 74.4601C412.753 74.4601 417.935 72.5863 423.117 68.8269C425.292 67.0248 427.123 65.4375 428.609 64.0531C428.834 64.8527 429.084 65.2585 429.345 65.2585C430.76 67.6335 432.733 69.8414 435.264 71.8703C439.484 73.4337 442.61 74.2095 444.63 74.2095C446.675 74.0185 447.911 73.935 448.351 73.935C452.392 73.935 458.109 72.2641 465.514 68.9344C466.964 67.8722 468.271 66.8697 469.448 65.9149C469.174 67.2158 469.032 68.3496 469.032 69.2805V71.0587C469.887 74.9255 471.67 76.8589 474.356 76.8589C475.937 76.8589 477.459 76.4293 478.921 75.57C481.357 73.2786 482.653 72.0732 482.855 71.9299C482.831 71.9896 482.819 72.1686 482.819 72.467C482.724 73.2786 482.676 73.7559 482.676 73.8992C482.676 75.0687 482.771 77.8376 482.95 82.2176L482.605 83.9004C478.398 90.4525 474.547 97.1955 471.04 104.141C466.678 113.88 464.313 120.874 463.933 125.123C463.945 125.123 463.945 125.111 463.956 125.111C463.802 126.03 463.671 127.307 463.588 128.965C463.588 134.981 465.644 137.988 469.757 137.988H470.589C471.932 137.988 473.501 137.535 475.295 136.628C477.613 135.434 479.741 133.334 481.666 130.302C483.401 127.068 485.006 122.771 486.468 117.437C487.977 108.211 488.726 101.516 488.726 97.3626C488.263 91.5624 488.025 87.4688 488.025 85.0938C488.025 83.5304 490.973 79.3772 496.868 72.646C500.885 67.8722 504.546 64.1366 507.874 61.4514C509.966 60.1266 511.012 58.957 511.012 57.9545C511 57.1072 510.417 56.5343 509.265 56.2598ZM318.619 69.9965C316.277 73.2786 313.936 74.9255 311.618 74.9255C311.107 74.9255 310.727 74.8539 310.465 74.7107C308.932 74.0543 308.171 72.7176 308.171 70.6888C308.361 69.1492 308.445 68.3496 308.445 68.278C308.552 68.0035 308.647 67.7648 308.742 67.5141C309.966 66.0939 311.012 64.7692 311.915 63.516C312.712 65.4017 313.888 66.8816 315.517 67.896C317.632 68.9463 318.69 69.5072 318.69 69.5788L318.619 69.9965ZM320.806 65.7001H320.663C320.342 65.7001 319.831 65.4972 319.13 65.1033C317.204 64.0292 316.242 62.9312 316.242 61.8213C316.242 60.1624 317.169 59.2434 319.023 59.0644C320.651 59.0644 321.459 60.1027 321.459 62.1794C321.103 64.5185 320.877 65.7001 320.806 65.7001ZM417.698 6.64758H417.65C417.65 6.44469 417.662 6.45663 417.698 6.64758ZM400.131 45.4948C404.1 34.0017 407.749 25.0985 411.065 18.7851C414.405 12.2807 416.64 8.39004 417.757 7.12497C417.769 7.20851 417.769 7.26818 417.781 7.35173C417.781 8.6526 416.866 12.3285 415.035 18.3674C410.899 29.4427 407.214 37.7731 403.958 43.3704C401.153 48.2875 399.275 51.3785 398.336 52.6555C398.324 52.4765 398.3 52.3214 398.253 52.2498C398.764 50.0419 399.394 47.7981 400.131 45.4948ZM446.057 48.3591H446.366C446.615 48.3591 446.746 48.4426 446.746 48.6097C446.746 49.4451 444.987 51.1995 441.457 53.849C438.093 55.4244 435.716 56.2598 434.314 56.3791C434.385 56.0569 434.849 55.3886 435.752 54.3383C438.058 51.4859 441.493 49.4929 446.057 48.3591ZM483.211 106.815C483.294 106.815 483.354 106.755 483.39 106.66L482.367 113.522C482.415 113.522 482.451 113.51 482.486 113.474C479.693 127.068 475.806 133.871 470.838 133.871H470.137C469.21 133.871 468.616 132.236 468.366 128.977C468.366 125.158 469.269 120.743 471.088 115.766C473.964 108.092 477.577 100.716 481.916 93.639C483.057 91.5147 483.675 90.4525 483.794 90.4525C483.96 90.4525 484.043 92.911 484.043 97.8281C484.055 99.7018 483.77 102.685 483.211 106.815Z" fill="black" />
        </svg>
        </Link>
    )
}

export default HomeButton;