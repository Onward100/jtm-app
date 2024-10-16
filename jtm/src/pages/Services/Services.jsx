import React from 'react'
import ServiceHero from '../../components/servicesComponents/ServiceHero'
import Adverts from '../../components/servicesComponents/Adverts'
import Consulting from '../../components/servicesComponents/Consulting'
import DigitalService from '../../components/servicesComponents/DIgitalService'
import ContentCreation from '../../components/servicesComponents/ContentCreation'
import Educational from '../../components/servicesComponents/Educational'
import Event from '../../components/servicesComponents/Event'
import InternationalOutreach from '../../components/servicesComponents/InternationalOutreach'



const Services = () => {
  return (
    <div className='space-y-10 bg-black'>
      <ServiceHero/>
      <Adverts/>
      <Consulting/>
      <DigitalService/>
      <ContentCreation/>
      <Educational/>
      <Event/>
      <InternationalOutreach/>
    </div>
  )
}

export default Services
