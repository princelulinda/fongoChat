import React from 'react'
import { View } from 'react-native'
import Navbar from '../../composant/Navbar/Navbar'
import card from '../../composant/card/card'
import AddArticleBtn from '../../composant/ButtonADDarticle/AddarticleBtn'
import { auth } from '../../firebaseServises/firebaseConfing/firebase.config'
import PublicationCard from '../../composant/card/card'

export default function Home({navigation}) {
  return (
    <View style={{position:"relative"}}>
      <AddArticleBtn navigation = {navigation}/>
      <PublicationCard/>
    </View>
  )
}
