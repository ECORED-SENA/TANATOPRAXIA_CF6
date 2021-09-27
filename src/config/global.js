export default {
  global: {
    componenteFormativo: 'Desinfección del cadáver e instrumentos',
    descripcionCurso:
      'La naturaleza del trabajo de un tanatopractor lo lleva a entrar en contacto con restos humanos potencialmente infecciosos. Su transmisión es posible a través de varias vías de exposición tal como lesiones cortopunzantes, fluidos corporales, entre otros. Ante esta realidad el presente componente de formación se acercará al proceso de desinfección de un cadáver según las técnicas, normas de bioseguridad y salud laboral. Bienvenido.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Asepsia y sus técnicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Desinfección del cadáver e instrumentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Proceso de desinfección del cadáver',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Desinfección según patologías',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Desinfección de los elementos e insumos',
            hash: 't_2_3',
          },
        ],
      },
      /*{
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fundamentación Textil',
        desarrolloContenidos: true,
      },*/
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Mayer, R. G. (2012). Embalsamamiento. Volumen 5. Pittsburgh. Pennsylvania, Estados Unidos: Quad/Graphics. ',
    },
    {
      referencia:
        'Ministerio de Salud (2018). Manual de medidas básicas para el control de infecciones en IPS. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/PAI/manual-prevencion-iaas.pdf',
    },
    {
      referencia:
        'Ministerio de Salud (2020). Abecé. Reducción de riesgos asociados al uso de productos Plaguicidas y Desinfectantes. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/abece-plaguicidas-desinfectantes.pdf',
    },
    {
      referencia:
        'Resolución 2183 de 2004 [Ministerio de Protección Social]. Por la cual se adopta el Manual de Buenas Prácticas de Esterilización para Prestadores de Servicios de Salud. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resolucion-2183-de-2004.pdf',
    },
    {
      referencia:
        'Secretaria Distrital de Salud Dirección de salud pública. (2011). Limpieza y desinfección de equipos y superficies ambientales en instituciones prestadores de servicios de salud. ',
      link:
        'http://www.saludcapital.gov.co/sitios/vigilanciasaludpublica/todo%20iih/limpieza%20y%20desinfecci%C3%B3n%20de%20equipos%20y%20superficies.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Asepsia',
      significado:
        'Conjunto de procesos que tiene como objetivo impedir la penetración y proliferación de los agentes patógenos en el sitio que no los contenga.',
    },
    {
      termino: 'SufDesinfección primariatware',
      //terminoHtml: '<em>Suftware</em>',
      significado:
        'Procesos de desinfección realizados al cadáver antes del proceso de embalsamamiento, incluye la desinfección tópica y el lavado del cadáver.',
    },
    {
      termino: 'Desinfección simultánea',
      significado:
        'Limpieza del cadáver y de los instrumentos durante el proceso de embalsamamiento.',
    },
    {
      termino: 'Desinfección terminal',
      //terminoHtml: '<em>Áectores</em>',
      significado:
        'Es el uso de medios físicos, químicos u otros para realizar la eliminación o destrucción de los microorganismos patógenos de una superficie.',
    },
    {
      termino: 'Esterilización',
      significado:
        'Proceso a través del que se logra la destrucción total de los microorganismos.',
    },
    {
      termino: 'Infección',
      significado:
        'Invasión y reproducción de microorganismos ya sea en un tejido, organismo, superficie u objeto.',
    },
    {
      termino: 'Limpieza',
      significado:
        'Es la eliminación de la materia orgánica que se encuentra alojada en una superficie u objeto.',
    },
  ],
  complementario: [
    {
      texto:
        'Resolución 2183 de 2004 [Ministerio de Protección Social]. Por la cual se adopta el Manual de Buenas Prácticas de Esterilización para Prestadores de Servicios de Salud.',
      tipo: 'Pdf',
      descarga: '/downloads/Resolucion-2183-de-2004.pdf',
    },
    {
      texto:
        'Ministerio de Salud (2018). Manual de medidas básicas para el control de infecciones en IPS. ',
      tipo: 'Pdf',
      descarga: '/downloads/manual-prevencion-iaas.pdf',
    },
    {
      texto:
        'Secretaria Distrital de Salud Dirección de salud pública. (2011). Limpieza y desinfección de equipos y superficies ambientales en instituciones prestadores de servicios de salud.',
      tipo: 'Pdf',
      descarga:
        '/downloads/limpieza y desinfección de equipos y superficies.pdf',
    },
    {
      texto:
        'Ministerio de Salud (2020). Abecé. Reducción de riesgos asociados al uso de productos Plaguicidas y Desinfectantes.',
      tipo: 'Pdf',
      descarga: '/downloads/abece-plaguicidas-desinfectantes.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina María Restrepo Zapata',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo:
          'Instructora (EPC) – Líder desarrollo curricular servicios personales',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana Maria Bustamante Cataño',
        cargo: 'Profesional de diseño y producción curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica del SENA - Regional Distrito Capital  ',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de gestión industrial - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Jesus Antonio Vecino Valero'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      /*{
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      /*{
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },*/
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
