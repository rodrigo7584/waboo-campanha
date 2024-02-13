import Image from 'next/image'

interface SpotlightBlockProps{
  icon: string;
  title: string;
  text: string;
}

const SpotlightBlock = ({ icon, title, text }:SpotlightBlockProps) => {
  return (
    <div className="spotlight-block">
      <Image
        className="icon-block"
        src={icon}
        width={117}
        height={117}
        quality={100}
        alt="detail icon"
      />
      <h3 className="title-block">{title}</h3>
      <p className="text-block">{text}</p>
    </div>
  )
}
export default SpotlightBlock
