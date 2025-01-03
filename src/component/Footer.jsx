import './App.css'
import { Col, Row } from 'antd';
import { FacebookFilled, InstagramFilled , TwitterCircleFilled   } from '@ant-design/icons';
const Footer =()=>{
    return(
<>
<Row justify="space-between">
      <Col span={4}><h2>Jad<span>oo</span></h2></Col>
      <Col span={4}><h6>Company</h6><p className='a'><br />About <br />Career <br />Mobile</p></Col>
      <Col span={4}><h6>Contact</h6><p className='a'> <br />Help FAQ? <br />Services <br />Affilate</p> </Col>
      <Col span={4}> <br /><FacebookFilled /> <InstagramFilled /> <TwitterCircleFilled /><p className='a'>Discover Our App <br />Thankyou!</p> <br /></Col>
    </Row></>
    )

}
export default Footer;
