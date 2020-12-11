$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/beatbox.jpg',
            link: 'https://github.com/alikwon/BIT_CAMP/tree/master/BitBox',
            title: 'BeatBox',
            demo: false,
            technologies: ['JAVA'],
            description: "[자바 미니프로젝트] 기초를 다지기 위해 이클립스 콘솔창을 이용하는 간단한 영화 예매 프로그램 구현",
            categories: ['java']
        },
        {
            image: 'assets/images/bitcafe.jpg',
            link: 'https://github.com/alikwon/BIT_CAMP/tree/master/CafeProject',
            title: 'Cafe Kiosk',
            demo: false,
            technologies: ['HTML', 'JavaScript','CSS','JQuery','JSON'],
            description: "[웹표준 프로젝트] 카페 키오스크를 HTML5를 이용해 구현",
            categories: ['html']
        },
        {
            image: 'assets/images/mangch.jpg',
            link: 'https://github.com/alikwon/AIA-Mangchi',
            title: 'Mangch',
            demo: false,
            technologies: ['JSP', 'JSTL','MySQL','AWS','Bootstrap'],
            description: "[자바 MVC구현 프로젝트] 우리동네 대여 프로그램",
            categories: ['jsp']
        },
        {
            image: 'assets/images/mangch-final.jpg',
            link: 'https://github.com/alikwon/BIT_CAMP/tree/master/Spring_project/Mangch-chat',
            title: 'Mangch-Final',
            demo: 'http://ec2-54-180-115-119.ap-northeast-2.compute.amazonaws.com:8080/mangh/',
            technologies: ['Spring Legacy', 'JSP','JSTL','HTML5','MySQL','MyBatis','AWS'],
            description: "[Spring 프로젝트] 우리동네 대여 프로그램",
            categories: ['spring']
        },
        
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}