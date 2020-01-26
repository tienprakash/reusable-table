import { IProjectModel } from '../projects-module/models/project-model';

export const Projects: IProjectModel[] = [
    {
        id: 1,
        name: 'Mercury',
        cost: 277000000,
        first_flight: '9/17/2016',
        status: 'Complete',
    },
    {
        id: 2,
        name: 'Gemini',
        cost: 1300000000,
        first_flight: '9/15/2016',
        status: 'Complete',
    },
    {
        id: 3,
        name: 'Apollo',
        cost: 25400000000,
        first_flight: '4/17/2016',
        status: 'Complete',
    },
    {
        id: 4,
        full_name: 'Skylab',
        first_flight: '5/16/2016',
        status: 'Complete',
    },
    {
        id: 5,
        full_name: 'Apollo-Soyuz',
        first_flight: '5/10/2016',
        status: 'Complete',
    },
    {
        id: 6,
        name: 'Space Shuttle',
        cost: 196000000000,
        first_flight: '8/27/2016',
        status: 'Complete'
    },
];
