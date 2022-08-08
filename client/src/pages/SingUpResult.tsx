import { FC } from 'react'

import AuthLayout from '@components/layouts/AuthLayout/AuthLayout'
import SingUpResultContainer from '@components/containers/SingUpResult/SingUpResultContainer/SingUpResultContainer'

const SingUpResultPage: FC = () => {
    return (
        <AuthLayout>
            <SingUpResultContainer />
        </AuthLayout>
    )
}

export default SingUpResultPage
