import React, { useState }from 'react'
import { Homes } from '../components/homes/Homes'
import { Ucard } from '../components/Upcoming/Ucard'
import { Upcoming } from '../components/Upcoming/Upcoming'
import { upcome } from '../dummydata'
import { Footers } from '../components/Footer/Footers'


export const HomePages = () => {
  const [items, setItems] = useState(upcome)
  return (
    <>
       <Homes /> <br></br>
       <Upcoming items={items} title='Upcomming Movies' />
       <Footers />

    </>
  )
}
