//America_flashcards.js

//Array that stores all countries in America
let countries = new Array ("Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
                           "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan","Minnesota", "Mississippi", "Missouri",
                           "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
                           "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
                           "West Virginia", "Wisconsin", "Wyoming");

//Array that stores all links to American flags
let links = new Array ("https://flagcdn.com/h120/us-al.png",
                       "https://flagcdn.com/h120/us-ak.png",
                       "https://flagcdn.com/h120/us-az.png",
                       "https://flagcdn.com/h120/us-ar.png",
                       "https://flagcdn.com/h120/us-ca.png",
                       "https://flagcdn.com/h120/us-co.png",
                       "https://flagcdn.com/h120/us-ct.png",
                       "https://flagcdn.com/h120/us-de.png",
                       "https://flagcdn.com/h120/us-fl.png",
                       "https://flagcdn.com/h120/us-ga.png",
                       "https://flagcdn.com/h120/us-hi.png",
                       "https://flagcdn.com/h120/us-id.png",
                       "https://flagcdn.com/h120/us-il.png",
                       "https://flagcdn.com/h120/us-in.png",
                       "https://flagcdn.com/h120/us-ia.png",
                       "https://flagcdn.com/h120/us-ks.png",
                       "https://flagcdn.com/h120/us-ky.png",
                       "https://flagcdn.com/h120/us-la.png",
                       "https://flagcdn.com/h120/us-me.png",
                       "https://flagcdn.com/h120/us-md.png",
                       "https://flagcdn.com/h120/us-ma.png",
                       "https://flagcdn.com/h120/us-mi.png",
                       "https://flagcdn.com/h120/us-mn.png",
                       "https://flagcdn.com/h120/us-ms.png",
                       "https://flagcdn.com/h120/us-mo.png",
                       "https://flagcdn.com/h120/us-mt.png",
                       "https://flagcdn.com/h120/us-ne.png",
                       "https://flagcdn.com/h120/us-nv.png",
                       "https://flagcdn.com/h120/us-nh.png",
                       "https://flagcdn.com/h120/us-nj.png",
                       "https://flagcdn.com/h120/us-nm.png",
                       "https://flagcdn.com/h120/us-ny.png",
                       "https://flagcdn.com/h120/us-nc.png",
                       "https://flagcdn.com/h120/us-nd.png",
                       "https://flagcdn.com/h120/us-oh.png",
                       "https://flagcdn.com/h120/us-ok.png",
                       "https://flagcdn.com/h120/us-or.png",
                       "https://flagcdn.com/h120/us-pa.png",
                       "https://flagcdn.com/h120/us-ri.png",
                       "https://flagcdn.com/h120/us-sc.png",
                       "https://flagcdn.com/h120/us-sd.png",
                       "https://flagcdn.com/h120/us-tn.png",
                       "https://flagcdn.com/h120/us-tx.png",
                       "https://flagcdn.com/h120/us-ut.png",
                       "https://flagcdn.com/h120/us-vt.png",
                       "https://flagcdn.com/h120/us-va.png",
                       "https://flagcdn.com/h120/us-wa.png",
                       "https://flagcdn.com/h120/us-wv.png",
                       "https://flagcdn.com/h120/us-wi.png",
                       "https://flagcdn.com/h120/us-wy.png");

