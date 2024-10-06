import { ProjectCard } from "./ProjectCards"

export const Projects = () => {
    const projectData = [
        {
            title: 'Voici le titre 1!',
            description: 'Description for project 1 goes here.',
            image: 'https://via.placeholder.com/150', // Replace with actual image URLs
        },
        {
            title: 'Voici le titre 2!',
            description: 'Description for project 2 goes here.',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Voici le titre 3!',
            description: 'Description for project 3 goes here.',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Voici le titre 4!',
            description: 'Description for project 4 goes here.',
            image: 'https://via.placeholder.com/150',
        },
    ];
    return (
        <section>
            <div className="container mx-auto relative bg-center bg-no-repeat pb-[30px] pt-[30px]">
                <div className="grid grid-cols-3 gap-4">
                    {projectData.map((project, index) => (
                        <div key={index}>
                            <ProjectCard
                                image={project.image}
                                description={project.description}
                                title={project.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}