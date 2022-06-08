import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer';
import ListaTema from './components/temas/listatemas/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
      <Routes>
      
          <Route path="/" element={<Login />} />
           
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />

          <Route path="/cadastro" element={<CadastroUsuario />}/>
    
          <Route path="/temas" element={<ListaTema />}/>
            
          <Route path="/posts" element={<ListaPostagem />} />
          
          <Route path='/formularioPostagem' element={<CadastroPostagem />} />

          <Route path='/formularioPostagem/:id' element={<CadastroPostagem />} />

          <Route path='/formularioTema' element={<CadastroTema />} />

          <Route path='/formularioTema/:id' element={<CadastroTema />} />

          <Route path='/deletarPostagem/:id' element={<DeletarPostagem />} />

          <Route path='/deletarTema/:id' element={<DeletarTema />} />

      
      </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;