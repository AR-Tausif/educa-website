const GetFirstLatterOfName = ({name}:{name:string}) => {
  const initials = name
    .split(" ") // Split the name into words
    .map((item: string) => item[0]) // Extract the first character of each word
    .join(""); // Join the characters into a single string

  return <div>{initials}</div>;
};

export default GetFirstLatterOfName;
