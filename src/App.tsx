import './App.css';
import FormComponent from './Components/FormComponent';
import ImageComponent from './Components/ImageComponent';

function App() {
  return (
    <div className="flex flex-row items-center justify-center wn:px-[90px] wn:py-[20px] mair:px-[107px] mair:py-[66px]  mpro:px-[163px] mpro:py-[127px] fuhd:px-[127px] fuhd:py-[29px] 2k:px-[418px] 2k:py-[30px] 4k:px-[1058px] 4k:py-[540px]">
      <ImageComponent />
      <FormComponent />
    </div>
  );
}

export default App;
