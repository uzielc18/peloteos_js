import React, { useState, useEffect } from 'react'
import axios from './../../lib/axios'
import {
    CheckIcon,
    ClockIcon,
    PencilIcon,
    PlusIcon,
} from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
const CreateBancos = ({ title, nombre_boton, getAll, item, icono }) => {
    const [showModal, setShowModal] = useState(false)
    const [nombre, setNombre] = useState('')
    const [estado, setEstado] = useState(1)

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

            await axios.put('api/bancos/' + item.id, data)
        } else {
            const data = {
                nombre: nombre,
                estado: estado,
            }

            await axios.post('api/bancos', data)
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
                                                <input
                                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                                    value={nombre}
                                                    onChange={e =>
                                                        setNombre(
                                                            e.target.value,
                                                        )
                                                    }
                                                    placeholder="Nombre"
                                                    type="text"
                                                />
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
                                                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}></span>
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

export default CreateBancos
