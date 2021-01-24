var images = [
    "https://curriculum-project-images.s3.ap-south-1.amazonaws.com/ADV/ADV-C78-img1.jpg",
     "https://curriculum-project-images.s3.ap-south-1.amazonaws.com/ADV/ADV-C78-img2.jpg",
  ];
  
  var i = 0;
  function nextslide() { 
   
     if(i == 9)
       {
         i=0;
       }
     
      document.getElementById("album").src = images[i];
    i++;
   
  }
