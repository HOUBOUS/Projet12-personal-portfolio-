import React , { useState }from 'react';
import AboutDetailsItem from './AboutDetailsItem';
import AboutTitle from './AboutTitle';
import AboutTitleData from './AboutTitleData';
import educationIcon from '../../assets/education.png';
import careerIcon from'../../assets/Career.png';
import personalIcon from '../../assets/personnel.png';



const DetailsAbout = () => {
  const [activeDetailsItem, setActiveDetailsItem] = useState(1);
  const [activeTitle, setActiveTitle] = useState(1);

  const handleDetailsItemClick = (detailsItem) => {
    setActiveDetailsItem(detailsItem);
    setActiveTitle(1);
  };

  const handleTitleClick = (title) => {
    setActiveTitle(title);
  };

  const detailItems = ["PERSONAL", "EDUCATION", "CAREER"];
  const activeDetailsTitle = detailItems[activeDetailsItem - 1];
  const activeDetailsIcon =
    activeDetailsTitle === "PERSONAL"
      ? personalIcon
      : activeDetailsTitle === "EDUCATION"
      ? educationIcon
      : careerIcon;

  const titles =  AboutTitleData[activeDetailsItem];

  return (
    <>
      <div className="detail">
        {detailItems.map((item, index) => (
          <AboutDetailsItem
            key={index}
            title={item}
            active={activeDetailsItem === index + 1}
            onClick={() => handleDetailsItemClick(index + 1)}
          />
        ))}
      </div>
      <div className="sub-container">
        <div className="icon-title-container">
          <img src={activeDetailsIcon} alt={activeDetailsTitle} className="icon" />
          <h3>{activeDetailsTitle}</h3>
        </div>
        {titles.map((title, index) => (
          <AboutTitle
            key={index}
            title={title.title}
            content={title.content}
            active={activeTitle === index + 1}
            onClick={() => handleTitleClick(index + 1)}
            detailsItem={activeDetailsItem}
          />
        ))}
      </div>
    </>
  );
};

export default DetailsAbout;
