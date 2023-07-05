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
        <div className="p-2">
        
        <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Canchas 
            </h2>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <p className='text-gray-500'>Listado de los canchas</p>
            </div>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
            <span className="sm:ml-3">
                <CreateCanchas
                    title={'Nueva Cancha'}
                    nombre_boton={'Nuevo'}
                    getAll={getAll}
                    item={false}
                    icono={'nuevo'}
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                />
            </span>

            {/* Dropdown */}
            {/*<Menu as="div" className="relative ml-3 sm:hidden">
    <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
      More
      <ChevronDownIcon className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
    </Menu.Button>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
            >
              Edit
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
            >
              View
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>*/}
        </div>
    </div>
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col">Local</th>
                                    <th scope="col">Socio</th>
                                    <th scope="col">Tipo de Cancha</th>
                                    <th scope="col">N° jugadores</th>
                                    <th scope="col">Cod</th>
                                    <th scope="col">Prefijo</th>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Aforo</th>
                                    <th scope="col">Maps</th>
                                    <th scope="col">Min|Max horas</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Distrito</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(canchas) ? (
                                    canchas.map(cancha => (
                                        <tr
                                            key={cancha.id}
                                            className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                {cancha.locale_id}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {cancha.socio_id}
                                            </td>
                                            
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {cancha.canchas_tipo_id }
                                            </td>
                                            
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {cancha.jugadore_id }
                                            </td>
                                            
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {cancha.codigo }
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {cancha.prefijo}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {cancha.direccion}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {cancha.aforo}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                            {cancha.google_map}
                                             (lat: {cancha.lat} - lang: {cancha.lang})
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {cancha.min_horas}-{cancha.max_horas}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {cancha.precio}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                {cancha.distrito_id}
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
                                            colSpan={12}>
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
    )
}

export default ShowCanchas
