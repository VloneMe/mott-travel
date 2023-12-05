// 'use client';

import React, { useEffect, useState } from 'react'

export const useNavHooks = () => {
    const [scrolled, setScrolled] = useState(true);
    const [showModel, setShowModel] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80){
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return { scrolled, setScrolled, showModel, setShowModel };
}
