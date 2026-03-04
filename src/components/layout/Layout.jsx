import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../routers/Routers'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import ScrollToTop from '../shared/ScrollToTop'

function LayoutContent() {
    const location = useLocation()
    const isCareersPage = location.pathname === '/careers'

    return (
        <>
            <ScrollToTop />
            <Header />
            <div>
                <Routers />
            </div>
            {!isCareersPage && <Footer />}
        </>
    )
}

function Layout() {
    return (
        <Router>
            <LayoutContent />
        </Router>
    )
}

export default Layout
