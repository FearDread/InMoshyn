import fear1 from '../../assets/projects/fear-admin-project-1.png'
import fear2 from '../../assets/projects/fear-admin-project-2.png'
import fear3 from '../../assets/projects/fear-admin-project-3.png'

export const imagesList = {
    'fear': [fear1, fear2, fear3],
    'ekomix': [fear1, fear2, fear3],
    'gfolio': [fear1, fear2, fear3],
    'fear-admin': [fear1, fear2, fear3],
}

export const projects = [
    {
        id: 'fear-api',
        'card-title': 'fear-api',
        title: 'F.E.A.R API',
        description: {
            concept: "The corporate website we created for YesOR is a digital beacon that not only mirrors their corporate persona but also affirms their position as a market leader.",
            year: '2024',
            client: 'express',
            website: 'June 2, 2023',
        },
        tags: [ 'REST', 'Development' ],
        images: [imagesList['fear']],
    },
    {
        id: 'E-Komix',
        'card-title': 'Knebel',
        title: 'Knebel: E-Commerce Development',
        description: {
            concept: "The e-commerce development endeavour for Knebel has revolutionized online retail experience, providing a robust platform that heightens customer engagement and propels sales.",
            year: '2023',
            client: 'Knebel',
            website: 'June 2, 2023',
        },
        tags: [ 'UI/UX','Development','E-Commerce' ],
        images: [imagesList['fear']],
    },
    {
        id: 'fear-admin',
        'card-title': 'Uwehub',
        title: 'Uwehub: Educational Website',
        description: {
            concept: "The multilingual website for Uwehub Educational Center that we built serves as a universal platform for education, demolishing language barriers and making learning accessible to an international audience.",
            year: '2022',
            client: 'Uwehub',
            website: 'June 2, 2023',
        },
        tags: [ 'UI/UX', 'Development' ],
        images: [imagesList['fear']],
    }
]



