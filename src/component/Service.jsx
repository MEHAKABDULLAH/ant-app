import './App.css';
import Antena from './antena.png'
import Aero from './areoplane.jpg'
import Mike from './mike.jpg'
import Setting from './setting.png'

import{ Card,Col,Row }from'antd';

const Service = ()=>{


return(
<> <br /><br />
<div className='service'><p>CATEGORY</p>
<h2>We Offer Best Service</h2></div> <br />
<Row id='inline' gutter={16}>
    <Col span={6}>
      <Card >
        <h6>Calculated weather</h6>
        <p>Are you looking for a specific type of weather  data (temperature, humidity, precipitation)?</p>
       <img src={Antena} alt="" />
      </Card>
    </Col>
    <Col span={6}>
      <Card >
      <h6>Best flight</h6><p>Are you looking for travel information, flights, or something else?</p>
   <img src={Aero} alt="" />
      </Card>
    </Col>
    <Col span={6}>
      <Card >
      <h6>Local events</h6>
      <p>Is it related to something specific, like aviation, music (microphones), or another topic?</p>
       <img src={Mike} alt="" />
      </Card>
    </Col>
    <Col span={6}>
      <Card >
      <h6>Costumization</h6>
      <p>Customizing cars, bikes, or airplanes (e.g., paint jobs, interiors).</p>
    <img src={Setting} alt="" />
      </Card>
    </Col>
  </Row>
  </>
);
}

export default Service;