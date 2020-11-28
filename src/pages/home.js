import React from 'react';
import styled from 'styled-components'

const Content = styled.h1`
  font-size: clamp(3rem, 10vw, 5.55555rem);
  line-height: 1.088888888888em;
  letter-spacing: -0.1111111111111111rem;

  p:nth-child(2n) {
    padding-left: 1.2em;
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
          <p>I'm Josep Martins, a digital product designer and <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/josepmartins/'>photograhper</a> currently living in <span>{this.state.icon}</span> Barcelona. </p>
          <p>I build design systems at <a target='_blank' rel="noopener noreferrer" href='https://newrelic.com/'>New Relic</a>. Previously at <a target='_blank' rel="noopener noreferrer" href='https://typeform.com/'>Typeform</a> and <a target='_blank' rel="noopener noreferrer" href='https://8fit.com/'>8fit</a>.</p>
          <p><a target='_blank' rel="noopener noreferrer" href='mailto:jsp.mrtns@gmail.com'>Email me</a> if you would like to talk or work together.</p>
        </Content>
      </Wrapper>
    )
  }
}

export default Home