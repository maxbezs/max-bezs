import { useEffect, useState } from 'react';

const useDisplayData = (content, category, subcategory, guu, ff) => {
  const [displayedData, setDisplayedData] = useState(null);

  useEffect(() => {
    if (content && category && subcategory) {
      const sectionData = content.find(item => item.title === category);
      if (sectionData) {
        const subsectionData = sectionData.children.find(item => item.title === subcategory);
        if (subsectionData) {
            const subsectionDataChild = subsectionData.children.find(item => item.title === guu);
            if (subsectionDataChild){
                const subsectionDataChild23 = subsectionDataChild.children.find(item => item.title === ff);;
                console.log(subsectionDataChild23.children)
                setDisplayedData(subsectionDataChild23.children);
            }
            
        }
      }
    }
  }, [content, category, subcategory, guu, ff]);

  return displayedData;
};

export default useDisplayData;