// import { set } from 'date-fns'
import React, { useState } from 'react'

export const RoadmapForm = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [skills, setskills] = useState([])
    const [exam, setExam] = useState('')
    const [stream, setStream] = useState([])
    const [HEdu, setHEdu] = useState('')
    const [Recruiters, setRecruiters] = useState('')
    const [duration, setDuration] = useState('')
    const [job, setJob] = useState('')


    return (
        <div className='relative'>
            <img
                className='h-screen w-full'
                src='https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
            <div className=''>
                <form
                    className='absolute left-0 top-0 bottom-0 text-gray-300 font-serif'>
                    <h1 className='text-6xl mt-10 ml-10 font-semibold '>Add a new Roadmap</h1>

                    <div className='grid grid-cols-2'>
                        <div className='flex flex-col'>
                            <label className='  font-bold text-xl p-3 ml-10'>Name of Roadmap</label>
                            <input
                                className='ml-10 rounded-md p-1'
                                placeholder="Name of the roadmap"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <label className=' font-bold text-xl p-3 ml-10'>Description</label>
                            <textarea
                                rows={4}
                                className='ml-10 rounded-md p-1'
                                placeholder='Description of roadmap'
                                type="text"
                                onChange={(e) => setDesc(e.target.value)}
                                value={desc}
                            />
                            <label className=' font-bold text-xl p-3 ml-10'>Skills required</label>
                            <input
                                className='ml-10 rounded-md p-1'
                                placeholder='Add skillset required '
                                type="text"
                                onChange={(e) => setskills(e.target.value)}
                                value={skills}
                            />
                            <label className=' font-bold text-xl p-3 ml-10'>Entrance Exams</label>
                            <input
                                className='ml-10 rounded-md p-1'
                                placeholder='Entrance exams '
                                type="text"
                                onChange={(e) => setExam(e.target.value)}
                                value={exam}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='  font-bold text-xl p-3 ml-10'>Streams</label>
                            <input
                                className='ml-10 rounded-md p-1'
                                placeholder="Stream required "
                                type="text"
                                onChange={(e) => setStream(e.target.value)}
                                value={stream}
                            />

                            <label className=' font-bold text-xl p-3 ml-10'>Higher Education</label>
                            <input
                                rows={4}
                                className='ml-10 rounded-md p-1'
                                placeholder='Higher Eductaion '
                                type="text"
                                onChange={(e) => setHEdu(e.target.value)}
                                value={HEdu}
                            />

                            <label className=' font-bold text-xl p-3 ml-10'>Top Recruiters</label>
                            <input
                                className='ml-10 rounded-md p-1'
                                placeholder='Top recruiters '
                                type="text"
                                onChange={(e) => setRecruiters(e.target.value)}
                                value={Recruiters}
                            />
                            <label className=' font-bold text-xl p-3 ml-10'>Duration</label>
                            <input
                                className='ml-10 rounded-md p-1'
                                placeholder='Duration'
                                type="text"
                                onChange={(e) => setDuration(e.target.value)}
                                value={duration}
                            />
                            <label className=' font-bold text-xl p-3 ml-10'>Job Profiles</label>
                            <input
                                className='ml-10 rounded-md p-1'
                                placeholder='Job Profile'
                                type="text"
                                onChange={(e) => setJob(e.target.value)}
                                value={job}
                            />
                        </div>
                    </div>
                    <button className='w-full bg-gray-400 text-black m-2 ml-10 rounded-md py-2 px-3 mt-3'>Add this Roadmap</button>

                </form>
            </div >


        </div >


    )
}

