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

const Screen = styled.div`
  width: 100%;
  height: 90vh;
  margin-bottom: 15vh;
  background-color: #ececec;
`


const Playfulbet = () => (
  <Wrapper>
    <CaseHeader 
      title='Playfulbet'
      label='Design & Front End'
      imgSrc={require('../assets/images/playfulbet/header-2.jpg')}
    />
    <ContentWrapper>
      <Content>
        Playfulbet is a social gaming platform where users can play into sports events between their friends. The main idea was to not focus on the sport event and the outcome but making the experience more entertaining and fun being able to challenge your friends.
      </Content>
      <Content kind='p2'>Users don’t feel they are just playing, they feel they are part of a community where they can interact with more people who have similar interests.</Content>
      <Content kind='p2'>Paco Maldonado COO at Playulbet</Content>        
      <Content kind='p1'>
        The platform was built as an MVP that turned out very successful - gained more than 10.000 users within the second month of production- so the goal was to redesign and build the foundations of the platform to make it usable first in every device and scalable to add more functionalities and to start monetizing the platform.
      </Content>
      <Content kind='h2' tag='h2'>
        My Role
      </Content>
      <Content>
        My role was all hands in both design and frontend development. I work first on structuring the main navigation, (taking in account posible future features) and defined a clear flow from signup to activation*. 
      </Content>
      <Content>
        *Activation was an important Key metric at Playulbet at that time. The platform offered a freemium service so in order to increase Retention and Referral numbers it was crucial to help new users to reach their first 'aha' moment and find success within the product early after the signup.
      </Content>
    </ContentWrapper>
    <Content kind='h2' tag='h2'>
      First Steps
    </Content>
    <Content>
      I created a new UI kit, changed the layout and made it responsive, structured the navigation and introduced a single app experience within the first 2 months.
    </Content>
    <Screen />
    <Content>
      UI Guide
    </Content>
    <Screen />
    <ContentWrapper>
      <Content>
        The platform went viral after the redesign (some influencers/youtubers started to mention us on their sites/videos) and the platform went from 10K sign up users to more than 150K in less than a month.
      </Content>
      <Content>
        Acquisition metrics went higher than our first estimations and we increased the Activation with the new layout and some basic features (search by event, events ordered by popularity, filters and a better performance) so the increase of Retention and Monetization metrics became our next important milestone.
      </Content>
      <Content>
        For that, over the next year an a half we worked on many different challenges and new features.
      </Content>
    </ContentWrapper>

    <Content kind='h2' tag='h2'>
      Internal Chat
    </Content>
    <Content>
      It was very important for us to get early feedback from our users. First, because we were a small team of 4 employees and no CS team to help them. And second, to understand what the users were looking for, what was missing, what was useless and what could have been improved.
    </Content>
    <Content>
      We decided to build an internal chat for each sport event. From time to time we dedicated some time every day to ask our users (we used an admin account with an alter ego) and the feedback we got from those interaction gave us direction on what to build, improve or prioritize.
    </Content>
    <Content>
      Later on, and when the number of users scaled, we moved into Hotjar to keep uncovering insights and to NPS and track them.
    </Content>
    <Screen />

    <Content kind='h2' tag='h2'>
      Custom Dashboard
    </Content>
    <Content>
      We built a custom dashboard panel were users could see the next events (recommended we gathered data on last event played, users preferences, etc), check their events in play, activity and pending results.
    </Content>
    <Screen />

    <Content kind='h2' tag='h2'>
      Gamification (levels, notifications, rewards)
    </Content>
    <Content>
      We introduced a basic gaming experience based on levels to high up Retention metrics as well.
      Levels based on number of played/won events, achievements (play certain quantity on an event, played certain number of tennis matches, special events such as Football world cup and so on), players profile, user statistics and notifications.
    </Content>
    <Screen />

    <Content kind='h2' tag='h2'>
      Advertising
    </Content>
    <Content>
      Once we improved Retention metrics we jumped into adverstising at Playfulbet as the main channel of monetization. We were very careful on what and where to show it. We also encouraged users to get some coins at watching 3rd parties videos and doing promotions with associate.
    </Content>
    <Screen />

    <ContentWrapper>  
      <Content kind='h2' tag='h2'>
        Anti Scam restrictions
      </Content>
      <Content>
        Bad guys are everywhere and specially if there's prices involved in it. We applied restrictions on sign up, re spawns, logic to detect fraudulent events or referrals, to make sure we weren't in front of generated bots or fake accounts playing in between each other to take profit of the platform.
      </Content>
    </ContentWrapper>

    <Content kind='h2' tag='h2'>
      Search and filtering
    </Content>
    <Content>
      Users asked they couldn't find easily their local football team event. We implemented
      search by event and a specific filter for each different sport.
    </Content>
    <Screen />

    <Content kind='h2' tag='h2'>
      Pools & Draws
    </Content>
    <Screen />

    <Content kind='h2' tag='h2'>
      Rankings
    </Content>
    <Screen />

    <Content kind='h2' tag='h2'>
      Mobile app
    </Content>
    <Screen />

    <Content kind='h2' tag='h2'>
      Fav Teams/Competitions
    </Content>
    <Content>
      We detected a common pattern on the lifecycle of our users. After the signup the majority of the users were looking for a very specific match in a specific competition. Normally that competition would match the country were users were connected. Pretty logic right? People from Barcelona would be more likely to play with their friends on [F.C.Barcelona](http://f.C.Barcelona) or R.C.D Espanyol events than the Chinese Superleague competition.
    </Content>
    <Content>
      We built a system to allow save competitions and teams as Favourites to help the users to speed up the process and give them more control and personalization over the platform. We automatically detected the locale on client side and recommended matches, teams and competitions on the dashboard. 
    </Content>
    <Content>
      With this feature we gained on Retention as users were checking more often the results of their events, and also in Activation, as they find more value in playing in with known competitions and teams.      
    </Content>
    <Screen />


    <Content kind='h2' tag='h2'>
      Making Playfulbet playful
    </Content>
    <Screen />

    <ContentWrapper>  
      <Content kind='h2' tag='h2'>
        Learnings
      </Content>
      <Content>
        The power of a Modular and Solid UI system.
      </Content>
      <Content>
        We were moving really fast. In addition to improving what existed, we were constantly working on new features like the ones mentioned above, rankings, new games, filters, team and competitions favs among others. 
      </Content>
      <Content>
        As the fronted architecture was solid and the UI components were built to scale fast, we could implement new features or improve others very fast without the need of prototype them first. Our prototypes where real code pushed in production to certain users (at some point we had a small DB of users who wanted to test beta features) and that gave us early insights in beforehand to move forward with some ideas or not.
      </Content>
    </ContentWrapper>
  </Wrapper>    
)

export default Playfulbet