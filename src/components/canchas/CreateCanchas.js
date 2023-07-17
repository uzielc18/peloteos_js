import React, { useState, useEffect, Fragment } from 'react'
import axios from '../../lib/axios'
import { Combobox, Transition, Switch } from '@headlessui/react'
import {
    CheckIcon,
    PencilIcon,
    PlusIcon,
    ClockIcon,
    ChevronUpDownIcon,
} from '@heroicons/react/20/solid'

const CreateCanchas = ({ title, nombre_boton, getAll, item, icono }) => {
    const [showModal, setShowModal] = useState(false)
    const [locale_id, setLocaleId] = useState('')
    const [locales, setLocales] = useState('')
    const [socio_id, setSocioId] = useState('')
    const [socios, setSocios] = useState([])
    const [canchas_tipo_id, setCanchasTipoId] = useState('')
    const [jugadores_id, setJugadoreId] = useState('')
    const [codigo, setCodigo] = useState('')
    const [prefijo, setPrefijo] = useState('')
    const [direccion, setDireccion] = useState('')
    const [aforo, setAforo] = useState('')
    const [google_map, setGoogleMap] = useState(1)
    const [lat, setLet] = useState(1)
    const [lang, setLang] = useState(1)
    const [min_horas, setMinHoras] = useState(1)
    const [max_horas, setMaxHoras] = useState(1)
    const [precio, setPrecios] = useState(1)
    const [estado, setEstado] = useState(1)
    const [query, setQuery] = useState('')

    const getSocios = async q => {
        const response = await axios.get('api/socios?q=' + q)
        //console.log(response.data)
        setSocios(response.data.data)
    }

    const getLocales = async q => {
        const response = await axios.get('api/locales?q=' + q)
        //console.log(response.data)
        setSocios(response.data.data)
    }

    if (item) {
        useEffect(() => {
            setEstado(item.estado)
            setNombre(item.nombre)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
    }
    const store = async e => {
        e.preventDefault()
        if (item) {
            const data = {
                nombre: nombre,
                estado: estado,
            }

            await axios.put('api/canchas/' + item.id, data)
        } else {
            const data = {
                nombre: nombre,
                estado: estado,
            }

            await axios.post('api/canchas', data)
        }
        getAll()
        setShowModal(false)
    }
    return (
        <>
            <button
                className="bg-blue-900 text-white active:bg-blue-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}>
                {icono == 'nuevo' ? (
                    <PlusIcon
                        className="-ml-0.5 mr-1.5 h-5 w-5"
                        aria-hidden="true"
                    />
                ) : (
                    ''
                )}
                {icono == 'editar' ? (
                    <PencilIcon
                        className="-ml-0.5 mr-1.5 h-5 w-5"
                        aria-hidden="true"
                    />
                ) : (
                    ''
                )}
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-12 mx-auto">
                            {/*content*/}
                            <form onSubmit={store} className="w-full max-w-sm">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-xl font-semibold">
                                            {nombre_boton}
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}>
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                <ClockIcon />
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="md:w-1/3">
                                                <label
                                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="inline-full-name">
                                                    Nombre
                                                </label>
                                            </div>
                                            <div className="md:w-2/3">
                                                <Combobox
                                                    value={socio_id}
                                                    onChange={setSocioId}>
                                                    <div className="relative mt-1">
                                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                                            <Combobox.Input
                                                                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                                displayValue={person =>
                                                                    person.razon_social
                                                                }
                                                                onChange={event =>
                                                                    getSocios(
                                                                        event
                                                                            .target
                                                                            .value,
                                                                    )
                                                                }
                                                            />
                                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <ChevronUpDownIcon
                                                                    className="h-5 w-5 text-gray-400"
                                                                    aria-hidden="true"
                                                                />
                                                            </Combobox.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            leave="transition ease-in duration-100"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                            afterLeave={() =>
                                                                setQuery('')
                                                            }>
                                                            <Combobox.Options className="absolute z-1 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                {socios.length ===
                                                                    0 &&
                                                                query !== '' ? (
                                                                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                                        Nothing
                                                                        found.
                                                                    </div>
                                                                ) : (
                                                                    socios.map(
                                                                        person => (
                                                                            <Combobox.Option
                                                                                key={
                                                                                    person.id
                                                                                }
                                                                                className={({
                                                                                    active,
                                                                                }) =>
                                                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                                        active
                                                                                            ? 'bg-teal-600 text-white'
                                                                                            : 'text-gray-900'
                                                                                    }`
                                                                                }
                                                                                value={
                                                                                    person
                                                                                }>
                                                                                {({
                                                                                    socio_id,
                                                                                    active,
                                                                                }) => (
                                                                                    <>
                                                                                        <span
                                                                                            className={`block truncate ${
                                                                                                socio_id
                                                                                                    ? 'font-medium'
                                                                                                    : 'font-normal'
                                                                                            }`}>
                                                                                            {
                                                                                                person.razon_social
                                                                                            }
                                                                                        </span>
                                                                                        {socio_id ? (
                                                                                            <span
                                                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                                                                    active
                                                                                                        ? 'text-white'
                                                                                                        : 'text-teal-600'
                                                                                                }`}>
                                                                                                <CheckIcon
                                                                                                    className="h-5 w-5"
                                                                                                    aria-hidden="true"
                                                                                                />
                                                                                            </span>
                                                                                        ) : null}
                                                                                    </>
                                                                                )}
                                                                            </Combobox.Option>
                                                                        ),
                                                                    )
                                                                )}
                                                            </Combobox.Options>
                                                        </Transition>
                                                    </div>
                                                </Combobox>
                                            </div>
                                        </div>
                                        <div className="md:flex md:items-center mb-6">
                                            <div className="md:w-1/3">
                                                <label
                                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="inline-full-name">
                                                    Estado
                                                </label>
                                            </div>
                                            <div className="md:w-2/3">
                                                <Switch
                                                    checked={estado}
                                                    onChange={setEstado}
                                                    className={`${
                                                        estado
                                                            ? 'bg-blue-600'
                                                            : 'bg-gray-200'
                                                    } relative inline-flex h-6 w-11 items-center rounded-full`}>
                                                    <span className="sr-only">
                                                        Enable notifications
                                                    </span>
                                                    <span
                                                        className={`${
                                                            estado
                                                                ? 'translate-x-6'
                                                                : 'translate-x-1'
                                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                                    />
                                                </Switch>
                                            </div>
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}>
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
                </>
            ) : null}
        </>
    )
}

export default CreateCanchas
