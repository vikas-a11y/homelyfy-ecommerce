import { useTranslation } from "react-i18next";
import '../index.css'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const isHindi = i18n.resolvedLanguage === "hi";

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      
      {/* Inner container */}
      <div className="bg-gray-100 rounded-full p-1 flex items-center relative w-[100px] h-[36px] shadow-md overflow-hidden">
        
        {/* Slider */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-green-600 rounded-full 
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] 
          ${isHindi ? "translate-x-full" : ""}`}
        ></div>

        {/* EN */}
        <button
          onClick={() => {
            i18n.changeLanguage("en");
            localStorage.setItem("lang", "en");
          }}
          className={`relative z-10 w-1/2 text-xs font-semibold ${
            !isHindi ? "text-white" : "text-gray-700"
          }`}
        >
          EN
        </button>

        {/* HI */}
        <button
          onClick={() => {
            i18n.changeLanguage("hi");
            localStorage.setItem("lang", "hi");
          }}
          className={`relative z-10 w-1/2 text-xs font-semibold ${
            isHindi ? "text-white" : "text-gray-700"
          }`}
        >
          HI
        </button>
      </div>

    </div>
  );
};

export default LanguageSwitcher;