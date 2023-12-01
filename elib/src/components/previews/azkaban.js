import React, { useState } from 'react';
import "./preview.css";
import { Container, Row, Col, Card, Form, Modal, Button } from 'react-bootstrap';

import harrypotter from "../../images/harrypotter.jpg";

function azkabanPreview() {

  // const [showModal, setShowModal] = useState(false);
  // const [selectedEbook, setSelectedEbook] = useState(null);
  // const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  // const [showRecommendModal, setShowRecommendModal] = useState(false);
  // const [showFullDescription, setShowFullDescription] = useState(false);

  // Function to open the modal
  // const openModal = (ebook) => {
  //   setSelectedEbook(ebook);
  //   setShowModal(true);
  //   setShowFullDescription(false); // Reset to show truncated description initially
  // };
 
  // Function to close the modal
  // const closeModal = () => {
  //   setSelectedEbook(null);
  //   setShowModal(false);
  // };

  return (
    <div className="preview-container">
      <div className="upperblock">
        <div className="book-image">
          <img src={harrypotter} />
        </div>

        <div className="book-details">
          <h1>Harry Potter and the Prisoner of Azkaban</h1>

          <p>
            <strong>Author:</strong> J.K. Rowling
          </p>

          <p>
            <strong>Category:</strong>: Fantasy
          </p>

          <p>
            <strong>Published:</strong> 8 July 1999
          </p>

          <p>
            <strong>Points:</strong> 250
          </p>

          <p>
            <strong>Description:</strong>
          </p>

          <p>
            The Prisoner of Azkaban is the third installment of the best-selling
            Harry Potter series by the British author J.K. Rowling. The highly
            successful fantasy series was adapted into film beginning in 2001,
            and in 2004 the film adaptation of The Prisoner of Azkaban was
            released. The story takes place during Harry Potter's third year as
            a student at Hogwarts School of Witchcraft and Wizardry. Harry is
            forced to uncover painful and complex secrets of the past, including
            the details of the night when his parents were murdered by the evil
            Lord Voldemort. Rowling uses this fantastical world to explore
            themes of forgiveness, captivity, truth, personal growth,
            adolescence, independence, and empowerment.
          </p>
          {/* <p>
            {showFullDescription ? (
              selectedEbook.description
            ) : (
              <>
                {selectedEbook.description.substring(0, 200)}...
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setShowFullDescription(true)}
                >
                  Read More
                </span>
              </>
            )}
          </p> */}
          <p>
            <a href="empty">Recommend to a Colleague</a>
          </p>
        </div>
      </div>

      <div className="plot">
        <div className="heading">
          {" "}
          <h1>Harry Potter and the Prisoner of Azkaban</h1>
          <div className="content">
            <p>
              Harry Potter and the Prisoner of Azkaban opens on the night before
              Harry's thirteenth birthday, when he receives gifts by Owl Post
              from his friends at school. The next morning at breakfast, Harry
              sees on television that a man named Black is on the loose from
              prison. At this time, Aunt Marge comes to stay with the Dursleys,
              and she insults Harry's parents numerous times. Harry accidentally
              causes her to inflate. Harry leaves the Dursley's house and is
              picked up by the Knight Bus, but only after an alarming sighting
              of a large, black dog. The Knight Bus drops Harry off at Diagon
              Alley, where he is greeted by Cornelius Fudge, the Minister of
              Magic. He rents a room and awaits the start of school. In Diagon
              Alley, Harry finishes his schoolwork, admires a Firebolt
              broomstick in the window of a shop, and after some time, finds his
              friends Ron and Hermione. At a pet shop, Hermione buys a cat named
              Crookshanks, who chases Scabbers, Ron's aging pet rat. Ron is most
              displeased. The night before they all head off to Hogwarts, Harry
              overhears Ron's parents discussing the fact that Sirius Black is
              after Harry. The students board the Hogwarts Express train and are
              stopped once by an entity called a Dementor. Harry faints and is
              revived by Professor Lupin, the new defense against the dark arts
              teacher. Soon afterward, the students arrive at Hogwarts and
              classes begin. In divination class, Professor Trelawney foresees
              Harry's death by reading tealeaves and finding the representation
              of a Grim, a large black dog symbolizing death. In the care of
              magical creatures class, Hagrid introduces the students to
              Hippogriffs, large, deeply dignified crosses between horses and
              eagles. Malfoy insults one of these beasts, Buckbeak, and is
              attacked. Malfoy drags out the injury in an attempt to have Hagrid
              fired and Buckbeak put to sleep. In Defense Against the Dark Arts,
              Professor Lupin leads the class in a defeat of a Boggart, which
              changes shape to appear as the viewer's greatest fear. For Lupin,
              it turns into an orb, for Ron, a spider. Harry doesn't have a
              chance to fight it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default azkabanPreview;
