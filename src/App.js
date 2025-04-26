import React from 'react';
import Header from './components/header.jsx'
import Profile from './components/profile.jsx'; 

export default function App() {  
  return (
    <>
    <Header/>
      <Profile name="Sadhiesh_Krishnan M" image="myimage.jpg" follow={200} />
      <Profile name="Mari Muthu M" image="person1.jpeg" follow={320} />
      <Profile name="Gokila" image="person2.jpeg" follow={920} />
      <Profile name="babu raj" image="person3.jpeg" follow={520} />
      <Profile name="deepesk kumar" image="person4.jpeg" follow={580} />
      <Profile name="ari haran" image="person5.jpeg" follow={320} />
    </>
  );
}
