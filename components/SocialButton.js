import Link from 'next/link'
import Image from 'next/image'

const SocialButton = ({ socialIcon, link }) => {
  return (
    <Link href={link} target="_blank">
      <Image
        src={`${socialIcon}`}
        className="icon-social"
        width={20}
        height={20}
        quality={100}
        alt={`icon-${socialIcon}`}
      />
    </Link>
  )
}
export default SocialButton
