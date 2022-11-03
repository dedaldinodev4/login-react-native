import React from 'react';
import { motion, useCycle } from 'framer-motion';
import { Loader, Variants, ItemLoader, NextButton } from './styled';

export const LoaderUI1 = () => {
    const [animation, setAnimation] = useCycle("animationOne", "animationTwo");

    return (
        <Loader>
            <NextButton>Next Level</NextButton>
        </Loader>
    );
}