//Array that stores all links to small American flags
let links2 = new Array ("https://flagcdn.com/80x60/us-al.png",
                        "https://flagcdn.com/80x60/us-ak.png",
                        "https://flagcdn.com/80x60/us-az.png",
                        "https://flagcdn.com/80x60/us-ar.png",
                        "https://flagcdn.com/80x60/us-ca.png",
                        "https://flagcdn.com/80x60/us-co.png",
                        "https://flagcdn.com/80x60/us-ct.png",
                        "https://flagcdn.com/80x60/us-de.png",
                        "https://flagcdn.com/80x60/us-fl.png",
                        "https://flagcdn.com/80x60/us-ga.png",
                        "https://flagcdn.com/80x60/us-hi.png",
                        "https://flagcdn.com/80x60/us-id.png",
                        "https://flagcdn.com/80x60/us-il.png",
                        "https://flagcdn.com/80x60/us-in.png",
                        "https://flagcdn.com/80x60/us-ia.png",
                        "https://flagcdn.com/80x60/us-ks.png",
                        "https://flagcdn.com/80x60/us-ky.png",
                        "https://flagcdn.com/80x60/us-la.png",
                        "https://flagcdn.com/80x60/us-me.png",
                        "https://flagcdn.com/80x60/us-md.png",
                        "https://flagcdn.com/80x60/us-ma.png",
                        "https://flagcdn.com/80x60/us-mi.png",
                        "https://flagcdn.com/80x60/us-mn.png",
                        "https://flagcdn.com/80x60/us-ms.png",
                        "https://flagcdn.com/80x60/us-mo.png",
                        "https://flagcdn.com/80x60/us-mt.png",
                        "https://flagcdn.com/80x60/us-ne.png",
                        "https://flagcdn.com/80x60/us-nv.png",
                        "https://flagcdn.com/80x60/us-nh.png",
                        "https://flagcdn.com/80x60/us-nj.png",
                        "https://flagcdn.com/80x60/us-nm.png",
                        "https://flagcdn.com/80x60/us-ny.png",
                        "https://flagcdn.com/80x60/us-nc.png",
                        "https://flagcdn.com/80x60/us-nd.png",
                        "https://flagcdn.com/80x60/us-oh.png",
                        "https://flagcdn.com/80x60/us-ok.png",
                        "https://flagcdn.com/80x60/us-or.png",
                        "https://flagcdn.com/80x60/us-pa.png",
                        "https://flagcdn.com/80x60/us-ri.png",
                        "https://flagcdn.com/80x60/us-sc.png",
                        "https://flagcdn.com/80x60/us-sd.png",
                        "https://flagcdn.com/80x60/us-tn.png",
                        "https://flagcdn.com/80x60/us-tx.png",
                        "https://flagcdn.com/80x60/us-ut.png",
                        "https://flagcdn.com/80x60/us-vt.png",
                        "https://flagcdn.com/80x60/us-va.png",
                        "https://flagcdn.com/80x60/us-wa.png",
                        "https://flagcdn.com/80x60/us-wv.png",
                        "https://flagcdn.com/80x60/us-wi.png",
                        "https://flagcdn.com/80x60/us-wy.png");

//Array that stores all capital cities of American countries
let capitalArray = new Array ("	Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", 
                              "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston", "Lansing", "St. Paul", "Jackson", "	Jefferson City",
                              "Helena", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany", "Raleigh", "Bismarck", "Columbus", "Oklahoma City", "Salem", "Harrisburg",
                              "Providence", "Columbia", "Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne");

//Array that stores all populations of American countries
let populationArray = new Array ("4 833 722 (2013)", "735 132 (2013)", "6 626 624 (2013)", "2 959 373 (2013)", "38 332 521 (2013)", "5 268 367 (2013)", "3 596 080 (2013)", "925 749 (2013)",
                                "19 552 860 (2013)", "9 992 167 (2013)", "1 404 054 (2013)", "1 612 136 (2013)", "12 882 135 (2013)", "6 570 902 (2013)", "	3 090 416 (2013)",
                                "2 893 957 (2013)", "4 395 295 (2013)", "4 625 470 (2013)", "1 328 302 (2013)", "5 928 814 (2013)", "6 692 824 (2013)", "9 895 622 (2013)", "5 420 380 (2013)",
                                "2 991 207 (2013)", "6 021 988 (2013)", "1 015 165 (2013)", "1 868 516 (2013)", "2 790 136 (2013)", "1 323 459 (2013)", "8 899 339 (2013)", "2 085 287 (2013)",
                                "19 651 127 (2013)", "9 848 060 (2013)", "723 393 (2013)", "11 570 808 (2013)", "3 850 568 (2013)", "3 930 065 (2013)", "12 773 801 (2013)", "1 051 511 (2013)",
                                "4 774 839 (2013)", "844 877 (2013)", "6 495 978 (2013)", "26 448 193 (2013)", "2 900 872 (2013)", "626 630 (2013)", "8 260 405 (2013)", "6 971 406 (2013)",
                                "1 854 304 (2013)", "5 742 713 (2013)", "582 658 (2013)");

