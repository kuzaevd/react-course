import React, { Component } from 'react';

const myNews = [
  {
    id: 1,
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    id: 2,
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    id: 3,
    author: 'Max Frontend',
    text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
    bigText: 'А евро опять выше 70.'
  },
  {
    id: 4,
    author: 'Гость',
    text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru',
    bigText: 'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
  }
]

class Comment extends Component {

  state = {
    visible: false,
  }

  handleReadMoreClck = (e) => {
    e.preventDefault()
    this.setState({visible: true})
  }

  render() {
    return (
      <div className="comment">
        <p className="comment__author">{this.props.data.author}</p>
        <p className="comment__text">{this.props.data.text}</p>
        {
          !this.state.visible ? <a href="#" onClick={this.handleReadMoreClck} className="link">Подробнее</a> : <p className="comment__text">{this.props.data.bigText}</p>
        }
        
        
      </div>
    )
  } 
}

class News extends Component {

  renderComments = () => {
    let newsTemplate

    if (this.props.data.length) {
      newsTemplate = this.props.data.map(function(item) {
        return (
          <Comment key={item.id} data={item}/>
        )
      })
    } else {
      newsTemplate = <p>Новостей нет</p>
    }

    return newsTemplate
  }

  render() {
    return (
      <React.Fragment>
        {this.renderComments()}
        {
          this.props.data.length ? <p>Всего комменатариев: {this.props.data.length}</p> : null
        }
      </React.Fragment>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>Новости</h3>
        <News data={myNews} />
      </div>
    );
  }
}

export default App;
