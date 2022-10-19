import ReactFullpage from '@fullpage/react-fullpage'
import React, { useState } from 'react'
import { portfolio } from './Data';
import { GrCursor } from 'react-icons/gr';
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
                  <div className="pf_title">
                    <div className="pf_txt">
                      길을 찾아가는 개발자
                      <div className="circle"></div>
                    </div>
                    <div class="text sqw">
                      <span>M</span>
                      <span class="tpq">o</span>
                      <span class="tpq">r</span>
                      <span class="tpq">e</span>
                      <span class="tpq blk">,</span>
                      <span>D</span>
                      <span class="tpq">e</span>
                      <span class="tpq">v</span>
                      <span class="tpq">e</span>
                      <span class="tpq">l</span>
                      <span class="tpq">o</span>
                      <span class="tpq">p</span>
                      <span class="tpq blk">,</span>
                      <span>B</span>
                      <span class="tpq">a</span>
                      <span class="tpq">l</span>
                      <span class="tpq">a</span>
                      <span class="tpq">n</span>
                      <span class="tpq">c</span>
                      <span class="tpq">e</span>
                    </div>
                    <div className="cs_icon">
                      <Animated animationIn="flash" isVisible={true}>
                        <GrCursor />
                      </Animated>
                    </div>
                  </div>
                </div>
                {/* <div className="footprint_left">
                  <img src={process.env.PUBLIC_URL + "/images/foot.png"} alt="" />
                </div>
                <div className="footprint_right">
                  <img src={process.env.PUBLIC_URL + "/images/foot.png"} alt="" />
                </div> */}
                
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