import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import group from './images/Group.svg';
import star from './images/star.png';

        //services images
import mail from './images/mail.png';
import publicity from './images/publicity.png';
import screen from './images/screen.png';
import strategy from './images/strategy.png';
import ticket from './images/ticket.png';

        //rrss
import facebook from './icons/facebook.png';
import instagram from './icons/instagram.png';
import behance from './icons/behance.png';
import linkedin from './icons/linkedin.png';
import twitter from './icons/twitter.png';
import whatsapp from './icons/whatsapp.png';

        //extras
import extra1 from './images/image1.png';

const homeImages = {
    logo, group, star
}
const services = [
    {title: 'Gestión de Marca', description: 'Creación y diseño de línea gráfica sostenida en la cultura empresarial que permita dar a conocer y posicionar la actividad comercial de la empresa.', image: mail },
    {title: 'Estrategia de Contenido', description: 'Elaboración, diseño y edición de contenido digital de acuerdo con los objetivos, valores, productos y/o servicios que se desean dar a conocer. ', image: publicity },
    {title: 'Gestión, programación y diseño de páginas web. ', description: 'Diseño y programación de páginas corporativas y personales con extensión a blogs permanentemente actualizados con artículos actualizados que ofrecer a los visitantes.', image: screen },
    {title: 'Publicidad Online', description: 'Visibilidad tanto en redes sociales como en buscadores a través de la creación de campañas desde Facebook, Instagram y Google ads.', image: strategy },
    {title: 'Concurso, e-mail marketing captación de seguidores, audiovisuales y más.', description: 'Contamos con otro tipo de servicios los cuales adaptamos dentro de la estrategia digital que mejor se adapte a la necesidad personal y/o corporativa.', image: ticket },
]

const rrss = [
    { name: 'Facebook', icon: facebook  },
    { name: 'Twitter', icon: twitter  },
    { name: 'Instagram', icon: instagram   },
    { name: 'Linkedin', icon: linkedin  },
    { name: 'Behance', icon: behance  },
    { name: 'Whatsapp', icon: whatsapp  },
]

const values = [
    "Honestidad", "Responsabilidad",  "Puntualidad", "Calidad","Lealtad", "Compromiso", "Trabajo en Equipo" 
]

export {
    logo,
    logo2,
    extra1,
    homeImages,
    services,
    rrss,
    values
}