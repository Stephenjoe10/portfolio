export type SanityImage = {
	asset: {
		_ref: string;
		_type: "reference";
	};
};

export type SanityFile = SanityImage;

export type Portfolio = {
	title: string
	header: {
		mainText: string;
		subText1: string;
		subText2: string;
		experience: string;
		image: SanityImage;
	};

	about: {
		heading: string;
		mainText: string;
		subText1: string;
		subText2: string;

		personalCapabilities: {
			title: string;
			data: string[];
			size: string
		}[];

		learning: {
			heading: string;
			data: {
				title: string;
				text: string;
			}[];
		};
	};

	projects: {
		heading: string;
		subHeading: string;

		data: {
			title: string;
			label: string;
			subText1: string;
			subText2: string;
			technologies: string[];
			apk?: SanityFile;
			github?: string;
			images: SanityImage[];
		}[];
	};

	experience: {
		heading: string;
		subHeading: string;

		data: {
			projectTitle: string;
			projectDescription: string;
			startYear: string;
			endYear: string;
		}[];
	};
	contact: {
		heading: string;
		subHeading: string;
	}

	footerContent: string;
	gitHubLink: string;
	linkedInLink: string;
	email: string;
	phone: string;
	address: string;

	resume: SanityFile;
};