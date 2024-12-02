import Footer from "./Footer";
import Auditform from "./AuditForm";
import Auditform2 from "./AuditForm2";
import Conversation from "./recording";
import Chatbot from "./Chatbot";

const Auditpage = () => {
  return (
    <>
      <div className=" w-[100%] pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden flex">
        <div className="w-[30%]">
          <Auditform />
        </div>

        <div className="w-[70%] flex flex-col items-center justify-start mt-6"> {/* Adjust margin to move it left */}
          <Conversation />
          <Auditform2/>
          <Chatbot/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Auditpage;
