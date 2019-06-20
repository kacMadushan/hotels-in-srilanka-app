import uuid from 'uuid';

const hotelImages = '/images/hotels'

const hotels = [
	{
		id: uuid(),
		thumb: `${hotelImages}/ozo-kandy.jpg`,
		name: 'OZO Kandy Sri Lanka',
		location: 'Kandy',
		telephone: '0812 030 700',
		description: 'Surrounded by lush mountains dotted with residences, this sophisticated hotel is less than 1 km from Kandy Lake and 2 km from Kandy Railway Station.'
	},
	{
		id: uuid(),
		thumb: `${hotelImages}/cinnamon-lodge-habarana.jpg`,
		name: 'Cinnamon Lodge Habarana',
		location: 'Habarana',
		telephone: '0662 270 011',
		description: 'Set amid tropical forest, this upscale hotel is 9 km from Minneriya National Park and 16 km from Sigiriya, an ancient city and fortress.'
	},
	{
		id: uuid(),
		thumb: `${hotelImages}/heritance-kandalama.jpg`,
		name: 'Heritance Kandalama',
		location: 'Dambulla',
		telephone: '0665 555 000',
		description: 'Set amidst jungle on a mountainside overlooking the Sigiriya rock fortress, this eco-chic hotel is next to Kandalama Reservoir and 10 km from the Golden Temple of Dambulla.'
	},
	{
		id: uuid(),
		thumb: `${hotelImages}/aliya-resort-spa.jpg`,
		name: 'Aliya Resort & Spa',
		location: 'Sigiriya',
		telephone: '0662 040 400',
		description: 'Set across a streamlined complex in the lush countryside, this refined resort is less than 1 km from the A6 motorway and 14 km from the ancient ruins of Sigiriya.'
	},
	{
		id: uuid(),
		thumb: `${hotelImages}/jetwin-lake.jpg`,
		name: 'Jetwing Lake',
		location: 'Dambulla',
		telephone: '0662 040 700',
		description: 'In a leafy, lakeside property, this high-end hotel is 3 km from Dambulla Cave Temple and 6 km from Popham\'s Arboretum.'
	},
	{
		id: uuid(),
		thumb: `${hotelImages}/queens-hotel.jpg`,
		name: 'Queen\'s Hotel',
		location: 'Kandy',
		telephone: '0812 233 026',
		description: 'A 5-minute walk from Sri Dalada Maligawa, a Buddhist temple, this British Colonial style upscale hotel overlooks Kandy Lake and is a 6-minute walk from the Royal Palace of Kandy.'
	},
	{
		id: uuid(),
		thumb: `${hotelImages}/the-kingsbury.jpg`,
		name: 'The Kingsbury Colombo',
		location: 'Colombo',
		telephone: '0112 421 221',
		description: 'Overlooking the Indian Ocean, this refined hotel is 2 km from Galle Face Green park and Beira Lake.'
	},
	{
		id: uuid(),
		thumb: `${hotelImages}/galle-face-hotel.jpg`,
		name: 'Galle Face Hotel',
		location: 'Colombo',
		telephone: '0112 541 010',
		description: 'Overlooking the Indian Ocean, this luxe hotel dating from 1864 is 1 km from Galle Face Green park and 2 km from Gangaramaya Buddhist Temple.'
	},
	{
		id: uuid(),
		thumb: `${hotelImages}/hotel-galadari.jpg`,
		name: 'Hotel Galadari',
		location: 'Colombo',
		telephone: '0112 544 544',
		description: 'Overlooking the Laccadive Sea, this upscale hotel is a 15-minute walk from Galle Face Green park, 3 km from Gangaramaya Buddhist Temple and 11 km from the National Zoological Gardens of Sri Lanka.'
	},
	{
		id: uuid(),
		thumb: `${hotelImages}/cinnamon-grand.jpg`,
		name: 'Cinnamon Grand Colombo',
		location: 'Colombo',
		telephone: '0112 437 437',
		description: 'Set 1 km from both the Slave Island Railway Station and Galle Face Green, a seaside urban park, this grand resort hotel is also 2 km from Gangaramaya Buddhist Temple.'
	}
];

export default hotels;