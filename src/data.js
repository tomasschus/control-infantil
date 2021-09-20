const data = {
    news: [
        {
            id: '10',
            date: '10 de Sept de 2021',
            title: 'Nuestros servicios',
            description: 'Ahora podés consultar el historial de la documentación de pago desde tu PC.',
            img: '/photos/new2.jpg',
            button: 'Ver más'
        },
        {
            id: '11',
            date: '10 de Sept de 2021',
            title: 'Nueva receta digital',
            description: 'Recordá que podés comprar medicamentos presentando nuestra receta digital.',
            img: '/photos/new1.jpg',
            button: 'Ver más'
        },
        {
            id: '12',
            date: '10 de Sept de 2021',
            title: 'Preguntas frecuentes',
            description: 'Enterate ahora de todos los beneficios que te ofrece nuestra plataforma.',
            img: '/photos/new3.jpg',
            button: 'Ver más'
        }
    ],
    info: [
        {
            id: '1',
            title: 'Siempre más cerca tuyo',
            description: 'En esta nueva realidad, realizá todas tus gestiones desde la comodidad y seguridad de tu casa.',
            img: '/photos/info3.jpg',
            button: 'Ingresá'
        },
        {
            id: '2',
            title: 'MÁS DIGICONTROL: una app a tu medida',
            description: 'Te invitamos a disfrutar y a gestionar todo lo que necesitas de una forma más práctica.',
            img: '/photos/info1.jpg',
            button: 'Bajate la app'
        },
        {
            id: '3',
            title: 'Mejorá tu experiencia siempre',
            description: 'Si necesitas ayuda para realizar trámites, podés comunicarte con nuestro centro de ayuda.',
            img: '/photos/info2.jpg',
            button: 'Conocé más'
        },
        {
            id: '4',
            title: 'Consulta de percentiles',
            description: 'Tendrás a disposicion el parametro optimo de crecimiento del niño.',
            img: 'https://docs.tibco.com/pub/spotfire_web_player/6.0.0-november-2013/es-ES/WebHelp/GUID-418B2936-C878-4771-B874-FA8ECAA39941-display.png',
            button: 'Conocé más'
        },
        {
            id: '5',
            title: 'No se me ocurre aun',
            description: 'desc',
            img: 'https://redhistoria.com/wp-content/uploads/2019/05/Resumen-de-texto.png',
            button: 'Conocé más'
        },
        {
            id: '6',
            title: 'No se me ocurre aun',
            description: 'desc',
            img: 'https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2021/03/SPH_Post_GS-POSTMarzo.jpg',
            button: 'Conocé más'
        }
    ],
    paciente: {
        id: '1',
        nombre: '',
        apellido: '',
        menores: [
            {
                id: '1',
                nombre: 'Emilia',
                apellido: 'Gomez',
                foto: '/photos/p1.jpg',
                nacimiento: '02/02/2005',
                rating: 3,
                reviews: 19
            },
            {
                id: '2',
                nombre: 'Julián',
                apellido: 'Gomez',
                foto: '/photos/p1.jpg',
                nacimiento: '01/05/2010',
                rating: 4.5,
                reviews: 100
            }
        ]
    },
    images: [
        {
            id: '1',
            img: '/img/2.jpg',
            title: 'Título 1',
            description: '> Aquí va la descripción <',
            author: 'author',
            cols: 1
        },
        {
            id: '2',
            img: '/img/1.jpg',
            title: 'Título 2',
            description: '> Aquí va la descripción <',
            author: 'author',
            cols: 2
        },
        {
            id: '3',
            img: '/img/3.jpg',
            title: 'Título 3',
            description: '> Aquí va la descripción <',
            author: 'author',
            cols: 1
        }
    ],
    percentiles: [
        {
            gender: "male",
            labels: ["0","3M","6M","9M","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"],
            peso: [3.47,6.26,8.02,9.24,9.24,10.15,12.7,14.84,16.9,19.06,21.4,23.26,25.64,28.6,32.22,36.51,41.38,46.68,52.15,57.49,62.27,66.03,68.19],
            peso_max: 68.19,
            altura: [
                [60.06,60.44,66.81,71.1,75.08,86.68,94.62,102.11,109.11,115.4,120.4,126.18,131.71,136.53,141.53,146.23,156.05,160.92,168.21,171.4,173.23,174.1]
            ],
            altura_max: 174.1 
        }
    ],
    children: [
        {
            id: 1,
            nombre: 'Juan',
            apellido: 'Suarez',
            edad: 2,
            img: '/boy-1.jpg'
        },
        {
            id: 2,
            nombre: 'Noelia',
            apellido: 'Suarez',
            edad: 5,
            img: '/girl-0.jpg'
        },
        {
            id: 3,
            nombre: 'Tomás',
            apellido: 'Suarez',
            edad: 8,
            img: '/boy-0.jpg'
        }
    ],
    childrenSelected: [
        {
            id: 1,
            nombre: 'Juan',
            apellido: 'Suarez',
            edad: 2,
            img: '/boy-1.jpg'
        }
    ],
    calendar: {
        columns: [
            'Edad \ Vacunas',
            'BCG',
            'Hepatitis B HB',
            'Neumococo Conjugada',
            'Quíntuple Pentavalente DTP-HB-Hib',
            'Cuádruple o Quíntuple Pentavalente',
            'Sabin OPV',
            'Triple Viral SRP',
            'Gripe',
            'Hepatitis A HA',
            'Tripe Bacteriana Celular DTP',
            'Tripe Bacteriana Acelular dTpa',
            'Doble Bacteriana dT',
            'Virus Popiloma Humano VPH',
            'Doble Viral SR',
            'Fiebre Amarilla',
            'Fiebre Hemorrágina Argentina FHA'
        ],
        rows: [
            'Recién nacido',
            '2 meses',
            '4 meses',
            '6 meses',
            '12 meses',
            '15-18 meses',
            '18 meses',
            '24 meses',
            '5-6 años',
            '11 años',
            'Desde 15 años',
            'Adultos',
            'Embarazadas',
            'Puerperio',
            'Personal de salud'
        ],
        positions: [
            ['Recién nacido','Única dosis','Dosis neonatal','','','','','','','','','','','','','',''],
            ['2 meses','','1º dosis','1º dosis','','1º dosis','','','','','','','','','','',''],
            ['4 meses','','2º dosis','2º dosis','','2º dosis','','','','','','','','','','',''],
            ['6 meses','','','3º dosis','','3º dosis','','Dosis anual (E)','','','','','','','','',''],
            ['12 meses','','Refuerzo','','','','1º dosis','Dosis anual (E)','Única dosis','','','','','','','',''],
            ['15-18 meses','','','','1º refuerzo','4º dosis','','Dosis anual (E)','','','','','','','','',''],
            ['18 meses','','','','','','','Dosis anual (E)','','','','','','','1º dosis (K)','',''],
            ['24 meses','','','','','','','Dosis anual (E)','','','','','','','','',''],
            ['5-6 años','','','','','Refuerzo','2º dosis','','','2º refuerzo','','','','','','',''],
            ['11 años','Iniciar o completar esquema (C)','','','','','Iniciar o completar esquema (D)','','','','Refuerzo','','3º dosis (mujeres)','','Refuerzo (L)','Única dosis (M)',''],
            ['Desde 15 años','','','','','','','','','','','','','','','',''],
            ['Adultos','Iniciar o completar esquema (C)','','','','','Iniciar o completar esquema (D)','','','','','Refuerzo(I)','','Iniciar o completar esquema (D)','Refuerzo (L)','',''],
            ['Embarazadas','','','','','','','Dosis anual (F)','','','Refuerzo (J)','','','','','','Iniciar o completar esquema (D)'],
            ['Puerperio','','','','','','','Dosis anual (G)','','','','','','','','','Iniciar o completar esquema (D)'],
            ['Personal de salud','Iniciar o completar esquema (C)','','','','','','Dosis anual','','','Única dosis (H)','','','Iniciar o completar esquema (D)','','','']
        ]
    },
    history: [
        {
            id: 100,
            date: '10/09/2021',
            site: 'Htal. Fernandez',
            vaccines: [
                {
                    id: 'COD 1234',
                    descripcion: ''
                },
                {
                    id: 'COD 1234',
                    descripcion: ''
                }
            ],
            notes: 'No informa'
        },
        {
            id: 101,
            date: '10/09/2021',
            site: 'Htal. Fernandez',
            vaccines: [
                {
                    id: 'COD 1234',
                    descripcion: ''
                },
                {
                    id: 'COD 1234',
                    descripcion: ''
                }
            ],
            notes: 'No informa'
        },
        {
            id: 102,
            date: '10/09/2021',
            site: 'Htal. Italiano',
            vaccines: [],
            notes: 'No informa'
        },
        {
            id: 103,
            date: '10/09/2021',
            site: 'Consultorios externos',
            vaccines: [
                'COD 1234',
                'COD 1234'
            ],
            notes: []
        }
    ]
}

export default data;