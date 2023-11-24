import React from "react";
import "./preview.css";

import time from "../../images/time.jpg";

function timeTravelerPreview() {
  return (
    <div className="preview-container">
      <div className="upperblock">
        <div className="book-image">
          <img src={time} />
        </div>

        <div className="book-details">
          <h1>The Time Traveler's Wife</h1>

          <p><strong>Author:</strong> Audrey Niffenegger</p>

          <p><strong>Category:</strong> Romance</p>

          <p><strong>Published:</strong> 2003</p>

          <p><strong>Points:</strong> 325</p>

          <p><strong>Description:</strong></p>

          <p>
            This is the extraordinary love story of Clare and Henry, who met
            when Clare was six and Henry was thirty-six, and were married when
            Clare was twenty-two and Henry was thirty. Impossible but true,
            because Henry suffers from a rare condition where his genetic clock
            periodically resets and he finds himself pulled suddenly into his
            past or future. In the face of this force they can neither prevent
            nor control, Henry and Clare's struggle to lead normal lives is both
            intensely moving and entirely unforgettable.
          </p>
          <p><a href="empty" >Recommend to a Colleague</a></p>
        </div>
      </div>

      <div className="plot">
        <div className="heading">
          {" "}
          <h1>The Time Traveler's Wife</h1>
          <div className="content">
            <p>
              As the novel begins, Clare Abshire is at the Newberry Library in
              Chicago. She notices a man who she immediately recognizes as Henry
              DeTamble. When she approaches Henry and refers to him by name,
              Henry does not recognize her. It is 1990 and Clare eventually
              convinces Henry to go on a date with her. On the date, Clare
              reveals that Henry has visited her in the past and told her that
              in the future, they would be married. In the second chapter, Henry
              describes his first encounter with time travel. In Chapter 3, the
              narrative shifts to 1977: Clare is six years old and Henry, who
              has traveled from 1996, visits her. These first three chapters lay
              a foundation for how the time structure in the novel operates. The
              character's lives unfold in their present time, as portrayed in
              the first chapter. Then there are flashbacks when Henry or Clare
              discuss their past from the vantage point of their current
              present. There are also sequences when Henry physically travels in
              time, usually to the past, but sometimes to the future. In their
              present lives, Clare and Henry forge a relationship that
              culminates in marriage. Along the way, Clare becomes accustomed to
              Henry's uncontrollable disappearances, and learns how to cope.
              Henry's condition imposes chaos, and his health suffers from
              traveling to different times. Often when he returns from a trip,
              he is visibly injured, bleeding, tired, disheveled and always
              naked, as he is unable to take anything with him in his travels.
              It is a physically traumatizing existence. Henry seeks ways to
              stay grounded in time. He visits an off-market chemist who is
              skilled at concocting medicinal drugs. Henry provides the chemist
              with the ingredients for an antipsychotic medication that hasn't
              been invented yet, and that he learned about during one of his
              trips to the future. He believes that taking it may help him
              remain in the present time. He also enlists the help of a genetic
              scientist, whom he hopes will find a cure for his condition. When
              Henry travels to the past, he often ends up at Clare's childhood
              home. His presence in Clare's life is consistent, and while he
              abstains from telling her too much about the future, he reveals
              that they get married. This creates a kind of prophecy: Clare
              lives with the knowledge of a future that she believes is
              predetermined. Henry often time travels back to emotional moments
              in his past. When he is five, Henry's mother Annette dies in a car
              accident. Henry witnesses her gruesome death, and because of his
              condition, sees it over and over again throughout his life. After
              she and Henry are married, Clare has several miscarriages.
              Finally, she is able to have a child, who is conceived when a
              time-traveling Henry has sex with Clare while the present Henry is
              right there in the room. Henry and Clare name their daughter Alba,
              and like Henry, she is born with the ability to time travel.
              Henry's health worsens. During one of his travels, a 43-year-old
              Henry is mistaken for an animal and shot by Clare's brother and
              father, who are hunting. As Henry approaches 43 in his present
              timeline, it becomes clear that this is when he will die. Upon
              returning to the present after one of his travels, Henry can't
              find his way home and lies naked in the cold. He finally saves
              himself, but not before his feet are frostbitten. His feet are
              amputated, and for the last few months of his life, Henry uses a
              wheelchair. When Henry dies, Clare's grief is immense. She is
              unable to do much of anything but sleep. She finds a letter that
              Henry had written before he died. In the letter, Henry pleads with
              her not to allow his death to ruin her life. He alludes to how
              grief consumed his father after his mother's death and begs her
              not to follow that same path. Henry reveals that he has traveled
              to the future, and that at some distant, unspecified time, he sees
              her again. Clare navigates her life in Henry's absence. The novel
              jumps ahead in time, to 2053, when Clare is 82 years old. As Henry
              had promised in his letter, the two indeed meet again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default timeTravelerPreview;
