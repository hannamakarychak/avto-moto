import "./table.scss";

const Table = () => {
  return (
    <table className="table">
      <tbody>
        <tr className="table__row">
          <td>Трансмиссия</td>
          <td>Роботизированная</td>
        </tr>
        <tr className="table__row">
          <td>Мощность двигателя, л.с.</td>
          <td>249</td>
        </tr>
        <tr className="table__row">
          <td>Тип двигателя</td>
          <td>Бензиновый</td>
        </tr>
        <tr className="table__row">
          <td>Привод</td>
          <td>Полный</td>
        </tr>
        <tr className="table__row">
          <td>Объем двигателя, л</td>
          <td>2.4</td>
        </tr>
        <tr className="table__row">
          <td>Макс. крутящий момент</td>
          <td>370/4500</td>
        </tr>
        <tr className="table__row">
          <td>Количество цилиндров</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Table;
