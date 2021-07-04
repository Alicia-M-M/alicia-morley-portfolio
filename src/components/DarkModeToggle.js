import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const darkMode = "dark";

function DarkModeToggle() {
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
            setIsDark(prefersDark);
        }
    );

    const [isDark, setIsDark] = useState(getDefaultTheme, systemPrefersDark);

    function getDefaultTheme() {
        const selectedTheme = JSON.parse(localStorage.getItem(darkMode))
        return selectedTheme || false
    }

    

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add(darkMode)
            localStorage.setItem(darkMode, JSON.stringify(isDark))
        } else {
            document.documentElement.classList.remove(darkMode)
            localStorage.setItem(darkMode, JSON.stringify(isDark))
        }
    }, [isDark]);

    return (
        <div className="row h-100 text-center mx-md-4 ml-2">
            <div className="col-3 my-auto px-0 iconLtDkModeStar">*</div>
            <div className="switch-checkbox col-6 px-0 my-auto">
                <label className="switch mb-0">
                    <input
                        type="checkbox"
                        checked={isDark}
                        onChange={event => setIsDark(event.target.checked)} />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="col-3 my-auto px-0 iconLtDkModeMoon">☽</div>
        </div>
    )
}

export default DarkModeToggle;