import Link from 'next/link'
import Image from 'next/image'

interface SocialButtonProps{
  icon: string;
  link: string;
}

const SocialButton = ({ icon, link }:SocialButtonProps) => {
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
