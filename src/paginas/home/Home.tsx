import React from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabpostagens/TabPostagem'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import "./Home.css";
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useNavigate } from 'react-router';
import {Link}  from 'react-router-dom';

function Home() {

  let histoty = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state)=> state.tokens
  );
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>

        <Grid alignItems="center" item xs={6}>

          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>

          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to="/posts" className="text-decorator-none">
              <Button variant="outlined" className='botao'>Ver Postagens</Button>
            </Link>
          </Box>

        </Grid>

        <Grid item xs={6} >
          <img src="https://www.canstockphoto.com.br/feliz-computador-caricatura-desktop-19335638.html" alt="" width="500px" height="500px" />
        </Grid>

        <Grid xs={12} className='postagens'>
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  )
}

export default Home;