const data = [
    {
      id: 45,
      animalTemplate: {
        id: 23,
        name: "Tiger",
        species: "Panthera tigris",
        imageUrl: "https://lh3.googleusercontent.com/d/1VzkXlpuyObvj3XH6kU_4I4wqtjBlFcCi=w1000"
      },
      sex: "male",
      origin: "Asia",
      price: 3450.0,
      rent: 400.0,
      status: "available",
      color: "orange",
      imageUrl: "https://lh3.googleusercontent.com/d/1nlR1gMNiLPRptLi0AYRlXelPRnwtQCpU=w1000"
    },
    {
      id: 44,
      animalTemplate: {
        id: 22,
        name: "Elephant",
        species: "Loxodonta africana",
        imageUrl: "https://lh3.googleusercontent.com/d/1TiWdUQYIRy8YqKwzBeNRX7C30uNOnmCC=w1000"
      },
      sex: "female",
      origin: "Africa",
      price: 140000.0,
      rent: 550.0,
      status: "unavailable",
      color: "gray",
      imageUrl: "https://lh3.googleusercontent.com/d/1JPekDXND1l1DTImNcG-6Mi-aeJtRWZao=w1000"
    },
    {
      id: 46,
      animalTemplate: {
        id: 23,
        name: "Tiger",
        species: "Panthera tigris",
        imageUrl: "https://lh3.googleusercontent.com/d/1VzkXlpuyObvj3XH6kU_4I4wqtjBlFcCi=w1000"
      },
      sex: "female",
      origin: "Asia",
      price: 2222.0,
      rent: 420.0,
      status: "unavailable",
      color: "white",
      imageUrl: "https://lh3.googleusercontent.com/d/17FMBdmXbtnW6ZyjAz3hR_9JvYx0hrKEK=w1000"
    },
    {
      id: 48,
      animalTemplate: {
        id: 24,
        name: "Bear",
        species: "Ursus arctos",
        imageUrl: "https://lh3.googleusercontent.com/d/1QmwIIbn2rxQUb1U4KZR2Kl6nQkPUTbp6=w1000"
      },
      sex: "female",
      origin: "North America",
      price: 3000.0,
      rent: 320.0,
      status: "unavailable",
      color: "brown",
      imageUrl: "https://drive.google.com/uc?id=13xVMIXiUO15rg09cTTZ_cqeCG5fbo0yI"
    },
    {
      id: 42,
      animalTemplate: {
        id: 21,
        name: "Lion",
        species: "Panthera leo",
        imageUrl: "https://lh3.googleusercontent.com/d/1K-W4nJsh5NdEDmrpwxgdKEggW6DGYsBp=w1000"
      },
      sex: "female",
      origin: "Africa",
      price: 9999.0,
      rent: 450.0,
      status: "unavailable",
      color: "golden",
      imageUrl: "https://lh3.googleusercontent.com/d/17VWw_rA3wRBNMbw_aYPCJG5Ph3tbEbAC=w1000"
    },
    {
      id: 43,
      animalTemplate: {
        id: 22,
        name: "Elephant",
        species: "Loxodonta africana",
        imageUrl: "https://lh3.googleusercontent.com/d/1TiWdUQYIRy8YqKwzBeNRX7C30uNOnmCC=w1000"
      },
      sex: "male",
      origin: "Africa",
      price: 120000.0,
      rent: 600.0,
      status: "available",
      color: "gray",
      imageUrl: "https://lh3.googleusercontent.com/d/1yLb4emHex3e_iF_QtQ8p8Edbl4Q2aHeS=w1000"
    },
    {
      id: 47,
      animalTemplate: {
        id: 24,
        name: "Bear",
        species: "Ursus arctos",
        imageUrl: "https://lh3.googleusercontent.com/d/1QmwIIbn2rxQUb1U4KZR2Kl6nQkPUTbp6=w1000"
      },
      sex: "male",
      origin: "North America",
      price: 47000.0,
      rent: 300.0,
      status: "unavailable",
      color: "gray",
      imageUrl: "https://drive.google.com/uc?id=1zf-G2TbfZlrpXe0aHDO9HYKLsTrsS18H"
    },
    {
      id: 49,
      animalTemplate: {
        id: 25,
        name: "Zebra",
        species: "Equus zebra",
        imageUrl: "https://lh3.googleusercontent.com/d/1q_4cA5_9fP5fKJHkSkmUqsbINrfGiCo0=w1000"
      },
      sex: "male",
      origin: "Africa",
      price: 7000.0,
      rent: 350.0,
      status: "available",
      color: "striped",
      imageUrl: "https://lh3.googleusercontent.com/d/1FqIu_GsQWx0HT3LU9eqcCbfK-haZDNXc=w1000"
    },
    {
      id: 50,
      animalTemplate: {
        id: 25,
        name: "Zebra",
        species: "Equus zebra",
        imageUrl: "https://lh3.googleusercontent.com/d/1q_4cA5_9fP5fKJHkSkmUqsbINrfGiCo0=w1000"
      },
      sex: "female",
      origin: "Africa",
      price: 7200.0,
      rent: 360.0,
      status: "available",
      color: "striped",
      imageUrl: "https://lh3.googleusercontent.com/d/1lryO2m4PWD7gWlsBmkyWNBhoyw4wahGp=w1000"
    },
    {
      id: 51,
      animalTemplate: {
        id: 26,
        name: "Giraffe",
        species: "Giraffa camelopardalis",
        imageUrl: "https://drive.google.com/uc?id=1BJuX0k5PFsbpltPMYx23DOsJzRl2A3Wx"
      },
      sex: "male",
      origin: "Africa",
      price: 11000.0,
      rent: 500.0,
      status: "available",
      color: "yellow",
      imageUrl: "https://lh3.googleusercontent.com/d/1iky9XXvTYgNmYR1pgnskGzjolGJQvifL=w1000"
    },
    {
      id: 52,
      animalTemplate: {
        id: 27,
        name: "Penguin",
        species: "Aptenodytes forsteri",
        imageUrl: "https://drive.google.com/uc?id=1mj7tEfxU6mJhIcDZxXUzC-BuEiMTf85o"
      },
      sex: "female",
      origin: "Antarctica",
      price: 8000.0,
      rent: 300.0,
      status: "unavailable",
      color: "black & white",
      imageUrl: "https://drive.google.com/uc?id=1e5BJYb2E3EaLm0lM6eR8vfl-2bSKHfKD"
    },
    {
      id: 53,
      animalTemplate: {
        id: 28,
        name: "Kangaroo",
        species: "Macropus",
        imageUrl: "https://drive.google.com/uc?id=1kA5KmPqAp_R64D6G9J3fIMQGngdIl5_l"
      },
      sex: "male",
      origin: "Australia",
      price: 15000.0,
      rent: 470.0,
      status: "available",
      color: "brown",
      imageUrl: "https://drive.google.com/uc?id=1rph6Q6fAaOSMKeR4i7_XHPQnoReyTIfU"
    },
    {
      id: 54,
      animalTemplate: {
        id: 29,
        name: "Panda",
        species: "Ailuropoda melanoleuca",
        imageUrl: "https://drive.google.com/uc?id=1AlAzzxJrb5lPILWi4kssn9g7ZYGoKDEv"
      },
      sex: "female",
      origin: "China",
      price: 300000.0,
      rent: 950.0,
      status: "unavailable",
      color: "black & white",
      imageUrl: "https://drive.google.com/uc?id=1axlMZlSx_wQOme2JvDRz0XE2wtvJXZ6V"
    },
    {
      id: 55,
      animalTemplate: {
        id: 30,
        name: "Flamingo",
        species: "Phoenicopterus",
        imageUrl: "https://drive.google.com/uc?id=1nGKvls4XcAbVn2H_BOVBL_QYKbIVbLBr"
      },
      sex: "female",
      origin: "South America",
      price: 1500.0,
      rent: 220.0,
      status: "available",
      color: "pink",
      imageUrl: "https://drive.google.com/uc?id=1J4AkV_gQXZsYkyo-qPGhwcYKEBvofTbD"
    },
    {
      id: 56,
      animalTemplate: {
        id: 31,
        name: "Leopard",
        species: "Panthera pardus",
        imageUrl: "https://drive.google.com/uc?id=1zwuG3__0gT2UkHg5loiMgkgC5zMv8XZZ"
      },
      sex: "male",
      origin: "Asia",
      price: 10500.0,
      rent: 400.0,
      status: "available",
      color: "spotted",
      imageUrl: "https://drive.google.com/uc?id=1QuIY8TPFYAYFbsPSFSL5WXFybph4hJBr"
    },
    {
      id: 57,
      animalTemplate: {
        id: 32,
        name: "Camel",
        species: "Camelus",
        imageUrl: "https://drive.google.com/uc?id=1zNdVu62N4iU0vTSZ4kA4Cyxgqk6yAzB2"
      },
      sex: "female",
      origin: "Middle East",
      price: 4000.0,
      rent: 230.0,
      status: "available",
      color: "beige",
      imageUrl: "https://drive.google.com/uc?id=1EItUCXy6KQOHO-VdLZT0ptnfbSlV_zXP"
    }
];
export default data;
  