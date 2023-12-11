type Props = { title: string };

export const ArticleRead = ({ title }: Props) => {
  return (
    <div>
      <h1>{`Article ${title}`}</h1>
    </div>
  );
};
