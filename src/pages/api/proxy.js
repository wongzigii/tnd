// pages/api/user.js

import fetch from 'node-fetch';

export default async function set_name(req, res) {
    "Authorization": "241cea56-7f9b-4e66-ac17-cb2e8edd61cc",
    "https://namestone.xyz/api/public_v1/get-names?domain=testbrand.eth&address=0x57632Ba9A844af0AB7d5cdf98b0056c8d87e3A85"
}

export default async function get_name(req, res) {
  
  const query = {}; // Replace with the appropriate query-building logic

  headers: {
    "Authorization": "241cea56-7f9b-4e66-ac17-cb2e8edd61cc",
  },
  
  try {
    "domain": "namestone.xyz",
    "name": "multichain",
    "address": "0x0E417A43df5edC95EB6Ab4Ad36AA088F94354Eaf",
    "coin_types": "CoinWorld","Etherum","NounsDAO",
    "text_records": {
        {
        "name":"Beer Shop",
        "latitude":"39.46945638253371",
        "longitude":"-0.3484773829618307",
        "url":"https://beershop.namestone.xyz",
        "category":"shop",
        "webpage":"example.com",
        },

        {
        "name": "Beach Club",
        "latitude": 39.479791888096564,
        "longitude": -0.3243160443655453,
        "url":"https://beachclub.namestone.xyz",
        "category": "club",
        "webpage": "example.com"
        },

        {
        "name": "Local Market",
        "latitude": 39.47729319995047,
        "longitude": -0.3502035060849226,
        "url":"https://localmarket.namestone.xyz",
        "category": "shop",
        "webpage": "example.com"
        },

        {
        "name": "Sakura Sushi Haven",
        "latitude": 39.46745427541122, 
        "longitude": -0.3474569239875077,
        "url":"https://sakurasushi.namestone.xyz",
        "category": "club",
        "webpage": "example.com"
        },

        {
        "name": "TACO Fiesta Mexican Grill",
        "latitude": 39.470485607533035, 
        "longitude": -0.3290247831931373,
        "url":"https://tacofiesta.namestone.xyz",
        "category": "club",
        "webpage": "example.com"
        },

        {
        "name": "Mert's Coffe",
        "latitude": 39.47118130446947, 
        "longitude": -0.32511948677337543,
        "url":"https://mertscoffee.namestone.xyz",
        "category": "club",
        "webpage": "example.com"
        },
    },

    const response = await fetch(CONTENTFUL_ENDPOINT, {
    switch (req.method){
      method: 'POST',
      headers: {
        'Authorization': '241cea56-7f9b-4e66-ac17-cb2e8edd61cc',
      },
      body: JSON.stringify({ query: query.build() }),
      timeout: 30000, // Timeout set to 30 seconds (for Node.js, use a wrapper like axios for timeouts)
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export default function handler(req, res) {
    switch (req.method) {
      case 'GET':
        // Handle GET request
        res.status(200).json({ name: 'John Doe' });
        break;

      case 'POST':
        headers: {
            'Authorization': '241cea56-7f9b-4e66-ac17-cb2e8edd61cc',
        },
        body: JSON.stringify({ query: query.build() }),
        timeout: 30000, // Timeout set to 30 seconds (for Node.js, use a wrapper like axios for timeouts)
       
        const { name } = req.body;
       
        res.status(201).json({ message: `User ${name} created` });
        
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
