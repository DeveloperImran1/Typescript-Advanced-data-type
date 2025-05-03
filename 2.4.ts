{
  // Generic type with interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike: X;
  }

  //   ex 1:
  type EmilabWatchType = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<EmilabWatchType> = {
    // Jeheto Developer type a 2 ta argument expect kortese, tai <> aikhane 2 ta argument pathate hobe. Konota argument na pathale null pathabo. Ar jodi null na pathai, tahole function er moto Developer perameter a default perameter set kore dibo null.
    name: "Imran",
    computer: {
      brand: "Asus",
      model: "X-255UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "Oled",
    },
  };

  //   ex 2:
  interface CasioWatchType {
    brand: string;
    price: number;
  }
  type YamahaBikeType = { name: string };
  const richDeveloper: Developer<CasioWatchType, YamahaBikeType> = {
    name: "Raju",
    computer: {
      brand: "Asus",
      model: "X-255UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Casio",
      price: 2000,
    },
    bike: {
      name: "Yamaha",
    },
  };
}
