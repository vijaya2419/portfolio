// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';


 const msrProjectData = {
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
				details: 'US Investment Bank',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
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
					'ReactJS',
					'Redux',
					'Selenium',
					'Cucumber',
					'Maven',
					'Junit',
					'Jenkins'
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
				details: 'We had to implemenet different workflows based on supervisors role. Each review spans across multiple tabs where the user had to choose different options and enter text. The challenge we faced in this approach to maintain structured & nested data across pages, so we adapted Redux to store the shared data in Redux stores.',
			},
			{
				id: 2,
				details: 'It was a learning curve for me, since I never worked on these Front end or backend technologies, so I spent extra time to understand the concepts. I adapted learn by practise approach to understand different concepts which worked really well. I received multiple appreciations in delivering all my tasks with high quality.',
			},
		],

	
	},
};

const tumisProjectData = {
	ProjectHeader: {
		title: 'TUMIS',
		publishDate: 'Jan 15, 2023',
		tags: 'Backend & Batch jobs',
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
				details: 'US Investment Bank',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design & Frontend Development',
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
					'ReactJS',
					'Redux',
					'Selenium',
					'Cucumber',
					'Maven',
					'Junit',
					'Jenkins'
				],
			},
		],
		ProjectDetailsHeading: 'Description',
		ProjectDetails: [
			{
				id: 1,
				details: 'Trade Utility Management Information system - Is a reporting application that generates reports (on demand & precomputed) for the application users. It’s a central location for all the reporting needs for various applications connecting different data sources.'
			},
			
		],
		ProjectDetailsChallenge: 'Challenge',
		ProjectChallengeDetails: [
			{
				id: 1,
				details: 'The motive of this application is to maintain historical data,  querying & reporting is becoming expensive so our team decided to create data pipeline to move data from legacy databases to AWS cloud.',
			},
			{
				id: 2,
				details: 'The biggest challenge was to handle variety of database tables, we tactically implemented multiple solutions to process different databases & tables. For example: transactional data tables are growing and we created a job to upload incremental data in the last 24 hrs. For static tables(infrequently updated), we created a different job to upload once a week.'
			},
		],

	
	},
};

const trimsProjectData = {
	ProjectHeader: {
		title: 'TRIMS Imaging ',
		publishDate: 'May 2010',
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
		ClientHeading: 'Banking Clinet',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Major US Bank',
			},
			{
				id: 2,
				title: 'Services',
				details: 'UI Design, Frontend & Backend Development',
			},
			{
				id: 4,
				title: 'Phone',
				details: '001-1234567890',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails: 'To enable end users to upload scanned documents into Trims system',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Java 5',
					'Spring',
					'Hibernate',
					'Ant',
					'VCS',
					'HTML',
					'Javascript',
					'CSS'
				],
			},
		],
		ProjectDetailsHeading: 'Description',
		ProjectDetails: [
			{
				id: 1,
				details: 'The TRIMS Imaging System is a Document Archival and Workflow system for the Trade Finance Business, which helps the user to store and retrieve scanned images and also determine the complete workflow for a particular item. All documents that come in via mail and all electronic messages that come in (and go out) via other formats like SWIFT have to be available to the Trade processors as images and Trims Imaging System offers the capability to store and retrieve these images.'
			},
			
		],
		ProjectDetailsChallenge: 'Challenge',
		ProjectChallengeDetails: [
			{
				id: 1,
				details: 'We were following waterfall methodology to deliver the project. We built the project from scratch, initially we had to build html prototypes to build the web pages, post approval we had to develop the actual UI.',
			},
			{
				id: 2,
				details: 'I faced many challenges like technical, functional. I overcomed all those challenges by addressing each challenge individually. For functional, I organized multiple meetings with business analysts and I documented my knowledge in a word document by adding few diagrams which can be easily understand by other team members.',
			},
			{
				id: 3,
				details: 'I overcomed my technical challenges by coordinating with senior people who experienced similar situations and I practised more in the areas where I was not comfortable.',
			},
		],

	
	},
};

export const multipleProjectsData = {
	projects : [msrProjectData, tumisProjectData, trimsProjectData]
}
