import { useState } from "react";

import Header from "./components/Header/Header.js"
import StayItem from "./components/StayItem/StayItem.js";
import './App.css'

const staysDB = require('./data/stays.json')

function App() {
  const [Data, setData] = useState(staysDB)
  const [city, setCity] = useState('Finland')
  const [gests, setGests] = useState('')

  const cambiarData = (nombreDeCiudad, numeroDeHuespedes) => {
    let nuevaDataConBusqueda = []
    for (let stay of staysDB) {
      if ((stay.city.toLowerCase().includes(nombreDeCiudad.toLowerCase()) && stay.maxGuests >= numeroDeHuespedes) || ('finland'.includes(nombreDeCiudad.toLowerCase()))) {
        nuevaDataConBusqueda.push(stay)
      }
    }
    setData(nuevaDataConBusqueda)
    setCity(nombreDeCiudad)
    setGests(numeroDeHuespedes)
  }


  return (
    <div className="App">
      <Header data={staysDB} cambiarData={cambiarData} city={city} gests={gests} />
      <main>
        {(Data.length === 0) ?
          <>
            <p className="Message">We did not find rooms with those options<br /> :c</p>
          </>
          :
          <>
            <section>
              <h2>Stays {city !== '' ? 'in ' + city : 'for ' + gests + ' gests'}</h2>
              <h3>{Data.length} stays</h3>
            </section>
            <section className="results">
              {Data.map((stay, index) => (
                <StayItem stay={stay} key={index} />
              ))}
            </section>
            <hr />
            <p className="Message">This is the end of the list.</p>
            <footer>
              <h2>By David Alonso Ruiz</h2>
            </footer>
          </>
        }
      </main>
    </div>
  );
}

export default App;
