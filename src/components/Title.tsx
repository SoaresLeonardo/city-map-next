type Title = {
  title: string | number;
};

export default function Title(props: Title) {
  return <h1>{props.title}</h1>;
}
