export default function Movie({ image, tit, smry, genres }) {
  return <div>
    <img src={image} alt={tit} />
    <h2>{tit}</h2>
    <p>{smry}</p>
    <ul>
      <li>{genres.map((g) => (
        <li key={g}>{g}</li>
      ))}</li>
    </ul>
  </div>
}
