export const GifItem = ( { title, url, id } ) => {
  const clickFunction = () => {
    console.log('some click');
    
  }
  return (
    <div onClick={clickFunction} className="card">
        <img src={ url } alt={ title} />
        <p>{ title }</p>
    </div>
  )
}
