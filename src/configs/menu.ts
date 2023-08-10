import { MenuDropType, NavItemType } from '@/types'

const navItem: NavItemType[] = [
  {
    id: 1,
    iconName: 'IconWrite',
    label: '自分の記録',
    link: '/record',
  },
  {
    id: 2,
    iconName: 'IconAchieve',
    label: 'チャレンジ',
    link: '/achieve',
  },
  {
    id: 3,
    iconName: 'IconChat',
    label: 'チャレンジ',
    link: '/achieve',
    bag: 1,
  },
]

const dropMenu: MenuDropType[] = [
  {
    id: 1,
    link: '/record',
    text: '自分の記録',
  },
  {
    id: 2,
    link: '/achieve',
    text: '体重グラフ',
  },
  {
    id: 3,
    link: '/achieve',
    text: '目標',
  },
  {
    id: 4,
    link: '/achieve',
    text: '選択中のコース',
  },
  {
    id: 5,
    link: '/recommend',
    text: 'コラム一覧',
  },
  {
    id: 6,
    link: '/achieve',
    text: '設定',
  },
]

export { navItem, dropMenu }
