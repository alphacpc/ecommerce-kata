import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
        <>
        <Header/>
                <section className="section-container">
                        <div className="div-error-page flex flex-center flex-column">
                                <div className="div-404">
                                        <span className='un font-bold text-red'>4</span>
                                        <span className='deux padding-20'>0</span>
                                        <span className='trois font-bold text-red'>4</span>
                                </div>

                                <p className="font-20 margin-v20">page demandée n’a pas été trouvée</p>
                        </div>
                </section>
        <Footer/>
        </>
  )
}

export default Error