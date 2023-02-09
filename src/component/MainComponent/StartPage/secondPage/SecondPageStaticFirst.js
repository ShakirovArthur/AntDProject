import { LikeOutlined } from '@ant-design/icons';
import { Col, Row, Statistic } from 'antd';
const SecondPageStaticFirst = () => (
    <Row gutter={16} style={{background:'white',height:'180px',fontSize:'100%'}}>
        <Col span={12}>
            <Statistic title="Положительных отзывов" value={1128} prefix={<LikeOutlined />} style={{padding:'20%',fontSize:'1.5em'}}/>
        </Col>
        <Col span={12}>
            <Statistic title="Подписок после посещения" value={93} suffix="/100" style={{padding:'20%'}}/>
        </Col>
    </Row>
);
export default SecondPageStaticFirst;