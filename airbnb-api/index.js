// 080201
const express = require('express')
const app = express()

app.listen(4000, () => console.log('Ready on port 4000'))

// 80202 - 80301
app.get('/', require('./controllers/root'))

// 80203
app.get('/places', (req, res) => res.send({places: [
  {
    _id: '1',
    title: 'Luxury Villa Indu Siam',
    type: 'Entire Villa',
    price: 200,
    rating: 5,
    city: 'Koh Samui',
    country: 'Thailand',
    amenities: ['Kitchen', 'Gym', 'Iron'],
    images: [
      'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
      'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg'
    ]
  },
  {
    _id: '2',
    title: 'Breathtaking Infinite Pool',
    type: 'Entire Villa',
    price: 180,
    rating: 4,
    city: 'Bali',
    country: 'Indonesia',
    amenities: ['Air Conditioning', 'Kitchen', 'Swimming Pool'],
    images: [
      'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
      'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg'
    ]
  }
]}))
