import logo from './logo.svg';
import './App.css';
import MyButton from '../MyButton';
import MyStyles from './normal.module.css';
import MyStyles2 from './article.module.css';
import Header from '../Header';
import React from 'react';
import Car3 from '../components/Car3';
import Card from '../components/Card';
import MyForm from '../components/MyForm';
import ExpenseItem from '../components/ExpensesItem';



function App() {

  function time() {
    return new Date().toLocaleTimeString()
      }
    
      let waktu = (`The Current Time is ${time()} GMT +8 (Bangkok Standard Time)`)

      const expenses = [
        {
          expense_date: '01-Maret-2022',
          description: 'Bayar Angsuran Motor',
          total: 'Rp.1.200.000',
        },
        {
          expense_date: '11-Maret-2022',
          description: 'Bayar Air',
          total: 'Rp.300.000',
        },
      ];


  return (
    <div className="App" >
      <h1>Jam sekarang</h1>
      <h2>{waktu}</h2>

    {
      expenses.map(function(item) {
        return (
        <div key= {item.expense_date}>
          <span>{item.total}</span>
          
        </div>
      )
      })
    }
        <h3>My Expenses</h3>
    <ExpenseItem/>
    <div className='div-card'></div>
<Card/>
    </div>
  );


}


export default App;
