import React from 'react'
import './Home.css'
import { Nav } from './Nav'
function Home() {
  return (
    <div>
        <Nav></Nav>
        <section className='Hero'>
        <p className='first'>The Future of Task Management</p>
        <h1 className='hero-head'>Discover the new era of Project Management with pro Task Management</h1>
        <p className='hero-para'>Streamline your Task Management with our powerfull task Management tools</p>
        <button className='primary'>Get Started</button>
        <button className='secondary'>SignUp for Free</button>
        </section>
        <section className='main'>
            <h1 className='main-head'><span className="orange">Save time</span> and Money with all project Easily</h1>
            <div className='main-div1'>
                <h3>Project Management can easily</h3>
                <p>Project Management plays a pivotal role in orchestrating the successful execution of complex initiatives.</p>
            </div>
            <div className='main-div2'>
                <h3>Project Management can easily</h3>
                <p>Project Management plays a pivotal role in orchestrating the successful execution of complex initiatives.</p>
            </div>
            <div className='main-div3'>
                <h3>Project Management can easily</h3>
                <p>Project Management plays a pivotal role in orchestrating the successful execution of complex initiatives.</p>
            </div>
            <div className='main-div4'>
                <h3>Project Management can easily</h3>
                <p>Project Management plays a pivotal role in orchestrating the successful execution of complex initiatives.</p>
            </div>
        </section>
        <section>
            <div>
                <h1>Get your 7 day's free trial</h1>
                <form>
                    <input></input>
                    <button>Submit</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Home