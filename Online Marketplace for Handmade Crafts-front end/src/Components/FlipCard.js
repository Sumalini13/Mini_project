import React from 'react';
import CraftCard from './CraftCard';
import Glass from './images/Glass.jpg';
import paper from './images/paper.jpeg';
import wood from './images/wood craving.jpg';
const App = () => {
  const crafts = [
    {
      name: 'Glass Art',
      image: Glass,
      description: 'Glass art refers to individual works of art that are substantially or wholly made of glass. It ranges in size from monumental works and installation pieces to wall hangings and windows, to works of art made in studios and factories, including glass jewelry and tableware The Art of Glassmaking - FletMagnet A combination of sand and soda-lime, along with coloring agents, is used to produce a raw material, which is melted together to form molten glass. There are two basic methods of blowing glass: offhand glass blowing and lampworking. Both involve hot, molten glass and a stainless steel or iron rod ',
    },
    {
      name: 'Paper Art',
      image: paper,
      description: 'Paper craft is a collection of crafts using paper or card as the primary artistic medium for the creation of two or three-dimensional objects. Paper and card stock lend themselves to a wide range of techniques and can be folded, curved, bent, cut, glued, molded, stitched, or layered.[1] Papermaking by hand is also a paper craft.',
    },
    {
      name: 'Wood',
      image: wood,
      description: 'This is the description for Craft 3.',
    },
  ];

  return (
    <div className="app">
      <div className="card-container">
        {crafts.map((craft, index) => (
          <CraftCard key={index} craft={craft} />
        ))}
      </div>
    </div>
  );
};

export default App;
