const Card = ({ id, name, src, }) => {
    return (
      <div
        className='card mb-4 shadow-sm mx-auto'
        style={{ width: '18rem' }}
      >
        <img
          className='card-img-top w-100'
          src={src}
          alt={name}
          style={{ height: '18rem' }}
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
        </div>
      </div>
    )
  }
  
  export default Card
  