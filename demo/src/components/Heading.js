import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Heading() {

    const [currencies, setCurrencies] = useState([])

    useEffect(() => {
        const getCurrencies = async () => {
            const res = await axios.get("https://api.exchangerate.host/latest")
            const data = await res.data.rates
            const arrData = Object.keys(data)

            setCurrencies(arrData)
        }

        getCurrencies()
    }, [])

    return (
        <>
            <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="bg-white p-6">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <div class="sm:flex sm:space-x-5">
                            <div class="flex-shrink-0">
                                <img class="mx-auto h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                            <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                <p class="text-sm font-medium text-gray-600">Bienvenida,</p>
                                <p class="text-xl font-bold text-gray-900 sm:text-2xl">Laura Gonzalez</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:pb-10">
                    <p class="text-sm font-medium text-gray-600">Elige una moneda, la cual se reflejará su comportamiento en <b>Euros</b></p>
                </div>

            
                <div class="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
                {
                    currencies.map((e, i) => {
                        return (

                            <>
                                
                                    <Link to={`/${e}`} class="px-6 py-5 text-sm font-medium text-center">
                                        <span class="text-gray-900">{e}</span>
                                    </Link>
                                
                            </>

                        )
                    })
                }
                </div>

            </div>

        </>
    )
}
