import Link from 'next/link'
import Image from 'next/image'

const SocialButton = ({ icon, link }) => {
  return (
    <Link href={link} target="_blank">
      <Image
        src={`${icon}`}
        className="icon-social"
        width={20}
        height={20}
        quality={100}
        alt={`icon ${icon}`}
      />
    </Link>
  )
}
export default SocialButton
