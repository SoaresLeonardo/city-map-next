import { roboto700 } from '../../public/fonts/roboto700';

type Title = {
  title: string | number;
};

export default function Title(props: Title) {
  return <h1 className={roboto700.className}>{props.title}</h1>;
}
