import React from "react";
import "./preview.css";

import addie from "../../images/addie.jpg";

function invisibleLifePreview() {
  return (
    <div className="preview-container">
      <div className="upperblock">
        <div className="book-image">
          <img src={addie} />
        </div>

        <div className="book-details">
          <h1>The Invisible Life of Addie LaRue</h1>

          <p><strong>Author:</strong> V. E. Schwab</p>

          <p><strong>Category:</strong> Fantasy</p>

          <p><strong>Published:</strong> 6 October 2020</p>

          <p><strong>Points:</strong> 300</p>

          <p><strong>Description:</strong></p>

          <p>
            France, 1714: in a moment of desperation, a young woman makes a
            Faustian bargain to live forever and is cursed to be forgotten by
            everyone she meets. Thus begins the extraordinary life of Addie
            LaRue, and a dazzling adventure that will play out across centuries
            and continents, across history and art, as a young woman learns how
            far she will go to leave her mark on the world. But everything
            changes when, after nearly 300 years, Addie stumbles across a young
            man in a hidden bookstore and he remembers her name.
          </p>
          <p><a href="empty" >Recommend to a Colleague</a></p>
        </div>
      </div>

      <div className="plot">
        <div className="heading">
          {" "}
          <h1>The Invisible Life of Addie LaRue</h1>
          <div className="content">
            <p>
              The novel begins in 1714, in a small French village. Addie LaRue,
              desperate to escape a stifling life, makes a desperate plea to the
              gods for freedom. In a fateful encounter, she unwittingly strikes
              a bargain with a dark deity known as Luc, who grants her
              immortality but condemns her to be forgotten by everyone she
              meets. Addie becomes immortal but eternally alone, unable to leave
              a lasting mark on the world. Over the centuries, Addie traverses
              Europe, leaving only fleeting impressions on those she encounters.
              She becomes an expert at survival, stealing, and mastering various
              skills, but she longs for more than just a transient existence.
              Throughout her travels, she often crosses paths with Luc, who
              reminds her of the conditions of their deal. In present-day New
              York City, Addie meets a young man named Henry, who surprisingly
              remembers her. This discovery upends her understanding of the
              curse, and she forms a deep connection with him. Their
              relationship evolves as Addie and Henry navigate the challenges of
              memory, love, and the consequences of Addie's pact. As Addie and
              Henry's bond strengthens, the narrative weaves between the past
              and the present, gradually unveiling Addie's backstory. We learn
              about her relationships with artists and thinkers of different
              eras, such as a passionate love affair with a woman named Estelle
              in 18th-century France and her friendship with a talented writer
              named Lucien in early 20th-century Paris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default invisibleLifePreview;
