import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Card from './Components/Card'
import List from './Components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="row" style={{gap : 40}}>
        <div>

          <Card
            Img="./srcc/woods.jpg"
            width={900}
            Height={700 + "px"}
            Title={"TITLE HEADING"}
            Date={"Title description, April 7, 2014"}
            Text={"Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."}
            Display={"Flex"}
            Comments={"0"}
          />
           <Card
            Img="./srcc/bridge.jpg"
            width={900}
            Height={700 + "px"}
            Title={"BLOG ENTRY"}
            Date={"Title description, April 2, 2014"}
            Text={"Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."}
            Display={"Flex"}
            Comments={"2"}
            
          />
        </div>
        <div>
        <Card
            Img="./srcc/avatar.jpg"
            width={400}
            Height={450 + "px"}
            Title={"My Name"}
            Text={"Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you."}
            Display={"none"}
            Comments={"2"}
          />
          <List
          Width={400}
          Height={420}
          Img={"none"}
          Display
          Tag={"Popular Posts"}
          />
          <List
          Width={400}
          Height={300}
          Img={"flex"}
          Display={"none"}
          Tag={"Tags"}
          />

        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
