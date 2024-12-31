import React from "react";
import "./App.css";

function App() {
  const cafeData = {
    cafe1: {
      name: "Atelier De Fer Coffee and Tea",
      drink: "Peppermint Mocha",
      location: "Pittsburgh, PA",
      type: "Hot",
      rating: "7/10",
      musings: "campus coffee in another city",
      image: "./images/aldefer.png",
    },
    cafe15: {
      name: "Kaldi's Cafe",
      drink: "Frozen Turtle (Mocha)",
      location: "Atlanta",
      type: "Iced",
      rating: "7/10",
      musings: "you are the new P Y C",
      image: "./images/kaldis-frozen.png",
    },
    cafe11: {
      name: "Georgie's Corner",
      drink: "Matcha Latte",
      location: "Pittsburgh",
      type: "Iced",
      rating: "6/10",
      musings: "change is good, try it sometimes",
      image: "./images/georgie-matcha.png",
    },
    cafe2: {
      name: "Maman",
      drink: "Peppermint Almond Matcha Latte",
      location: "Washington DC",
      type: "Iced",
      rating: "9/10",
      musings:
        "even if the universe does not have my back, I know my friends do",
      image: "./images/maman.png",
    },
    cafe3: {
      name: "Snooze Midtown",
      drink: "Honeyoat Almond Latte",
      location: "Atlanta",
      type: "Iced",
      rating: "9/10",
      musings: "did not have time to finish this and I am so so sad",
      image: "./images/snooze.png",
    },
    cafe4: {
      name: "Postern Coffee",
      drink: "Coconut Ube Latte",
      location: "Atlanta",
      type: "Iced",
      rating: "6/10",
      musings: "every flavor of you reveals something new",
      image: "./images/postern-coconut.png",
    },
    cafe10: {
      name: "Georgie's Corner",
      drink: "Peppermint Latte",
      location: "Pittsburgh",
      type: "Hot",
      rating: "9/10",
      musings: "oh how you are a classic",
      image: "./images/georgies-pep.png",
    },
    cafe5: {
      name: "Arri Viste",
      drink: "Ube Latte",
      location: "Pittsburgh",
      type: "Iced",
      rating: "9/10",
      musings: "I MISS YOU",
      image: "./images/ari-ube.png",
    },
    cafe13: {
      name: "Heuk Hwa Dang",
      drink: "Strawberry Matcha Latt Boba",
      location: "New York",
      type: "Iced",
      rating: "8/10",
      musings: "new york i am coming from you",
      image: "./images/hhd-strawberry-boba.png",
    },
    cafe6: {
      name: "Gute Leute",
      drink: "Strawberry Latte",
      location: "Arlington",
      type: "Iced",
      rating: "9/10",
      musings: "oh to celebrate again with you",
      image: "./images/gute.png",
    },
    cafe14: {
      name: "Kaldi's Cafe",
      drink: "Matcha Latte",
      location: "Atlanta",
      type: "Iced",
      rating: "7/10",
      musings: "matcha don't fail me now",
      image: "./images/kaldis-matcha.png",
    },
    cafe7: {
      name: "Coffee Tree Roasters",
      drink: "Matcha Latte",
      location: "Pittsburgh",
      type: "Iced",
      rating: "6/10",
      musings: "i need to change",
      image: "./images/coffeetreeroasters.png",
    },
    cafe8: {
      name: "Mechanic Coffee",
      drink: "Winter Wonder (Decaf)",
      location: "Pittsburgh",
      type: "Hot",
      rating: "7/10",
      musings: "being babied",
      image: "./images/mechanic.png",
    },
    cafe9: {
      name: "Kyo Matcha",
      drink: "Matcha Latte",
      location: "Pittsburgh",
      type: "Iced",
      rating: "6/10",
      musings: "peer pressure",
      image: "./images/kyomatcha.png",
    },
    cafe12: {
      name: "Cuckoo's Cafe",
      drink: "Matcha Boba",
      location: "Atlanta",
      type: "Iced",
      rating: "8/10",
      musings: "now if i take my grad pics here then what",
      image: "./images/cuckoo-matcha.png",
    },
    cafe16: {
      name: "Ludi's Restaurant",
      drink: "Halo Halo",
      location: "Seattle",
      type: "Iced",
      rating: "10/10",
      musings: "BANGER ON BANGER ON BANGER I KNOW IT IS NOT A CAFE BUT STILL",
      image: "./images/ludi-halo.png",
    },
    cafe17: {
      name: "Matcha Maiko",
      drink: "Matcha Ube Latte",
      location: "Atlanta",
      type: "Iced",
      rating: "10/10",
      musings: "oh wow...",
      image: "./images/matcha-maiko-ube.png",
    },
    cafe18: {
      name: "Moge Tee",
      drink: "Classic Uji Matcha Latte",
      location: "Atlanta",
      type: "Iced",
      rating: "5/10",
      musings: "convienence",
      image: "./images/moge-uji-matcha.png",
    },
  };
  return (
    <>
      <div class="m-2 block">
        <div class="flex flex-row font-serif justify-between">
          <div class="flex flex-row space-between text-red-400">
            <h3 class="p-1.5 hover:text-red-800">Hot</h3>
            <h3 class="p-1.5 hover:text-red-800">Iced</h3>
            <h3 class="p-1.5 hover:text-red-800">Atlanta</h3>
            <h3 class="p-1.5 hover:text-red-800">Pittsburgh</h3>
            <h3 class="p-1.5 hover:text-red-800">DC</h3>
            <h3 class="p-1.5 hover:text-red-800">New York</h3>
          </div>
          <h1 class="p-1.5 italic text-emerald-700">
            every cafe I lived in—
          </h1>
        </div>
        <div class="grid grid-cols-5 gap-8 p-2 font-sans">
          {Object.values(cafeData).map((cafe, index) => (
            <div
              key={index}
              class="flex flex-col justify-start cursor-pointer"
            >
              <div class="relative group w-full aspect-square">
                <div class="absolute inset-0 flex flex-col justify-center p-4">
                  <p class="text-left font-semibold txt-sm text-emerald-700">
                    {cafe.name}
                  </p>
                  <p class="text-left text-sm text-emerald-700">
                    {cafe.drink}
                  </p>
                  <p class="text-left text-sm text-emerald-700">
                    {cafe.rating}
                  </p>
                  <p class="text-left text-xs italic text-emerald-700">
                    {cafe.musings}
                  </p>
                </div>
                <img
                  class="absolute w-full h-full aspect-square object-cover transition-opacity opacity-100 group-hover:opacity-20 duration-300"
                  src={cafe.image}
                  alt={cafe.name}
                />
              </div>
              <p class="font-serif text-red-400 text-sm mt-2">
                {cafe.name}
              </p>
            </div>
          ))}
        </div>
        <a
          href="https://mini-studio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="font-sans text-semibold italic text-emerald-700 text-center">
            powered by love and caffeine, with mini
          </p>
        </a>
      </div>
    </>
  );
}

export default App;
