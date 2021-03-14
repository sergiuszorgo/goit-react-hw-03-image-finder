const Button = ({ loadMore }) => {
  return (
    <div className="divButton">
      <button className="Button" onClick={loadMore}>
        Load more
      </button>
    </div>
  );
};

export default Button;
