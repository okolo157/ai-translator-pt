import "../styles/Header.css";

function Header() {
  return (
    <div className="body">
      <div className="translator">
        <h1>Free AI Translator Powered by ChatGPT 3.5/4</h1>
      </div>
      <div className="description">
        <h2>Description</h2>n
        <p>
          image.ai translator help to converts written or spoken content from
          one language to another while preserving its original meaning, tone
          and intent.
        </p>
        <p>
          image.ai translator work in various fields, such as literature, legal
          documents, technical manuals, business communication, and more.
        </p>
        <p>
          image.ai often uses specialized tools like glossaries, CAT
          (computer-assisted translation) software, or AI tools to enchance its
          efficiency and accuracy.
        </p>
      </div>
      <div>
        <button className="text">Get Started</button>
      </div>
    </div>
  );
}

export default Header;
