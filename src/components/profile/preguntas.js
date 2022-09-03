const Preguntas = () => {
  const sincfor = () => {
    const element = [];
    for (let index = 1; index <= 10; index++) {
      element[index] = index + " ";
    }
    return element;
  };
  var asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        i: 1,
        next() {
          if (this.i < 11) {
            return Promise.resolve({ value: this.i++, done: false });
          }

          return Promise.resolve({ done: true });
        },
      };
    },
  };
  return (
    <div className="test-p bordlength columns has-background-warning">
      <div className="column is-three-fifths">
        <h1 className="has-text-centered has-text-weight-bold is-size-1">
          Preguntas:
        </h1>
        <p className="has-text-centered">
          1. Describa 5 funciones de agregación de MongoDB
          <br />
          <br />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              count: cuents las veces que se repite un dato en la coleccion
            </li>
            <li className="list-group-item">
              amount: suma las cantidades de los datos en la coleccion
            </li>
            <li className="list-group-item">
              avg: promedio de los datos numericos
            </li>
            <li className="list-group-item">
              match: condiciona los datos a mostrar
            </li>
            <li className="list-group-item">
              project: selecciona los datos de la coleccion a mostrar
            </li>
          </ul>
        </p>
        <br />
        <br />
        <p className="has-text-centered">
          2. Explique las diferencias entre las funciones sincronas y asíncronas
          <br />
          <br />
          Las Funciones Sincronas son aquellas que esperan a que se ejecute la
          funcion anterior para poder actuar, las funciones ascincronas no
          esperan a otras funciones si no que se ejecutan en diferido al resto
          de funciones.
        </p>
        <br />
        <br />
        <p className="has-text-centered">
          3. Desarrolle un for que vaya de 1 a 10 de manera sincrona y otro de
          manera asíncrona, muestra los resultados, ¿estos salen en orden? ¿Por
          qué?
          <br />
          <br />
          {async function () {
            for await (let num of asyncIterable) {
              console.log(num);
            }
          }}
        </p>
        <p className="has-text-centered">
          4. Qué métodos de seguridad se pueden utilizar en los consumos de
          servicios rest.
          <br />
          <br />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Autenticacion y Autorizacion</li>
            <li className="list-group-item">
              amount: suma las cantidades de los datos en la coleccion
            </li>
            <li className="list-group-item">
              avg: promedio de los datos numericos
            </li>
            <li className="list-group-item">
              match: condiciona los datos a mostrar
            </li>
            <li className="list-group-item">
              project: selecciona los datos de la coleccion a mostrar
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};
export default Preguntas;
