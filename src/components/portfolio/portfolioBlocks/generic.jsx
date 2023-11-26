import React, { Component } from 'react';

const infoBlocks = [
    {
        title: 'DPJ Workspace',
        subTitle: 'Anställd - 2022 - nu',
        icon: '/img/dpj.png',
        description: [
            <p>Fullstack utvecklare hos DPJ Workspace</p>
        ],
        techTags: [
            'PHP',
            'PrestaShop',
            'Symfony',
            'JavaScript',
            'jQuery',
            'Sass',
        ]
    },
    {
        title: 'InfoSolutions',
        subTitle: 'Anställd - 2019 - 2022',
        icon: '/img/infosolutions.png',
        description: [
            <p>Utvecklare hos InfoSolutions</p>
        ],
        techTags: [
            'ASP.NET',
            'C#',
            'VB',
            'MSSQL',
            'JavaScript',
            'jQuery',
            'WordPress'
        ]
    },
    {
        title: 'Linas Matkasse',
        subTitle: 'Anställd - 2016 - 2018',
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
        title: 'Personliga projekt på GitHub',
        subTitle: 'Projekt',
        icon: '/img/github.png',
        description: [
            <p>Jag håller ofta på med olika egna kod-projekt på fritiden. <br />
                <a href="https://github.com/carlmarkegang">Besök min GitHub för att se mer</a></p>,
        ],
        techTags: []
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
    Joomla: '#a05434',
    'ASP.NET': '#62a7a0',
    'C#': '#d02424',
    VB: '#768424',
    MSSQL: '#1a866c',
    GitHub: '#020202',
    PrestaShop: '#8f99a3',
    Sass: '#e766d5',
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
                                    <img src={d.icon} alt="" />
                                </td>
                                <td className="portfolioBlockText">
                                    <h3 className="portfolioBlockTextHeader">{d.title}</h3>
                                    <h4 className="portfolioBlockTextSubHeader">{d.subTitle}</h4>
                                    {d.description}

                                    <div className="portfolioBlockTechs">
                                        {
                                            d.techTags.map(function (tag) {
                                                return (
                                                    <span style={{ backgroundColor: techTags[tag] }}>{tag}</span>
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