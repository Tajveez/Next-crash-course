import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>DevWork</span> News
      </h1>
      <p className={headerStyles.description}>
        This is a web page that aspires to become a Blog!
      </p>
    </div>
  );
};

export default Header;
