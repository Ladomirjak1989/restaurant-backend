const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the CORS middleware

const app = express();

// Enable CORS for all routes
app.use(cors());

// Define a route for proxying requests to the Yelp API

app.get('/restaurants/:id', async (req, res) => {
   
    try {
        // Extract query parameters from the request
        const { term, location } = req.query;
        const { id } = req.params
     
        // Define the Yelp API endpoint
        const yelpEndpoint = `https://api.yelp.com/v3/businesses/${id}`;

        // Forward the request to the Yelp API
        const response = await axios.get(yelpEndpoint, {
            params: {

                location,
            },
            headers: {
                // 'Authorization': 'Bearer etUZ3WYi8nfnjU2OB6SqQsFsA91R0-tThuzbgOaeaC2zcTWjt4a26Owz317kieHFNgh9cvLwKwPbFxMlpTh1KDxZihtNOlsfPonbbKNB2Dx7KkylY3DgRCe9VlgaZnYx'
                'Authorization': 'Bearer JXXHOVlHRLEajOQgflKqOCXi4a5xBGiPf4CkE9lvYELjPUDqVT7MTnTG5lasLKpbHM-Ex1DcMvwc-EZzEhxc-pBaDqyKYV2Txp6nQ8FHwQxeq78kUxTjNRWKiPMnZnYx'
            },
        });

        
        
        
        // Return the response from the Yelp API to the client
        res.json(response.data);
        // // res.send('hello')
        // res.json({
        //     alias:
        //         "chocolatería-san-ginés-madrid-6",
        //     attributes: {
        //         menu_url
        //             :
        //             ""
        //     },
        //     categories:
        //         [{
        //             alias:
        //                 "chocolate",
        //             title:
        //                 "Chocolatiers & Shops"
        //         },

        //         {
        //             alias:
        //                 "churros",
        //             title:
        //                 "Churros"
        //         },


        //         {
        //             alias:
        //                 "breakfast_brunch",
        //             title
        //                 :
        //                 "Breakfast & Brunch"
        //         }],

        //     coordinates:
        //         { latitude: 40.4167599, longitude: -3.7068 },
        //     display_phone:
        //         "+34 913 65 65 46",
        //     hours:
        //         [{
        //             day:
        //                 0,
        //             end:
        //                 "2330",
        //             is_overnight:
        //                 false,
        //             start:
        //                 "0800"
        //         },
        //         {
        //             day:
        //                 0,
        //             end:
        //                 "2330",
        //             is_overnight:
        //                 false,
        //             start:
        //                 "0800"
        //         },
        //         {
        //             day:
        //                 0,
        //             end:
        //                 "2330",
        //             is_overnight:
        //                 false,
        //             start:
        //                 "0800"
        //         },
        //         {
        //             day:
        //                 0,
        //             end:
        //                 "2330",
        //             is_overnight:
        //                 false,
        //             start:
        //                 "0800"
        //         },
        //         {
        //             day:
        //                 0,
        //             end:
        //                 "2330",
        //             is_overnight:
        //                 false,
        //             start:
        //                 "0800"
        //         },
        //         {
        //             day:
        //                 0,
        //             end:
        //                 "2330",
        //             is_overnight:
        //                 false,
        //             start:
        //                 "0800"
        //         },
        //         {
        //             day:
        //                 0,
        //             end:
        //                 "2330",
        //             is_overnight:
        //                 false,
        //             start:
        //                 "0800"
        //         },
        //         ],

        //     id:
        //         "ql9zlnKW4h_efrketA3Mrg",
        //     image_url:
        //         "https://s3-media4.fl.yelpcdn.com/bphoto/hwpN-tb20RdF_V8jPlCvyQ/o.jpg",
        //     is_claimed:
        //         true,
        //     is_closed:
        //         false,
        //     location:
        //         { address1: 'Pasadizo de San Ginés, 5', address2: '', address3: '', city: 'Madrid', zip_code: '28013', },
        //     name:
        //         "Chocolatería San Ginés",
        //     phone:
        //         "+34913656546",
        //     photos:
        //         [],
        //     price:
        //         "€",
        //     rating:
        //         4.2,
        //     review_count:
        //         1413,
        //     transactions:
        //         [],
        //     url:
        //         "https://www.yelp.com/biz/chocolater%C3%ADa-san-gin%C3%A9s-madrid-6?adjust_creative=LoLSQJ1Rdngtd5akP1Jg0A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=LoLSQJ1Rdngtd5akP1Jg0A",
        // })

    } catch (error) {
        console.error('Error proxying request to Yelp API:', error);
        res.status(500).json({ error: 'An error occurred while proxying the request to the Yelp API' });
    }

});



app.get('/', async (req, res) => {
  
    try {
        // Extract query parameters from the request
        const { term, location } = req.query;
       

        // Define the Yelp API endpoint
        const yelpEndpoint = 'https://api.yelp.com/v3/businesses/search';

        // Forward the request to the Yelp API
        const response = await axios.get(yelpEndpoint, {
            params: {

                location,
            },
            headers: {
                // 'Authorization': 'Bearer etUZ3WYi8nfnjU2OB6SqQsFsA91R0-tThuzbgOaeaC2zcTWjt4a26Owz317kieHFNgh9cvLwKwPbFxMlpTh1KDxZihtNOlsfPonbbKNB2Dx7KkylY3DgRCe9VlgaZnYx'
                'Authorization': 'Bearer JXXHOVlHRLEajOQgflKqOCXi4a5xBGiPf4CkE9lvYELjPUDqVT7MTnTG5lasLKpbHM-Ex1DcMvwc-EZzEhxc-pBaDqyKYV2Txp6nQ8FHwQxeq78kUxTjNRWKiPMnZnYx'
            },

        });

        // Return the response from the Yelp API to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error proxying request to Yelp API:', error);
        res.status(500).json({ error: 'An error occurred while proxying the request to the Yelp API' });
    }
});

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



