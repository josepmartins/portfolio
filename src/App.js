import React, { Component } from 'react'
import styled from 'styled-components'

const BaseStyles = styled.div`
`

const Wrapper = styled.div`
  margin: 10vh 7vw;
`

const Text = styled.div`
  margin-bottom: 5vh;
  font-size: 5vw;
  line-height: 6vw;
`

class App extends Component {
  render () {
    return (
      <BaseStyles>
        <Wrapper>
          <Text>
            Hola!
          </Text>

          <Text>
            Mi nombre es Josep, soy diseñador de producto y actualmente resido en Barcelona.
          </Text>

          <Text>
            Nunca me ha gustado especializarme en nada y por eso me encanta aprender cosas nuevas y adquirir otras habilidades de manera autodidacta.
          </Text>

          <Text>
            Trabajo como diseñador de producto en <a target='_blank' href='http://www.typeform.com'>Typeform</a>, mejorando la experiencia de creación de formularios y dando soporte al desarrollo de nuestro sistema de diseño.
          </Text>

          <Text>
            Antes de eso, trabajé como diseñador en <a target='_blank' href='http://www.8fit.com'>8fit</a>, en la fría Berlin, durante un año, donde aprendí cómo de diferente es el desarrollo de producto movil respecto al de web.
          </Text>

          <Text>
            Mi primer trabajo fue en <a target='_blank' href='http://www.itnig.net'>itnig</a>, como desarrollador frontend en una aceleradora de startups donde trabajé en proyectos con necesidades totalmente diferentesde negocio y producto.
          </Text>

          <Text>
            Uno de esos proyectos fue <a target='_blank' href='http://www.playfulbet.com'>Playfulbet</a>, al que me uní y trabaje durante dos años como frontend y diseñador.
          </Text>

          <Text>
            Mejoramos la estructura, unificamos patrones e interacción a la vez que añadíamos nuevas funcionalidades, siempre escuchando el feedback de nuestros usuarios.
          </Text>

          <Text>
            Una de las mejores experiencias que he vivido, sin duda, formar parte de un proyecto de éxito creado des de 0 con 4 personas y mucha ilusión.
          </Text>

          <Text>
            Si queréis hablar o tomar un café, podéis escribirme <a target='_blank' href='mailto:jsp.mrtns@gmail.com'>aquí</a> o cotillear mis fotos en <a target='_blank' href='http://www.instagram.com/josepmartins'>Instagram</a>.
          </Text>

          <Text>
            <span>✌</span>
          </Text>
        </Wrapper>
      </BaseStyles>
    )
  }
}

export default App
