import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import Postagem from '../../../models/Postagem'
import { busca } from '../../../services/Services'
import './ListaPostagem.css'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { useSelector } from 'react-redux'

function ListaPostagem() {

  let history = useNavigate()
  const [posts, setPost] = useState<Postagem[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state)=> state.tokens
  );

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado")
      history("/login")
    }
  }, [token])

  async function getPost() {
    await busca("/postagens", setPost, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getPost()
  }, [posts.length])

  return (
    <>
      {posts.map(post => (
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>

              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>

              <Typography variant="h5" component="h2">
                {post.titulo}
              </Typography>

              <Typography variant="body2" component="p">
                {post.texto}
              </Typography>

              <Typography variant="body2" component="p">
                {post.tema?.descricao}
              </Typography>

            </CardContent>

            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>

                <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      Atualizar
                    </Button>
                  </Box>
                </Link>

                <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                      Deletar
                    </Button>
                  </Box>
                </Link>

              </Box>
            </CardActions>

          </Card>
        </Box>
      ))}
    </>
  )
}

export default ListaPostagem