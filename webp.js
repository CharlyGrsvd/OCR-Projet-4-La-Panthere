import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

(async () => {
  await imagemin(["img/images-src/*.{jpg,png}"], {
    destination: "img/images-optimized/",
    plugins: [imageminWebp({ quality: 90 })],
  });
  console.log("Images optimized");
})();
