function imageGallery() {
    return {
      images: [],
      api_key: "9158365-4702ac79e23be9aab580d1f9b",
      q: "",
      image_type: "",
      page: "",
      per_page: 200,
      getImages: async function () {
        const response = await fetch(
          `https://pixabay.com/api/?key=${this.api_key}&q=${this.q}&
          image_type=${this.image_type}&per_page=${this.per_page}&page=${this.page}`
        );
        const data = await response.json();
        this.images = data.hits;
      }
    };
  }