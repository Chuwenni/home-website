import { useState } from "react";

const duration = {
    success: 2500,
    info: 3000,
    warning: 4000,
    error: 5000,
};

export default function useToast() {

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
        }, duration[type] || 3000);
    }

    return {
        toast,
        showToast,
    };
}