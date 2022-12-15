import React from 'react';
import { Title } from './style'
import { Box, Button, Container } from 'native-base'
import { Header } from '@components/Header';

export const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Box>
                    <Button>Get Started</Button>
                </Box>
            </Container>
        </>
    );
}