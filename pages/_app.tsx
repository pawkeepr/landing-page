import '~/globals.scss'
import '~/tailwind.css'

import type { AppProps } from 'next/app'

import { appWithTranslation } from 'next-i18next'
import ErrorBoundary from '~/contexts/error-boundary'

function App({ Component, pageProps }: AppProps) {
    return (
        <ErrorBoundary>
            <Component {...pageProps} />
        </ErrorBoundary>
    )
}

export default appWithTranslation(App)
