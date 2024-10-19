import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectRelatedProjects = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{singleProjectData.RelatedProject.title}
			</p>

		</div>
	);
};

export default ProjectRelatedProjects;
