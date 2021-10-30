import { useState } from 'react'
import './Header.css'
import Logo from '../../resources/logo.svg'
import SearchIcon from '../../resources/Icons/SearchIcon.svg'
import SearchWhiteIcon from '../../resources/Icons/SearchWhiteIcon.svg'
import CloseIcon from '../../resources/Icons/CloseIcon.svg'
import LocationIcon from '../../resources/Icons/LocationIcon.svg'

const Header = ({ data, cambiarData, city, gests }) => {
    const [mostrarFiltrosDeBusqueda, setMostrarFiltrosDeBusqueda] = useState(false)
    const [inputLocalizacion, setInputLocalizacion] = useState(city)
    const [inputGests, setinputGests] = useState(gests)
    const DevolverArregloDeCiudades = (busqueda) => {
        let nuevoArregloDeCiudades = []
        for (let ciudad of data) {
            let yaSeHabiaAgregado = false
            if (ciudad.city.toLowerCase().includes(busqueda.toLowerCase()) || busqueda === '' || 'finland'.toLowerCase().includes(busqueda.toLowerCase())) {
                for (let ciudadIngresada of nuevoArregloDeCiudades) {
                    if (ciudadIngresada.city.toLowerCase().includes(ciudad.city.toLowerCase())) {
                        yaSeHabiaAgregado = true
                    }
                }
                if (!yaSeHabiaAgregado) {
                    nuevoArregloDeCiudades.push(ciudad)
                }
            }
        }

        return nuevoArregloDeCiudades
    }

    const [busqueda, setBusqueda] = useState(DevolverArregloDeCiudades(''))


    const CambioDeBusqueda = (ciudadABuscar) => {
        setBusqueda(DevolverArregloDeCiudades(ciudadABuscar))
        setInputLocalizacion(ciudadABuscar)
    }

    const agregarLocalizacion = (localizacion) => {
        CambioDeBusqueda(localizacion.city)

        setInputLocalizacion(localizacion.city + ', ' + localizacion.country)
        setBusqueda([])
    }

    const realizarBusqueda = () => {
        if (inputLocalizacion !== '' || inputGests !== '') {
            setMostrarFiltrosDeBusqueda(false)
            let localizacionSinPais = inputLocalizacion
            if (localizacionSinPais.includes(',')) {
                localizacionSinPais = localizacionSinPais.slice(0, localizacionSinPais.indexOf(','))
            }
            cambiarData(localizacionSinPais, inputGests)
            setBusqueda(DevolverArregloDeCiudades(''))
        }
        else {
            alert('You have to enter something to search')
        }
    }

    return (
        <header>
            <div className={!mostrarFiltrosDeBusqueda ? 'containerHeader headerNotFixed': 'containerHeader headerfixed'}>
                <div className={!mostrarFiltrosDeBusqueda ? 'headerOfSearch maxWidthOfContainer' : 'headerOfSearch'}>
                    {(!mostrarFiltrosDeBusqueda)
                        ? <img src={Logo} alt='logo' />
                        : <>
                            <p>Edit your search</p>
                            <button type='button' onClick={() => { setMostrarFiltrosDeBusqueda(false) }}>
                                <img src={CloseIcon} alt="CloseIcon" />
                            </button>
                        </>
                    }
                </div>
                <form className={!mostrarFiltrosDeBusqueda ? 'form' : 'formulario'} onSubmit={e =>{e.preventDefault(); realizarBusqueda()}} >
                    {!mostrarFiltrosDeBusqueda
                        ? <>
                            <input id='showLocationInput' onFocus={() => { setMostrarFiltrosDeBusqueda(true) }} className='inputForm' type="text" placeholder='Add Location' value={city} readOnly={true} />
                            <input id='showLocationGests' onFocus={() => { setMostrarFiltrosDeBusqueda(true) }} className='inputForm' type="number" placeholder='# of guests' value={gests} readOnly={true} />

                        </>
                        : <>
                            <div className='form-group'>
                                <label className='labelDelFormulario' htmlFor="location">LOCATION</label>
                                <input id='location' name='location' onChange={e => { CambioDeBusqueda(e.target.value) }} className='inputForm' type="text" placeholder='Add Location' autoComplete='off' value={inputLocalizacion} />
                                <label className='labelDelFormulario' htmlFor='gests'>GUESTS</label>
                                <input id='gests' name='guests' className='inputForm' type="number" placeholder='Add guests' autoComplete='off' value={inputGests} onChange={(e) => { setinputGests(e.target.value) }} />
                            </div>
                            <div className='Locations'>
                                {
                                    busqueda === [] ?
                                        <>
                                        </>
                                        :
                                        busqueda.map((location, index) => {

                                            return (<button type='button' key={index} onClick={() => { agregarLocalizacion(location) }} className='btn-location'>
                                                <img src={LocationIcon} alt="LocationIcon" />
                                                <p>{location.city}, {location.country}</p>
                                            </button>)
                                        })

                                }

                            </div>
                        </>
                    }
                    <button className={!mostrarFiltrosDeBusqueda ? 'btnSearch btn' : 'btnSearchDeFiltros btn'} type="submit" onClick={e => { e.preventDefault(); realizarBusqueda() }}>
                        {!mostrarFiltrosDeBusqueda
                            ? <img src={SearchIcon} alt="SearchIcon" />
                            : <><img src={SearchWhiteIcon} alt="SearchIcon" />Search</>}
                    </button>
                </form>
            </div>
        </header>
    )


}

