import Card from '../components/Card'

function Home() {
  return (
    <div>
      <Card title="Главная страница">
        <p>Добро пожаловать в мое React приложение!</p>
        <p>Используй навигацию выше для перехода между страницами.</p>
      </Card>
      
      <Card title="О проекте">
        <p>Это учебный проект для изучения фронтенд разработки.</p>
        <ul>
          <li>React + TypeScript</li>
          <li>React Router</li>
          <li>Context API</li>
          <li>CSS Modules</li>
        </ul>
      </Card>
    </div>
  )
}

export default Home