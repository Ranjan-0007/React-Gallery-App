const Cards = (props) => (
  <div>
    <a href={props.elm.url} target="_blank" rel="noreferrer">
      <img
        className='w-40 h-44 object-cover rounded-md rounded-2xl mb-4'
        src={props.elm.download_url}
        alt={props.elm.author}
      />
      <h2 className='text-center text-lg text-white'>{props.elm.author}</h2>
    </a>
  </div>
)

export default Cards