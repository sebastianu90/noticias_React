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

  consultarNoticias = async (categoria = "breaking-news") => {
    const url = `https://gnews.io/api/v4/${categoria}?token=9106ae1e522290e9327a30c4715787b7`;

    const respuesta = await fetch(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
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
