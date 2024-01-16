import Image from 'next/image'

const SpotlightBlock = ({ icon, title, text }) => {
  return (
    <div className="spotlight-block">
      <Image className="icon-block" src={icon} width={117} height={117} quality={100} alt="" />
      <h4 className="title-block">{title}</h4>
      <p className="text-block">{text}</p>
    </div>
  )
}
export default SpotlightBlock
