import './App.css';
import React, { useState } from 'react';
import SimpleCard from './components/SimpleCard';
import benz from './img/benz.jpg';
import gclass from './img/gclass.jpg';

function App() {

const ParentComponent = () => {
  return (
    <h1>
      Saya parent component
      <ChildComponent text="Saya anak ke-1" warna="merah"/>
      <ChildComponent text="Saya anak ke-2" warna="kuning"/>
      <ChildComponent text="Saya anak ke-3" warna="hijau"/>
    </h1>
  )
}

const ChildComponent = (props) => {
  return <p>{props.text} - {props.warna}</p>
}


  return (
    <div className="App" >
    <SimpleCard title="Andrew" description="Belajar react sangat mudah sekali" gambar={benz}> </SimpleCard>

    <ParentComponent/>
    </div>
  );


}


export default App;
