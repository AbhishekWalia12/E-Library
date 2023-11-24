import React from "react";
import "./preview.css";

import halfBlood from "../../images/halfBlood.jpg";

function halfBloodPrincePreview() {

  return (
    <div className="preview-container">
      <div className="upperblock">
        <div className="book-image">
        <img src={halfBlood} />
        </div>

        <div className="book-details">
          <h1>Harry Potter and the Half-Blood Prince</h1>

          <p><strong>Author:</strong> J.K. Rowling</p>

          <p><strong>Category:</strong> Fantasy</p>

          <p><strong>Published:</strong> 16 July 2005</p>

          <p><strong>Points:</strong> 200</p>

          <p><strong>Description:</strong></p>

          <p>
            In this book, Harry Potter learns a lot about Lord Voldemort's past,
            and Harry Potter prepares for the final battle against his nemesis
            with the help of Headmaster Dumbledore. But in that time, Voldemort
            returns to power, and makes a plan to destroy Harry. So, Harry
            Potter tries to destroy Voldemort first, but for that, Harry must
            collect all parts of his soul. Voldemort had split his soul into
            pieces, so that he would never be totally destroyed, and now Harry
            has to destroy all the pieces, so Harry sets out with Dumbledore to
            find the Horcruxes.
          </p>
          <p><a href="empty" >Recommend to a Colleague</a></p>
         
        </div>
      </div>

      <div className="plot">
        <div className="heading">
          {" "}
          <h1>Harry Potter and the Half-Blood Prince</h1>
          <div className="content">
            <p>
              Lord Voldemort has returned to power, and his wrath has been felt
              in both the Muggle and Wizarding worlds. Severus Snape, long
              considered an enemy of Voldemort and a member of Dumbledore's
              anti-Voldemort coalition, the Order of the Phoenix, meets with
              Narcissa Malfoy, mother of Draco and wife of Lucius, an imprisoned
              Death Eater. Snape makes an Unbreakable Vow to Narcissa, promising
              to protect her son, Draco. Dumbledore heads to 4 Privet Drive to
              collect Harry from his aunt and uncle. On their way to the Burrow,
              Harry and Dumbledore stop to recruit Horace Slughorn to return to
              teaching at Hogwarts. Harry is reunited with his best friends, Ron
              and Hermione. When shopping for schoolbooks, Harry runs into Draco
              and follows him to Borgin and Burkes, where he overhears Draco
              threatening Borgin and insisting that he fix an unknown object.
              Harry is instantly suspicious of Draco, whom he believes to be a
              Death Eater, just like his father. The students return to school,
              and Dumbledore announces that Snape will be teaching Defense
              Against the Dark Arts, much to Harry's surprise. Harry receives a
              used Potions textbook that once belonged to someone named “The
              Half-Blood Prince.” Spells and amendments are written in the
              margins of the book, and Harry uses the Prince's notes to excel at
              Potions. Dumbledore schedules regular meetings with Harry in which
              they use Dumbledore's pensieve to look at memories of those who
              have had direct contact with Voldemort. Dumbledore believes that
              if Harry can learn enough about Voldemort's history, it will help
              him when they finally fight face to face, as the prophecy
              concerning Harry foretells. Harry learns about Voldemort's family,
              including his grandfather Marvolo, his uncle Morfin, and his
              mother Merope, who cast a love spell on a Muggle and was abandoned
              by him when it wore off. Voldemort was left at an orphanage and
              grew to be an unpleasant and aggressive boy. Harry also learns
              that Voldemort has divided his soul into seven Horcruxes. Two of
              these, Tom Riddle's diary and Marvolo's ring, have already been
              destroyed. One resides in Voldemort, one resides in a snake, one
              is Merope's locket, and the other two are suspected to be hidden
              in objects belonging to Hufflepuff, Ravenclaw, or Gryffindor.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default halfBloodPrincePreview;
