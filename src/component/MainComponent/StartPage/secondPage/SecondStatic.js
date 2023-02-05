import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
const formatter = (value) => <CountUp end={value} separator="," />;
const SecondPageStaticTwo = () => (
    <Row gutter={16} style={{background:'white',width:'35%',height:'180px'}}>
        <Col span={12}>
            <Statistic title="Активных пользователей в данный момент" value={112893} formatter={formatter} style={{padding:'15%'}} />
        </Col>
        <Col span={12}>
            <Statistic title="Активных пользователей в день" value={112893} precision={2} formatter={formatter} style={{padding:'15%'}} />
        </Col>
    </Row>
);
export default SecondPageStaticTwo;