//Array that stores all total areas of American countries
let areaArray = new Array ("135 767", "1 723 337", "295 233", "137 733", "423 968", "269 602", "14 356", "6 446", "170 312", "153 910", "28 314", "216 443", "149 997", "	94 327",
                           "145 746", "213 099", "104 656", "135 658", "91 634", "32 131", "27 335", "250 488", "225 163", "125 438", "180 540", "380 832", "200 330", "286 380", "24 214",
                           "22 592", "314 917", "141 297", "139 391", "183 107", "116 099", "181 038", "254 800", "119 279", "4 002", "82 931", "199 730", "109 152", "695 660", "219 882",
                           "24 905", "110 787", "184 661", "62 755", "169 634", "253 335");

//Array that stores all google maps links
let mapsArray = new Array ("https://www.google.com/maps/place/Alabama/@32.560831,-88.9298132,7z/data=!3m1!4b1!4m5!3m4!1s0x88867f341f4bfe75:0x5e55343553c8cce9!8m2!3d32.3182314!4d-86.902298",
                           "https://www.google.com/maps/place/Alaska/@60.1458342,-176.5080751,4z/data=!3m1!4b1!4m5!3m4!1s0x5400df9cc0aec01b:0xbcdb5e27a98adb35!8m2!3d64.2008413!4d-149.4936733",
                           "https://www.google.com/maps/place/Arizona/@34.1524518,-114.1785231,7z/data=!3m1!4b1!4m5!3m4!1s0x872b08ebcb4c186b:0x423927b17fc1cd71!8m2!3d34.0489281!4d-111.0937311",
                           "https://www.google.com/maps/place/Arkansas/@34.7490224,-93.2552941,8z/data=!3m1!4b1!4m5!3m4!1s0x87d29e3f743f2761:0xa405693effdfd2d0!8m2!3d34.5573549!4d-92.2863403",
                           "https://www.google.com/maps/place/California/@37.1926656,-123.808339,6z/data=!3m1!4b1!4m5!3m4!1s0x808fb9fe5f285e3d:0x8b5109a227086f55!8m2!3d36.778261!4d-119.4179324",
                           "https://www.google.com/maps/place/Colorado/@38.9806222,-107.7993096,7z/data=!3m1!4b1!4m5!3m4!1s0x874014749b1856b7:0xc75483314990a7ff!8m2!3d39.5500507!4d-105.7820674",
                           "https://www.google.com/maps/place/Connecticut/@41.5004268,-73.31931,9z/data=!3m1!4b1!4m5!3m4!1s0x89e65311f21151a5:0xae9a6d5b056170e5!8m2!3d41.6032207!4d-73.087749",
                           "https://www.google.com/maps/place/Delaware/@39.1406883,-76.5344241,9z/data=!3m1!4b1!4m5!3m4!1s0x89c705764d0cd63b:0x941d2d128c04e878!8m2!3d38.9108325!4d-75.5276699",
                           "https://www.google.com/maps/place/Florida/@27.5317364,-88.3092712,6z/data=!3m1!4b1!4m5!3m4!1s0x88c1766591562abf:0xf72e13d35bc74ed0!8m2!3d27.6648274!4d-81.5157535",
                           "https://www.google.com/maps/place/Georgia/@32.6626931,-85.4273688,7z/data=!3m1!4b1!4m5!3m4!1s0x88f136c51d5f8157:0x6684bc10ec4f10e7!8m2!3d32.1656221!4d-82.9000751",
                           "https://www.google.com/maps/place/Hawaii/@20.4022484,-162.0005323,6.02z/data=!3m1!4b1!4m5!3m4!1s0x7bffdb064f79e005:0x4b7782d274cc8628!8m2!3d19.8967662!4d-155.5827818",
                           "https://www.google.com/maps/place/Idaho/@45.1299879,-123.3600039,6z/data=!3m1!4b1!4m5!3m4!1s0x5358ffa885e499e9:0xd06b300515f78758!8m2!3d44.0682019!4d-114.7420408",
                           "https://www.google.com/maps/place/Illinois/@39.7218501,-91.5152084,7z/data=!3m1!4b1!4m5!3m4!1s0x880b2d386f6e2619:0x7f15825064115956!8m2!3d40.6331249!4d-89.3985283",
                           "https://www.google.com/maps/place/Indiana/@39.7490817,-88.689977,7z/data=!3m1!4b1!4m5!3m4!1s0x886b50bcd9f81b1d:0x7e102fcecb32ec72!8m2!3d40.2671941!4d-86.1349019",
                           "https://www.google.com/maps/place/Iowa/@41.9348808,-94.5136422,8z/data=!3m1!4b1!4m5!3m4!1s0x87ee5e6ff1f86019:0xc6ef634a57c759d9!8m2!3d41.8780025!4d-93.097702",
                           "https://www.google.com/maps/place/Kansas/@38.48158,-100.5688479,7z/data=!3m1!4b1!4m5!3m4!1s0x87a31771717c016b:0x68c2b4a94b3e095f!8m2!3d39.011902!4d-98.4842465",
                           "https://www.google.com/maps/place/Kentucky/@37.7369954,-90.3721838,7z/data=!3m1!4b1!4m5!3m4!1s0x8842734c8b1953c9:0x771f6f4ec5ccdffc!8m2!3d37.8393332!4d-84.2700179",
                           "https://www.google.com/maps/place/Louisiana/@30.9225836,-93.6501175,7z/data=!3m1!4b1!4m5!3m4!1s0x8620a454b2118265:0xc955f73281e54703!8m2!3d30.9842977!4d-91.9623327",
                           "https://www.google.com/maps/place/Maine/@45.1702927,-71.2332934,7z/data=!3m1!4b1!4m5!3m4!1s0x4cb01dde1d538ad5:0xd679cc6f6720a8d0!8m2!3d45.253783!4d-69.4454689",
                           "https://www.google.com/maps/place/Maryland/@38.8015793,-78.3608431,8z/data=!3m1!4b1!4m5!3m4!1s0x89b64debe9f190df:0xf2af37657655f6b1!8m2!3d39.0457549!4d-76.6412712",
                           "https://www.google.com/maps/place/Massachusetts/@42.0160548,-73.9808549,8z/data=!3m1!4b1!4m5!3m4!1s0x89e3656de973bffd:0x45c6d03655830d1c!8m2!3d42.4072107!4d-71.3824374",
                           "https://www.google.com/maps/place/Michigan/@44.9202322,-90.7699066,6z/data=!3m1!4b1!4m5!3m4!1s0x4d4caa3dc7ca0411:0x97dd48597a62c9b3!8m2!3d44.3148443!4d-85.6023643",
                           "https://www.google.com/maps/place/Minnesota/@46.423672,-95.6098153,7z/data=!3m1!4b1!4m5!3m4!1s0x4d585b9a60780b9b:0x2a2c99b10fea20f!8m2!3d46.729553!4d-94.6858998",
                           "https://www.google.com/maps/place/Mississippi/@32.5557076,-92.1256164,7z/data=!3m1!4b1!4m5!3m4!1s0x862832e4e44ad419:0x620d177fe9dca6da!8m2!3d32.3546679!4d-89.3985283",
                           "https://www.google.com/maps/place/Missouri/@38.2875067,-94.6859643,7z/data=!3m1!4b1!4m5!3m4!1s0x87c0e6d54822e37d:0xb55bc4590466bd72!8m2!3d37.9642529!4d-91.8318334",
                           "https://www.google.com/maps/place/Montana/@46.6614094,-112.2930799,7z/data=!3m1!4b1!4m5!3m4!1s0x53412b9c2d7b8ad3:0xf571d658cf2a6c18!8m2!3d46.8796822!4d-110.3625658",
                           "https://www.google.com/maps/place/Nebraska/@41.4830364,-101.929504,7z/data=!3m1!4b1!4m5!3m4!1s0x87938dc8b50cfced:0xa127900c0ff30ac4!8m2!3d41.4925374!4d-99.9018131",
                           "https://www.google.com/maps/place/Nevada/@38.4244523,-121.5243795,6z/data=!3m1!4b1!4m5!3m4!1s0x80990aa1f8deb471:0xcf47038aaafc95b3!8m2!3d38.8026097!4d-116.419389",
                           "https://www.google.com/maps/place/New+Hampshire/@43.9978502,-72.6899809,8z/data=!3m1!4b1!4m5!3m4!1s0x4cb3444b9dc0a6eb:0xd7c802af25a680eb!8m2!3d43.1938516!4d-71.5723953",
                           "https://www.google.com/maps/place/New+Jersey/@40.0697125,-75.8482074,8z/data=!3m1!4b1!4m5!3m4!1s0x89c0fb959e00409f:0x2cd27b07f83f6d8d!8m2!3d40.0583238!4d-74.4056612",
                           "https://www.google.com/maps/place/New+Mexico/@34.1503095,-108.2751558,7z/data=!3m1!4b1!4m5!3m4!1s0x87185043e79852a9:0x46bf6e1a63359eba!8m2!3d34.5199402!4d-105.8700901",
                           "https://www.google.com/maps/place/New+York/@42.6584689,-80.3721956,7z/data=!3m1!4b1!4m5!3m4!1s0x4ccc4bf0f123a5a9:0xddcfc6c1de189567!8m2!3d43.2994285!4d-74.2179326",
                           "https://www.google.com/maps/place/North+Carolina/@35.1542266,-82.110029,7z/data=!3m1!4b1!4m5!3m4!1s0x88541fc4fc381a81:0xad3f30f5e922ae19!8m2!3d35.7595731!4d-79.0192997",
                           "https://www.google.com/maps/place/North+Dakota/@47.4495512,-102.5505874,7z/data=!3m1!4b1!4m5!3m4!1s0x52d7831257d8e963:0xd849a39835ecfc9!8m2!3d47.5514926!4d-101.0020119",
                           "https://www.google.com/maps/place/Ohio/@40.2765475,-87.1584305,6z/data=!3m1!4b1!4m5!3m4!1s0x8836e97ab54d8ec1:0xe5cd64399c9fd916!8m2!3d40.4172871!4d-82.907123",
                           "https://www.google.com/maps/place/Oklahoma/@35.292717,-100.9654982,7z/data=!3m1!4b1!4m5!3m4!1s0x87ac3911b1ac4f9d:0x5d1ccf33400aea48!8m2!3d35.0077519!4d-97.092877",
                           "https://www.google.com/maps/place/Oregon/@44.1273372,-122.8319273,7z/data=!3m1!4b1!4m5!3m4!1s0x54936e7c9b9f6a55:0x7d4c65db7a0bb876!8m2!3d43.8041334!4d-120.5542012",
                           "https://www.google.com/maps/place/Pennsylvania/@41.1135916,-78.7285716,8z/data=!3m1!4b1!4m5!3m4!1s0x882d80261e32e589:0xc24621475022b43d!8m2!3d41.2033216!4d-77.1945247",
                           "https://www.google.com/maps/place/Rhode+Island/@41.5569776,-72.0597174,9z/data=!3m1!4b1!4m5!3m4!1s0x89e43514620ed70f:0x1e4e18bce7c106e7!8m2!3d41.5800945!4d-71.4774291",
                           "https://www.google.com/maps/place/South+Carolina/@33.6217021,-82.0505627,8z/data=!3m1!4b1!4m5!3m4!1s0x88f8a5697931d1e3:0xb9ffa132f505179e!8m2!3d33.836081!4d-81.1637245",
                           "https://www.google.com/maps/place/South+Dakota/@44.1945842,-102.4956857,7z/data=!3m1!4b1!4m5!3m4!1s0x877d432d85e938a5:0x7f0d6293186a4b7!8m2!3d43.9695148!4d-99.9018131",
                           "https://www.google.com/maps/place/Tennessee/@35.8140299,-88.2275115,7z/data=!3m1!4b1!4m5!3m4!1s0x88614b239e97cf03:0x33e20c1a5819156!8m2!3d35.5174913!4d-86.5804473",
                           "https://www.google.com/maps/place/Texas/@31.099951,-104.5804977,6z/data=!3m1!4b1!4m5!3m4!1s0x864070360b823249:0x16eb1c8f1808de3c!8m2!3d31.9685988!4d-99.9018131",
                           "https://www.google.com/maps/place/Utah/@31.099951,-104.5804977,6z/data=!4m5!3m4!1s0x874c6bc78f13f9cd:0xbddf4aa56cd7463f!8m2!3d39.3209801!4d-111.0937311",
                           "https://www.google.com/maps/place/Vermont/@43.8682281,-73.5752955,8z/data=!3m1!4b1!4m5!3m4!1s0x4cb4dc6c48daceff:0x264d897436546bb4!8m2!3d44.5588028!4d-72.5778415",
                           "https://www.google.com/maps/place/Virginia/@37.9863047,-81.6697219,7z/data=!3m1!4b1!4m5!3m4!1s0x884cd670bdbcb2cd:0xc04e4149b746a695!8m2!3d37.4315734!4d-78.6568942",
                           "https://www.google.com/maps/place/Washington/@47.2547321,-123.1305378,7z/data=!3m1!4b1!4m5!3m4!1s0x5485e5ffe7c3b0f9:0x944278686c5ff3ba!8m2!3d47.7510741!4d-120.7401385",
                           "https://www.google.com/maps/place/West+Virginia/@38.9028745,-82.4305213,7z/data=!3m1!4b1!4m5!3m4!1s0x884a54a5d4cb0945:0xbb00c768decd3a43!8m2!3d38.5976262!4d-80.4549026",
                           "https://www.google.com/maps/place/Wisconsin/@44.8826031,-91.8178941,7z/data=!3m1!4b1!4m5!3m4!1s0x52a8f40f9384e3af:0xf2d5d5b8f88649d6!8m2!3d43.7844397!4d-88.7878678",
                           "https://www.google.com/maps/place/Wyoming/@42.9823357,-109.8030824,7z/data=!3m1!4b1!4m5!3m4!1s0x875ee23448e12e69:0x26b02279d27d382f!8m2!3d43.0759678!4d-107.2902839");

