import React from 'react';
import { renderChangePercentage } from '../../helpers';
import './Table.css';

const Table = props => {
  const { currencies } = props;
  console.log(currencies);
  return (
    <div className='Table-container'>
      <table className='Table'>
        <thead className='Table-head'>
          <tr>
            <th>Cryptocurrency</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24H Change</th>
          </tr>
        </thead>
        <tbody className='Table-body'>
          {currencies.map(currency => {
            return (
              <tr
                key={currency.id}
                // onClick={() => history.push(`/currency/${currency.id}`)}
              >
                <td>
                  <span className='Table-rank'>{currency.rank}</span>
                  {currency.name}
                </td>
                <td>
                  <span className='Table-dollar'>$</span>
                  {currency.priceUsd}
                </td>
                <td>
                  <span className='Table-dollar'>$</span>
                  {currency.marketCapUsd}
                </td>
                <td>{renderChangePercentage(currency.changePercent24Hr)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
