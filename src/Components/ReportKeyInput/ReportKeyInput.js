import React from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useTranslation } from "react-i18next";
import './ReportKeyInput.css';

export default function ReportKeyInput({
    loading,
    setApiKeyInput,
    apiKeyInput,
    apiKeyInputValidity,
    apiKeyInputValidityMessage,
    getReport,
    resetReports,
    setShowSettings
}) {
    const { t } = useTranslation();
    return (
        <div>
            <div className="api-keys-input">
                <TextInput
                    placeholder={t("ApiKeysInputPlaceholder")}
                    value={apiKeyInput}
                    onChange={(event) => setApiKeyInput(event.target.value)}
                    valid={apiKeyInputValidity}
                    disabled={loading}
                />
                <Button
                    onClick={getReport}
                    disabled={loading}
                >
                    <i className={`fas fa-${loading ? "spinner" : "plus"}`} />
                    {loading ? t("Loading") : t("AddKey")}
                </Button>
                <Button
                    onClick={resetReports}
                    disabled={loading}
                >
                    <i className="fas fa-trash-alt" />
                    {t("Reset")}
                </Button>
                <Button
                    className="settings"
                    onClick={() => setShowSettings(true)}
                    disabled={loading}
                >
                    <i className="fas fa-cogs" />
                </Button>
            </div>
            {apiKeyInputValidityMessage !== "" ?
                <div className="api-key-validity-message">
                    {t(apiKeyInputValidityMessage)}
                </div>
                : ""}
        </div>
    )
}