import { Button, Header as HeaderMsb, MenuProps } from 'antd-msb'
import classNames from 'classnames/bind'
import { CardCreditOutlined, ContactCenterOutlined } from 'msb-icons-svg/lib/src/icons'
import { Link } from 'react-router-dom'

import styles from './_header.module.less'

const cx = classNames.bind(styles)

function Header() {
  const items: MenuProps['items'] = [
    {
      label: <Link to={'/demo1'}>Demo 1</Link>,
      key: 'demo1',
    },
    {
      label: <Link to={'/demo2'}>Demo 2</Link>,
      key: 'demo2',
    },
    {
      label: 'Các sản phẩm thẻ',
      key: 'card-products',
      icon: <CardCreditOutlined style={{ fontSize: 24, verticalAlign: 'middle' }} />,
      children: [
        {
          label: 'MSB mDigi',
          key: 'mDigi',
        },
        {
          label: 'MSB Super Free',
          key: 'super-free',
        },
      ],
    },
    {
      label: 'Trung tâm hỗ trợ',
      key: 'support-center',
      icon: <ContactCenterOutlined style={{ fontSize: 24, verticalAlign: 'middle' }} />,
      children: [
        {
          label: 'Câu hỏi thường gặp',
          key: 'question',
        },
        {
          label: 'Gọi tổng đài 19001088',
          key: 'switchboard',
        },
      ],
    },
  ]

  const btnActions = (
    <>
      <Button type="primary" ghost>
        Yêu cầu tư vấn
      </Button>
    </>
  )

  return (
    <div className={cx('header-wrap')}>
      <HeaderMsb menuItems={items} btnActions={btnActions} />
    </div>
  )
}

export default Header
