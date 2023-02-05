import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
const HeaderStatic = () => (
  <Row gutter={16} style={{width:'30%',marginBottom:'2%'}}>
    <Col span={12}>
      <Card bordered={false}
      >
        <Statistic
          title="Active"
          value={11.28}
          precision={2}

          valueStyle={{
            color: '#3f8600',
              whiteSpace: 'nowrap',

          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}

      >
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{
            color: '#cf1322',
              whiteSpace: 'nowrap'
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
);
export default HeaderStatic;

