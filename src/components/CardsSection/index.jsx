import Card from "../Card";
import IconProjects from "../IconProjects";
import IconDesign from "../IconDesign";

 
import IconHomeDecor from "../IconHomeDecor";
// import IconAbout from "../IconAbout";

//import IconAbout from '../../assets/IconAbout.png';


const CardsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">

 
          <Card
            Icon={IconProjects}
            title="PROJECTS"
            description="Sample text. Click to select the text box. Click again or double click to start editing the text."
          />

        
          <Card
            Icon={IconDesign  }
            title="GREAT DESIGN"
            description="Sample text. Click to select the text box. Click again or double click to start editing the text."
          />

      
          <Card
            Icon={IconHomeDecor}
            title="HOME DECOR"
            description="Sample text. Click to select the text box. Click again or double click to start editing the text."
          />
 
          <Card
            Icon={IconHomeDecor}
            //  { <img
            //   src="data:image/png;base64,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" 
            //     className="w-10 h-10 object-contain"
            //   />}





            title="ABOUT US"
            description="Sample text. Click to select the text box. Click again or double click to start editing the text."
          />

        </div>
      </div>
    </section>
  );
};

export default CardsSection;