let wikiArray = new Array ("https://en.wikipedia.org/wiki/Alabama",
                           "https://en.wikipedia.org/wiki/Alaska",
                           "https://en.wikipedia.org/wiki/Arizona",
                           "https://en.wikipedia.org/wiki/Arkansas",
                           "https://en.wikipedia.org/wiki/California",
                           "https://en.wikipedia.org/wiki/Colorado",
                           "https://en.wikipedia.org/wiki/Connecticut",
                           "https://en.wikipedia.org/wiki/Delaware",
                           "https://en.wikipedia.org/wiki/Florida",
                           "https://en.wikipedia.org/wiki/Georgia_(U.S._state)",
                           "https://en.wikipedia.org/wiki/Hawaii",
                           "https://en.wikipedia.org/wiki/Idaho",
                           "https://en.wikipedia.org/wiki/Illinois",
                           "https://en.wikipedia.org/wiki/Indiana",
                           "https://en.wikipedia.org/wiki/Iowa",
                           "https://en.wikipedia.org/wiki/Kansas",
                           "https://en.wikipedia.org/wiki/Kentucky",
                           "https://en.wikipedia.org/wiki/Louisiana",
                           "https://en.wikipedia.org/wiki/Maine",
                           "https://en.wikipedia.org/wiki/Maryland",
                           "https://en.wikipedia.org/wiki/Massachusetts",
                           "https://en.wikipedia.org/wiki/Michigan",
                           "https://en.wikipedia.org/wiki/Minnesota",
                           "https://en.wikipedia.org/wiki/Mississippi",
                           "https://en.wikipedia.org/wiki/Missouri",
                           "https://en.wikipedia.org/wiki/Montana",
                           "https://en.wikipedia.org/wiki/Nebraska",
                           "https://en.wikipedia.org/wiki/Nevada",
                           "https://en.wikipedia.org/wiki/New_Hampshire",
                           "https://en.wikipedia.org/wiki/New_Jersey",
                           "https://en.wikipedia.org/wiki/New_Mexico",
                           "https://en.wikipedia.org/wiki/New_York_(state)",
                           "https://en.wikipedia.org/wiki/North_Carolina",
                           "https://en.wikipedia.org/wiki/North_Dakota",
                           "https://en.wikipedia.org/wiki/Ohio",
                           "https://en.wikipedia.org/wiki/Oklahoma",
                           "https://en.wikipedia.org/wiki/Oregon",
                           "https://en.wikipedia.org/wiki/Pennsylvania",
                           "https://en.wikipedia.org/wiki/Rhode_Island",
                           "https://en.wikipedia.org/wiki/South_Carolina",
                           "https://en.wikipedia.org/wiki/South_Dakota",
                           "https://en.wikipedia.org/wiki/Tennessee",
                           "https://en.wikipedia.org/wiki/Texas",
                           "https://en.wikipedia.org/wiki/Utah",
                           "https://en.wikipedia.org/wiki/Vermont",
                           "https://en.wikipedia.org/wiki/Virginia",
                           "https://en.wikipedia.org/wiki/Washington_(state)",
                           "https://en.wikipedia.org/wiki/West_Virginia",
                           "https://en.wikipedia.org/wiki/Wisconsin",
                           "https://en.wikipedia.org/wiki/Wyoming");                           


