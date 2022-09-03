import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="test-p bordlength columns has-background-warning">
      <div className="column is-three-fifths">
        <h1 className="has-text-centered has-text-weight-bold is-size-1">
          Acerca de mi
        </h1>
        <p className="has-text-centered">
          Hola soy Anderson Gonzalez, he vivido en Bogotá toda mi vida, desde
          que estaba en el colegio me apasione por la programacion asi que
          decidi estudiar en la Universidad Distrital Francisco Jose de Caldas
          la carrera de Tecnologia en sistematizacion de datos, adentrandome mas
          en el mundo de IT me he dado cuenta que la formacion profesional es
          importante pero lo es mas aun la experiencia y los conocimientos que
          pueda aprender, estando en los ultimos semestres me decidi a no dejar
          la universidad pero si aprender por mi cuenta y encontrar una
          oportunidad que me permita crecer laboralmente.
          <br />
          <br />
          Una de mis mas grandes metas a largo plazo es convertirme en una gran
          persona, un gran amigo y un gran familiar, alguien del que este
          orgulloso mi yo de ahora, a mediano plazo quiero ser un gran
          profesional, alguien que pueda dar oportunidades de trabajo en la
          sociedad con un o varias empresas y a corto plazo quiero terminar mis
          estudios y aprender de la vida
          <br />
          <br />
          Mis sueños se basan en poder retribuir a las personas que han creido
          en mi potencial y me han ayudado a lo largo de mi vida.
          <br />
          <br />
          Tengo experiencia como FullStack en React, Sass, Boostrap, HTML, CSS,
          REST-API, graph, Docker, Js, Php, Python, Django, sql
        </p>
      </div>

      <div className="d-flex column is-half has-text-centered ">
        <br></br>
        <a
          href="https://github.com/LTrashy"
          target="blank"
          className="btn btn-outline-success"
        >
          Github
        </a>
        <br />
        <a
          href="https://drive.google.com/file/d/161QZh8fVIvJqOqMJmusgZO2zK-8ZI8WB/view?usp=sharing"
          target="blank"
          className="btn btn-outline-success"
        >
          Resume
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/asgonzaleztr/"
          className="btn btn-outline-success"
          target="blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Profile;
