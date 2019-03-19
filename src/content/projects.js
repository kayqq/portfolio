import piccup from 'images/piccup.png';
import facedetector from 'images/facedetector.png';
import phoneshop from 'images/phoneshop.png';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
    {
        title: 'Fortnite Boards',
        description:
            'A tool that tracks player stats in Fortnite and handles custom leaderboard creation',
        skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ES6', 'ReactJS', 'Next.js'],
        image: phoneshop,
        links: {
            github: 'https://github.com/kayqq/fortniteboards;',
            preview: 'https://fortniteboards.kennyquan.com/'
        }
    },
    {
        title: 'PiccUp',
        description: 'A web app that helps people plan pick-up basketball games',
        skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ES6', 'ReactJS', 'Redux'],
        image: piccup,
        links: {
            github: 'https://github.com/kayqq/piccup',
            preview: 'https://piccup.kennyquan.com/'
        }
    },
    {
        title: 'Face Detector',
        description:
            'My first major app built with ReactJS and it was a tremendous learning experience.',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Redux'],
        image: facedetector,
        links: {
            github: 'https://github.com/kayqq/face-detector',
            preview: 'https://facedetector.kennyquan.com/'
        }
    }
];
