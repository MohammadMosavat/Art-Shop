interface IQuestion {
    title:string,
    desc:string
}
const QComponent = (props:IQuestion) => {
    return(
        <div className="p-4 rounded-lg third-shadow drop-shadow bg-[var(--sec-color-white)]">
        <p className="mb-4  primary-font font-bold">
          {props.title}
        </p>
        <p className="mb-12  text-[var(--third-color-black)] sec-font">
          {props.desc}
        </p>
      </div>
    )
}

export default QComponent