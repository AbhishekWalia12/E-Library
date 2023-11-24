import React from "react";
import "./preview.css";

import lord from "../../images/lord.png";

function lordRingsPreview() {
  return (
    <div className="preview-container">
      <div className="upperblock">
        <div className="book-image">
          <img src={lord} />
        </div>

        <div className="book-details">
          <h1>The Lord of the Rings</h1>

          <p><strong>Author:</strong> John Ronald Reuel Tolkien</p>

          <p><strong>Category:</strong> Fantasy</p>

          <p><strong>Published:</strong> 29 July 1954</p>

          <p><strong>Points:</strong> 350</p>

          <p><strong>Description:</strong></p>

          <p>
          <strong><em>One Ring to rule them all, One Ring to find them, One Ring to bring
            them all and in the darkness bind them.</em></strong><br />In ancient times the Rings of
            Power were crafted by the Elven-smiths, and Sauron, the Dark Lord,
            forged the One Ring, filling it with his own power so that he could
            rule all others. But the One Ring was taken from him, and though he
            sought it throughout Middle-earth, it remained lost to him. After
            many ages it fell by chance into the hands of the hobbit Bilbo
            Baggins. From Sauron's fastness in the Dark Tower of Mordor, his
            power spread far and wide. Sauron gathered all the Great Rings to
            him, but always he searched for the One Ring that would complete his
            dominion. When Bilbo reached his eleventy-first birthday he
            disappeared, bequeathing to his young cousin Frodo the Ruling Ring
            and a perilous quest: to journey across Middle-earth, deep into the
            shadow of the Dark Lord, and destroy the Ring by casting it into the
            Cracks of Doom.
          </p>
          <p><a href="empty" >Recommend to a Colleague</a></p>
        </div>
      </div>

      <div className="plot">
        <div className="heading">
          {" "}
          <h1>The Lord of the Rings</h1>
          <div className="content">
            <p>
              The story of The Lord of the Rings begins with several events that
              take place in The Hobbit. While wandering lost in a deep cave,
              Bilbo Baggins, a Hobbit—one of a small, kindly race about half the
              size of Men—stumbles upon a ring and takes it back with him to the
              Shire, the part of Middle-earth that is the Hobbit's home. All
              Bilbo knows of his ring is that wearing it causes him to become
              invisible. He is unaware that it is the One Ring, and is therefore
              oblivious to its significance and to the fact that Sauron has been
              searching for it. The Fellowship of the Ring opens with a party
              for Bilbo's 111th birthday. Bilbo gives his ring to his heir, his
              cousin Frodo Baggins. When the time comes to part with the ring,
              however, Bilbo becomes strangely reluctant to do so. He gives up
              the ring only at the determined urging of his friend, Gandalf the
              Grey, a great Wizard. Gandalf suspects that the ring is indeed the
              One Ring of legend. After confirming his suspicions, he tells
              Frodo that the Ring must be taken away from the Shire, as Sauron's
              power is growing once again. Frodo sets out from the Shire with
              three of his Hobbit friends—Sam, Merry, and Pippin. Along the way,
              they are pursued by the nine Ringwraiths, servants of Sauron who
              take the form of terrifying Black Riders. The hobbits spend a
              night in the company of wandering Elves, who promise to send word
              ahead to friends who will protect the hobbits. Barely out of the
              Shire, the hobbits get lost in the Old Forest, where they have to
              be rescued from a malevolent willow tree, which swallows up Merry
              and Pippin, and then from an evil tomb ghost. The hobbit's rescuer
              is Tom Bombadil, a strange, jovial entity with great powers who is
              the oldest creature in Middle-earth. The hobbits make it to the
              town of Bree, where they meet Aragorn, a Ranger who roams the
              wilderness and who is the heir of the Kings of the ancient Men of
              Westernesse. Those who do not know Aragorn's true name call him
              Strider. Frodo tries to keep a low profile at the inn in Bree, but
              he ends up causing a scene when while taking part in a rollicking
              rendition of a song he falls, accidentally slips the Ring onto his
              finger, and vanishes. That night, Aragorn advises the hobbits not
              to sleep in their rooms at the inn. In doing so, he saves their
              lives—for the first of many times. A letter Gandalf left at the
              inn months before advises the group to head for Rivendell, a realm
              of the Elves. Aragorn sets out with the hobbits the next day, and
              with his help they avoid the Black Riders for some time. However,
              at the top of the hill Weathertop, the Company is forced to defend
              itself against the attacking Riders. Frodo is wounded during the
              skirmish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default lordRingsPreview;
