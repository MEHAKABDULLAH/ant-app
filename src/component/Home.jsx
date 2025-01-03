// import './Navbar.css';
import{ Row, Col }from'antd';
import { Button } from 'antd';
import travel from './smiley-woman-posing-her-baggage.png'
import './App.css'


const Home =() =>{
  

    
return(
   <>
  <Row>
      <Col id='half'    // On mobile, take full width
            span={12}><b>Best Destination Around The World</b> <br />
      <h1>Travel,enjoy <br />and live a new <br />and full life</h1>
      <p>built wicket longer admire a batren vanity its self do in it. <br />preffered  to spotmen it  engrosseed  listening .  
      <br />sell they west hard for the.</p> <br />
      <Button id='find' type="">Find out more</Button>     <Button type="">Play demo</Button>
      
      </Col>
      <Col id='full' span={12}><img id='travel' src={travel} alt=""/></Col>
    </Row>
    </>
)

}
export default Home;