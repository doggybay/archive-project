export const makeWidget = (setPictures, pictures) => window.cloudinary.createUploadWidget(
  {
    cloudName: "dnrmrcpbi",
    uploadPreset: "archivePictures",
    sources: ["local", "camera"],
    multiple: false,
    styles: {
      palette: {
        window: "#F5F5F5",
        sourceBg: "#FFFFFF",
        windowBorder: "#90a0b3",
        tabIcon: "#0094c7",
        inactiveTabIcon: "#69778A",
        menuIcons: "#0094C7",
        link: "#53ad9d",
        action: "#8F5DA5",
        inProgress: "#0194c7",
        complete: "#53ad9d",
        error: "#c43737",
        textDark: "#000000",
        textLight: "#FFFFFF"
      }
    }
  },
  (error, result) => {
    if (result.event === "close") {
      console.log("cloudinary widget closed");
    } else if (result.event === "success") {
      setPictures([...pictures,{pic: result.info.secure_url}]);
    }
  }
)