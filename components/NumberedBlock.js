const NumberedBlock = ({ number, title, text }) => {
  return (
    <div className="numbered-block">
      <div className="icon-numered-block">{number}</div>
      <h4 className="title-numered-block">{title}</h4>
      <p className="text-numered-block">{text}</p>
    </div>
  )
}
export default NumberedBlock