//Flip card when clicked on it
let state = 0;
const card = document.querySelector('.card_inner');
card.addEventListener('click', () => {
    card.classList.remove('is-flipped1');
    card.style.transition = '0.8s';
    card.classList.toggle('is-flipped');
    if (state == 0){
        state = 1;
    }else{
        state = 0;
    }
});

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === ' '){
        card.classList.remove('is-flipped1');
        card.style.transition = '0.8s';
        card.classList.toggle('is-flipped');
        if (state == 0){
            state = 1;
        }else{
            state = 0;
        }
    }
});

//selects card image and creates variable
const front_ = document.querySelector('.face--front');
var img = front_.querySelector('.image');
const back_ = document.querySelector('.face--back');
var img2 = back_.querySelector('.image2');
//selects card title and creates variable
const back = document.querySelector('.content');
var title = back.querySelector('.content h1');
//selects card data and creates variables
const info = document.querySelector('.info');
const capital = info.querySelector('.capital');
const population = info.querySelector('.population');
const area = info.querySelector('.area');
const map = info.querySelector('.maps');
const wiki = info.querySelector('.wiki');
//selects arrows and creates variables
const arrow1 = document.querySelector('.arrow1');
var arr1 = arrow1.querySelector('.arrow i');
const arrow2 = document.querySelector('.arrow2');
var arr2 = arrow2.querySelector('.arrow i');

