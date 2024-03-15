import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../style/subcategory.css'; // Import the CSS file

import Header from '../components/Header';
import content from '../content';

const useQuery = () => {
  const search = window.location.search;
  return useMemo(() => new URLSearchParams(search), [search]);
};

const ProductCard = ({ imageSrc, title, description, rating, id }) => (
  <div className="card">
    <img src={imageSrc} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="rating">{rating}</div>
    <a href={'/shop/learning-and-development/books/'+id}>Buy Now</a>
  </div>
);

const useDisplayData = (content, category, subcategory, guu, ff) => {
  const [displayedData, setDisplayedData] = useState(null);

  useEffect(() => {
    if (content && category && subcategory) {
      const sectionData = content.find(item => item.title === category);
      const subsectionData = sectionData?.children.find(item => item.title === subcategory);
      const subsectionDataChild = subsectionData?.children.find(item => item.title === guu);
      const subsectionDataChild23 = subsectionDataChild?.children.find(item => item.title === ff);
      
      if (subsectionDataChild23) {
        console.log(subsectionDataChild23.children);
        setDisplayedData(subsectionDataChild23.children);
      }
    }
  }, [content, category, subcategory, guu, ff]);

  return displayedData;
};

const Subcategory = () => {
  const { category, subcategory } = useParams();
  const query = useQuery();
  const categoryData = content.find(item => item.title === category);
  const subcategoryData = categoryData?.children.find(item => item.title === subcategory);
  const displayedData = useDisplayData(content, category, subcategory, query.get("section"), query.get("subsection"));
  return (
    <div>
      <Header />
      <div style={{ marginTop: "100px"}}>
        <p> 
          <a href='/shop'>Shop</a> / <a href={'/shop/'+category}>{category}</a>
        </p>
        <div style={{display:"flex"}}>
          <div>
            <h1>{subcategoryData.heading}</h1>
            <aside>
              {subcategoryData.children.map(item => (
                <div key={item.title} style={{ display: "flex", flexDirection: "column" }}>
                  <h4 style={{ fontSize: "24px", paddingBlockStart: "10px" }}>{item.title}</h4>
                  {item.children.map(tt => (
                    <Link key={tt.title} to={`?section=${item.title}&subsection=${tt.title}`} style={{ fontSize: "16px", paddingBlock: "5px" }}>
                      {tt.title} <br />
                    </Link>
                  ))}
                </div>
              ))}
            </aside>
          </div>
          <div>
            <h2>{query.get("subsection")}</h2>
            <div>
              {displayedData ? (
                <div className="grid-container">
                  {displayedData.map(item => (
                    <ProductCard  key={item.title}
                    imageSrc="product2.jpg"
                    title={item.title}
                    description={item.description}
                    rating={item.reviews.rate}
                    id={item.id}
                  />
                  ))}
                </div>
              ) : (
                <p>The most Popular</p>
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Subcategory;