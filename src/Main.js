import ReactFullpage from '@fullpage/react-fullpage'
import React, { useState } from 'react'
import { portfolio } from './Data';
import { GrCursor, GrPerformance, GrPower } from 'react-icons/gr';
import { Animated } from "react-animated-css";
import './Main.scss';


// portfolio 배열에서 number만 빼서 PN 배열을 만듦
const PN = portfolio.map(it => it = it.number);

const Main = () => {
  const [num, setNum] = useState(1);
  return (
    <div className='PF'>
      <div className='num'>{portfolio[num - 1]?.number}</div>
      <nav className='gnb'>
        <a href={`#title`}>
          <GrPower className='top' />
        </a>
        <ul>
          {
            portfolio.map((it, idx) => {
              return (
                <li key={idx} className={it.id === num ? "on" : ""}>
                  <a href={`#${it.number}`}>&nbsp;{it.id}</a>
                </li>
              )
            })
          }
        </ul>
        <a href={`#footer`}>
          <GrPerformance className='bottom' />
        </a>
      </nav>

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
                      <Animated animationIn="flash" isVisible={true} className="ic" animationInDelay="700">
                        <GrCursor />
                      </Animated>
                    </div>
                  </div>
                </div>

                <div className="blobs">
                  <svg viewBox="0 0 500 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="700px" height="100%" id="blobSvg">
                    <g transform="translate(0, 0)">
                      <path fill="#f1f1f1">
                        <animate attributeName="d"
                          dur="10000ms"
                          repeatCount="indefinite"
                          values="M436.5,313.5Q401,377,347,435Q293,493,220,461Q147,429,114.5,370Q82,311,77,248Q72,185,108,126Q144,67,215.5,54Q287,41,361.5,67.5Q436,94,454,172Q472,250,436.5,313.5Z;
                          M442,314Q402,378,344,415.5Q286,453,223.5,428.5Q161,404,117.5,359Q74,314,46.5,240Q19,166,85.5,123.5Q152,81,220.5,56Q289,31,364,61Q439,91,460.5,170.5Q482,250,442,314Z;
                          M416,311Q396,372,339.5,404.5Q283,437,204.5,451Q126,465,91,393Q56,321,70,255Q84,189,122.5,142.5Q161,96,224.5,65.5Q288,35,336,86Q384,137,410,193.5Q436,250,416,311Z;
                          M463,328Q436,406,360,423.5Q284,441,216,434Q148,427,111,370.5Q74,314,61,245.5Q48,177,100,128.5Q152,80,220.5,55Q289,30,364,60.5Q439,91,464.5,170.5Q490,250,463,328Z;
                          M430,316.5Q409,383,348.5,423.5Q288,464,224,435Q160,406,120.5,358.5Q81,311,48.5,238Q16,165,74,105.5Q132,46,207,58Q282,70,349.5,90Q417,110,434,180Q451,250,430,316.5Z;
                          M436.5,313.5Q401,377,347,435Q293,493,220,461Q147,429,114.5,370Q82,311,77,248Q72,185,108,126Q144,67,215.5,54Q287,41,361.5,67.5Q436,94,454,172Q472,250,436.5,313.5Z"
                        >

                        </animate>
                      </path>
                    </g>
                  </svg>
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