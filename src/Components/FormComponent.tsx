import lang from '../assets/lang.svg';
import userId from '../assets/userIdInput.svg';
import passIn from '../assets/passInput.svg';
import mailIc from '../assets/mailIcon.svg';
import headphones from '../assets/headphones.svg';
export default function FormComponent() {
  return (
    <div className="relative h-[698px] w-[617px] wn:px-[70px] mair:p-10 mpro:p-10 fuhd:h-[982px] fuhd:w-[868px] fuhd:p-10 2k:p-10 4k:p-10">
      <a
        href="#"
        className="absolute right-[12px] top-[13px] h-[27.86px] w-[27.86px] rounded-full bg-[#2F2424] fuhd:right-[19px] fuhd:top-[19px] fuhd:h-[39px] fuhd:w-[39px]"
      >
        <img
          src={lang}
          alt="Language Icon"
          className="translate-x-1.5 translate-y-2 fuhd:h-[15.28] fuhd:w-[19.25px] fuhd:translate-x-[9px] fuhd:translate-y-[12px]"
        />
      </a>

      <div className="flex flex-col px-[89px] pb-[71px] pt-[75px]">
        <div className="flex flex-col items-start">
          <h1 className="text-[25px] fuhd:text-[36.3px]">
            Create an account <b className="text-[#E80004]">.</b>
          </h1>
          <p className="mt-[7px] text-[10.87px] text-[#7E6969] fuhd:text-[15.28px]">
            Already have an account?
            <span className="ml-[8px] text-[10.87px] text-[#E80004] fuhd:ml-[11px] fuhd:text-[15.28px]">
              Sign in
            </span>
          </p>
        </div>

        <form className="mt-[44px] fuhd:mt-[76.42px]">
          <div className="relative flex flex-col">
            <label
              htmlFor="userid"
              className="absolute -top-[5px] left-[15.63px] flex items-center justify-center bg-[#1F1818] px-[6px] text-[8.8px] fuhd:px-[12px] fuhd:text-[12px]"
            >
              User ID
            </label>
            <input
              className="h-[33px] w-[431px] bg-[#2F2424] fuhd:h-[46px] fuhd:w-[606px]"
              type="text"
              name="userid"
            />
            <img
              className="absolute right-[23px] top-[9.7px] h-[14.27px] w-[14.27px] fuhd:right-[32px] fuhd:top-[13px] fuhd:h-[20px] fuhd:w-[20px]"
              src={userId}
              alt="icon user input"
            />
          </div>

          <div className="relative mt-[23.78px] flex flex-col">
            <label
              htmlFor="userid"
              className="absolute -top-[5px] left-[15.63px] flex items-center justify-center bg-[#1F1818] px-[6px] text-[8.8px] fuhd:px-[12px] fuhd:text-[12px]"
            >
              Password
            </label>
            <input
              className="h-[33px] w-[431px] bg-[#2F2424] fuhd:h-[46px] fuhd:w-[606px]"
              type="text"
              name="userid"
            />
            <img
              className="absolute right-[23px] top-[9.7px] h-[14.27px] w-[14.27px] fuhd:right-[32px] fuhd:top-[13px] fuhd:h-[20px] fuhd:w-[20px]"
              src={passIn}
              alt="icon user input"
            />
          </div>
          <div className="relative mt-[23.78px] flex flex-col">
            <label
              htmlFor="userid"
              className="absolute -top-[5px] left-[15.63px] flex items-center justify-center bg-[#1F1818] px-[6px] text-[8.8px] fuhd:px-[12px] fuhd:text-[12px]"
            >
              Password
            </label>
            <input
              className="h-[33px] w-[431px] bg-[#2F2424] fuhd:h-[46px] fuhd:w-[606px]"
              type="text"
              name="userid"
            />
            <img
              className="absolute right-[23px] top-[9.7px] h-[14.27px] w-[14.27px] fuhd:right-[32px] fuhd:top-[13px] fuhd:h-[20px] fuhd:w-[20px]"
              src={passIn}
              alt="icon user input"
            />
            <p className="relative ml-[14px] text-start text-[9.51px] text-[#5D4D4D] fuhd:ml-[20px] fuhd:text-[13px]">
              <b className="absolute -left-[7px] -top-[2px] fuhd:-left-[13px]">
                .
              </b>
              8 characters minimun
            </p>
          </div>
          <div className="relative mt-[23.78px] flex flex-col">
            <label
              htmlFor="userid"
              className="absolute -top-[5px] left-[15.63px] flex items-center justify-center bg-[#1F1818] px-[6px] text-[8.8px] fuhd:px-[12px] fuhd:text-[12px]"
            >
              Email
            </label>
            <input
              className="h-[33px] w-[431px] bg-[#2F2424] fuhd:h-[46px] fuhd:w-[606px]"
              type="text"
              name="userid"
            />
            <img
              className="absolute right-[23px] top-[9.7px] h-[14.27px] w-[14.27px] fuhd:right-[32px] fuhd:top-[13px] fuhd:h-[20px] fuhd:w-[20px]"
              src={mailIc}
              alt="icon user input"
            />
            <p className="relative ml-[14px] text-start text-[9.51px] text-[#5D4D4D] fuhd:ml-[20px] fuhd:text-[13px]">
              <b className="absolute -left-[7px] -top-[2px] fuhd:-left-[13px]">
                .
              </b>
              Visible nickname for your profile
            </p>
            <p className="absolute right-[52px] top-[7.67px] flex h-[18.35px] w-[76px] items-center justify-center bg-[#453535] text-[9.51px] text-[#988080] fuhd:right-[85px] fuhd:top-[10px] fuhd:h-[25px] fuhd:w-[107px] fuhd:text-[13px]">
              Resend (60s)
            </p>
          </div>
          <div className="relative mt-[23.78px] flex flex-col">
            <label
              htmlFor="userid"
              className="absolute -top-[5px] left-[15.63px] flex items-center justify-center bg-[#1F1818] px-[6px] text-[8.8px] fuhd:px-[12px] fuhd:text-[12px]"
            >
              Verification Code
            </label>
            <input
              className="h-[33px] w-[431px] bg-[#2F2424] fuhd:h-[46px] fuhd:w-[606px]"
              type="text"
              name="userid"
            />
            <img
              className="absolute right-[23px] top-[9.7px] h-[14.27px] w-[14.27px] fuhd:right-[32px] fuhd:top-[13px] fuhd:h-[20px] fuhd:w-[20px]"
              src={mailIc}
              alt="icon user input"
            />
          </div>

          <div className="mt-[14px] flex items-center justify-start gap-1 fuhd:mt-[20px]">
            <input
              className="rounded-none accent-[#7E6969]"
              type="checkbox"
              id="scales"
              name="scales"
            />
            <label
              htmlFor="userid"
              className="ml-2 text-[11px] text-[#504242] fuhd:text-[15px]"
            >
              [Required] I read the{' '}
              <a href="#" className="text-[#C9B1B1]">
                Terms of Service
              </a>{' '}
              and I agree to the terms.
            </label>
          </div>
          <div className="mt-[6px] flex items-center justify-start gap-1">
            <input
              className="rounded-none accent-[#7E6969]"
              type="checkbox"
              id="scales"
              name="scales"
            />
            <label
              htmlFor="userid"
              className="ml-2 text-[11px] text-[#504242] fuhd:text-[15px]"
            >
              [Required] I read the
              <a href="#" className="text-[#C9B1B1]">
                Privacy Policy
              </a>
              and I agree to the terms.
            </label>
          </div>
          <div className="mt-[6px] flex items-center justify-start gap-1">
            <input
              className="rounded-none accent-[#7E6969]"
              type="checkbox"
              id="scales"
              name="scales"
            />
            <label
              htmlFor="userid"
              className="ml-2 text-[11px] text-[#504242] fuhd:text-[15px]"
            >
              [Optional] I would like to receive promotional emails.
            </label>
          </div>
          <button className="mt-[14px] flex h-[33px] w-[438px] items-center justify-center rounded-none bg-[#E80004] text-[13px] fuhd:mt-[29px] fuhd:h-[47px] fuhd:w-[616px] fuhd:text-[19px]">
            Create Account
          </button>
        </form>
        <div className="mt-[40px] flex flex-row items-center justify-center gap-[126px] fuhd:mt-[57px] fuhd:gap-[177px]">
          <div className="flex flex-row items-center justify-center gap-[13px] fuhd:gap-[19px]">
            <img
              src={headphones}
              alt="headphones icon"
              className="h-[11.55px] w-[11.55px] fuhd:h-[16.55px] fuhd:w-[16.55px]"
            />
            <span className="text-[11.87px] text-[#7E6969] fuhd:text-[15px]">
              Have Promo Code?
            </span>
          </div>
          <span className="text-[11.87px] text-[#7E6969] fuhd:text-[15px]">
            Contact Support
          </span>
        </div>
      </div>
    </div>
  );
}
