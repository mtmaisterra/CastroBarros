import laGruta  from '../assets/images/LaGruta.jpg';
import solar  from '../assets/images/SolarCastroBarros.jpg';
import museo  from '../assets/images/MuseoPteMenem.jpg';
import iglesia1 from '../assets/images/IglesiaVirgenRosario.jpg';
import iglesia2 from '../assets/images/IglesiaSanPedro.jpg';
import iglesia3 from '../assets/images/IglesiaSanNicolas.jpg';
import persona1 from '../assets/images/Persona1.jpg';
import persona2 from '../assets/images/Persona2.jpg';
import persona3 from '../assets/images/Persona3.jpg';
import liebre from '../assets/images/Liebre.jpg';
import laCosta from '../assets/images/LaCosta.jpg';
import castillo1 from '../assets/images/Castillo1.jpg';
import castillo4 from '../assets/images/Castillo4.jpg';
import castillo3 from '../assets/images/Castillo3.jpg';


const imperdibles = [
  {
    id: 1,
    description: 'Construcciones artesanales',
    photo:  iglesia2,
    link: '/iglesia'
  },
  {
    id: 2,
    description: 'Sueños y fantasias',
    photo:  castillo4,
    link: '/castillo'
  },
  {
    id: 3,
    description: 'Paisajes pintorescos',
    photo:  laCosta,
    link:'/paisajes'
  },
];
export default imperdibles;

/* 
export const iglesias = [
{
id: 1,
photo: iglesia1,
description: 'Virgen del Rosario',
locaty: 'Chuquis',
},
{
  id: 2,
  photo: iglesia2,
  description: 'San Pedro',
  locaty: 'San Pedro',
  },
  {
    id: 3,
    photo: iglesia3,
    description: 'San Nicolas',
    locaty: 'Aminga',
    },
];

export const reseñas = [
  {
    id: 1,
    photo: persona1,
    description: '"La Costa Riojana es un verdadero paraíso natural. Los paisajes impresionantes y la rica historia cultural hacen de este lugar un destino imperdible. ¡Definitivamente volveré!"',
    name: 'María',
    },
    {
      id: 2,
      photo: persona2,
      description: '"La historia de Castro Barros es maravillosa. Las iglesias locales ofrecen arquitecturas excepcionales y la vista de los cerros es simplemente hermosa. ¡Un viaje para los sentidos!"',
      name: 'Laura',
      },
      {
        id: 3,
        photo: persona3,
        description: '"La visita a la Gruta de la Virgen del Valle, Anjullón, fue una experiencia increíble. Las formaciones montañosas y los ríos son simplemente espectaculares. ¡Un lugar que todos deben visitar!"',
        name: 'Juan',
        },
];

export const maravillas =[
  {
    id: 1,
    description: 'La flor del cardón es un símbolo de resistencia y belleza en el desierto, floreciendo con vibrantes colores en medio de las adversidades.',
    photo:  castillo1,
    name: 'FLOR DE CARDÓN',
  },
  {
    id: 2,
    description: 'Cuando el sol se desliza lentamente detrás del horizonte, el cielo se tiñe de un anaranjado profundo, dando paso a la calma de la noche.',
    photo:  castillo3,
    name: 'CREPÚSCULO',
  },
  {
    id: 3,
    description: 'Conocé los detalles más llamativos de algunas de las especies que se conservan en las áreas naturales protegidas de todo el país.',
    photo:  liebre,
    name: 'FAUNA',
  },
] */