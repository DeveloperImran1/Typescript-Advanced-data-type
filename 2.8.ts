{
  // promise

  // simulate
  //   const cratePromise = (): Promise<string> => {
  //     return new Promise<string>((resolve, reject) => {
  //       const data: string = "something";
  //       if (data) {
  //         resolve(data);
  //       } else {
  //         reject("Something went wrong");
  //       }
  //     });
  //   };

  //   // calling create promise
  //   const showData = async (): Promise<string> => {
  //     const data: string = await cratePromise();
  //     console.log(data);
  //     return data;
  //   };
  //   showData();

  // Uporer example ee object data type dia
  type SomethingType = { something: string };

  const cratePromise = (): Promise<SomethingType> => {
    return new Promise<SomethingType>((resolve, reject) => {
      const data: SomethingType = { something: "something is done" };
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong");
      }
    });
  };

  // calling create promise
  const showData = async (): Promise<SomethingType> => {
    const data: SomethingType = await cratePromise();
    console.log(data);
    return data;
  };
  showData();

  // Browser er built in promise method with fetch
  type PostType = { userId: number; id: number; title: string; body: string };
  const getPost = async (): Promise<PostType> => {
    // aikhane Implicitly typescript return datar type hisabe Promice<void> show kortese. But amra jodi jani kiki property asbe, tahole explicitly bole dita pari.
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    return data;
  };
  getPost();
}
