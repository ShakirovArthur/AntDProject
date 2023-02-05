import { LikeOutlined } from '@ant-design/icons';
import { Col, Row, Statistic } from 'antd';
const FeedbackStatic = () => (
  <Row gutter={16} style={{background:'white',borderRadius:'10px',width:'330px',height:'113px',marginLeft:'2%'}}>
    <Col span={12}>
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} style={{padding:'20px'}} />
    </Col>
    <Col span={12}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" style={{padding:'20px'}}/>
    </Col>
  </Row>
);
export default FeedbackStatic;