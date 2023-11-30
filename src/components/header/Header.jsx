import Buttons from "../buttons/Buttons";
import "./Header.css";

const Header = ({ src, alt, postTitle, postBody }) => {
  return (
    <header>
      <figure>
        <img src={src} alt={alt}/>
      </figure>
      <section className="post">
        <p className="featured">FEATURED POSTS</p>
        <h1 className="post-title">{postTitle}</h1>
        <p className="post-body">{postBody}</p>
        {postBody.length > 50 && (<button className="read-more">Read More</button>)}
        <Buttons/>
      </section>
    </header>
  );
};

export default Header;
