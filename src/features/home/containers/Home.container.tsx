import Bag from "@/components/Bag"
import Button from "@/components/Button"
import CardColumn from "@/components/CardColumn"
import CardPhoto from "@/components/CardPhoto"
import CardRecord from "@/components/CardRecord"
import Icon from "@/components/Icon"
import NavItem from "@/components/NavItem"
import ProcessCircle from "@/components/ProcessCircle"
import ShapeHexagon from "@/components/ShapeHexagon"

const HomeContainer = () => {
  return (
    <>
        <div className="font-bold p-4 bg-gradient-to-r from-primary-300 to-primary-400">自分の記録
    </div>
    <Button  className="mt-6">記録をもっと見る</Button>
    <ShapeHexagon iconName="IconChop" title="Morning" />
    <Icon name="IconAchieve" />
    <Bag count={1}>
      <Icon name="IconChat" />
    </Bag>
    <div className="my-2 bg-slate-700">
      <NavItem iconName="IconChat" link="/" label="お知らせ" />
    </div>
    <div className="grid grid-cols-3">
    <CardPhoto  time="05.21.Morning" imageUrl="./src/assets/images/m01.jpg"/>
    <CardRecord imageUrl="./src/assets/images/MyRecommend-1.jpg" title="BODY RECORD" subTitle="自分のカラダの記録" />
    <CardColumn imageUrl="./src/assets/images/column-1.jpg" time="2021.05.17   23:25" tittle="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…" subTitle="#魚料理  #和食  #DHA" />
    </div>
    <ProcessCircle currentPercent={92.5} />
    </>

  )
}

export default HomeContainer