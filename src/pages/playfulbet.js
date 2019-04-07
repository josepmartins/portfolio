import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 5vh auto;
  padding: 0 3.75vw;
`
const Header = styled.div`
  display: flex;
  margin-bottom: 15vh;
`
const HeaderTitle = styled.h1`
  margin: 0;
  margin-bottom: 1vh;
  line-height: 1.05;
  text-transform: uppercase;    
  font-weight: 400;
  font-size: 50px;
  font-size: 5rem;
  font-size: calc(50px + 16 * (100vw - 1024px)/ 416);
  font-size: calc(5rem + 16 * (100vw - 102.4rem)/ 416);
`

const HeaderSubtitle = styled.div`
`

const HeaderContent = styled.div`
  margin-top: 20vh;  
  width: 50%;
`
const HeaderImage = styled.img`
  height: 90vh;
  width: 50%;
  background-color: #ececec;
  object-fit: cover;
`

const Content = styled.div`
  width: calc((8 * (100% / 12)) - 1px);
`

const ContentWide = styled.div`
  width: calc((12 * (100% / 12)) - 1px);
`

const Quote = styled.div`
  margin-bottom: 10vh;
`

const QuoteTitle = styled.div`
`
const QuoteAuthor = styled.div`
`
const Text = styled.p`
  font-weight: 400  
  font-size: 22px;
  font-size: 2.2rem;
  font-size: calc(22px + 8 * (100vw - 1024px)/ 416);
  font-size: calc(2.2rem + 8 * (100vw - 102.4rem)/ 416);
  margin-bottom: 10vh;
`

const SubTitle = styled.h2`
  font-weight: 400;
  line-height: 1.05;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 2vh;
  font-size: 26px;
  font-size: 2.6rem;
  font-size: calc(26px + 4 * (100vw - 1024px)/ 416);
  font-size: calc(2.6rem + 4 * (100vw - 102.4rem)/ 416);
`

const Screen = styled.div`
  width: 100%;
  height: 90vh;
  margin-bottom: 15vh;
  background-color: #ececec;
