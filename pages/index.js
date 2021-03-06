import Head from 'next/head'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Aviel Aldama Diaz</title>
        <meta name="CV Programacion" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='containerGeneral'>
        <div className='containerContent'>
          <div className='areaFila11'>
              Aviel Aldama Diaz
          </div>

          <div className='areaFila21'>
              Perfil
          </div>

          <div className='areaFila31'>
          Soy un programador autodidacta y capaz de 
transmitir dicho aprendizaje, las diferentes 
herramientas en las que he trabajado me permiten 
contar con un panorama amplio sobre las tecnologías 
actuales mejorando la capacidad adaptativa a los 
requerimientos del proyecto en curso.
          </div>


          <div className='areaFila41'>
              Experiencía 
          </div>

          <div className='areaFila51'>
              <div className='areaFila51Experiencia'>
                <h2>ChatBot - Desarrollador Web</h2>
                <h3>2021</h3>
                <p>Desarrollo y despliegue de una aplicación web con un 
chatbot para interacción básica usando la librería
Chatterbot en lenguaje python para tiempo real.
</p>

                <p>
                  Se elaboraron el Api BackEnd con Python y la Libreria
                  SocketIO para tiempo real en un AWS EC2 Ubuntu
                  mediante un contenedor basico de docker
                </p>

                <p>
                  En el lado del FrontEnd se construyo una aplicacion web NextJS
                  desplegada de igual forma en un contenedor docker en la misma 
                  instancia AWS que el BackEnd
                </p>

                <h4>Online</h4>
                <a href='https://frontbot-avielad.vercel.app/'>https://frontbot-avielad.vercel.app/</a>

              </div>


              <div className='areaFila51Experiencia'>
                <h2>Missum - Desarrollador Web</h2>
                <h3>2020</h3>
                <p>(Proyecto no Terminado por indicacion del cliente)</p>
                <p>Construccion de un sitio web para gestionar reservaciones
                  desde airbnb y booking.
                </p>
                <p>BackEnd construido en NODEJS con base de datos MongoDB,
                  FrontEnd iniciado en NextJS
                  Despliegue AWS EC2 mediante container Docker Linux.
                </p>

                <h4>Online</h4>
                <a href=''></a>
              </div>

              <div className='areaFila51Experiencia'>
                <h2>D4reality - Instructor</h2>
                <h3>2019</h3>
                <p>Instructor para cursos de programación</p>
                <h4>Android Básico</h4>
                <p>Los temas tratados durante esta curso fueron de caracter básico
                  se analizaron operaciones CRUD sobre la plataforma.
                </p>

                <h4>Desarrollo web sin Frameworks o Librerias</h4>
                <p>Aplicando HTML5 JS y CSS se construyeron ejercicios ejemplificando
                  caracteristicas fundamentales del desarrollo web
                </p>

                <h4>Online</h4>
                <a href='https://avielad.github.io/webB4example/'>https://avielad.github.io/webB4example/</a>
              </div>

          </div>



          <div className='areaFila12'>
              Desarrollador Web
          </div>

          <div className='areaFila22'>
              Contacto
          </div>
          
          <div className='areaFila32'>
            
            <ul>
              <li>12 sur 6903 Pue.</li>
              <li>2227663141</li>
              <li>aviel.aldama@gmail.com</li>
              <li>in: aviel aldama diaz</li>
            
            </ul>


          </div>

          <div className='areaFila42'>
              Aptitudes
          </div>

          <div className='areaFila52'>
              <ul>
                <li>Javascript</li>
                <li>HTML 5</li>
                <li>Bootstrap</li>
                <li>Python</li>
                <li>Libreria ReactJS</li>
                <li>Framework NextJS</li>
                <li>Docker CE</li>
                <li>MongoDB</li>
                <li>GraphQL Apollo</li>
                <li>NGINX VPS Linux</li>
                <li>NGINX AWS EC2 Linux</li>
              </ul>
          </div>

          <div className='areaFila62'>
              Formación
          </div>

          <div className='areaFila72'>
            <div className='areaFilaInline'>
              <h2>BUAP</h2>
              <p>2010 - No concluido</p>
              <p>Ingenieria en Ciencias 
                de la Computación</p>
            </div>

            <div className='areaFilaInline'>
              <h2>GitHub</h2>
              <p>AvielAD</p>
              <a href='https://github.com/AvielAD'>https://github.com/
              AvielAD</a>
            </div>

            <div className='areaFilaInline'>
              <h2>Docker Hub</h2>
              <p>aviel2017</p>
              <a href='https://hub.docker.com/u/aviel2017'>https://hub.docker.com/
              u/aviel2017</a>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}
