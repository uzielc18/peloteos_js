import React, { useEffect, useState } from 'react'

import axios from '../../lib/axios'

import CreateCanchas from './CreateCanchas'

const ShowCanchas = () => {
    //const [refrescar, setRefrescar] = useState(false);
    const [canchas, setCanchas] = useState([])
    useEffect(() => {
        getAll()
    }, [])
    const getAll = async () => {
        const response = await axios.get('api/canchas')
        //console.log(response.data)
        setCanchas(response.data.data)
    }
    const Delete = async id => {
        await axios.delete('api/canchas/' + id)
        getAll()
    }
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="bg-black-300 text-start">
                        <div className="flex">
                            <h3> Canchas </h3>
                        </div>
                        <div className="float-rigth">
                            <CreateCanchas
                                title={'Nuevo Cancha'}
                                nombre_boton={'Nuevo'}
                                getAll={getAll}
                                item={false}
                            />
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col">nombre</th>
                                    <th scope="col">estado</th>
                                    <th scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(canchas) ? (
                                    canchas.map(cancha => (
                                        <tr
                                            key={cancha.id}
                                            className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                {cancha.nombre}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {cancha.estado}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <CreateCanchas
                                                    title={'Editar cancha'}
                                                    nombre_boton={'Editar'}
                                                    getAll={getAll}
                                                    item={cancha}
                                                />
                                                <button
                                                    onClick={() =>
                                                        Delete(cancha.id)
                                                    }
                                                    className="bg-red-900 text-white active:bg-blue-600 font-bold uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                    Delete
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
    )
}

export default ShowCanchas
