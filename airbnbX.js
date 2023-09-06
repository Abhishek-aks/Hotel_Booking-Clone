const storedLocation = localStorage.getItem("Location");
const storedCheckIn = localStorage.getItem("CheckIn");
const storedCheckOut = localStorage.getItem("CheckOut");
const storedGuest = localStorage.getItem("Guest");
let data;
const search_details=document.getElementById("search-details");
search_details?search_details.innerText=storedLocation +"| "+ storedCheckOut +"| "+ storedGuest:null;

async function getDetails(location, checkin, checkout, guest) {
  const url = `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=2023-09-04&checkout=2023-09-05&adults=1&children=0&infants=0&pets=0&page=1&currency=USD`;
  const options = {
    method: "GET",
    headers: { 
      "X-RapidAPI-Key": "2847cc9386msh3d3bf235ac5e0b4p107003jsnd06c5150a20e",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result)
    data = result.results;
      console.log(data)
      // getCards(data);
  } catch (error) {
    console.error(error);
  }
}
    // adding details to search bar
   

    // creating room cards
   let map_details=[];
  const dt=[
  {
          "id": 43449093,
          "url": "https://www.airbnb.com/rooms/43449093",
          "deeplink": "https://www.airbnb.com/rooms/43449093?check_in=2022-05-16&check_out=2022-05-17&adults=1",
          "position": 1,
          "name": "Room in the heart of Paris",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 1,
          "city": "Paris",
          "neighborhood": "Châtelet - Les Halles - Beaubourg",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-43449093/original/49a62f19-7135-45ae-9811-441891d5279d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/4a07fe2a-8c53-47ff-9093-7e1732972f4d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e8e77ec9-966c-407e-9ff6-f75231b9fbb5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f37c0947-9f4e-409a-b98e-8db0f37d3e8f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/daa9323f-e8be-4c3d-9068-f6331ad5316a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c3b8456c-4979-458e-a739-1528ac6672cc.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/72562b57-bfe3-43ac-a4cf-8fbad0cefbf7.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": true,
          "lat": 48.86339,
          "lng": 2.35232,
          "persons": 1,
          "reviewsCount": 77,
          "rating": 4.74,
          "type": "Entire rental unit",
          "userId": 271527319,
          "address": "Paris, Île-de-France, France",
          "amenityIds": [
            35,
            611,
            4,
            103,
            40,
            104,
            42,
            11,
            44,
            45,
            77,
            46,
            85,
            86,
            663,
            30
          ],
          "previewAmenities": [
            "Wifi",
            "Heating"
          ],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 76,
            "currency": "USD",
            "total": 76,
            "priceItems": [
              {
                "title": "$62 x 1 night",
                "amount": 62
              },
              {
                "title": "Service fee",
                "amount": 10
              },
              {
                "title": "Occupancy taxes and fees",
                "amount": 4
              }
            ]
          }
    },
    {
          "id": 29331544,
          "url": "https://www.airbnb.com/rooms/29331544",
          "deeplink": "https://www.airbnb.com/rooms/29331544?check_in=2022-05-16&check_out=2022-05-17&adults=1",
          "position": 2,
          "name": "Hôtel Boronali *** - Room w/ Balcony in Montmartre",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 1,
          "city": "Paris",
          "neighborhood": "Montmartre",
          "images": [
            "https://a0.muscache.com/im/pictures/045134fc-ee8d-49ec-8132-28cfa0823a7b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/efa8da85-f63b-4489-a5e5-8c667c3d11b1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e77a86b7-3cbb-4e7b-809e-080833ad13ba.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0fb80424-a3e1-441c-ad7d-0b0aa1af033c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/65b44591-0d64-43a0-bd68-b754c0123e56.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/06355013-9a23-4a44-b4f2-4918d76357b8.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/e7445918-956f-4c96-bda4-6a62af0ca732.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 48.88869,
          "lng": 2.34793,
          "persons": 2,
          "reviewsCount": 283,
          "rating": 4.52,
          "type": "Room in boutique hotel",
          "userId": 98087989,
          "address": "Paris, Île-de-France, France",
          "amenityIds": [
            1,
            4,
            5,
            71,
            10,
            77,
            21,
            85,
            86,
            91,
            30,
            35,
            611,
            36,
            100,
            37,
            38,
            39,
            103,
            40,
            41,
            42,
            44,
            45,
            46,
            47,
            51,
            55
          ],
          "previewAmenities": [
            "Wifi",
            "Heating"
          ],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 137,
            "currency": "USD",
            "total": 137,
            "priceItems": [
              {
                "title": "$135 x 1 night",
                "amount": 135
              },
              {
                "title": "Occupancy taxes and fees",
                "amount": 2
              }
            ]
          }
    },
    {
          "id": 54368898,
          "url": "https://www.airbnb.com/rooms/54368898",
          "deeplink": "https://www.airbnb.com/rooms/54368898?check_in=2022-05-16&check_out=2022-05-17&adults=1",
          "position": 3,
          "name": "Studio apartment, quiet and bright",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 1,
          "city": "Clichy",
          "neighborhood": "Batignolles",
          "images": [
            "https://a0.muscache.com/im/pictures/bfb3bdd5-22a6-4d02-8369-21d56660f34b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f65c5dd7-9235-4f14-a2dc-ebe670756bc3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/58294f26-2ba5-4399-9f44-be1808395b86.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/553d8130-0cc2-4f0d-ade1-ea586661280a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/26d29ef6-83a1-4909-8d1c-c6d4d4dfc634.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c03fd951-8bf3-45bb-8d33-df93c4e75184.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/users/5868853/profile_pic/1418525185/original.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 48.90118,
          "lng": 2.29792,
          "persons": 2,
          "reviewsCount": 6,
          "rating": 4.83,
          "type": "Entire rental unit",
          "userId": 5868853,
          "address": "Clichy, Île-de-France, France",
          "amenityIds": [
            4,
            8,
            72,
            137,
            10,
            12,
            77,
            85,
            89,
            665,
            91,
            667,
            93,
            30,
            94,
            95,
            671,
            672,
            33,
            35,
            103,
            40,
            104,
            44,
            236,
            45,
            46,
            47,
            308
          ],
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer",
            "Heating"
          ],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 77,
            "currency": "USD",
            "total": 77,
            "priceItems": [
              {
                "title": "$63 x 1 night",
                "amount": 63
              },
              {
                "title": "Service fee",
                "amount": 11
              },
              {
                "title": "Occupancy taxes and fees",
                "amount": 3
              }
            ]
          }
    },
    {
          "id": 53700221,
          "url": "https://www.airbnb.com/rooms/53700221",
          "deeplink": "https://www.airbnb.com/rooms/53700221?check_in=2022-05-16&check_out=2022-05-17&adults=1",
          "position": 4,
          "name": "Chambre privée dans appartement parisien",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 1,
          "city": "Paris",
          "neighborhood": "Ternes",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/a7799717-0751-4b7c-a6f1-59baff77a2ff.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/103581a3-4f7e-4ea6-9743-58c8012f04db.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/3c8cb4c1-3c57-4526-9fa5-cfb1be4ff6e6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/3cd4cecb-6c22-4f6d-bd0f-2e86304643f9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-53700221/original/10a39643-e7d5-4947-bacb-13c9fb2c6367.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/95163868-2011-4db1-86cc-dc635e33b9dd.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 48.87892,
          "lng": 2.29638,
          "persons": 1,
          "reviewsCount": 0,
          "type": "Private room in rental unit",
          "userId": 335354699,
          "address": "Paris, Île-de-France, France",
          "amenityIds": [
            129,
            4,
            8,
            10,
            522,
            77,
            79,
            21,
            85,
            86,
            663,
            665,
            91,
            667,
            92,
            93,
            30,
            94,
            95,
            671,
            33,
            34,
            35,
            36,
            37,
            103,
            167,
            40,
            104,
            42,
            107,
            44,
            236,
            45,
            46,
            47,
            625,
            308,
            632,
            61
          ],
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer",
            "Heating"
          ],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 35,
            "currency": "USD",
            "total": 35,
            "priceItems": [
              {
                "title": "$28 x 1 night",
                "amount": 28
              },
              {
                "title": "Service fee",
                "amount": 5
              },
              {
                "title": "Occupancy taxes and fees",
                "amount": 2
              }
            ]
          }
    },
    {
          "id": 54088138,
          "url": "https://www.airbnb.com/rooms/54088138",
          "deeplink": "https://www.airbnb.com/rooms/54088138?check_in=2022-05-16&check_out=2022-05-17&adults=1",
          "position": 5,
          "name": "Paris is a 20-minute walk to the Eiffel Tower",
          "bathrooms": 1,
          "bedrooms": 0,
          "beds": 1,
          "city": "Paris",
          "neighborhood": "Commerce - Dupleix",
          "images": [
            "https://a0.muscache.com/im/pictures/92cfa47a-d90a-4281-b8d1-a7dee1b556ef.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7d18b5f9-c617-404b-b63d-8c90bb4e1099.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7737df84-1546-40bf-b5a4-057159f54f41.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c1b922d2-a5a4-4c31-86c8-b61ee5c535c3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e6484ca3-9bca-4204-9499-7cc1f103fb4c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2970ec03-e371-4f5f-bddf-030250f37cd4.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/69cd8849-b519-4318-ba05-6979c4e304a2.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": true,
          "lat": 48.84317,
          "lng": 2.28331,
          "persons": 1,
          "reviewsCount": 3,
          "rating": 4.67,
          "type": "Entire rental unit",
          "userId": 84691491,
          "address": "Paris, Île-de-France, France",
          "amenityIds": [
            5,
            8,
            10,
            394,
            77,
            146,
            663,
            89,
            665,
            667,
            93,
            30,
            672,
            98,
            35,
            611,
            101,
            40,
            104,
            41,
            107,
            236,
            47,
            625,
            308
          ],
          "previewAmenities": [
            "Kitchen",
            "Heating"
          ],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 67,
            "currency": "USD",
            "total": 67,
            "priceItems": [
              {
                "title": "$55 x 1 night",
                "amount": 55
              },
              {
                "title": "Service fee",
                "amount": 9
              },
              {
                "title": "Occupancy taxes and fees",
                "amount": 3
              }
            ]
          }
    },
    {
          "id": 31868079,
          "url": "https://www.airbnb.com/rooms/31868079",
          "deeplink": "https://www.airbnb.com/rooms/31868079?check_in=2022-05-16&check_out=2022-05-17&adults=1",
          "position": 6,
          "name": "Room & Pool",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 1,
          "city": "Paris",
          "neighborhood": "Vaugirard",
          "images": [
            "https://a0.muscache.com/im/pictures/c027a6cf-1a06-4228-9cdd-b39f95b0b4dc.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/121c58d3-f351-4b7f-aa76-9eeba23cdf30.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/08f9813e-d2c7-4d65-80f4-8c5a14692ab2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-31868079/original/4b415d12-69ad-4a6f-8d96-c4da19cd51dd.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-31868079/original/639a87d5-ea0e-43b2-8f80-eeb6fa250e4c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/83941d3c-8124-482f-a2e3-c9c20aaca937.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/2a12c9cb-362a-4fea-8782-e97587854ecc.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "rareFind": false,
          "lat": 48.84222,
          "lng": 2.3013,
          "persons": 2,
          "reviewsCount": 367,
          "rating": 4.85,
          "type": "Room in boutique hotel",
          "userId": 188661433,
          "address": "Paris, Île-de-France Region, France",
          "amenityIds": [
            128,
            1,
            2,
            4,
            5,
            7,
            136,
            10,
            15,
            657,
            21,
            663,
            27,
            30,
            671,
            672,
            35,
            37,
            39,
            40,
            41,
            42,
            44,
            45,
            46,
            47,
            51,
            55,
            185,
            61,
            64,
            71,
            72,
            77,
            79,
            85,
            86,
            90,
            91,
            92,
            93,
            223,
            98,
            227,
            611,
            100,
            103,
            104,
            232,
            109,
            117,
            126,
            127
          ],
          "previewAmenities": [
            "Wifi",
            "Heating"
          ],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 176,
            "currency": "USD",
            "total": 176,
            "priceItems": [
              {
                "title": "$170 x 1 night",
                "amount": 170
              },
              {
                "title": "Occupancy taxes and fees",
                "amount": 6
              }
            ]
          }
    },
    {
          "id": 49992714,
          "url": "https://www.airbnb.com/rooms/49992714",
          "deeplink": "https://www.airbnb.com/rooms/49992714?check_in=2022-05-16&check_out=2022-05-17&adults=1",
          "position": 7,
          "name": "Lovely little house near Eiffel Tower 2/4P",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 2,
          "city": "Paris",
          "neighborhood": "Tour Eiffel - Champ de Mars",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-49992714/original/e66017bc-ca03-4a9f-99d8-76016b90d149.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49992714/original/b15b5001-c34c-41a5-ab8c-9984821cebe4.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49992714/original/1141d3a2-eebe-4c1c-b48d-71cad7dbffcc.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49992714/original/a5f5fbde-e529-48ca-8c93-12a5221d01e6.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49992714/original/00bec9c8-a57c-4f0a-a9d9-7c01a17f95ed.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49992714/original/a3ac6d5a-1681-4c3d-ad1c-66934c195956.png?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/82fdf5d1-a3ab-4dad-8a0c-077adfabec13.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 48.85531,
          "lng": 2.30472,
          "persons": 4,
          "reviewsCount": 39,
          "rating": 4.41,
          "type": "Entire rental unit",
          "userId": 402363327,
          "address": "Paris, Île-de-France, France",
          "amenityIds": [
            1,
            4,
            5,
            71,
            8,
            73,
            137,
            12,
            77,
            85,
            89,
            665,
            90,
            91,
            93,
            30,
            94,
            671,
            672,
            33,
            35,
            611,
            36,
            37,
            40,
            41,
            44,
            45,
            47,
            51,
            54,
            251
          ],
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer",
            "Heating"
          ],
          "cancelPolicy": "CANCEL_FLEXIBLE",
          "price": {
            "rate": 189,
            "currency": "USD",
            "total": 189,
            "priceItems": [
              {
                "title": "$106 x 1 night",
                "amount": 106
              },
              {
                "title": "Cleaning fee",
                "amount": 51
              },
              {
                "title": "Service fee",
                "amount": 26
              },
              {
                "title": "Occupancy taxes and fees",
                "amount": 6
              }
            ]
          }
    },
    {
          "id": 19796151,
          "url": "https://www.airbnb.com/rooms/19796151",
          "deeplink": "https://www.airbnb.com/rooms/19796151?check_in=2022-05-16&check_out=2022-05-17&adults=1",
          "position": 8,
          "name": "MAGNIFICENT VIEW EIFFEL TOWER PRIVATE STUDIO AND BALCONY",
          "bathrooms": 1,
          "bedrooms": 0,
          "beds": 1,
          "city": "Paris",
          "neighborhood": "Tour Eiffel - Champ de Mars",
          "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-19796151/original/e92d2f61-68b1-4977-ade9-e7bad78bd637.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-19796151/original/ac05b3bc-8c61-4043-8052-b6e5e4268a63.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-19796151/original/7f22b05c-92c0-4445-9fb1-fd4e43f8968e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-19796151/original/3634c659-a275-4055-bd23-d59d3f72a64c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-19796151/original/421fa4fc-e80b-4de1-8152-5443c8dfdf0e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-19796151/original/b11b9c72-0b16-4ba3-8823-84a9050e8672.jpeg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/a5c8da13-276a-4767-835a-4652c2eb9f6e.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "rareFind": false,
          "lat": 48.8543,
          "lng": 2.29572,
          "persons": 2,
          "reviewsCount": 371,
          "rating": 4.86,
          "type": "Private room in rental unit",
          "userId": 8847681,
          "address": "Paris, Île-de-France, France",
          "amenityIds": [
            1,
            129,
            4,
            8,
            137,
            10,
            522,
            331,
            77,
            85,
            86,
            663,
            280,
            89,
            665,
            90,
            91,
            667,
            93,
            30,
            94,
            95,
            287,
            671,
            96,
            672,
            98,
            35,
            611,
            100,
            40,
            104,
            42,
            107,
            44,
            236,
            45,
            46,
            47,
            625,
            500
          ],
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Heating"
          ],
          "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
          "price": {
            "rate": 454,
            "currency": "USD",
            "total": 454,
            "priceItems": [
              {
                "title": "$305 x 1 night",
                "amount": 305
              },
              {
                "title": "Cleaning fee",
                "amount": 79
              },
              {
                "title": "Service fee",
                "amount": 64
              },
              {
                "title": "Occupancy taxes and fees",
                "amount": 6
              }
            ]
          }
    },
    {
          "id": 9825542,
          "url": "https://www.airbnb.com/rooms/9825542",
          "deeplink": "https://www.airbnb.com/rooms/9825542?check_in=2022-05-16&check_out=2022-05-17&adults=1",
          "position": 9,
          "name": "Charm in Heart of Paris Vaugirard",
          "bathrooms": 1,
          "bedrooms": 1,
          "beds": 4,
          "city": "Paris",
          "neighborhood": "Vaugirard",
          "images": [
            "https://a0.muscache.com/im/pictures/21f05d85-1f77-481f-9156-c590f76ddd63.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/55368e1c-ecfa-43ec-8a87-e4695deca077.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6b567724-cbba-488d-9fea-7a788476a38e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/816cd6b8-8fc9-4df2-a9c3-06799ebd2c42.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b54ce644-5778-4f9b-b882-78e152e548e8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/61d831c6-ddde-49f8-80a4-7a55d18df8f0.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/058cd137-7993-4847-a3e1-96d9c2a4f25d.jpg?aki_policy=profile_x_medium",
          "isSuperhost": false,
          "rareFind": false,
          "lat": 48.83757,
          "lng": 2.29666,
          "persons": 6,
          "reviewsCount": 414,
          "rating": 4.41,
          "type": "Entire rental unit",
          "userId": 50605450,
          "address": "Paris, Île-de-France, France",
          "amenityIds": [
            1,
            2,
            4,
            8,
            10,
            12,
            77,
            146,
            85,
            86,
            663,
            89,
            90,
            93,
            30,
            94,
            31,
            96,
            33,
            35,
            37,
            39,
            40,
            44,
            45,
            46,
            51,
            500,
            54
          ],
          "previewAmenities": [
            "Hosted by a business",
            "Wifi",
            "Kitchen",
            "Washer"
          ],
          "cancelPolicy": "CANCEL_MODERATE",
          "price": {
            "rate": 135,
            "currency": "USD",
            "total": 135,
            "priceItems": [
              {
                "title": "$78 x 1 night",
                "amount": 78
              },
              {
                "title": "Cleaning fee",
                "amount": 33
              },
              {
                "title": "Service fee",
                "amount": 19
              },
              {
                "title": "Occupancy taxes and fees",
                "amount": 5
              }
            ]
          }
    },
    {
          "id": 15297775,
          "url": "https://www.airbnb.com/rooms/15297775",
          "deeplink": "https://www.airbnb.com/rooms/15297775?check_in=2022-05-16&check_out=2022-05-17&adults=1",
          "position": 10,
          "name": "TOUR EIFFEL VUE FANTASTIQU STUDIO ET BALCON PRIVES",
          "bathrooms": 1,
          "bedrooms": 0,
          "beds": 1,
          "city": "Paris",
          "neighborhood": "Tour Eiffel - Champ de Mars",
          "images": [
            "https://a0.muscache.com/im/pictures/b1cc348d-d8f0-44f5-8184-274fd4123243.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2ce0854a-da63-4d91-a0f7-7d89901846aa.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/6debe6c0-266b-4a52-939e-9e153f950070.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15297775/original/04c0be83-c3f0-4352-b477-678a09a7e0ff.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15297775/original/bb2988e6-c0ef-4ea1-907c-36cc6ae3aa0a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/b2eb07ee-62b8-4431-9921-1087bdaf6765.jpg?im_w=720"
          ],
          "hostThumbnail": "https://a0.muscache.com/im/pictures/user/22cec13b-dbee-41f0-b2d8-aba0d8feb741.jpg?aki_policy=profile_x_medium",
          "isSuperhost": true,
          "rareFind": false,
          "lat": 48.85354,
          "lng": 2.29519,
          "persons": 2,
          "reviewsCount": 314,
          "rating": 4.78,
          "type": "Private room in rental unit",
          "userId": 13090594,
          "address": "Paris, Île-de-France, France",
          "amenityIds": [
            1,
            129,
            4,
            8,
            137,
            10,
            522,
            77,
            21,
            85,
            86,
            663,
            280,
            89,
            665,
            90,
            91,
            667,
            93,
            30,
            94,
            95,
            287,
            671,
            96,
            672,
            33,
            35,
            611,
            100,
            40,
            104,
            42,
            44,
            236,
            45,
            46,
            47,
            49,
            50,
            179,
            500
          ],
          "previewAmenities": [
            "Wifi",
            "Kitchen",
            "Washer",
            "Heating"
          ],
          "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
          "price": {
            "rate": 454,
            "currency": "USD",
            "total": 454,
            "priceItems": [
              {
                "title": "$305 x 1 night",
                "amount": 305
              },
              {
                "title": "Cleaning fee",
                "amount": 79
              },
              {
                "title": "Service fee",
                "amount": 64
              },
              {
                "title": "Occupancy taxes and fees",
                "amount": 6
              }
            ]
          }
    },  
  {
      "id": "874444754719199464",
      "url": "https://www.airbnb.com/rooms/874444754719199464",
      "deeplink": "https://www.airbnb.com/rooms/874444754719199464?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 1,
      "name": "Orane Castle",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Hosapete",
      "images": [
        "https://a0.muscache.com/im/pictures/8ccd25c1-b9a3-4569-8010-6aea2d16afb6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5697628c-1a7b-4d66-bce2-d519588a2650.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a99788c6-54a2-4f92-9d06-b157fdf84b33.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/8fbe1543-48dd-491e-ae1e-abb3577fb824.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/99b3997d-c745-4fe4-828f-6b7d5df82e05.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/291a40a4-0015-40bc-9625-212e0c73bfab.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/264512b7-bdee-4cad-8f4a-2273a0336099.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/24c02869-243f-4d5c-a771-589b5a7abb29.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a07dc241-ec40-4ff5-bf9c-6c2ef2d0d809.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/81f1f3b7-4110-4dc0-bc7b-e46e98b1cb00.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/1e94c0dc-4144-45df-a6d2-dde8dcca814c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/11b02329-8f90-412d-8761-03900a80908f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b89835c5-3f01-4ab6-824c-00c4ad3b7e24.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e8900399-f145-49bd-8f00-032b9c89a3ca.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f5ba013a-affd-471a-9b27-bf19410c13e4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/25987d66-3fd9-4e74-a45d-fa1808e4f15e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0bb57adf-87b3-4bd2-93f0-be34a68587bb.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/9d92fbd3-9e9e-4129-ab4a-c0586215b2f3.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/ceddf81e-4397-40e4-a8af-914de215177a.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 15.284141483588382,
      "lng": 76.42459504388843,
      "persons": 3,
      "reviewsCount": 7,
      "rating": 4.71,
      "type": "Earthen home",
      "userId": 433672737,
      "address": "Hosapete, Karnataka, India",
      "amenityIds": [
        4,
        132,
        133,
        7,
        8,
        9,
        394,
        522,
        139,
        12,
        527,
        528,
        145,
        657,
        280,
        665,
        30,
        672,
        34,
        37,
        39,
        167,
        40,
        41,
        45,
        46,
        686,
        47,
        179,
        57,
        185,
        61,
        65,
        71,
        73,
        74,
        77,
        79,
        210,
        211,
        85,
        86,
        91,
        93,
        227,
        611,
        100,
        101,
        232,
        364,
        510
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 74,
        "currency": "USD",
        "total": 74,
        "priceItems": [
          {
            "title": "$57 x 1 night",
            "amount": 57
          },
          {
            "title": "Airbnb service fee",
            "amount": 10
          },
          {
            "title": "Taxes",
            "amount": 7
          }
        ]
      }
    }
  ]
      console.log(dt)
      getCards(dt);


    function getCards(data){
        const room_container=document.querySelector(".left-col");
        const n=data.length;
        // let revRate= 0.0;
        // if(data[room].rating === "undefined"){
        //     revRate = data[room].rating;
        // } console.log(revRate);
        let p=document.createElement("p");
        p.innerText=`${n}+ stays in ${data[0].city}`
        room_container.appendChild(p);
        
        for (let room=0;room<n/2;room++){
            const house=document.createElement("div");
            house.setAttribute("class","house");
            const freebies= data[room].previewAmenities.join(" ");
            house.innerHTML=`
                    <div class="house-img">
                        <a href="booking.html" id=""><img src="${data[room].images[0]}"></a>
                    </div>
                    <div class="house-info">
                      <p>${data[room].name}</p>
                        
                      <div class="house-title">
                            <h3>${data[room].type}</h3>
                            <i class="ri-heart-line"></i>
                      </div> 
                      <div id="cost-btn"></div>

                      <div class="house-offerings">
                              <p id="offering">${data[room].persons} guests · Entire Home · ${data[room].beds} beds · ${data[room].bathrooms} bath</p>
                          <p>${freebies}</p>
                      </div>
                        
                          <p id="house-rating">${data[room].rating} &nbsp &nbsp<i class="star ri-star-fill"></i>(${data[room].reviewsCount} reviews)</p>
                          <div class="room-price">          
                          <h4>${data[room].price.currency} ${data[room].price.rate}<span>/ night</span></h4>
                          <button class="detail-btn">View</button>
                          </div>
                    </div> 
            `;
          const house_redirect=house.querySelector(".house-img img")
          house_redirect.addEventListener("click",(e)=>{
            e.preventDefault();
            houseFullDetails(data[room])
          });
            // adding cost breakdown 
            const costing=house.querySelector("#cost-btn")
            const btn=document.createElement("button");
            btn.innerText='cost breakdown'
           btn.addEventListener("click",()=>{CostBreak(data[room])});
          costing.appendChild(btn);
            map_details.push({latitude:data[room].lat,lagtitude:data[room].lng,});
            room_container.appendChild(house);
        }
    }
    getDetails(storedLocation, storedCheckIn, storedCheckOut, storedGuest);
    
    function CostBreak(listing,id) {
        // Calculate additional fees and total cost
        const additionalFees = listing.price * 0.10; // Assuming additional fees are 10% of base price
        const totalCost = listing.price + additionalFees;
    
        // Create a modal dialog box
        const modal = document.createElement("div");
        modal.setAttribute("id",id);
        modal.style.display = "block";
        modal.style.width = "300px";
        modal.style.height = "200px";
        modal.style.backgroundColor = "#fff";
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.padding = "20px";
        modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    
        // Add booking cost breakdown to the modal
        let fees=0;
        
        for(let i=1;i<listing.price.priceItems.length;i++){
          if(listing.price.priceItems[i]){
            fees+=listing.price.priceItems[i].amount;
          }
        }
        modal.innerHTML = `
            <h2>Booking Cost Breakdown</h2>
            <p>Base Rate: ${listing.price.priceItems[0].amount}</p>
            <p>Additional Fees: ${fees}</p>
            <p>Total Cost: ${listing.price.rate}</p>
        `;
        
        // Add a close button to the modal
        const closeButton = document.createElement("button");
        closeButton.innerText = "Close";
        closeButton.addEventListener("click", () => modal.style.display = "none");
        modal.appendChild(closeButton);
    
        // Add the modal to the body
        document.body.appendChild(modal);
    }
    
    function houseFullDetails(data){
      window.location.href='house.html';
      const container=document.querySelector(".container");
      const house_header=document.createElement("div");
      house_header.setAttribute("class","house-title");
      house_header.innerHTML=`
      <h1>${data.type}</h1>
      <div class="row">
          <div>
              <span><i class="ri-star-fill"></i> ${data.rating}</span>
              <span> &middot; ${data.reviewsCount} Reviews</span>
          </div>
          <div>
              <p>Location: ${data.address}</p>
              <p><img src="images/share.png" alt="">Share  <img src="images/heart.png" alt=""> Like</p>
          </div>
      </div>
      `;
      container?.appendChild(house_header);
      const gallery=document.createElement("div");
      gallery.setAttribute("class", "gallery");
      gallery.innerHTML=`
      <div class="gallery-img-1">
                <img src="${data.images[0]}"></div>
                <div><img src="${data.images[1]}"></div>
                <div><img src="${data.images[2]}"></div>
                <div><img src="${data.images[3]}"></div>
                <div><img src="${data.images[4]}"></div>
      `;
      container?.appendChild(gallery);
      const house_room=document.createElement("div");
      house_room.setAttribute("class","house-room-details");
      house_room.innerHTML=`
      <div class="room-details">
                    <div class="house-fdetails">
                        <div>
                        <h1 id="room-host-d">Entire rental unit hosted by</h1>
                        <p id="room-has">${data.persons} guest &nbsp; &nbsp; ${data.beds} beds &nbsp; &nbsp; ${data.bathrooms} bathroom</p>
                        </div>
                        <img src="${data.hostThumbnail}" id="house-host"alt="">
                    </div>
                    <hr>
                    <div class="house-policies">
                        <h2>${data.name}</h2>
                        <p class="about-room">${data.type}</p>
                        <h2 id="room-policy">${data.cancelPolicy}</h2>
                    </div>
                    <div class="hotel-amenities">
                        <h1>what this place offers</h1>
                        <p>air</p>
                        <p>wifi</p>
                        <p>sdfs</p>
                    </div>
                </div>
                <div class="room-pay">
                    <div class="rp-review">
                        <p>${data.price.currency} ${data.price.rate}/night</p>
                        <p>${data.rating} <i class="ri-star-fill"></i> (${data.reviewsCount}Reviews)</p>
                    </div>
                    <form>
                        <label for="checkin">check in</label>
                        <input type="date">
                        <label for="checkout">check out</label>
                        <input type="date">
                        <label for="guest">Guests</label>
                        <input type="text" placeholder="ex: '2' Guests">
                        <button >Reserve</button>
                    </form>
                    <div class="room-pay-fees">
                        <div class="cleaning-fee">
                            <p>Rate</p>
                            <p id="clean-fee">${data.price.priceItems[0].amount}</p>
                        </div>
                        <div class="service-fees">
                            <p>Service fee</p>
                            <p id="service-fee">${data.price.priceItems[1].amount}</p>
                        </div>
                        <div class="taxes">
                            <p>Occupancy taxes and fees</p>
                            <p id="tax-fee">${data.price.priceItems[2].amount}</p>
                        </div>
                        <hr>
                        <div class="total-pay">
                            <p>Total</p>
                            <p id="total-fee">${data.price.total}</p>
                        </div>
                    </div>
                </div>
      `;
      container?.appendChild(house_room);
    }
