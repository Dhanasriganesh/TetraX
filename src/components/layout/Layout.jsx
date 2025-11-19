import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../routers/Routers'
import { BrowserRouter as Router } from 'react-router-dom'
import CustomCursor from '../shared/CustomCursor'
import ScrollToTop from '../shared/ScrollToTop'
function Layout() {
    return (
        <Router>
            <CustomCursor />
            <ScrollToTop />
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </Router>
    )
}

export default Layout
