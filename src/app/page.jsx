"use client";
import React from "react";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.css";
import './style-page.css';

import Image from "next/image";
import ident_picture_1 from "./img/ident_picture_1.png";
import ident_picture_2 from "./img/ident_picture_2.png";
import ident_picture_3 from "./img/ident_picture_3.png";



export default function Home() {
    return (
        <div id="cuerpo">
            <FaceElements />
            <InformColumn />
            <Projects_1 />
            <Projects_2 />
            
            <FoTer />
          
        </div>
    );
}

export const FaceElements = () => {
    return (
        <>
            <header className="face_elements">
                <div class="wrapper">
                    <div class="column">
                        <div>
                            <Image
                                src={ident_picture_1}
                              
                                className="handle_img_faceelements"
                                alt="big"
                            />
                        </div>
                        <h4>Jose Alejandro Robles</h4>
                        <h3>Web Developer, Designer</h3>

                        <a href="#f" download="mi-archivo.pdf"> DownLoad CV</a>
                        
                    </div>
                </div>
            </header>
        </>
    );
};
/*








export const InformColumn = () => {
    return (
        <>
            <article className="_info_column_handle">
                <div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col">
                            <li>
                                I´m a web developer based in CDMX, with a
                                passion to build digital services focus in
                                solve complex code problems. In 2022 I started
                                my training self-taught as a front end
                                developer. In 2024 I Finished my engineering
                                degree in computer systems.UTEL{" "}
                            </li>
                        </div>
                        <div class="col">
                            <li>
                                <u>Languages I speak:</u>
                            </li>

                            <li>HTML, Js, CSS, Git</li>
                            <br />
                            <li>
                                <u> Design Tools:</u>
                            </li>
                            <li> Affinity Designer & Figma Pen </li>
                            <br />
                            <li>
                                <u> Dev Tools:</u>
                            </li>
                            <li> VsCode, Bootstrap, Github</li>
                        </div>
                        <div class="col">
                            <li> Things I enjoy designing:</li>
                            <li>UX, UI, Web, Apps, Logos</li>
                            When im not online, i loves make music and visual
                            design.
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};


 */
export const InformColumn = () => {
    return (
        <>
            <article className="_info_column_handle">
                <div className="paquet">
                    <div>
                        <br/><br/>
                          I´m a web developer based in CDMX, with skills to solve  problems using programming codes. In 2024 I Finished my engineering
                 
                    degree in computer systems.
                       
                    </div>
                    <div>
                      
           <li>
                            Languages I speak:
                        </li>
                        <li>HTML, Js, CSS, Git</li>
                        <br />
                        <li>
                         Design Tools:
                        </li>
                        <li> Affinity Designer & Figma Pen </li>
                        <br />
                        <li>
                             Dev Tools:
                        </li>
                        <li>React, VsCode, Bootstrap, Github</li>
                          <br/><li> Things I enjoy designing:</li>
                        <li>UX, UI, Web, Apps, Logos</li>
                  
                    </div>
                    <div>
                    <br/><br/>
                      
                        <li>I choose to learn day by day to nurture soft and technical skills necessary for digital services


                        When im not online, i loves make music and visual
                        design.</li>
                    </div>
                </div>
            </article>
        </>
    );
};

export const Projects_1 = () => {
    return (
        <>
            <div className="cbdproject">
                <div class="row justify-content-evenly">
                    <div class="col-4">
                        <Image
                            src={ident_picture_2}
                            className="imagendecbd_handle "
                            alt="big"
                        />
                    </div>
                    <div class="col-4">
                        <h4>CBD E-commerce</h4>
                        <p className="textcdb">
                        A simple sketch to display 
                        information about an online 
                        cbd-store on screen.


                        </p>
                        <p>
                            {" "}
                            <Link href="/cbd">See more</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export const Projects_2 = () => {
    return (
        <>
            <div className="revanchaproject">
                <div class="row justify-content-evenly">
                    <div class="col-4">
                        <h5>Revancha</h5>
                        <p className="txtrevancha">
                        A simple mockup to display 
                        different blogs and notes 
                        belonging to a news-page on the screen.


                        </p>
                        <p>
                            {" "}
                            <Link href="/revancha">See more</Link>
                        </p>
                    </div>
                    <div class="col-4">
                        <Image
                            src={ident_picture_3}
                          
                            className="imagenrevancha2"
                            alt="big"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export const FoTer = () => {
    return (
        <>
        
            <div className="handle_pagefoter">
    <p>     
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
    
&nbsp;&nbsp;
    
    
    <a href="https://github.com/Alejandro-Rob23">Alejandro-Rob23</a>
 
    </p>
    <p>
    
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
&nbsp;&nbsp;

<a href="https://www.linkedin.com/in/alejandro-robles-s%C3%A1nchez-2a638b27a/">Jose Alejandro Robles Sanchez</a>
 
 
</p>
<p>

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-arrow-up-fill" viewBox="0 0 16 16">
<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z"/>
<path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016"/>
</svg>

&nbsp;&nbsp;

<a href="#">alejandro_contact@joserobles.com</a></p>

  </div>
        </>
    );
};


