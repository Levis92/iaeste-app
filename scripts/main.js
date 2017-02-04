var data = {internships: [
{	
		refNr: 'AT-2017-4004LE',
		employer: 'Chair of Energy Network Technology, Montanuniversität Leoben',
		country: 'Austria',
		countryImage: 'images/flags/austria.svg',
		location: 'Leoben',
		description: 'Large and complex energy systems are investigated for potential energy savings and the integration of renewable energy sources. Methodical process analysis is used to identify possible optimization fields and later on to evaluate effects and implications of any changes. Optimization fields might be the use of waste heat recovery, the integration of storages or the use of renewable energy sources. The trainee will be involved in a couple of projects in the topics stated above depend.',
		studyLevel: 'End (7 semesters and over)',
		languages: ['English (Excellent)', 'Other'],
		website: '',
		field: ['Electrical Engineering', 'Energy Engineering', 'Other'],
		fieldAbbr: 'E',
		specialization: ['Renewable Energies', 'Process- & Data Engineering', 'Energy System Engineering', 'Energy Storage'],
		nrOfWeeks: '26 - 26',
		period: '01-FEB-2017 - 30-NOV-2017'
},
{	
		refNr: 'BE-2017-088UGE',
		employer: 'Starfisk nv',
		country: 'Belgium',
		countryImage: 'images/flags/belgium.svg',
		location: 'Gent',
		description: "We offer a workplace in Ghent with nice office space, high level colleagues, good working atmosphere. We provide software co-create platforms with our customers to build state of the art cloud software solutions based upon the WSO2 integration technology. A main objective is to re-use existing software modules that already exist on the marketplace. We also act as venture builder and stimulate a very entrepreneurial spirit. We have a team of WSO2 guru's to facilitate the co-create platforms. Our website can be visited at www.starfisk.com (will be updated in jan 2017)", 
		studyLevel: 'End (7 semesters and over)',
		languages: ['English (Excellent)', 'Other'],
		website: '',
		field: ['IT'],
		fieldAbbr: 'IT',
		specialization: ['Computer Science', 'Software Engineering'],
		nrOfWeeks: '40 - 60',
		period: '01-APR-2017 - 01-APR-2018'
},
{	
		refNr: 'BR-2017-0205ES',
		employer: "FAACZ - Faculdades Integradas de Aracruz",
		country: 'Brazil',
		countryImage: 'images/flags/brazil.svg',
		location: 'Aracruz',
		description: 'Large and complex energy systems are investigated for potential energy savings and the integration of renewable energy sources. Methodical process analysis is used to identify possible optimization fields and later on to evaluate effects and implications of any changes. Optimization fields might be the use of waste heat recovery, the integration of storages or the use of renewable energy sources. The trainee will be involved in a couple of projects in the topics stated above depend.',
		studyLevel: 'End (7 semesters and over)',
		languages: ['English (Good)', 'Spanish (Good)'],
		website: '',
		field: ['Mechanical Engineering'],
		fieldAbbr: 'M',
		specialization: [''],
		nrOfWeeks: '22 - 24',
		period: '01-JUN-2017 - 30-NOV-2017'
},
{	
		refNr: 'CA-2017-000024',
		employer: 'Peter J. Kindree Architect',
		country: 'Canada',
		countryImage: 'images/flags/canada.svg',
		location: 'Ottawa',
		description: 'Looking for a fairly advanced senior architecture student, nearing completion of their studies. Computer systems and software provided by the employer.',
		studyLevel: 'End (7 semesters and over)',
		languages: ['English (Excellent)', 'Other'],
		website: '',
		field: ['Architecture'],
		fieldAbbr: 'A',
		specialization: ['Renewable Energies', 'Process- & Data Engineering', 'Energy System Engineering', 'Energy Storage'],
		nrOfWeeks: '16 - 20',
		period: '01-APR-2017 - 01-SEP-2017'
},
{	
		refNr: 'CH-2017-000005',
		employer: 'Hochstrasser Glaus & Partner Cons. AG',
		country: 'Switzerland',
		countryImage: 'images/flags/switzerland.svg',
		location: 'Zürich',
		description: 'We offer a good, varied and evolving work in a collegial and young team. Your modern workplace is located in a convenient position (Station Altstetten ZH), and has a very good infrastructure. Moreover, we offer flexible schedules and individual training opportunities. We are a mechanical engineering firm involved specifically in the design and construction supervision of building heating, residential and industrial buildings, our strengths reside in the institutional areas specifically hospitals, clean rooms and laboratory HVAC systems.',
		studyLevel: 'End (7 semesters and over)',
		languages: ['English (Excellent)', 'Other'],
		website: '',
		field: ['Mechanical Engineering'],
		fieldAbbr: 'E',
		specialization: ['HVAC Engineering'],
		nrOfWeeks: '25 - 27',
		period: '01-AUG-2017 - 31-JAN-2018'
}
]};

var mainContent;

document.addEventListener('DOMContentLoaded', function(){
	mainContent = document.getElementsByTagName('main')[0];

	addInternships();
	addInternships();
	addInternships();
});

function addInternships() {
	for (var i = 0; i < data.internships.length; i++) {
		// Creates container for internship
		var container = document.createElement('div');
		container.classList.add('internship');
		// Creates left side content
		var leftContent = document.createElement('div');
		leftContent.classList.add('left-content');
		var image = document.createElement('img');
		image.src = data.internships[i].countryImage;
		leftContent.appendChild(image);
		var location = document.createElement('h3');
		var textNode = document.createTextNode(data.internships[i].location)
		location.appendChild(textNode);
		leftContent.appendChild(location);
		// Creates right side content
		var rightContent = document.createElement('div');
		rightContent.classList.add('right-content');
		var employer = document.createElement('h2');
		textNode = document.createTextNode(data.internships[i].employer)
		employer.appendChild(textNode);
		rightContent.appendChild(employer);
		var text = document.createElement('h3');
		textNode = document.createTextNode('Weeks Offered: ' + data.internships[i].nrOfWeeks)
		text.appendChild(textNode);
		rightContent.appendChild(text);
		text = document.createElement('h3');
		textNode = document.createTextNode('Within the months: ' + data.internships[i].period)
		text.appendChild(textNode);
		rightContent.appendChild(text);
		text = document.createElement('h3');
		textNode = document.createTextNode('Fields: ' + data.internships[i].fieldAbbr)
		text.appendChild(textNode);
		rightContent.appendChild(text);
		// Append content
		container.appendChild(leftContent);
		container.appendChild(rightContent);
		mainContent.appendChild(container);
	}
}



