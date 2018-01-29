/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
  res.json([
	{
		"name": "Ethan Oconnor",
		"email": "consectetuer.adipiscing@magna.ca",
		"company": "Felis Orci LLP",
		"region": "North Island",
		"zipCode": "24789",
		"info": "tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi.",
		"country": "French Guiana",
		"phone": "(07033) 6749883",
		"city": "Masterton",
		"organisationNumber": "14679855099"
	},
	{
		"name": "Mufutau Morton",
		"email": "viverra.Maecenas.iaculis@idantedictum.net",
		"company": "Fermentum LLP",
		"region": "CA",
		"zipCode": "4427",
		"info": "pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus",
		"country": "Australia",
		"phone": "(039866) 378431",
		"city": "Fresno",
		"organisationNumber": "44589410799"
	},
	{
		"name": "Brett Rowe",
		"email": "nulla.Integer.urna@Donec.ca",
		"company": "Magna A Tortor Foundation",
		"region": "Alaska",
		"zipCode": "Z0F 4HM",
		"info": "Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem,",
		"country": "Belgium",
		"phone": "(043) 20329729",
		"city": "Fairbanks",
		"organisationNumber": "18536149999"
	},
	{
		"name": "Hamish Dominguez",
		"email": "non.cursus.non@placeratorcilacus.edu",
		"company": "Molestie Sodales Industries",
		"region": "ON",
		"zipCode": "799648",
		"info": "quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar",
		"country": "Comoros",
		"phone": "(031910) 860364",
		"city": "Northumberland",
		"organisationNumber": "08910579099"
	},
	{
		"name": "Joseph Lott",
		"email": "sed.orci@parturientmontesnascetur.ca",
		"company": "In Corp.",
		"region": "LX",
		"zipCode": "482987",
		"info": "in lobortis tellus justo sit amet nulla. Donec non justo.",
		"country": "Qatar",
		"phone": "(09646) 9248223",
		"city": "Muno",
		"organisationNumber": "55375970199"
	},
	{
		"name": "Dylan Spence",
		"email": "amet.risus.Donec@mollislectus.net",
		"company": "Mus PC",
		"region": "BK",
		"zipCode": "SI28 7RZ",
		"info": "malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam",
		"country": "Jersey",
		"phone": "(096) 24264872",
		"city": "Milton Keynes",
		"organisationNumber": "05991204999"
	},
	{
		"name": "Jason Santos",
		"email": "sed.dictum.eleifend@aduiCras.edu",
		"company": "Aliquam Rutrum Lorem Corporation",
		"region": "KC",
		"zipCode": "8561",
		"info": "enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula",
		"country": "Marshall Islands",
		"phone": "(050) 14005373",
		"city": "Laurencekirk",
		"organisationNumber": "91964071399"
	},
	{
		"name": "Lawrence Lynch",
		"email": "dictum.Phasellus.in@dolor.ca",
		"company": "In Incorporated",
		"region": "Ist",
		"zipCode": "46467",
		"info": "Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec,",
		"country": "United Kingdom (Great Britain)",
		"phone": "(00625) 0899885",
		"city": "Istanbul",
		"organisationNumber": "12601636699"
	},
	{
		"name": "Bruce Logan",
		"email": "amet.ornare@risusIn.edu",
		"company": "Amet Ornare Lectus LLC",
		"region": "QC",
		"zipCode": "40506",
		"info": "porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor",
		"country": "Czech Republic",
		"phone": "(031888) 156636",
		"city": "Malbaie",
		"organisationNumber": "58873829399"
	},
	{
		"name": "Tyrone Garcia",
		"email": "orci@ipsumsodales.ca",
		"company": "Metus In Corporation",
		"region": "Devon",
		"zipCode": "61-049",
		"info": "purus, in molestie tortor nibh sit amet orci. Ut sagittis",
		"country": "Serbia",
		"phone": "(05610) 3597924",
		"city": "Barnstaple",
		"organisationNumber": "64968231999"
	},
	{
		"name": "Wallace Winters",
		"email": "Morbi.non.sapien@in.ca",
		"company": "Nonummy Industries",
		"region": "Podkarpackie",
		"zipCode": "60004",
		"info": "malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis.",
		"country": "Pakistan",
		"phone": "(09615) 6470362",
		"city": "Rzeszów",
		"organisationNumber": "93726949699"
	},
	{
		"name": "Norman Goodwin",
		"email": "ipsum@maurisanunc.org",
		"company": "Feugiat Metus Sit Incorporated",
		"region": "NB",
		"zipCode": "J27 6UM",
		"info": "montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc",
		"country": "Bulgaria",
		"phone": "(023) 49819902",
		"city": "Tracadie-Shelia",
		"organisationNumber": "33694115299"
	},
	{
		"name": "Fuller Rosario",
		"email": "at.velit.Cras@scelerisquelorem.ca",
		"company": "Luctus Associates",
		"region": "MG",
		"zipCode": "30944559",
		"info": "magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna.",
		"country": "Puerto Rico",
		"phone": "(012) 60452082",
		"city": "Belo Horizonte",
		"organisationNumber": "30751580799"
	},
	{
		"name": "Yoshio Bartlett",
		"email": "Nam@maurisaliquam.com",
		"company": "Est Ac Mattis LLC",
		"region": "Vienna",
		"zipCode": "B7H 3N1",
		"info": "conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien",
		"country": "Latvia",
		"phone": "(06797) 3862644",
		"city": "Vienna",
		"organisationNumber": "49851883399"
	},
	{
		"name": "Gareth Franco",
		"email": "Morbi@quispedePraesent.net",
		"company": "Libero Mauris Aliquam Ltd",
		"region": "AP",
		"zipCode": "858806",
		"info": "sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam",
		"country": "Kuwait",
		"phone": "(035483) 505552",
		"city": "Karimnagar",
		"organisationNumber": "22963000499"
	},
	{
		"name": "Clarke Rivers",
		"email": "pede@fringillami.org",
		"company": "Vestibulum Ante Ipsum Company",
		"region": "RI",
		"zipCode": "51234",
		"info": "Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna.",
		"country": "Colombia",
		"phone": "(03736) 2284072",
		"city": "Buguma",
		"organisationNumber": "40215011399"
	},
	{
		"name": "Benjamin Carr",
		"email": "Duis@metus.com",
		"company": "Ipsum Dolor Limited",
		"region": "Shetland",
		"zipCode": "V7 0NJ",
		"info": "magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac",
		"country": "Guadeloupe",
		"phone": "(0292) 74977033",
		"city": "Baltasound",
		"organisationNumber": "72836145799"
	},
	{
		"name": "Thaddeus Ballard",
		"email": "turpis.vitae.purus@nonbibendum.net",
		"company": "Molestie Sodales Mauris PC",
		"region": "F",
		"zipCode": "72550",
		"info": "ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor",
		"country": "Virgin Islands, United States",
		"phone": "(037485) 504420",
		"city": "Nässjö",
		"organisationNumber": "61229435399"
	},
	{
		"name": "Rigel Powell",
		"email": "pharetra.sed.hendrerit@NullamenimSed.ca",
		"company": "Vitae Sodales Nisi Foundation",
		"region": "Diyarbakır",
		"zipCode": "2448",
		"info": "felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit",
		"country": "Suriname",
		"phone": "(030128) 956451",
		"city": "Bismil",
		"organisationNumber": "11876885299"
	},
	{
		"name": "Declan Knapp",
		"email": "lacus.varius.et@montes.edu",
		"company": "Proin Nisl Sem Consulting",
		"region": "Goiás",
		"zipCode": "XB6 1JV",
		"info": "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec",
		"country": "Laos",
		"phone": "(084) 96186080",
		"city": "Valparaíso de Goiás",
		"organisationNumber": "68482174099"
	},
	{
		"name": "Keaton Munoz",
		"email": "pede@afeugiattellus.co.uk",
		"company": "Ipsum Phasellus Vitae PC",
		"region": "RU",
		"zipCode": "V7R 4H6",
		"info": "justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate,",
		"country": "Japan",
		"phone": "(083) 51652379",
		"city": "Oakham",
		"organisationNumber": "86349697499"
	},
	{
		"name": "Aquila Rowland",
		"email": "Curabitur.dictum.Phasellus@nunc.com",
		"company": "Tristique Pharetra Quisque Limited",
		"region": "New South Wales",
		"zipCode": "241397",
		"info": "eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed",
		"country": "Isle of Man",
		"phone": "(05513) 9037755",
		"city": "Blue Mountains",
		"organisationNumber": "91628024299"
	},
	{
		"name": "Orlando Bartlett",
		"email": "auctor.non.feugiat@in.net",
		"company": "Fermentum Inc.",
		"region": "New South Wales",
		"zipCode": "00888",
		"info": "vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor",
		"country": "Anguilla",
		"phone": "(08954) 5704044",
		"city": "Parramatta",
		"organisationNumber": "05253981299"
	},
	{
		"name": "Myles Hebert",
		"email": "sit@velnislQuisque.edu",
		"company": "Sapien LLP",
		"region": "Jönköpings län",
		"zipCode": "331527",
		"info": "vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id",
		"country": "Belgium",
		"phone": "(037900) 684594",
		"city": "Jönköping",
		"organisationNumber": "17418343299"
	},
	{
		"name": "Hu Foster",
		"email": "varius.et@tristiquepellentesquetellus.org",
		"company": "Mus Aenean LLC",
		"region": "VIC",
		"zipCode": "80800",
		"info": "Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim,",
		"country": "Bangladesh",
		"phone": "(0433) 56309853",
		"city": "Geelong",
		"organisationNumber": "54851186799"
	},
	{
		"name": "Carl Page",
		"email": "Suspendisse@Donec.org",
		"company": "Lorem Sit Amet Inc.",
		"region": "MS",
		"zipCode": "8177",
		"info": "sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam",
		"country": "Cuba",
		"phone": "(03782) 9191360",
		"city": "Gulfport",
		"organisationNumber": "28549415899"
	},
	{
		"name": "Lev Aguirre",
		"email": "nibh.Aliquam.ornare@amet.com",
		"company": "Non Arcu Vivamus Incorporated",
		"region": "Aquitaine",
		"zipCode": "09487",
		"info": "bibendum fermentum metus. Aenean sed pede nec ante blandit viverra.",
		"country": "Palau",
		"phone": "(038409) 093657",
		"city": "Talence",
		"organisationNumber": "94600274999"
	},
	{
		"name": "Hasad Kidd",
		"email": "risus.Donec@consectetuer.edu",
		"company": "Consectetuer Adipiscing Industries",
		"region": "Merionethshire",
		"zipCode": "690449",
		"info": "Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum.",
		"country": "Portugal",
		"phone": "(069) 40559196",
		"city": "Bala",
		"organisationNumber": "22964623399"
	},
	{
		"name": "Tiger Dejesus",
		"email": "congue.elit@enimdiamvel.com",
		"company": "Vel Arcu PC",
		"region": "Nord-Pas-de-Calais",
		"zipCode": "11615",
		"info": "sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor",
		"country": "Tokelau",
		"phone": "(03874) 8192714",
		"city": "Hénin-Beaumont",
		"organisationNumber": "87979648499"
	},
	{
		"name": "Omar Duncan",
		"email": "sed.turpis@risusNulla.net",
		"company": "Volutpat Ltd",
		"region": "Waals-Brabant",
		"zipCode": "30282",
		"info": "eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est.",
		"country": "Sweden",
		"phone": "(023) 38101143",
		"city": "Folx-les-Caves",
		"organisationNumber": "39993348799"
	},
	{
		"name": "Mufutau Hickman",
		"email": "dolor@Fusce.net",
		"company": "Faucibus Consulting",
		"region": "L",
		"zipCode": "R4T 0R3",
		"info": "ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt",
		"country": "Bahrain",
		"phone": "(0493) 44779357",
		"city": "Limón (Puerto Limón)",
		"organisationNumber": "20830288899"
	}
]);
};
