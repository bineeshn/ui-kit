import { useState, useEffect } from "react";

interface WindowSize {
    windowWidth: number;
    windowHeight: number;
}

// Custom debounce function
const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = debounce(() => {
            setWindowSize({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            });
        }, 200);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
};

export { useWindowSize };