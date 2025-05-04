{
  const arrOfNumbers: number[] = [2, 3, 4, 5, 5];
  const arrOfString: string[] = arrOfNumbers?.map((num) => num.toString());
  console.log(arrOfString);

  // maped with type
  type AreaNumber = {
    height: number;
    width: number;
  };

  // Manualy set string type
  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   }

  // js er map method use kore, upore jeirokom dynamicaly every element k access kore bivinno kaj koresi, Thik akivabe type ew dynamycaly sei kaj kora jai.

  // Aikhane AreaString akta object create kortese, jar moddhe key gulo hobe height, width ar tader type hobe string. Jeita colon er por type likha hoisa.
  type AreaString1 = {
    [key in "height" | "width"]: string;
  };

  // uporer AreaString1 a height and width hard vabe likhsi. But ami jodi chai AreaNumber er key gulo akta akta kore access korbo. Tahole likhte pari keyof AreaNumber.
  type AreaString2 = {
    [key in keyof AreaNumber]: string;
  };

  // ------------------------------

  // Loock up type  ---> Object a amra jemon distructure korte pari. Thik same vabe type kew distructure kore new kono type a use korte pari.
  // ex 1:
  type AreaNumber2 = {
    height: number;
    width: number;
  };

  type AreaHeight = AreaNumber2["height"];

  //   ex2:
  type AreaString3<T> = {
    [key in keyof T]: T[key]; // aikhane T holo type object ta. ar key holo oi type object er akta akta kore key ba property. Tahole oi object er kono property er type k destructure kore dynamicaly type ta set kortese. So akhon error dibana.
  };

  const area1: AreaString3<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
