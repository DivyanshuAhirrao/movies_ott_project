import React from 'react'
import { Ucard } from './Ucard'
import { Link } from 'react-router-dom'


export const Upcoming = ( { items, title } ) => {
  return (
    <> 
        <section className='upcome'>
          <div className="container">
             <div className="heading flexSB">
                <h1>{title}</h1>
                <Link to='/'>View All</Link>
             </div>
             <div className="content">
                {items.map((item)=> (
                    <Ucard key={item.id} item={item} />
                 ))}
             </div>
          </div>

        </section>
    </>
  )
}
