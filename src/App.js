import Logo from "./Components/Logo/Logo"
import TitleForm from "./Components/TitleForm/TitleForm"
import './App.css';
import React from "react";

class App extends React.Component {

  constructor() {
    super ();
    this.state = {
      input: '',
      score: ''
    }

  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }
  
  onButtonChange = () => {
    console.log(this.state)
    fetch('http://34.135.115.19/predict', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response =>
      this.setState({score: response.score}))
    .catch(err => console.log(err))
  }

  scoreTeller = () => {
    if (this.state.score) {
      return((this.state.score + "점입니다."))
    }
    return ("구독 좋아요 부탁드립니다~")
  }

  render(){
    return (
      <div className="App white">
          <Logo />
          <h1 className="white">유튜브 제목 퀄리티 예측 AI</h1>
          <TitleForm onInputChange = {this.onInputChange} onButtonChange = {this.onButtonChange}/>
          <h3>당신의 제목의 점수는?</h3>
          <p>{this.scoreTeller()}</p><br/>
          <a className="white" href = "https://www.youtube.com/@user-zm1tj9mq1f/about">
            크래프트맨 멘탈리티 채널 바로가기
          </a><br/><br/>
          <p>이 인공지능을 만들기 위해 사용된 키워드</p>
          <p>"컴퓨터", "인공지능", "프로그래밍", "파이썬", "웹개발", "자바스크립트", "해킹", "독서", "일등석"</p>
          <p>"소프트웨어", "컴퓨터 엔지니어링", "자바", "리액트", "소프트웨어 엔지니어링", "데이터 과학", "버트"</p>
          <p> "데이터 사이언스", "머신러닝", "딥러닝", "텐서플로우"</p>
      </div>
    );
  }
  
};

export default App;
