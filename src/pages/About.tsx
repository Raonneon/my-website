import Card from '../components/Card'

function About() {
  return (
    <div>
      <Card title="О себе">
        <p>Я изучаю фронтенд разработку и это мое учебное приложение.</p>
      </Card>

      <Card title="Что я освоил">
        <ul style={{ textAlign: 'left' }}>
          <li>HTML5 и CSS3 (Grid, Flexbox, анимации)</li>
          <li>JavaScript ES6+ и TypeScript</li>
          <li>React (Hooks, компоненты, Context API)</li>
          <li>React Router для навигации</li>
          <li>Git и GitHub</li>
          <li>Работа с API</li>
          <li>CSS Modules</li>
          <li>Деплой на Vercel</li>
        </ul>
      </Card>
    </div>
  )
}

export default About