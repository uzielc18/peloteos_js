import React, { useEffect, useState, Fragment } from 'react'
import axios from '../../lib/axios'
import { TrashIcon } from '@heroicons/react/20/solid'
import CreateJugadores from '@/components/jugadores/CreateJugadores'

const ShowJugadores = () => {
    //const [refrescar, setRefrescar] = useState(false);
    const [jugadores, setTipoCanchas] = useState([])
    useEffect(() => {
        getAll()
    }, [])
    const getAll = async () => {
        const response = await axios.get('api/jugadores')
        //console.log(response.data)
        setTipoCanchas(response.data.data)
    }
    const Delete = async id => {
        await axios.delete('api/jugadores/' + id)
        getAll()
    }
    return (
        <div className="p-2">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        # Jugadores
                    </h2>
                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <p className="text-gray-500">Numero de jugadores por cancha</p>
                    </div>
                </div>
                <div className="mt-5 flex lg:ml-4 lg:mt-0">
                    <span className="sm:ml-3">
                        <CreateJugadores
                            title={'Jugadores por cancha'}
                            nombre_boton={'Nuevo'}
                            getAll={getAll}
                            item={false}
                            icono={'nuevo'}
                            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        />
                    </span>

                 
                </div>
            </div>

            <div className="flex flex-col p-2">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="bg-black-300 text-start">
                            <div className="flex" />
                            <div className="float-rigth" />
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                        <th scope="col">id</th>
                                        <th scope="col">Código</th>
                                        <th scope="col">nombre</th>
                                            <th scope="col">estado</th>
                                            <th scope="col">Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.isArray(jugadores) ? (
                                            jugadores.map(tipo => (
                                                <tr
                                                    key={tipo.id}
                                                    className="border-b dark:border-neutral-500">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        {tipo.id}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        {tipo.codigo}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                        {tipo.nombre}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        {tipo.estado}
                                                    </td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <CreateJugadores
                                                           
                                                            nombre_boton={
                                                                'Editar'
                                                            }
                                                            getAll={getAll}
                                                            item={tipo}
                                                            icono={'editar'}
                                                        />
                                                        <button
                                                            onClick={() =>
                                                                Delete(tipo.id)
                                                            }
                                                            className="bg-red-900 text-white active:bg-blue-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                            <TrashIcon className='className="-ml-0.5 mr-1.5 h-5 w-5"' />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr className="border-b dark:border-neutral-500">
                                                <td
                                                    className="whitespace-nowrap px-6 py-4 font-medium"
                                                    colSpan={3}>
                                                    No hay registros
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowJugadores
