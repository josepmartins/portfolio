import React from 'react'
import styled from 'styled-components'
import Content from '../components/content'
import CaseHeader from '../components/case-header'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 5vh auto;
  padding: 0 3.75vw;
`

const ContentWrapper = styled.div`  
  @media (min-width: 720px) {    
    width: calc((8 * (100% / 12)) - 1px);
  }
`

const Playfulbet = () => (
  <Wrapper>
    <CaseHeader 
      title='Playfulbet'
      label='Design & Front End'
      imgSrc={require('../assets/images/playfulbet/header-3.jpg')}
    />
    <ContentWrapper>
      <Content>
        Playfulbet is a social gaming platform where users can play into real sports events between their friends. The platform aimed on making the whole experience entertaining and fun while playing down the final result.
      </Content>
      <Content kind='p2'>
        <i>Users should not feel they are just playing. They should feel they are part of a community where they could interact with more people with similar interests.</i>
        <br />
        <br />
        — Playfulbet brand guildelines
      </Content>
      <Content>
        The platform was built as an <a target='_blank' rel="noopener noreferrer" href='https://web.archive.org/web/20131028165349/http://playfulbet.com/competiciones/liga-bbva-16'>MVP</a> that turned out very successful - gained more than 10k users after 6 weeks- so the goal was to redesign and build the foundations of the platform to first, make it usable in every device, second, modular and scalable to add more functionalities and third to start monetizing the platform.
      </Content>
      <Content kind='h2' tag='h2'>
        My Role
      </Content>
      <Content>
        My role was all hands in both design and frontend development. I work first on a new structure for the main navigation, (taking into account future features) and defined a clear flow from signup to activation*. 
      </Content>
      <Content kind='p2'>
        *Activation was an important Key metric at Playulbet at that time. The platform offered a freemium service so in order to increase retention and referral metrics it was crucial to help new users to reach their first 'aha' moment and find success within the product early after the signup.
      </Content>
    </ContentWrapper>
    <Content kind='h2' tag='h2'>
      First Steps
    </Content>
    <Content>
      I created a new UI kit, structured the navigation, built a new responsive layout and introduced a single app experience within the first 2 months.
    </Content>
    
    <img loading="lazy" src={require('../assets/images/playfulbet/ui-kit.jpg')}/>
    <Content kind='p2'>
      UI Guide with typography, colors and atomic elements
    </Content>
    
    <img loading="lazy" src={require('../assets/images/playfulbet/dashboard.jpg')}/>
    <Content kind='p2'>
      Home dashboard page
    </Content>
        
    <ContentWrapper>
      <Content>
        The platform went viral after the redesign (some influencers and youtubers mentioned us) and the platform went from 10K sign up users to more than 150K in less than a month.
      </Content>
      <Content>
        Acquisition metrics went higher than our first estimations. We also increased the activation with the new layout structure and some basic features (search by event, events ordered by popularity, filters and a better performance) so the increase of Retention and Monetization metrics became our next important milestone.
      </Content>
      <Content>
        For those reasons, over the next year an a half we worked on new features and many different challenges.
      </Content>
    </ContentWrapper>

    <Content kind='h2' tag='h2'>
      Chat
    </Content>
    <Content>
      It was very important for us to get early feedback from users to understand what they were looking for, what was missing, what was useless and what could have been improved. We built an internal chat on each event and dedicated some time every day to ask our users. The feedback we got from it gave us direction on what to build, improve or prioritize.
    </Content>
    <Content>
      Later on, and when the number of users scaled, we used third parties tools (<a target='_blank' rel="noopener noreferrer" href='https://www.hotjar.com/'>Hotjar</a> and <a target='_blank' rel="noopener noreferrer" href='https://www.typeform.com/'>Typeform</a> mainly) to understand the behavior and get feedback from them.
    </Content>

    <Content kind='h2' tag='h2'>
      Custom Dashboard
    </Content>
    <Content>
      With the dashboard panel users could see the next recommended events (based on the last events played, users and friends preferences, etc), check their events in play, activity and pending results.
    </Content>
    <img loading="lazy" src={require('../assets/images/playfulbet/custom-dashboard.jpg')}/>

    <Content kind='h2' tag='h2'>
      Gamification 
    </Content>
    <Content>
      We introduced a basic gaming experience based on levels to increase retention metrics as well.
      Levels based on number of played/won events, achievements (events played on certain sports or leagues or special events such as Football world cup), players profile, user statistics or notifications section to name a few.
    </Content>
    <img loading="lazy" src={require('../assets/images/playfulbet/gamification.jpg')}/>
    <img loading="lazy" src={require('../assets/images/playfulbet/levels.jpg')}/>

    <Content kind='h2' tag='h2'>
      Advertising
    </Content>
    <Content>
      Once we improved the retention metrics we jumped into adverstising as the main channel of monetization. We were very careful on what and where to show it as we wanted to keep the same experience along the plaftorm. The best results came from encouraging users to get potins by watching short promotional videos or playing sponsored minigames.
    </Content>
    <img loading="lazy" src={require('../assets/images/playfulbet/ads.jpg')}/>

    <Content kind='h2' tag='h2'>
      Mobile app
    </Content>
    <img loading="lazy" src={require('../assets/images/playfulbet/mobile.jpg')}/>

    <Content kind='h2' tag='h2'>
      Favourite team
    </Content>
    <Content>
      A common pattern after the signup was looking for a very specific match in a very specific competition. Normally that competition would match the country were users were connected. People from Barcelona are likely to play with their friends on F.C.Barcelona or R.C.D Espanyol events than the Chinese Superleague competition.
    </Content>
    <Content>
      We built a system to allow mark competitions and teams as Favourites to give users more control and personalization over the platform. We automatically detected the locale on client side and recommended matches, teams and competitions on the dashboard when there were no teams marked (empty state). 
    </Content>
    <Content>
      With this new feature we gained on retention as users could have a list of their prefered teams to check the status and in activation too, as they find more value in playing in with known competitions and teams.      
    </Content>
    <img loading="lazy" src={require('../assets/images/playfulbet/teams-1.jpg')}/>
    <img loading="lazy" src={require('../assets/images/playfulbet/teams-2.jpg')}/>

    <Content kind='h2' tag='h2'>
      Interactions
    </Content>
    <Content>
      As the goal was to build a paltform were users will play between friends, not only the UI was meant to be friendly but the interaction with the elements as well. 
    </Content>
    <Content>
      Buttons were big and colorful and so the interaction with them (similar to a arcade machines or video games). Transition in between pages were important too
    </Content>
    <video autoPlay loop playsInline width="100%" src={require('../assets/images/playfulbet/video-1.mp4')} />

    <ContentWrapper>  
      <Content kind='h2' tag='h2'>
        Learnings
      </Content>
      <Content>
        The power of a Modular and Solid UI system.
      </Content>
      <Content kind='p2'>
        We were moving really fast. In addition to improving what existed, we were constantly working on new features like the ones mentioned above, rankings, new games, filters, team and competitions favs among others. 
      </Content>
      <Content kind='p2'>
        As the fronted architecture was solid and the UI components were built to scale fast, we could implement new features or improve others very fast without the need of prototype them first. Our prototypes where real code pushed in production to certain users (at some point we had a small DB of users who wanted to test beta features) and that gave us early insights in beforehand to move forward with some ideas or not.
      </Content>

      <Content>
        Anti Scam restrictions
      </Content>
      <Content kind='p2'>
        Bad guys are everywhere and specially if there are prices involved in it. We applied restrictions on sign up, re spawns, logic to detect fraudulent events or referrals, to make sure we weren't in front of generated bots or fake accounts playing in between each other to take profit of the platform.
      </Content>

    </ContentWrapper>
  </Wrapper>    
)

export default Playfulbet