interface NumberedBlockProps {
  number: string;
  title: string;
  text: string;
}

const NumberedBlock = ({ number, title, text }: NumberedBlockProps) => {
  return (
    <div className="numbered-block">
      <div className="icon-numered-block">{number}</div>
      <h3 className="title-numered-block">{title}</h3>
      <p className="text-numered-block">{text}</p>
    </div>
  )
}
export default NumberedBlock