//initializes the first card with correct data and creates a count variable 0
//that will indicate in which card the user is.
var count = 0;
arrow1.classList.toggle('hide');
img.src = links[count];
img2.src = links2[count];
title.textContent = countries[count];
capital.textContent = capitalArray[count];
population.textContent = populationArray[count];
area.textContent = areaArray[count];
map.href = mapsArray[count];
wiki.href = wikiArray[count];

//code that restarts the flashcards by going to card in index 0.
const button2 = document.querySelector('.start');
button2.addEventListener('click', () => {
    if (count != 0){
        count = 0;
        arrow1.classList.toggle('hide');
        arrow2.classList.remove('hide');
        card.style.transition = '0.0s';
        if (state == 1){
            card.classList.remove('is-flipped');
            state = 0;
        }else{
            card.classList.toggle('is-flipped1');
            state = 0; 
        }
        img.src = "";
        img.src = links[count];
        title.textContent = countries[count];
        capital.textContent = capitalArray[count];
        population.textContent = populationArray[count];
        area.textContent = areaArray[count];
        map.href = mapsArray[count];
        wiki.href = wikiArray[count];
        img2.src = "";
        img2.src = links2[count];
    }else{
        card.style.transition = '0.0s';
        card.classList.remove('is-flipped');
    }
});

