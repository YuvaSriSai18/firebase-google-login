import React from 'react'

import { auth, provider } from '../utils/Config'
import { signInWithPopup } from 'firebase/auth'

function SignIn() {
    const handleClick = async () => {
        console.log('Clicked')
        const userData = await signInWithPopup(auth, provider)
    }
    return (
        <>
            <button onClick={handleClick}>
                SignIn with Google
            </button>
        </>
    )
}
export default SignIn;