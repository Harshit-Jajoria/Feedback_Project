import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../shared/Card'

const AboutPage = () => {
  return (
    <Card>
        <div className="about">
            <h1>About this Project</h1>
            <p>
              This this my first react project 
            </p>
            <p>version 1.0.0</p>
            <Link to={'/'}>Back to HomePage </Link>
        </div>

        </Card>
  )
}

export default AboutPage