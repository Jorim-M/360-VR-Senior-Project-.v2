    "scenes": {
        "the-gate": {
            "title": "Welcome To The UEAB",
            "hfov": 150,
            "yaw": -45,
            "type": "equirectangular",
            "panorama": "../assets/img/location/17.JPG",
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Welcome To UEAB",
                    "sceneId": "church",
                },
                {
                    "pitch":5,
                    "yaw": 10,
                    "type": "info",
                    "text": "This gate was funded by the class of 2004.",
                },
                {
                    "pitch":3.7,
                    "yaw": -60,
                    "type": "info",
                    "text": "A Washing Station To Observe Covid19 Rules.",
                },
                {
                    "pitch":5,
                    "yaw": 180,
                    "type": "info",
                    "text": "This is the Baraton local community commonly known as Bara C.",
                }

            ]
        },

        "church": {
            "title": "UEAB Church",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/14.JPG",
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 4,
                    "type": "scene",
                    "text": "Exit The Main Gate.",
                    "sceneId": "the-gate",
                },
                {
                    "pitch":-2.7,
                    "yaw": -240,
                    "type": "scene",
                    "text": "UEAB Church",
                    "sceneId": "church-",
                },
                {
                    "pitch":11.6,
                    "yaw": -247,
                    "type": "info",
                    "text": "This church building was completed in 2010. It houses 4,000 seats in 2 floors.",
                },
                {
                    "pitch":-2,
                    "yaw": 186,
                    "type": "scene",
                    "text": "Get to the Round About",
                    "sceneId": "round-about",
                }
            ]
        },

        "church-": {
            "title": "UEAB Church",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/13.JPG",
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Back to the Main Road.",
                    "sceneId": "church"
                },
                {
                    "pitch":0,
                    "yaw": 117,
                    "type": "info",
                    "text": "A Washing Station To Observe Covid19 Rules."
                },
                {
                    "pitch":-4,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Enter the Church",
                    "sceneId": "church-inside"
                }
            ]
        },

        "church-front": {
            "title": "UEAB Church",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/20.JPG",
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 0,
                    "type": "info",
                    "text": "The Pulpit Team.",
                },
                {
                    "pitch":0,
                    "yaw": -184,
                    "type": "scene",
                    "text": "Get to the Back of Church.",
                    "sceneId": "church-inside",
                }
                
            ]
        },

        "church-inside": {
            "title": "UEAB Church",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/18.JPG",
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 0,
                    "type": "info",
                    "text": "The Church Pulpit.",
                },
                {
                    "pitch":0,
                    "yaw": -240,
                    "type": "scene",
                    "text": "Exit the Church.",
                    "sceneId": "church-",
                },
                {
                    "pitch":-5,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Move to the Front.",
                    "sceneId": "church-front",
                }
            ]
        },

        "round-about": {
            "title": "",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/12.JPG",
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 2,
                    "type": "scene",
                    "text": "UEAB Church.",
                    "sceneId": "church",
                },
                {
                    "pitch":0,
                    "yaw": -140,
                    "type": "scene",
                    "text": "Administration Block",
                    "sceneId": "admin",
                },
                {
                    "pitch":0,
                    "yaw": 95,
                    "type": "scene",
                    "text": "Baraton Jeremic Hospital.",
                    "sceneId": "jeremic",
                }
            ]
        },

        "jeremic": {
            "title": "Baraton Jeremic Hospital",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/22.JPG",
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 2,
                    "type": "info",
                    "text": "Baraton Jeremic Hospital. It's a level 4 primary care hospital regulated by Kenya MPDB in Chemundu ward, Nandi County. ",
                },
                {
                    "pitch":0,
                    "yaw": 240,
                    "type": "scene",
                    "text": "",
                    "sceneId": "round-about",
                }
            ]
        },

        "admin": {
            "title": "Administration Block",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/11.JPG",
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 260,
                    "type": "scene",
                    "text": "Mwalimu Drive",
                    "sceneId": "mwalimu-drive",
                },
                {
                    "pitch":-7,
                    "yaw": -33,
                    "type": "scene",
                    "text": "",
                    "sceneId": "round-about",
                },
                {
                    "pitch":0,
                    "yaw": 95,
                    "type": "scene",
                    "text": "UEAB Fountain",
                    "sceneId": "fountain-",
                }
            ]
        },

        "mwalimu-drive": {
            "title": "",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/23.JPG",
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 280,
                    "type": "scene",
                    "text": "Administration Block",
                    "sceneId": "admin",

                },
                {
                    "pitch":-7,
                    "yaw": -10,
                    "type": "scene",
                    "text": "",
                    "sceneId": "behind-admin",
                },
                {
                    "pitch":0,
                    "yaw": 80,
                    "type": "info",
                    "text": "This is Mwalimu Drive.",
                }
            ]
        },

        "behind-admin": {
            "title": "",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/24.JPG",
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 2,
                    "type": "scene",
                    "text": "",
                    "sceneId": "cbd",
                },
                {
                    "pitch":0,
                    "yaw": -70,
                    "type": "scene",
                    "text": "UEAB Fountain",
                    "sceneId": "fountain",
                },
                {
                    "pitch":0,
                    "yaw": -178,
                    "type": "scene",
                    "text": "Mwalimu Drive",
                    "sceneId": "mwalimu-drive",
                }
            ]
        },

        "fountain": {
            "title": "UEAB Fountain",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/9.JPG",
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 40,
                    "type": "scene",
                    "text": "",
                    "sceneId": "fountain-",
                },
                {
                    "pitch":0,
                    "yaw": -180,
                    "type": "scene",
                    "text": "Library",
                    "sceneId": "library-exterior",
                },
                {
                    "pitch":0,
                    "yaw": -70,
                    "type": "scene",
                    "text": "",
                    "sceneId": "behind-admin",
                }
            ]
        },

        "fountain-": {
            "title": "UEAB Fountain",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/10.JPG",
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 5,
                    "type": "scene",
                    "text": "To The Administration Block",
                    "sceneId": "admin",
                },
                {
                    "pitch":0,
                    "yaw": -125,
                    "type": "scene",
                    "text": "",
                    "sceneId": "fountain",
                }
            ]
        },

        "library-exterior": {
            "title": "Welcome To The UEAB Library",
            "hfov": 150,
            "pitch": -3,
            "yaw": -10,
            "type": "equirectangular",
            "panorama": "../assets/img/location/1.JPG",
            "hotSpots": [
                {
                    "pitch": 7.1,
                    "yaw": 2.4,
                    "type": "scene",
                    "text": "Welcome to the Library",
                    "sceneId": "library-interior"
                },
                {
                    "pitch": -2.1,
                    "yaw": 86.2,
                    "type": "scene",
                    "sceneId": "midpoint"
                },
                {
                    "pitch": -2.1,
                    "yaw": 119.9,
                    "type": "info",
                    "text": "A Washing Station To Observe Covid19 Rules."
                },
                {
                    "pitch": -6.2,
                    "yaw": 177.4,
                    "type": "info",
                    "text": "Keep Off Grass. Keep Bara Clean"
                }
            ]
        },

        "library-interior": {
            "title": "Inside The Library",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/2.JPG",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 157.1,
                    "type": "scene",
                    "text": "Done Reading? Exit",
                    "sceneId": "library-exterior",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 14.8,
                    "yaw": -39.9,
                    "type": "info",
                    "text": "A Panoramic View Of The Library From A Convex Mirror."
                },
                {
                    "pitch": 19.8,
                    "yaw": 68.4,
                    "type": "info",
                    "text": "Daytime Ambient Lighting"
                }
            ]
        },

        "midpoint": {
            "title": "",
            "hfov": 150,
            "yaw": -64,
            "type": "equirectangular",
            "panorama": "../assets/img/location/28.JPG",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 157.1,
                    "type": "scene",
                    "text": "Wanna Eat Some Lunch? 😋",
                    "sceneId": "cafeteria",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -0.6,
                    "yaw": 180.1,
                    "type": "scene",
                    "text": "UEAB Fountain",
                    "sceneId": "fountain"
                },
                {
                    "pitch": 0,
                    "yaw": -91.5,
                    "type": "scene",
                    "text": "The Library",
                    "sceneId": "library-exterior"
                },
                {
                    "pitch": 8.4,
                    "yaw": -28.9,
                    "type": "info",
                    "text": "The Amphitheatre"
                },
                {
                    "pitch": 2.6,
                    "yaw": 0,
                    "type": "scene",
                    "text": "",
                    "sceneId": "outside-amphi"
                },
                {
                    "pitch": 15.8,
                    "yaw": 68.4,
                    "type": "info",
                    "text": "Make sure not to miss school assembly at the Auditorium."
                }
            ]
        },

        "outside-amphi": {
            "title": "",
            "hfov": 150,
            "yaw": -150,
            "type": "equirectangular",
            "panorama": "../assets/img/location/29.JPG",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 181.1,
                    "type": "scene",
                    "text": "",
                    "sceneId": "midpoint",
                },
                {
                    "pitch": 8.4,
                    "yaw": 2.2,
                    "type": "info",
                    "text": "Sports Field ⚽🏉"
                },
                {
                    "pitch": -0.6,
                    "yaw": -50.1,
                    "type": "scene",
                    "text": "To the Men's Dorm",
                    "sceneId": "mens-dorm",
                },
                {
                    "pitch": 2.6,
                    "yaw": 70,
                    "type": "scene",
                    "text": "To The Ladies Dorm",
                    "sceneId": "ladies-dorm"
                },
                {
                    "pitch": 45.8,
                    "yaw": 38.4,
                    "type": "info",
                    "text": "Thinking Trees 😁"
                }
            ]
        },

        "mens-dorm": {
            "title": "Men's Dorm",
            "hfov": 150,
            "yaw": 40,
            "type": "equirectangular",
            "panorama": "../assets/img/location/4.JPG",
            "hotSpots": [
                {
                    "pitch": 5.6,
                    "yaw": 181.1,
                    "type": "scene",
                    "text": "To the Ladies Dorm",
                    "sceneId": "ladies-dorm"
                },
                {
                    "pitch": 8.4,
                    "yaw": 2.2,
                    "type": "info",
                    "text": "A Washing Station To Observe Covid19 Rules."
                },
                {
                    "pitch": -0.6,
                    "yaw": -50.1,
                    "type": "info",
                    "text": "Old Men's Dorm"
                },
                {
                    "pitch": 2.6,
                    "yaw": 70,
                    "type": "info",
                    "text": "New Men's Dorm"
                }
            ]
        },

        "ladies-dorm": {
            "title": "Ladie's Dorm",
            "hfov": 150,
            "yaw": -5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/30.JPG",
            "hotSpots": [
                {
                    "pitch": 5.6,
                    "yaw": 181.1,
                    "type": "scene",
                    "text": "",
                    "sceneId": "outside-amphi",
                },
                {
                    "pitch": 8.4,
                    "yaw": 3,
                    "type": "info",
                    "text": "Ladie's Dorm"
                },
                {
                    "pitch": 2.6,
                    "yaw": 30,
                    "type": "info",
                    "text": "A Washing Station To Observe Covid19 Rules."
                }
            ]
        },

        "cafeteria": {
            "title": "Cafeteria",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/36.JPG",
            "hotSpots": [
                {
                    "pitch": 5.6,
                    "yaw": -80.1,
                    "type": "scene",
                    "text": "Exit",
                    "sceneId": "airport",
                },
                {
                    "pitch": 4,
                    "yaw": 110.1,
                    "type": "scene",
                    "text": "Exit",
                    "sceneId": "midpoint",
                }
            ]
        },

        "airport": {
            "title": "",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/27.JPG",
            "hotSpots": [
                {
                    "pitch": 5.6,
                    "yaw": 20.1,
                    "type": "scene",
                    "text": "Eat At The Cafeteria 😋",
                    "sceneId": "cafeteria",
                },
                {
                    "pitch":0,
                    "yaw": 187,
                    "type": "scene",
                    "text": "",
                    "sceneId": "cbd",
                }
            ]
        },

        "cbd": {
            "title": "",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/25.JPG",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": -5,
                    "type": "scene",
                    "text": "",
                    "sceneId": "airport",
                },
                {
                    "pitch":0,
                    "yaw": 84,
                    "type": "scene",
                    "text": "Spend Time At The Community Centre.",
                    "sceneId": "vc-drive",
                },
                {
                    "pitch":0,
                    "yaw": 178,
                    "type": "scene",
                    "text": "",
                    "sceneId": "behind-admin",
                }
            ]
        },

        "vc-drive": {
            "title": "",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/35.JPG",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": -5,
                    "type": "scene",
                    "text": "",
                    "sceneId": "cbd",
                },
                {
                    "pitch":0,
                    "yaw": 87,
                    "type": "scene",
                    "text": "To The Community Centre",
                    "sceneId": "community-centre",
                }
            ]
        },

        "community-centre": {
            "title": "Community Centre",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/34.JPG",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": -5,
                    "type": "scene",
                    "text": "Welcome To The Community Centre",
                    "sceneId": "community-centre-restaurant",
                },
                {
                    "pitch":0,
                    "yaw": 167,
                    "type": "scene",
                    "text": "",
                    "sceneId": "vc-drive",
                }
            ]
        },

        "community-centre-restaurant": {
            "title": "Community Centre",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/32.JPG",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": -95,
                    "type": "scene",
                    "text": "Car Park",
                    "sceneId": "community-centre-car-park",
                },
                {
                    "pitch":0,
                    "yaw": 100,
                    "type": "scene",
                    "text": "Exit ",
                    "sceneId": "community-centre",
                }
            ]
        },

        "community-centre-car-park": {
            "title": "Community Centre",
            "hfov": 150,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "../assets/img/location/33.JPG",
            "hotSpots": [
                {
                    "pitch":0,
                    "yaw": 80,
                    "type": "scene",
                    "text": "Exit ",
                    "sceneId": "community-centre-restaurant",
                }
            ]
        },    
    }