`


const Playfulbet = () => (
  <Wrapper>
    <Header>
      <HeaderContent>
        <HeaderTitle>Playfulbet</HeaderTitle>
        <HeaderSubtitle>Design & Front End</HeaderSubtitle>
      </HeaderContent>
      <HeaderImage 
        loading="lazy"
        src={require('../assets/images/playfulbet/header-2.jpg')}
      />
    </Header>
    <Content>
      <Text>
        Playfulbet is a social gaming platform where users can play into sports events between their friends. The main idea was to not focus on the sport event and the outcome but making the experience more entertaining and fun being able to challenge your friends.
      </Text>
      <Quote>
        <QuoteTitle>Users don’t feel they are just playing, they feel they are part of a community where they can interact with more people who have similar interests.</QuoteTitle>
        <QuoteAuthor>Paco Maldonado COO at Playulbet</QuoteAuthor>        
      </Quote>
      <Text>
        The platform was built as an MVP that turned out very successful - gained more than 10.000 users within the second month of production- so the goal was to redesign and build the foundations of the platform to make it usable first in every device and scalable to add more functionalities and to start monetizing the platform.
      </Text>
      <SubTitle>
        My Role
      </SubTitle>
      <Text>
        My role was all hands in both design and frontend development. I work first on structuring the main navigation, (taking in account posible future features) and defined a clear flow from signup to activation*. 
      </Text>
      <Text>
        *Activation was an important Key metric at Playulbet at that time. The platform offered a freemium service so in order to increase Retention and Referral numbers it was crucial to help new users to reach their first 'aha' moment and find success within the product early after the signup.
      </Text>
    </Content>
    <ContentWide>
      <SubTitle>
        First Steps
      </SubTitle>
      <Text>
        I created a new UI kit, changed the layout and made it responsive, structured the navigation and introduced a single app experience within the first 2 months.
      </Text>
      <Screen />
    </ContentWide>
    <ContentWide>
      <Text>
        UI Guide
      </Text>
      <Screen />
    </ContentWide>
    <Content>
      <Text>
        The platform went viral after the redesign (some influencers/youtubers started to mention us on their sites/videos) and the platform went from 10K sign up users to more than 150K in less than a month.
      </Text>
      <Text>
        Acquisition metrics went higher than our first estimations and we increased the Activation with the new layout and some basic features (search by event, events ordered by popularity, filters and a better performance) so the increase of Retention and Monetization metrics became our next important milestone.
      </Text>
      <Text>
        For that, over the next year an a half we worked on many different challenges and new features.
      </Text>
    </Content>

    <ContentWide>  
      <SubTitle>
        Internal Chat
      </SubTitle>
      <Text>
        It was very important for us to get early feedback from our users. First, because we were a small team of 4 employees and no CS team to help them. And second, to understand what the users were looking for, what was missing, what was useless and what could have been improved.
      </Text>
      <Text>
        We decided to build an internal chat for each sport event. From time to time we dedicated some time every day to ask our users (we used an admin account with an alter ego) and the feedback we got from those interaction gave us direction on what to build, improve or prioritize.
      </Text>
      <Text>
        Later on, and when the number of users scaled, we moved into Hotjar to keep uncovering insights and to NPS and track them.
      </Text>
      <Screen />
    </ContentWide>

    <ContentWide>  
      <SubTitle>
        Custom Dashboard
      </SubTitle>
      <Text>
        We built a custom dashboard panel were users could see the next events (recommended we gathered data on last event played, users preferences, etc), check their events in play, activity and pending results.
      </Text>
      <Screen />
    </ContentWide>

    <ContentWide>  
      <SubTitle>
        Gamification (levels, notifications, rewards)
      </SubTitle>
      <Text>
        We introduced a basic gaming experience based on levels to high up Retention metrics as well.
        Levels based on number of played/won events, achievements (play certain quantity on an event, played certain number of tennis matches, special events such as Football world cup and so on), players profile, user statistics and notifications.
      </Text>
      <Screen />
    </ContentWide>

    <ContentWide>  
      <SubTitle>
        Advertising
      </SubTitle>
      <Text>
        Once we improved Retention metrics we jumped into adverstising at Playfulbet as the main channel of monetization. We were very careful on what and where to show it. We also encouraged users to get some coins at watching 3rd parties videos and doing promotions with associate.
      </Text>
      <Screen />
    </ContentWide>

    <Content>  
      <SubTitle>
        Anti Scam restrictions
      </SubTitle>
      <Text>
        Bad guys are everywhere and specially if there's prices involved in it. We applied restrictions on sign up, re spawns, logic to detect fraudulent events or referrals, to make sure we weren't in front of generated bots or fake accounts playing in between each other to take profit of the platform.
      </Text>
    </Content>

    <ContentWide>  
      <SubTitle>
        Search and filtering
      </SubTitle>
      <Text>
        Users asked they couldn't find easily their local football team event. We implemented
        search by event and a specific filter for each different sport.
      </Text>
      <Screen />
    </ContentWide>

    <ContentWide>  
      <SubTitle>
        Pools & Draws
      </SubTitle>
      <Screen />
    </ContentWide>

    <ContentWide>  
      <SubTitle>
        Rankings
      </SubTitle>
      <Screen />
    </ContentWide>

    <ContentWide>  
      <SubTitle>
        Mobile app
      </SubTitle>
      <Screen />
    </ContentWide>

    <ContentWide>  
      <SubTitle>
        Fav Teams/Competitions
      </SubTitle>
      <Text>
        We detected a common pattern on the lifecycle of our users. After the signup the majority of the users were looking for a very specific match in a specific competition. Normally that competition would match the country were users were connected. Pretty logic right? People from Barcelona would be more likely to play with their friends on [F.C.Barcelona](http://f.C.Barcelona) or R.C.D Espanyol events than the Chinese Superleague competition.
      </Text>
      <Text>
        We built a system to allow save competitions and teams as Favourites to help the users to speed up the process and give them more control and personalization over the platform. We automatically detected the locale on client side and recommended matches, teams and competitions on the dashboard. 
      </Text>
      <Text>
        With this feature we gained on Retention as users were checking more often the results of their events, and also in Activation, as they find more value in playing in with known competitions and teams.      
      </Text>
      <Screen />
    </ContentWide>    


    <ContentWide>  
      <SubTitle>
        Making Playfulbet playful
      </SubTitle>
      <Screen />
    </ContentWide>

    <Content>  
      <SubTitle>
        Learnings
      </SubTitle>
      <Text>
        The power of a Modular and Solid UI system.
      </Text>
      <Text>
        We were moving really fast. In addition to improving what existed, we were constantly working on new features like the ones mentioned above, rankings, new games, filters, team and competitions favs among others. 
      </Text>
      <Text>
        As the fronted architecture was solid and the UI components were built to scale fast, we could implement new features or improve others very fast without the need of prototype them first. Our prototypes where real code pushed in production to certain users (at some point we had a small DB of users who wanted to test beta features) and that gave us early insights in beforehand to move forward with some ideas or not.
      </Text>
    </Content>
  </Wrapper>    
)

export default Playfulbet