import ReactFullpage from '@fullpage/react-fullpage'
import React, { useEffect, useRef, useState } from 'react'
import { portfolio } from './Data';
import { GrCertificate, GrCursor, GrPerformance, GrPower, GrToast, GrTools, GrUserFemale } from 'react-icons/gr';
import { Animated } from "react-animated-css";
import './Main.scss';
import './Tablet.scss';
import './Mobile.scss';


// portfolio 배열에서 number만 빼서 PN 배열을 만듦
const PN = portfolio.map(it => it = it.number);

const Cover = ({ on, setOn }) => {
  const cover = useRef(null);
  const wheelStop = e => {
    e.stopPropagation();
  }
  useEffect(() => {
    cover.current.addEventListener('wheel', wheelStop);
  }, [])
  return (
    <div className={`Cover ${on ? "on" : ""}`} ref={cover}>
      <div className="inner">
        <h2>INDEX</h2>
        <ul>
          <li onClick={() => setOn(!on)}><a href={`#title`}>Title<span>p0.</span></a></li>
          {
            portfolio.map((it, idx) => {
              return (
                <li key={idx} onClick={() => setOn(!on)}>
                  <a href={`#${it.number}`}>{it.title}<span>p{it.id}.</span></a>
                </li>
              )
            })
          }
          <li onClick={() => setOn(!on)}><a href={`#footer`}>About me<span>p10.</span></a></li>
        </ul>
      </div>
    </div>
  )
}

const Main = () => {
  const [num, setNum] = useState(1);
  const [on, setOn] = useState(false);
  return (
    <div className='PF'>
      <Cover on={on} setOn={setOn} />
      <button className={`btn ${on ? "on" : ""}`} onClick={() => setOn(!on)}>
        <span>cover open</span>
      </button>
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
                      <span>M</span><span class="tpq">o</span>
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
                              <li><span>TOOL</span>{it.tool}</li>
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
                <div className="subject">
                  2022 Mok dan-bi Portfolio
                </div>
                <div className="inner">
                  <div className="content">
                    <div className="profile">
                      <table>
                        <tr>
                          <th>
                            <GrUserFemale />
                            <span>Profile</span>
                          </th>
                          <th>
                            <GrCertificate />
                            <span>Certificate</span>
                          </th>
                        </tr>
                        <tr>
                          <td>
                            <dl>
                              <dd>목단비 / Mok dan-bi</dd>
                              <dd><a href="tel:010-2640-1940">010. 2640. 1940</a></dd>
                              <dd><a href="mailto:l26fz@naver.com">l26fz@naver.com</a></dd>
                            </dl>
                          </td>
                          <td>
                            <dl>
                              <dd>GTQ 1급</dd>
                              <dd>운전면허 2종 보통</dd>
                            </dl>
                          </td>
                        </tr>
                        <tr className='tpline'>
                          <th>
                            <GrToast />
                            <span>Education</span></th>
                          <th>
                            <GrTools />
                            <span>Skill &amp; Ability</span>
                          </th>
                        </tr>
                        <tr>
                          <td>
                            <dl>
                              <dd>경성대학교 디지털미디어학부 졸업</dd>
                              <dd>웹 콘텐츠 UI/UX 디자인 과정 수료<br />
                                (나래디자인학원)</dd>
                              <dd>웹 디자이너 2년 근무</dd>
                              <dd>React 활용 프론트엔드 개발자 양성과정 수료<br />
                                (그린컴퓨터아카데미)</dd>
                            </dl>
                          </td>
                          <td>
                            <dl>
                              <dd>html / css / javascript</dd>
                              <dd>jQuery</dd>
                              <dd>React</dd>
                              <dd>Photoshop</dd>
                              <dd>Illustrator</dd>
                              <dd>Premiere Pro</dd>
                            </dl>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div className="danbi">
                      <div className="dbtxt">
                        <p>더 발전하기 위해 길을 찾아가는 개발자,</p>
                        <strong>목단비</strong>
                      </div>
                    </div>
                  </div>
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