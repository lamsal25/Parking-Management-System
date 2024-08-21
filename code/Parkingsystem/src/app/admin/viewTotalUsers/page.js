"use client"
import Layout from '@/app/components/layout/Layout'
import axios from 'axios'
import { useState, useEffect } from 'react'
import React from 'react'
import { DNA } from 'react-loader-spinner'

function ViewTotalUsers() {

    const [users, setUsers] = useState([])

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("/api/getUsersData")
            console.log(response.data.users);
            setUsers(response.data.users)
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Layout >
            {isLoading &&
                <DNA
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            }
            <div className="overflow-x-auto p-14">
                <h2 className="text-xl font-bold mb-10  text-center">Total Users So Far</h2>
                <table className="min-w-full divide-y divide-gray-200 mx-auto">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">First Name</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Last Name</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                {user.email === "admin@gmail.com" ?
                                    null
                                    :
                                    <>
                                        <td className="px-6 py-4 whitespace-nowrap">{user.firstName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                    </>
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default ViewTotalUsers
