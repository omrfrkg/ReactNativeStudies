//rnfs
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../components/Information.js'

export default function CoursesInformationScreen() {
  return (
    <ScrollView>
      <Information title='C# Eğitimi' imageSource = {require('../../assets/c#.png')} desc="Kapsamlı C# Eğitimi"></Information>
      <Information title='Asp.Net Eğitimi' imageSource = {require('../../assets/asp_net.jpg')} desc="Kapsamlı Asp.Net Eğitimi"></Information>
      <Information title='C Eğitimi' imageSource = {require('../../assets/c.png')} desc="Kapsamlı C Eğitimi"></Information>
      <Information title='Java Eğitimi' imageSource = {require('../../assets/java.png')} desc="Kapsamlı Java Eğitimi"></Information>
      <Information title='Kotlin Eğitimi' imageSource = {require('../../assets/kotlin.jpeg')} desc="Kapsamlı Kotlin Eğitimi"></Information>
      <Information title='React Native Eğitimi' imageSource = {require('../../assets/react_native.png')} desc="Kapsamlı React Native Eğitimi"></Information>
      <Information title='SQL Eğitimi' imageSource = {require('../../assets/sql.jpg')} desc="Kapsamlı SQL Eğitimi"></Information>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})