import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";

class App extends Component {
  state = {
    noticias: [],
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = "general") => {
    const url = `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=f661a6726e8f4d61ba8ca4503bfe221d`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles,
    });
  };

  render() {
    return (
      <Fragment>
        <Header titulo="Noticias API React" />
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </Fragment>
    );
  }
}

export default App;
