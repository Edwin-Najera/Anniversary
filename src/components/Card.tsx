import { letter } from "./letter";
import "./global.css";

function Card() {
  return (
    <div className="card-wrap d-flex align-items-center justify-content-center min-vh-50 p-3">
      <article className="card letter-card shadow-lg border-0 w-100">
        <div className="row g-0">
          <div className="col-md-4 photo-col d-flex flex-column align-items-center justify-content-center p-4">
            <img
              src="/images/layla.jpg"
              alt="layla"
              className="photo rounded-circle img-fluid"
            />
            <div className="heart mt-3" aria-hidden="true" />
          </div>

          <div className="col-md-8">
            <div className="card-body p-4 p-lg-5">
              <h2 className="letter-title mb-4">{letter.title}</h2>

              {letter.paragraphs.map((text, i) => (
                <p key={i} className="card-text letter-text">
                  {text}
                </p>
              ))}

              <p className="letter-closing fst-italic mb-0">{letter.closing}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;