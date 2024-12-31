

type ProjectProps = {
  category?: string;
  image: string;
  title: string;
  description: string;
};

type ContentButtonProps = {
  title: string;
  description: string;
};

const ContentButton = ({
  title,
  description,
}: ContentButtonProps) => {
  return (
    <div className="content-box">
      <h3 className="portfolio-title">{title}</h3>
      <p>{description}</p>
      <i className="flaticon-up-right-arrow" aria-hidden="true"></i>
      <button
        className="portfolio-link"
        // onClick={onOpenModal}
        aria-label={`View details about ${title}`}
        data-mfp-src="#portfolio-wrapper"
      ></button>
    </div>
  );
};

const Project = ({ image, title, description }: ProjectProps) => {
  return (
    <div className="portfolio-item">
      <div className="image-box">
        <img src={image} alt={`Project ${title}`} width={390}  />
      </div>
      <ContentButton
        title={title}
        description={description}
      />
    </div>
  );
};

export default Project;
