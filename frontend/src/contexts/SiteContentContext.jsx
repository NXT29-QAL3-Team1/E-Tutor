import { createContext, useContext, useState, useEffect } from "react";

const SiteContentContext = createContext({});

export function SiteContentProvider({ children }) {
    // Load from localStorage
    const stored = localStorage.getItem("site-content");

    const [content, setContent] = useState(
        stored
            ? JSON.parse(stored)
            : {
                home: {
                    title: "",
                    subtitle: "",
                },
                about: {
                    title: "",
                    subtitle: "",
                },
            }
    );

    // Save to localStorage whenever content changes
    useEffect(() => {
        localStorage.setItem("site-content", JSON.stringify(content));
    }, [content]);

    const updateHome = (data) => {
        setContent((prev) => ({
            ...prev,
            home: { ...prev.home, ...data },
        }));
    };

    const updateAbout = (data) => {
        setContent((prev) => ({
            ...prev,
            about: { ...prev.about, ...data },
        }));
    };

    return (
        <SiteContentContext.Provider value={{ content, updateHome, updateAbout }}>
            {children}
        </SiteContentContext.Provider>
    );
}

export const useSiteContent = () => useContext(SiteContentContext);