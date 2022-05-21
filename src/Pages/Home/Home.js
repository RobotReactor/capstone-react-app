import React from 'react'
import LargeContainer from '../../Components/MainScreen/Containers/LargeContainer'
import MediumContainer from '../../Components/MainScreen/Containers/MediumContainer'
import SmallContainer from '../../Components/MainScreen/Containers/SmallContainer'
import MainScreen from '../../Components/MainScreen/MainScreen'
import LargeSection from '../../Components/MainScreen/Sections/LargeSection'
import SmallSection from '../../Components/MainScreen/Sections/SmallSection'

const Home = () => {
  return (
    <MainScreen>
        <MediumContainer>
            <SmallSection></SmallSection>
            <SmallSection></SmallSection>
            <SmallSection></SmallSection>
        </MediumContainer>
        <LargeContainer>
            <SmallSection>Stuff Goes Here</SmallSection>
            <SmallSection></SmallSection>
            <SmallSection></SmallSection>
            <SmallSection><h1>HI</h1></SmallSection>
        </LargeContainer>
        <SmallContainer>
            <LargeSection><h6>Short Stuff Goes Here</h6></LargeSection>
            <SmallSection></SmallSection>
            <SmallSection></SmallSection>
        </SmallContainer>
    </MainScreen>
   
  )
}

export default Home