import { LikeOutlined } from '@ant-design/icons';
import { Col, Row, Statistic } from 'antd';
const SecondPageStaticFirst = () => (
    <Row gutter={16} style={{background:'white',width:'35%',height:'180px',marginLeft:'5%'}}>
        <Col span={12}>
            <Statistic title="Положительных отзывов" value={1128} prefix={<LikeOutlined />} style={{padding:'20%'}}/>
        </Col>
        <Col span={12}>
            <Statistic title="Подписок после посещения" value={93} suffix="/ 100" style={{padding:'20%'}}/>
        </Col>
    </Row>
);
export default SecondPageStaticFirst;