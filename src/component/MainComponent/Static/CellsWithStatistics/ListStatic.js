import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
const formatter = (value) => <CountUp end={value} separator="," />;
const ListStatic = () => (
  <Row gutter={16} style={{background:'white',width:'280px',borderRadius:'10px',marginLeft:'2%',height:"113px"}}>
    <Col span={12}>
      <Statistic title="ListItem" value={2893} formatter={formatter} style={{padding:'20px'}}/>
    </Col>
    <Col span={12}>
      <Statistic title="Balance" value={893} precision={2} formatter={formatter} style={{paddingTop:'20px'}} />
    </Col>
  </Row>
);
export default ListStatic;