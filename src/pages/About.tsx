function About() {
  return (
    <div className="card">
      <h1>📖 О себе</h1>
      <p>Я изучаю фронтенд разработку и это мое учебное приложение.</p>
      <h3>Что я освоил:</h3>
      <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '1rem auto' }}>
        <li>HTML5 и CSS3</li>
        <li>JavaScript ES6+</li>
        <li>React и TypeScript</li>
        <li>Git и GitHub</li>
        <li>Работа с API</li>
      </ul>
    </div>
  )
}

export default About