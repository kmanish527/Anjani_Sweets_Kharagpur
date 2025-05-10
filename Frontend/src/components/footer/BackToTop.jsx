import { Link } from "react-router-dom";
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link to="#" onClick={scrollToTop} >
      <div className="flex flex-col">
                <div className="ml-6">
                  
            <ChevronUp/>
            </div>
            <div className="mb-7">
            <p>Back to top</p>
            </div>
            </div>
    </Link>
  );
};

export default BackToTop;
