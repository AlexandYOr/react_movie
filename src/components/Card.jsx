export function Card(props) {
    const {data} = props
    const {Title, Year, imdbID, Type, Poster} = data
    return (<div className="card">
    <div className="card-image-wrapper waves-effect waves-block waves-light">
      <img className="card-image activator" src={Poster}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{Title}</span>
      <div className="card-description">
        <p>{Type}</p>
        <p>{Year}</p>
        </div>
    </div>
  </div>) 
  
}