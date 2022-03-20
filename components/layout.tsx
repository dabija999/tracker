import type { ReactNode } from 'react';
import Header from './header';
import Container from '@mui/material/Container'

export default function Layout({ children }: {children: ReactNode}) {
    return (
        <>
            <Header/>
            <main>
                <Container maxWidth={false}> 
                    {children}
                </Container>
            </main>
        </>
    )
}