class Place {
    constructor(
     title,imageUri,address,location
    ) {
      this.imageUri = imageUri;
      this.address = address;
      this.title = title;
      this.location = location;
      this.id = new Date().toString()+Math.random().toString()
     
    }
  }
  
  export default Meal;