export default Header
/*<>
            {!mostrarFiltrosDeBusqueda
                ? (<header>
                    <img src={Logo} alt="Logo" />
                    <form id="FormularioDeBusqueda" className='form'>
                        <input id='showLocationInput' onFocus={() => { setMostrarFiltrosDeBusqueda(true) }} className='inputForm' type="text" placeholder='Add Location' value={city} readOnly={true} />
                        <input id='showLocationGests' onFocus={() => { setMostrarFiltrosDeBusqueda(true) }} className='inputForm' type="number" placeholder='# of guests' value={gests} readOnly={true} />
                        <button className='botonDeInicio' type="button" onClick={e => { e.preventDefault() }}>
                            <img src={SearchIcon} alt="SearchIcon" />
                        </button>
                    </form>
                </header>
                )
                : (
                    <header className='searching'>
                        <div>
                            <div className='headerOfSearch'>
                                <p>Edit your search</p>
                                <button type='button' onClick={() => { setMostrarFiltrosDeBusqueda(false) }}>
                                    <img src={CloseIcon} alt="CloseIcon" />
                                </button>
                            </div>
                            <form className='formulario form'>
                                <label className='labelDelFormulario' htmlFor="location">LOCATION</label>
                                <input id='location' name='location' onChange={e => { CambioDeBusqueda(e.target.value) }} className='inputForm' type="text" placeholder='Add Location' autoComplete='off' value={inputLocalizacion} />
                                <label className='labelDelFormulario' htmlFor='gests'>GUESTS</label>
                                <input id='gests' name='guests' className='inputForm' type="number" placeholder='Add guests' autoComplete='off' value={inputGests} onChange={(e) => { setinputGests(e.target.value) }} />
                                <div className='Locations'>
                                    {
                                        busqueda === [] ?
                                            <>
                                            </>
                                            :
                                            busqueda.map((location, index) => {

                                                return (<button type='button' key={index} onClick={() => { agregarLocalizacion(location) }} className='btn-location'>
                                                    <img src={LocationIcon} alt="LocationIcon" />
                                                    <p>{location.city}, {location.country}</p>
                                                </button>)
                                            })

                                    }

                                </div>
                                <button onClick={() => { realizarBusqueda() }} className='btn-searchOculto' type="submit">
                                    <img src={SearchWhiteIcon} alt="SearchIcon" />
                                    Search
                                </button>
                            </form>
                        </div>
                    </header>
                )
            }


        </> */