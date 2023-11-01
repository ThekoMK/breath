import React from 'react'
import SignUpForm from './SignUpForm'
import Menu from '../../components/Menu'

const SignUp = () => {
    return (
        <div className='signup-container'>
            <h3 className='text-center text-base font-bold uppercase text-[#343a40] mt-[56px] mb-[41px]'>Креирај профил</h3>
            <SignUpForm />
            <Menu />
        </div>
    )
}

export default SignUp