//restarts the key 'r'
document.addEventListener('keyup', (event) => {
    var code = event.key;
    if (code == 'r' || code == 'R'){
        if (count != 0){
            count = 0;
            arrow1.classList.toggle('hide');
            arrow2.classList.remove('hide');
            card.style.transition = '0.0s';
            if (state == 1){
                card.classList.remove('is-flipped');
                state = 0;
            }else{
                card.classList.toggle('is-flipped1');
                state = 0; 
            }
            img.src = "";
            img.src = links[count];
            title.textContent = countries[count];
            capital.textContent = capitalArray[count];
            population.textContent = populationArray[count];
            area.textContent = areaArray[count];
            map.href = mapsArray[count];
            wiki.href = wikiArray[count];
            img2.src = "";
            img2.src = links2[count];
        }else{
            card.style.transition = '0.0s';
            card.classList.remove('is-flipped');
        }
    }
});

//code for right arrow that increases index by 1 to go to next card
arrow2.addEventListener('click', () => {

    count = count + 1;
    if (count == 1){
        arrow1.classList.remove('hide');
    }
    if (count == links.length - 1){
        arrow2.classList.toggle('hide');
    }
    card.style.transition = '0.0s';
    if (state == 1){
        card.classList.remove('is-flipped');
        state = 0;
    }else{
        card.classList.toggle('is-flipped1');
        state = 0; 
    }
    img.src = "";
    img.src = links[count];
    title.textContent = countries[count];
    capital.textContent = capitalArray[count];
    population.textContent = populationArray[count];
    area.textContent = areaArray[count];
    map.href = mapsArray[count];
    wiki.href = wikiArray[count];
    img2.src = "";
    img2.src = links2[count];
});

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === 'ArrowRight' && count < links.length - 1) {
        count = count + 1;
        if (count == 1){
            arrow1.classList.remove('hide');
        }
        if (count == links.length - 1){
            arrow2.classList.toggle('hide');
        }
        card.style.transition = '0.0s';
        if (state == 1){
            card.classList.remove('is-flipped');
            state = 0;
        }else{
            card.classList.toggle('is-flipped1');
            state = 0; 
        }
        img.src = "";
        img.src = links[count];
        title.textContent = countries[count];
        capital.textContent = capitalArray[count];
        population.textContent = populationArray[count];
        area.textContent = areaArray[count];
        map.href = mapsArray[count];
        wiki.href = wikiArray[count];
        img2.src = "";
        img2.src = links2[count];
    }
});

