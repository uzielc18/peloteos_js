import React from 'react'

import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import ShowSocios from '@/components/socios/ShowSocios'
const index = () => {
    return (
        <AppLayout>
            <Head>
                <title>Canchas</title>
            </Head>
            <div className="py-1">
                <div className="max-w-10xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-1 bg-white border-b border-gray-200">
                            <ShowSocios />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default index
