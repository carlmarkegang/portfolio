import React, {Component} from 'react';

const infoBlocks = [
    {
        title: 'Linas Matkasse',
        subTitle: 'Anställd - 2016 - nu',
        icon: '/img/icon1.png',
        description: [
            <p>Framför allt backend-utvecklare för Linas Matkasses interna business-system. Men även engagerad i
                frontendarbete för kundriktade sidor, teknisk support m.m.</p>,
            <p>Årets Anstäld 2017</p>
        ],
        techTags: [
            'PHP',
            'Symfony',
            'Shell',
            'MySQL',
            'JavaScript',
            'jQuery',
            'Docker',
            'WordPress'
        ]
    },

    {
        title: 'Gridtorps Pizzeria',
        subTitle: 'Frilans - 2015',
        icon: '/img/icon2.png',
        description: [
            <p>En sida skapad för Grindtorps pizzeria med adminverktyg med fokus på användarvänlighet. (Inte längre i drift)</p>,
            <p>Finns lite mer om läsa om sidan på min <a href="http://www.markegang.se/archive/portfolio.html#restaurang">före detta portfolio</a></p>
        ],
        techTags: [
            'PHP',
            'JavaScript',
        ]
    },
    {
        title: 'Tetris',
        subTitle: 'Projekt',
        icon: '/img/icon3.png',
        description: [
            <p>Tetris-spel skrivet i Javascript</p>,
            <p><a href="https://github.com/carlmarkegang/canvas-tetris">Spela</a></p>
        ],
        techTags: [
            'Canvas',
            'JavaScript',
        ]
    },

    {
        title: 'Markegang.se',
        subTitle: 'Portfolio',
        icon: '/img/icon4.png',
        description: [
            <p>Sidan du är på just nu är skriven i React med några roliga custom-skrivna transitions. :) <a href="https://github.com/carlmarkegang/portfolio">Källkod</a></p>,
            <p>Du kan även besöka min <a href="http://www.markegang.se/archive/portfolio.html">föregående portfolio-sida</a>,
            som är skriven i Javascript och jQuery. Här finns några fler projekt jag inte har redovisat här.</p>
        ],
        techTags: [
            'React',
            'jQuery',
            'JavaScript'
        ]
    },

    {
        title: 'Forum',
        subTitle: 'Projekt',
        icon: '/img/icon5.png',
        description: [
            <p>Ett forum byggt med MVC-modellen i åtanke.</p>,
            <p><a href="https://github.com/carlmarkegang/practise-api">Källkod</a></p>
        ],
        techTags: [
            'PHP',
            'Symfony',
        ]
    },

    {
        title: 'Svenska Hemag',
        subTitle: 'Slutprojekt',
        icon: '/img/icon6.png',
        description: [
            <p>Som slutprojekt och grupparbete på utbildningen Diplomerad Webbmaster gjorde vi en sida till en hantverkarfirma</p>
        ],
        techTags: [
            'Joomla'
        ]
    },
];

const techTags = {
    PHP: '#3970d6',
    Symfony: '#4f9263',
    Shell: '#020202',
    MySQL: '#f39e02',
    JavaScript: '#9062a7',
    jQuery: '#3e8392',
    Docker: '#ea604e',
    WordPress: '#8f99a3',
    Canvas: '#acdf4d',
    React: '#c3bf29',
    Joomla: '#a05434'
};


class GenericProjectBlock extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    infoBlocks.map(function (d) {
                        return (
                            <tr className="portfolioBlock" key={d.title}>
                                <td className="portfolioBlockImage">
                                    <img src={d.icon} alt=""/>
                                </td>
                                <td className="portfolioBlockText">
                                    <h3 className="portfolioBlockTextHeader">{d.title}</h3>
                                    <h4 className="portfolioBlockTextSubHeader">{d.subTitle}</h4>
                                    {d.description}

                                    <div className="portfolioBlockTechs">
                                            {
                                                d.techTags.map(function (tag) {
                                                    return (
                                                        <span style={{backgroundColor: techTags[tag]}}>{tag}</span>
                                                    )
                                                })
                                            }
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </React.Fragment>
        )


    }

};

export default GenericProjectBlock;