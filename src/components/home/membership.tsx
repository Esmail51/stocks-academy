import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/subscription2.png'

export default function Membership() {
    return (
        <section className='py-10 px-24 bg-white text-black gap-10'>
            <div className='flex items-center gap-10'>
                <div className='w-1/2 '>
                    <img className='' src={img1} alt="" />
                </div>
                <div className='w-1/2 text-start flex flex-col items-start gap-5'>
                    <h1 className='text-4xl font-semibold' >Membership plans</h1>
                    <p className='' >Membership includes access to our online trading community & live technical analysis classes held in our spacious state-of-the-art boardroom, in Toronto, Ontario. We offer a free month membership to members who enroll and complete any Course Package.</p>
                    <Link to='/choose_plan' >
                        <button className='bg-blue-600 py-2' >Choose Plan</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
