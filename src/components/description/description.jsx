import "./description.scss";

const Description = () => {
  return (
    <table>
      <tbody>
        <tr className="table">
          <td>Трансмиссия</td>
          <td>Роботизированная</td>
        </tr>
        <tr className="table">
          <td>Мощность двигателя, л.с.</td>
          <td>249</td>
        </tr>
        <tr className="table">
          <td>Тип двигателя</td>
          <td>Бензиновый</td>
        </tr>
        <tr className="table">
          <td>Привод</td>
          <td>Полный</td>
        </tr>
        <tr className="table">
          <td>Объем двигателя, л</td>
          <td>2.4</td>
        </tr>
        <tr className="table">
          <td>Макс. крутящий момент</td>
          <td>370/4500</td>
        </tr>
        <tr className="table">
          <td>Количество цилиндров</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Description;
