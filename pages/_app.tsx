import '~/globals.scss'
import '~/tailwind.css'

import type { AppProps } from 'next/app'

import { appWithTranslation } from 'next-i18next'
import ErrorBoundary from '~/contexts/error-boundary'
import Maintenance from './maintenance'
function App({ Component, pageProps }: AppProps) {
    if (process.env.MAINTENANCE_MODE === '1') {
        return <Maintenance />
    }

    return (
        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>
    )
}

export default appWithTranslation(App)
