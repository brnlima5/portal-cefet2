import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { BlueButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Bem vindo(a) ao
                            <br />
                            Portal Cefet/RJ 2.0
                            <br />
                        </StyledTitle>
                        <StyledText>
                            Simplificação do gerenciamento da faculdade, organização das turmas, alunos
                            e professores. Acompanhe a frequência, avalie os alunos e forneça 
                            feedbacks.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <BlueButton variant="contained" fullWidth>
                                    Entrar
                                </BlueButton>
                            </StyledLink>
                            <StyledText>
                                Não tem uma conta?{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Registre-se
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0;
`;

const StyledPaper = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
`;

const StyledTitle = styled.h1`
    font-size: 3rem;
    color: #252525;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
`;

const StyledText = styled.p`
    text-align: center;
    margin: 30px 0
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;
