import { createContext, useContext, useState } from "react";
import Toast from "../components/toast";

const ToastContext = createContext();

const durations = {
    success: 2500,
    info: 3000,
    warning: 4000,
    error: 5000,
};

export function ToastProvider({ children }) {
    const [toast, setToast] = useState({
        visible: false,
        message: "",
        type: "info",
    });

    function showToast(message, type = "info") {
        setToast({
            visible: true,
            message,
            type,
        });

        setTimeout(() => {
            setToast((prev) => ({
                ...prev,
                visible: false,
            }));
        }, durations[type] || 3000);
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            <Toast
                visible={toast.visible}
                message={toast.message}
                type={toast.type}
            />
        </ToastContext.Provider>
    );
}

export function useToast() {
    return useContext(ToastContext);
}