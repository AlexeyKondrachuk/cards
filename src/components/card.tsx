
interface Props {
    children?: React.ReactNode,
    img?: string
}

const Img: React.FC<Props> = ({img}) => img ? <img src={img} className="card-img-top" alt="Card" /> : null;


export default function Card ({children, ...props} :Props) {
    return (
      <div className="card text-left m-4" style={{width: '18rem'}}>
        <Img img={props.img} />
        <div className="card-body">
          {children}
        </div>
      </div>
    )
  }