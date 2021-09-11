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
    ]
}

export default data;