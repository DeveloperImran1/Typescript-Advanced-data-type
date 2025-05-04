// Task 10:

{
  const getDisplayName = (name: string | null | undefined): string => {
    return name ?? "Anonymus";
  };

  const result = getDisplayName("Imran") as string;
  console.log(result);
}
