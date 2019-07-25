import { useEffect } from "react";
import useLocalStorage  from "./UseLocalStorage";

const UseDarkMode = (key) => {
    const [darkModeEnabled, setDarkMode] = useLocalStorage(key)

    useEffect(()=>{
        (darkModeEnabled) ? document.body.classList.remove('dark-mode') : document.body.classList.add('dark-mode')
    }, [darkModeEnabled])
    return [darkModeEnabled, setDarkMode]
}

export default UseDarkMode