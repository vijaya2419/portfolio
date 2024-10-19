// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';



export const singleProjectData = {
	ProjectHeader: {
		title: 'MSR (My Supervisory reviews)',
		publishDate: 'Jan 31, 2021',
		tags: 'Frontend & Backend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Investment Bank',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://jpmchase.com',
			},
			{
				id: 4,
				title: 'Phone',
				details: '0400009998',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails: 'To enable supervisors to complete the review process.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Java8',
					'Spring Boot',
					'ReactJs',
					'Redux',
					'selenium',
					'cucumber',
				],
			},
		],
		ProjectDetailsHeading: 'Description',
		ProjectDetails: [
			{
				id: 1,
				details: 'MSR is a workflow-based application, where we generate Monthly, Quarterly, And Annual reports for employees in different line of businesses and for different regions.  Each user (supervisory manager) is granted with different roles and each role has different functionality. We followed agile methodology and release to production every quarterly.'
			},
			
		],
		ProjectDetailsChallenge: 'Challenge',
		ProjectChallengeDetails: [
			{
				id: 1,
				details: 'Challenge1',
			},
		],

	
	},
};
