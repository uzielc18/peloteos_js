import React, { useEffect, useState, Fragment } from 'react'
import Link from 'next/link'
import axios from './../../lib/axios'
import { Menu, Transition } from '@headlessui/react'
import CreateSocios from './CreateSocios'
import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
    TrashIcon,
    UsersIcon,
} from '@heroicons/react/20/solid'
const ShowSocios = () =>  {
    const [socios, setSocios] = useState([])
    useEffect(() => {
        getAll()
    }, [])
    const getAll = async () => {
        const response = await axios.get('api/socios')
        //console.log(response.data)
        setSocios(response.data.data)
    }
    const Delete = async id => {
        await axios.delete('api/socios/' + id)
        getAll()
    }

  return (
    <div className="p-2">
    <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                <UsersIcon className="-mr-1 ml-1.5 h-8 w-8 text-gray-500 inline" aria-hidden="true" /> Socios
            </h2>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <p className='text-gray-500'>Listado de los Socios</p>
                {/*<div className="mt-2 flex items-center text-sm text-gray-500">
                    <BriefcaseIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                    />
                    Full-time
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                    <MapPinIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                    />
                    Remote
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                    <CurrencyDollarIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                    />
                    $120k &ndash; $140k
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                    <CalendarIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                    />
                    Closing on January 9, 2020
                </div>*/}
            </div>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
            <span className="sm:ml-3">
                <CreateSocios
                    title={'Nuevo Banco'}
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
                                    <th scope="col">Codigo</th>
                                    <th scope="col">usuario</th>
                                    <th scope="col">Razon social/ nombre</th>
                                    <th scope="col">Ruc / dni</th>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Nº de contactos</th>
                                    <th scope="col">Correos</th>
                                    <th scope="col">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(socios) ? (
                                    socios.map(socio => (
                                        <tr
                                            key={socio.user_id}
                                            className="border-b dark:border-neutral-500">
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                            {socio.user_id}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                {socio.user_name}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                {socio.razon_social}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                {socio.ruc}<br />
                                                {socio.dni}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                {socio.direccion}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                                               -{socio.telefono}<br/>-{socio.celular}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                               -{socio.correo_personal}<br/>-{socio.correo_empresarial}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <CreateSocios
                                                    title={
                                                        'Editar Socio'
                                                    }
                                                    nombre_boton={
                                                        'Editar'
                                                    }
                                                    getAll={getAll}
                                                    item={socio}
                                                    icono={'editar'}
                                                />
                                                <button
                                                    onClick={() =>
                                                        Delete(socio.user_id)
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
                                            colSpan={8}>
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

export default ShowSocios