import Loader from "./components/Loader";
import ScrollIndicator from "./components/ScrollIndicator";

import DraggableCard from "./components/DraggableCard";
import Carousel from "./components/Carousel";
import SidebarAnimation from "./components/SidebarAnimation";
import ScrollAnimation from "./components/ScrollAnimation";
import ScrollCarousel from "./components/horizontalanimation/ScrollCarousel";
import StickyNav from "./components/sticky navbar/StickyNav";

const App = () => {
  return (
    // <div className="flex justify-center items-center h-screen w-full bg-gray-950">
    <div>
      {/* <ScrollIndicator /> */}
      {/* <Loader /> */}
      {/* <div className="flex justify-center items-center h-[100vh] bg-[#f3f3f3]">
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          }}
        >
          Card 1
        </DraggableCard>
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
          }}
        >
          Card 2
        </DraggableCard>
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%)",
          }}
        >
          Card 3
        </DraggableCard>
      </div> */}

      {/* <Carousel /> */}

      {/* <SidebarAnimation /> */}

      {/* <ScrollAnimation /> */}

      {/* <ScrollCarousel /> */}

      <StickyNav />
    </div>
  );
};

export default App;
