import './_styles.less'
import { BackTop, Col, Collapse, Grid, Layout, Row, Space, Typography } from 'antd-msb'
import { UpArrowsOutlined, DownOutlined } from 'msb-icons-svg/lib/src'
import { FacebookIcon, YoutubeIcon, LinkedInIcon } from 'msb-icons-svg/lib/src/other'

const { useBreakpoint } = Grid
const { Panel } = Collapse

const Footer = () => {
  const screens = useBreakpoint()
  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: '50%',
    backgroundColor: 'var(--ant-primary-color)',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center' as const,
  }
  const logo = (
    <div className="logo">
      <a href="/">
        <img
          alt="logo"
          src="https://common-static-files-public.s3.ap-southeast-1.amazonaws.com/design-system/logo_msb.svg"
        />
      </a>
    </div>
  )

  const mobileAccordion = () => (
    <Collapse defaultActiveKey={['1']}>
      <Panel
        header={
          <Space>
            <Typography.Text version={2} block fontWeight="semibold">
              Danh mục
            </Typography.Text>
            <DownOutlined className="icon-down" />
          </Space>
        }
        key="1"
        showArrow={false}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Typography.Text version={2} block type="secondary">
              Về chúng tôi
            </Typography.Text>
          </Col>
          <Col span={12}>
            <Typography.Text version={2} type="secondary">
              Về chúng tôi
            </Typography.Text>
          </Col>
          <Col span={12}>
            <Typography.Text version={2} type="secondary">
              Liên hệ
            </Typography.Text>
          </Col>
          <Col span={12}>
            <Typography.Text version={2} type="secondary">
              Tuyển dụng
            </Typography.Text>
          </Col>
          <Col span={12}>
            <Typography.Text version={2} type="secondary">
              Điều khoản sử dụng
            </Typography.Text>
          </Col>
          <Col span={12}>
            <Typography.Text version={2} type="secondary">
              An toàn bảo mật
            </Typography.Text>
          </Col>
          <Col span={12}>
            <Typography.Text version={2} type="secondary">
              Ngân hàng điện tử
            </Typography.Text>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  )

  return (
    <Layout.Footer>
      <div className="ant-layout-footer-navigation space-my-20">
        <div className="space-mb-32">{logo}</div>
        <Row gutter={[24, 16]}>
          <Col xs={24} sm={24} lg={12}>
            <Space size={16} direction="vertical">
              <Typography.Text version={2} block fontWeight="semibold">
                Liên hệ
              </Typography.Text>
              <Typography.Text version={2} type="secondary" block>
                Ngân hàng TMCP Hàng Hải Việt Nam <br /> Trụ sở chính: 54A Nguyễn Chí Thanh, Quận
                Đống Đa,Hà
              </Typography.Text>
              <Typography.Text version={2} type="secondary" block>
                Nội Tel: (024) 3 771 89 89 <br /> Email: cskhdoanhnghiep@msb.com.vn
              </Typography.Text>
            </Space>
          </Col>
          <Col xs={24} sm={24} lg={6}>
            {!screens.sm ? (
              mobileAccordion()
            ) : (
              <>
                <Typography.Text version={2} block fontWeight="semibold" className="space-mb-16">
                  Danh mục
                </Typography.Text>
                <Space
                  size={16}
                  direction={!screens.sm ? 'horizontal' : 'vertical'}
                  className=""
                  wrap
                >
                  <Typography.Text version={2} block type="secondary">
                    Về chúng tôi
                  </Typography.Text>
                  <Typography.Text version={2} type="secondary">
                    Về chúng tôi
                  </Typography.Text>
                  <Typography.Text version={2} type="secondary">
                    Liên hệ
                  </Typography.Text>
                  <Typography.Text version={2} type="secondary">
                    Tuyển dụng
                  </Typography.Text>
                  <Typography.Text version={2} type="secondary">
                    Điều khoản sử dụng
                  </Typography.Text>
                  <Typography.Text version={2} type="secondary">
                    An toàn bảo mật
                  </Typography.Text>
                  <Typography.Text version={2} type="secondary">
                    Ngân hàng điện tử
                  </Typography.Text>
                </Space>
              </>
            )}
          </Col>
          <Col xs={24} sm={24} lg={6}>
            <Typography.Text block version={2} fontWeight="semibold" className="space-mb-16">
              Mạng xã hội
            </Typography.Text>
            <Space size={!screens.sm ? 8 : 16} direction={!screens.sm ? 'horizontal' : 'vertical'}>
              <Space size={4}>
                <FacebookIcon />
                <Typography.Text version={2} type="secondary" block>
                  FaceBook
                </Typography.Text>
              </Space>
              <Space size={4}>
                <LinkedInIcon />
                <Typography.Text version={2} type="secondary" block>
                  Linked
                </Typography.Text>{' '}
              </Space>
              <Space size={4}>
                <YoutubeIcon />
                <Typography.Text version={2} type="secondary" block>
                  Youtube
                </Typography.Text>
              </Space>
            </Space>
          </Col>
        </Row>
      </div>
      <div className="border-top">
        <div className="ant-layout-footer-navigation space-py-24 ant-layout-footer-copy-right">
          <Typography.Caption
            version={2}
            type="secondary"
            block
            className="ant-layout-footer-copy-right-text"
          >
            Bản quyền © 2021 thuộc về Ngân hàng TMCP Hàng Hải Việt Nam MSB
          </Typography.Caption>
        </div>
      </div>

      <BackTop>
        <div style={style}>
          <UpArrowsOutlined />
        </div>
      </BackTop>
    </Layout.Footer>
  )
}

export default Footer
