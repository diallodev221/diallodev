

type ProjectProps = {
  category?: string;
  image: string;
  title: string;
  description: string;
  onOpenModal: () => void;
};

type ContentButtonProps = {
  title: string;
  description: string;
  onOpenModal: () => void;
};

const ContentButton = ({
  title,
  description,
  onOpenModal,
}: ContentButtonProps) => {
  return (
    <div className="content-box">
      <h3 className="portfolio-title">{title}</h3>
      <p>{description}</p>
      <i className="flaticon-up-right-arrow" aria-hidden="true"></i>
      <button
        className="portfolio-link"
        onClick={onOpenModal}
        aria-label={`View details about ${title}`}
      ></button>
    </div>
  );
};

const Project = ({ image, title, description, onOpenModal }: ProjectProps) => {
  return (
    <div className="portfolio-item">
      <div className="image-box">
        <img src={image} alt={`Project ${title}`} width={390} height={200} />
      </div>
      <div>
          <p className="text-xl font-bold text-white">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      <ContentButton
        title={title}
        description={description}
        onOpenModal={onOpenModal}
      />
    </div>
  );
};

export default Project;
