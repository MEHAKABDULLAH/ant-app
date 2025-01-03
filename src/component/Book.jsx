import './App.css'
import { Col, Row } from 'antd';
import Destination from './destination.png'
import Payment from './payment.png'
import Car from './car.jpg'
import Card from './card.png'




const Book = ()=>{
    return( 
        <>
        <Row>
      <Col span={16}><div className='easy'>
      <p>Easy and Fast</p>
      <h1>Book your Next Trip <br />In Three Steps</h1><h6><img src={Destination} alt=""/>Best Destination   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, doloribus.</p></h6>
      
      <h6><img src={Payment} alt=""/>Best Destination  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, doloribus</p></h6>
      <h6><img src={Car} alt=""/>Best Destination <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, doloribus</p></h6>
      </div>
      </Col>
      <Col span={8}><div className='card'><img src={Card} alt="" /></div></Col>
    </Row>

    
   
    </>
    )


}
export default Book;