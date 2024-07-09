"use client";
import React from "react";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.css";
import "./estilos_cbd.css";
import Carousel from "react-bootstrap/Carousel";

import Image from "next/image";
import cbd_picture_1 from "../img/cbd_picture_1.jpg";
import cbd_picture_2 from "../img/cbd_picture_2.jpg";
import cbd_picture_3 from "../img/cbd_picture_3.jpg";
import cbd_picture_4 from "../img/cbd_picture_4.jpg";
import cbd_picture_logo from "../img/cbd_picture_logo.jpg";



// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return (
        <>
            <div id="fondo_cbd">
                <BarraPrinc />

                <Crousel_handle />

                <Message />

                <MissiOn />

                <FoTer />
            </div>
        </>
    );
}



export const BarraPrinc = () => {
    return (
        <>
            <div className="barraprinc_handle">
                <Image
                    src={cbd_picture_logo}
                    className="img_cbd_barra"
               
                    alt="Big logo"
                />

                <div className="logos_barra">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
                    &nbsp; &nbsp; &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
                   
                </div>

                <ul className="menu_barra" id="lista_barra_princ">
                    <li>
                        <Link className="color1_barraprinc" href="#">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="color1_barraprinc" href="#">
                            Products
                        </Link>
                    </li>

                    <li>
                        <Link className="color1_barraprinc" href="#">
                            Learn
                        </Link>
                    </li>

                    <li>
                        <Link className="color1_barraprinc" href="/">
                            <button
                                type="button"
                                class="btn btn-outline-success"
                            >
                                Port-folio
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export const PictureDeCarusel1 = () => {
    return (
        <div>
            {" "}
            <Image
                src={cbd_picture_4}
              className="picture_cbd_handle"
                alt="Big logo"
            />
        </div>
    );
};

export const PictureDeCarusel2 = () => {
    return (
        <div>
            {" "}
            <Image
                src={cbd_picture_1}
                className="picture_cbd_handle"
                alt="Big logo"
            />
        </div>
    );
};

export const PictureDeCarusel3 = () => {
    return (
        <div>
            {" "}
            <Image
                src={cbd_picture_2}
               className="picture_cbd_handle"
                alt="Big logo"
            />
        </div>
    );
};

export const Crousel_handle = () => {
    return (
        <>
            <div className="carrusel">
                <Carousel>
                    <Carousel.Item>
                        <PictureDeCarusel1 text="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <PictureDeCarusel2 text="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <PictureDeCarusel3 text="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export const Message = () => {
    return (
        <>
            <div className="mensaje_box">
                <div className="mensaje_handle">
                    <h1>Cbd</h1>
                    <p>
                        Hemos sido pioneros en producción, distribución y
                        comercialización de productos enfocados al cuidado
                        personal y bienestar. Hoy consolidamos nuestra historia
                        al lanzar al mercado la primera línea de suplementos
                        alimenticios con CBD en nuestro país.
                    </p>
                    <button type="button" class="btn btn-success">
                        Saber mas
                    </button>
                </div>
                <Image
                    className="mensaje_img_handle"
                    src={cbd_picture_3}
                    alt="Big logo"
                />
            </div>
        </>
    );
};

export const MissiOn = () => {
    return (
        <>
            <div className="mision_handle">
                <h1>Mision</h1>

                <h5>BajaGreenLabs</h5>
                <p>
                    Texto texto texto Texto Texto texto texto Texto texto Texto
                    texto texto Texto texto texto Texto texto texto Texto texto
                    Texto texto texto Texto texto texto Texto texto texto Texto
                    texto texto Texto Texto texto texto Texto texto texto Texto
                    texto texto Texto texto texto Texto texto Texto texto texto
                    Texto texto texto Texto texto texto Texto texto texto Texto
                    texto Texto texto texto Texto texto texto Texto texto texto
                    Texto texto texto Texto texto texto Texto texto texto Texto
                    texto texto Texto texto texto Texto texto texto Texto texto{" "}
                </p>
            </div>
        </>
    );
};

export const FoTer = () => {
    return (
        <>
            <footer className="foter_page_cbd">
                <div className="box_foter_cbd">
                    <div className="col_foter">
                        <div class="mb-3">
                            <label
                                for="exampleFormControlInput1"
                                class="form-label"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                            />
                        </div>
                        NewsLetter
                        <br />
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
                        &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
                        &nbsp;&nbsp;
                    </div>

                    <div className="cuadro_foter_1">
                        <h5>
                            <b>Informacion</b>
                        </h5>
                        <li>Preguntas Frecuentes</li>
                        <li>Aviso de privacidad</li>
                        <li>Metodos de pago</li>
                        <li>Envios</li>
                    </div>
                    <div className="cuadro_foter_2">
                        <h5>
                            <b>Mapa del Sitio</b>
                        </h5>
                        <li>Nosotros</li>
                        <li>Nuestra Marca</li>
                        <li>Prensa</li>
                        <li>Contacto</li>
                    </div>
                </div>
            </footer>
        </>
    );
};
