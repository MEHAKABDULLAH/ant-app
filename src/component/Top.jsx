import './App.css'
import Rome from './rome.jpg'
import Erope from './urope.jpg'
import Uk from './uk.jpg'
import{ Card,Col,Row }from'antd';




 const Top = () => {
return (


<>
    <div className='service'>
<Row id='inline' gutter={16}>
    <Col span={8}>
      <Card >
       <img src={Rome} alt="" className='img' />
       <p className='p' >Rome ,Italy    <b>5.2$</b></p>
       <h6 > // 10 day trip</h6>
      </Card>
    </Col>
    <Col span={8}>
      <Card >
      <img src={Uk} alt="" className='img' />
      <p className='p' >London,uk  <b>4.2$</b></p>
      <h6>/ / 12 day trip</h6>
      </Card>
    </Col>
    <Col span={8}>
      <Card ><img src={Erope} alt="" className='img' />
      <p className='p' >Full Europe   <b>15.2$</b></p>
      <h6> // 15 day trip</h6>
      </Card>
    </Col>
    </Row>
</div></>
)



 }
 export default Top;