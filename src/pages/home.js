import React from 'react';
import styled from 'styled-components'

const Content = styled.main`
  font-size: clamp(3rem, 10vw, 5.55555rem);
  line-height: 1.088888888888em;
  letter-spacing: -0.1111111111111111rem;

  p:nth-child(2n) {
    padding-left: 1.2em;
  }

  small {
    font-size: clamp(1rem, 4vw, 2.55555rem);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 0.6666em;
  }

  li {
    display: inline-flex;
  }

  li a {
    display: flex;
    align-items: center;
    margin-right: 0.6666em;
    position: relative;
  }

  li:nth-child(3) a:after{
    content: 'free';
    position: absolute;
    right: 0;
    transform: translateX(100%);
    top: 0;
    font-size: 0.2em;
    border: 1px solid currentColor;
    padding: 0.2em 0.4em;
    line-height: 1;
    border-radius: 50px;
    letter-spacing: initial;
  }

  li:nth-child(4) a:after{
    content: 'not free lol';
    position: absolute;
    right: 0;
    transform: translateX(100%);
    top: 0;
    font-size: 0.2em;
    border: 1px solid currentColor;
    padding: 0.2em 0.4em;
    line-height: 1;
    border-radius: 50px;
    letter-spacing: initial;
  }

  li img {
    border-radius: 50%;
    margin-right: 0.2em;
    display: block;
    width: 0.82em;
    height: 0.82em;
  }
`
const Wrapper = styled.div`
  width: 100%;
  padding: 3vh 2vw 3vh 2vw;
`

class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      icon: undefined,
    };
    this.weatherIcon = {
      Thunderstorm: "⛈",
      Drizzle: "🌧️",
      Rain: "🌧",
      Snow: "🌨",
      Atmosphere: "🌫️",
      Clear: "🌞",
      Clouds: '☁️',
    };
    this.getWeather();
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clear });
    }
  }

  getWeather = async () => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    const response = await api_call.json();
    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
  };

  render (){
    return (
      <Wrapper>
        <Content>
          <p>I'm Josep Martins, a digital product designer and photograhper currently living in <span>{this.state.icon}</span> Barcelona. </p>
          <p>I build design systems at <a target='_blank' rel="noopener noreferrer" href='https://newrelic.com/'>New Relic</a>. Previously at <a target='_blank' rel="noopener noreferrer" href='https://typeform.com/'>Typeform</a> and <a target='_blank' rel="noopener noreferrer" href='https://8fit.com/'>8fit</a>.</p>
          <p>Find me on <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/josepmartins/'>Instagram</a>, <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/josep_martins/'>Twitter</a> or <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/josepmartins/'>Linkedin</a>.</p>
          <br />
          <small>Projects</small>
          <ul>
            <li>
              <a target='_blank' rel="noopener noreferrer" href='https://boringavatars.com/'>
                <img src='https://source.unsplash.com/XUlsF9LYeVk/200x200' />
                Avatars
              </a>
            </li>
            <li>
              <a target='_blank' rel="noopener noreferrer" href='https://www.enrojecerse.com/'>
                <img src='https://source.unsplash.com/2zDw14yCYqk/200x200' />
                Enrojecerse
              </a>
            </li>
            <li>
              <a target='_blank' rel="noopener noreferrer" href='https://unsplash.com/@josepmartins'>
                <img src='https://source.unsplash.com/W5V6n2Sr2F0/200x200' />
                Textures
              </a>
            </li>
            <li>
              <a target='_blank' rel="noopener noreferrer" href='https://gumroad.com/josepmartins'>
                <img src='https://source.unsplash.com/l3-erg8nPRU/200x200' />
                Textures
              </a>
            </li>
          </ul>
        </Content>
      </Wrapper>
    )
  }
}

export default Home