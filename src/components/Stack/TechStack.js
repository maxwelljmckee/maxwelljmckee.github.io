import React from 'react';
import Fade from 'react-reveal/Fade';

import Title from '../Title/Title';
import TechStackCard from './TechStackCard';


const TechStack = () => {
  const stack = [
    {
      name: 'JavaScript',
      iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png'
    },
    {
      name: 'Python',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png'
    },
    {
      name: 'React',
      iconUrl: 'https://ionicframework.com/docs/assets/icons/logo-react-icon.png'
    },
    {
      name: 'Redux',
      iconUrl: 'https://cdn.iconscout.com/icon/free/png-512/redux-283024.png'
    },
    {
      name: 'Express',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOSxONv0nUfLmpc1GOlkIceqM8MQGu6xS-Q&usqp=CAU'
    },
    {
      name: 'Sequelize',
      iconUrl: 'https://cdn.worldvectorlogo.com/logos/sequelize.svg'
    },
    {
      name: 'Flask',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzyQBAph9cg79kgAt3LTh4PqYNuv9c56IOQ&usqp=CAU'
    },
    {
      name: 'SQLAlchemy',
      iconUrl: 'https://flask-sqlalchemy.palletsprojects.com/en/2.x/_static/flask-sqlalchemy-logo.png'
    },
    {
      name: 'PostgreSQL',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'
    },
    {
      name: 'Heroku',
      iconUrl: 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-07-10/396072065317_f8b9a63ed67ca0368c6e_512.png'
    },
    {
      name: 'Docker',
      iconUrl: 'https://cdn4.iconfinder.com/data/icons/social-network-round-gloss-shine/512/docker-icon_copy.png'
    },
    {
      name: 'Git',
      iconUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
    },
    {
      name: 'HTML5',
      iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png'
    },
    {
      name: 'CSS3',
      iconUrl: 'https://cdn.345tool.com/public/logos/css-formatter-logo.png'
    },
    {
      name: 'Pug',
      iconUrl: 'https://content.nexza.com/stack-items/pug.png'
    },
    {
      name: 'Jinja',
      iconUrl: 'https://ucarecdn.com/cc9f09f8-2cb0-4c4c-9eb9-07e60915c1ea/'
    },
  ]

  return (
    <div className='techstack__container'>
      <Title title='TechStack' />
      <Fade bottom duration={1000} delay={500} distance="30px">
        <div className='techstack__icons'>
          { stack.map(item => {
            return <TechStackCard item={item} />
          })}
        </div>
      </Fade>
    </div>
  )
}


export default TechStack;