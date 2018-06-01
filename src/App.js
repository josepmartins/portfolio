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
  line-heiht: 4vw;
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
            Trabajo como diseñador de producto en Typeform, mejorando la experiencia de creación de formularios y dando soporte al desarrollo de nuestro sistema de diseño.
          </Text>

          <Text>
            Antes de eso, trabaje como diseñador en 8fit en la fría Berlin durante un año, donde aprendí como el desarrollo de producto móvil es muy distinto al web.
          </Text>

          <Text>
            Mi primer trabajo fue en itnig, como desarrollador frontend en una aceleradora de startups donde trabaje en muchos proyectos con necesidades totalmente diferentes.
          </Text>

          <Text>
            Uno de esos proyectos fue Playfulbet, al que me uni y trabaje durante dos años como frontend y diseñador. Mejoramos toda la estructura, unificamos patrones y mejoramos toda la interacción mientras añadíamos nuevas funcionalidades siempre escuchando el feedback de nuestros usuarios. Una de las mejores experiencias sin duda,  formar parte de un proyecto creado des de 0 con 4 personas hasta crear un producto de éxito.
          </Text>

          <Text>
            Me dejo de rollos, escribid a mi malí si queréis contactar conmigo.
          </Text>

          <Text>
            O si mi instagram si queréis cotillear mi fotos callejeras.
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
