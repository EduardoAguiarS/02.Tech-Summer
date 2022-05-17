import "./styles.scss";

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return <h2 className="page__title">{title}</h2>;
};

export default PageTitle;
