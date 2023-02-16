import {useEffect, useState} from 'react';

export const useBodyScrollLock = () => {
    const bodyStyle = document.body.style;

    const [isBodyLocked, setIsBodyLocked] = useState<boolean>(
        bodyStyle.overflow === 'hidden'
    )

    useEffect(() => {
        bodyStyle.overflow = isBodyLocked ? 'hidden' : 'auto';
    }, [isBodyLocked, bodyStyle])

    const setBodyLocked = () => setIsBodyLocked(!isBodyLocked)

    return [isBodyLocked, setBodyLocked] as const

};

