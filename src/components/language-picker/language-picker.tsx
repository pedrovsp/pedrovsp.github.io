import React from "react"
import { useTranslation } from 'react-i18next';
import './language-picker.scss';

export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    
    const renderLanguageChoice = ({ code, label }) => {
    
        return (
            <option
                key={code}
                value={code}
            >
                {label}
            </option>
        )
    }

    const languages = [
        { code: "en", label: "🇺🇸"},
        { code: "pt", label: "🇧🇷" },
    ]
    return (
        <select className="LanguageSwitcher" value={i18n.language}
            onChange={(event) => handleChangeLanguage(event.target.value)}>
            {languages.map(language => renderLanguageChoice(language))}
        </select>
    )
}
