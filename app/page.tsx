


import Image from 'next/legacy/image'

import Rio from '../assets/Images/Computador.jpg';
import Vegas from '../assets/Images/Playstation 5.jpg';
import LosAngeles from '../assets/Images/Xbox Series X.png';
import Londres from '../assets/Images/TV.png';
import NovaYork from '../assets/Images/Sofa.jpg';


import Footer from "@/components/footer/page";
import Header from "@/components/header/page"
import { Card } from "@/components/ui/card";

import Carousel from '../components/carousel/carousel'
import { Button } from '@/components/ui/button';



export default function Home() {

  const DATA = [
    { image: 'https://raw.githubusercontent.com/Ronald-Luiz/trips/main/assets/Images/Capa/1.jpg' },
    // { image: '' },
    // { image: '' },
  ]


  return (
    <>
      <Header />

      <div className="my-72 flex min-h-screen flex-col items-center justify-center text-center">

        <div className='Carousel'>
          <Carousel data={DATA} />
        </div>

        <div className="my-40 flex flex-wrap justify-center">

          <Card id="card" className="w-96 p-8 m-8">

            <Image
              src={Rio}
              width={600}
              height={500}
              alt="Picture of the author"
            />

            <p>
              Lorem Ipsum is simply
            </p>

            <Button>
              Comprar
            </Button>

          </Card>

          <Card id="card" className="w-96 p-8 m-8">
            <Image
              src={Vegas}
              width={600}
              height={500}
              alt="Picture of the author"
            />

            <p>
              Lorem Ipsum is simply
            </p>

            <Button>
              Comprar
            </Button>
          </Card>

          <Card id="card" className="w-96 p-8 m-8">
            <Image
              src={LosAngeles}
              width={600}
              height={500}
              alt="Picture of the author"
            />

            <p>
              Lorem Ipsum is simply
            </p>

            <Button>
              Comprar
            </Button>
          </Card>

          <Card id="card" className="w-96 p-8 m-8">
            <Image
              src={Londres}
              width={600}
              height={500}
              alt="Picture of the author"
            />

            <p>
              Lorem Ipsum is simply
            </p>

            <Button>
              Comprar
            </Button>
          </Card>

          <Card id="card" className="w-96 p-8 m-8">
            <Image
              src={NovaYork}
              width={600}
              height={500}
              alt="Picture of the author"
            />

            <p>
              Lorem Ipsum is simply
            </p>

            <Button>
              Comprar
            </Button>
          </Card>
        </div>

      </div>
      <Footer />
    </>
  );
}