//code for left arrow that decreases index by 1 to go to previous card
arrow1.addEventListener('click', () => {
    count = count - 1;
    if (count == links.length - 2){
        arrow2.classList.remove('hide');
    }
    if (count == 0){
        arrow1.classList.toggle('hide');
    }
    card.style.transition = '0.0s';
    if (state == 1){
        card.classList.remove('is-flipped');
        state = 0;
    }else{
        card.classList.toggle('is-flipped1');
        state = 0; 
    }
    img.src = "";
    img.src = links[count];
    title.textContent = countries[count];
    capital.textContent = capitalArray[count];
    population.textContent = populationArray[count];
    area.textContent = areaArray[count];
    map.href = mapsArray[count];
    wiki.href = wikiArray[count];
    img2.src = "";
    img2.src = links2[count];
});

document.addEventListener('keyup', (event) => {
    var name = event.key;
    if (name === 'ArrowLeft' && count > 0) {
        count = count - 1;
        if (count == links.length - 2){
            arrow2.classList.remove('hide');
        }
        if (count == 0){
            arrow1.classList.toggle('hide');
        }
        card.style.transition = '0.0s';
        if (state == 1){
            card.classList.remove('is-flipped');
            state = 0;
        }else{
            card.classList.toggle('is-flipped1');
            state = 0; 
        }
        img.src = "";
        img.src = links[count];
        title.textContent = countries[count];
        capital.textContent = capitalArray[count];
        population.textContent = populationArray[count];
        area.textContent = areaArray[count];
        map.href = mapsArray[count];
        wiki.href = wikiArray[count];
        img2.src = "";
        img2.src = links2[count];
    }
});

//code for home button to take user back to home screen
const button1 = document.querySelector('.home');
button1.addEventListener('click', () => {
    window.location.assign('index');
});

//exit when pressed the key 'e'
document.addEventListener('keyup', (event) => {
    var code = event.key;
    if (code == 'e' || code == 'E'){
        window.location.assign('index');
    }
});

//opens map when pressed the key 'm'
document.addEventListener('keyup', (event) => {
    var code = event.key;
    if ((code == 'm' || code == 'M') && state == 1){
        window.open(mapsArray[count], '_blank');
    }
});

//opens wikipedia when pressed the key 'w'
document.addEventListener('keyup', (event) => {
    var code = event.key;
    if ((code == 'w' || code == 'W') && state == 1){
        window.open(wikiArray[count], '_blank');
    }
});

