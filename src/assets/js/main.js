import '../css/main.css';

import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

function imageGallery() {
    return {
      images: [],
      api_key: "32186098-4687e9302085aeaeaed496199",
      q: "",
      image_type: "",
      page: "",
      per_page: 200,
    }
  }

