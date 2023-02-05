import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';

const formatter = (value) => <CountUp end={value} separator="," />;

const UsersStatic = () => (
  <Row gutter={16} style={{background:'white',width:'350px',borderRadius:'10px',marginLeft:'1%',height:"113px"}}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} formatter={formatter} style={{padding:'20px'}}/>
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} style={{paddingTop:'20px'}} />
    </Col>
  </Row>
);
export default UsersStatic;