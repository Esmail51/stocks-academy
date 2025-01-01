import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/cards.png'

export default function Membership() {
    return (
        <section className='py-10 lg:px-24 px-5 bg-white text-black gap-10'>
            <div className='flex items-center lg:flex-row flex-col gap-10'>
                <div className='lg:w-1/2 '>
                    <img className='w-[85%]' src={img1} alt="" />
                </div>
                <div className='lg:w-1/2 text-start flex flex-col items-start gap-5'>
                    <h1 className='text-4xl font-semibold' >Membership plans</h1>
                    <p className='' >Membership includes access to our online trading community & live technical analysis classes held in our spacious state-of-the-art boardroom, in Toronto, Ontario. We offer a free month membership to members who enroll and complete any Course Package.</p>
                    <Link to='/choose_plan' >
                        <button className='bg-googleBlue-500 hover:bg-white hover:text-black font-medium text-sm lg:text-lg px-3 lg:px-4 lg:py-3 rounded-full shadow-lg  text-white' >Choose Plan</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
