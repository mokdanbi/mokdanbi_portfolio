import ReactFullpage from '@fullpage/react-fullpage'
import React, { useState } from 'react'
import { portfolio } from './Data';
import { Animated } from "react-animated-css";
import './Main.scss';

// portfolio 배열에서 number만 빼서 PN 배열을 만듦
const PN = portfolio.map(it => it = it.number);

const Main = () => {
  const [num, setNum] = useState(1);
  return (
    <div className='PF'>
      <div className='num'>{portfolio[num - 1]?.number}</div>
      <ReactFullpage
        // licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000}
        anchors={['title', ...PN, 'footer']}
        afterLoad={(o, d) => setNum(d.index)}

        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section title_page">
                <div className="subject">
                  2022 Mok dan-bi Portfolio
                </div>
                <div className="inner">
                  <div className="title">
                    <p>길을 찾아가는 개발자</p>
                    <ul>
                      <li>
                        <Animated animationIn="bounceInLeft" isVisible={true}>
                          <div>
                            More
                          </div>
                        </Animated>
                      </li>
                      <li>
                        <Animated animationIn="lightSpeedIn" isVisible={true} animationInDelay="500">
                          <div>
                            Develop
                          </div>
                        </Animated>
                      </li>
                      <li>
                        <Animated animationIn="bounceInUp" isVisible={true} animationInDelay="1000">
                          <div>
                            Balance
                          </div>
                        </Animated>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {
                portfolio.map((it, idx) => {
                  return (
                    <div className="section">
                      <div className="subject">
                        2022 Mok dan-bi Portfolio
                      </div>
                      <div className="inner">
                        <div className="content">
                          <div className="photo">
                            <div className="screen">
                              <img src={it.src} alt={it.title} />
                            </div>
                          </div>
                          <div className="desc">
                            <div>
                              <strong>{it.type}</strong>
                              <h2>{it.title}</h2>
                              <p>{it.info}</p>
                            </div>
                            <div className="view">
                              <a href={it.link} target="_blank">
                                View on Web
                              </a>
                            </div>
                            <ul>
                              <li><span>SKILL</span>{it.skill}</li>
                              <li><span>FONT</span>{it.font}</li>
                              <li><span>COLOR</span>
                                <ol>
                                  {
                                    it.color?.map((color, idx) => {
                                      return (
                                        <li key={idx} style={{ background: color }}>{color}</li>
                                      )
                                    })
                                  }
                                </ol>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <div className="section last_page">
                <div className="inner">
                  last page
                </div>
              </div>
            </ReactFullpage.Wrapper >
          );
        }}
      />
    </div >
  )
}

export default Main