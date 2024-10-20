import { useState, useEffect } from "react";
import listIcon from "./assets/icon-list.svg";
import desktopIllustration from "./assets/illustration-sign-up-desktop.svg";
import mobileIllustration from "./assets/illustration-sign-up-mobile.svg";

function App() {
  const [email, setEmail] = useState(null);
  const [err, setErr] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const regex = /^^\w+([.-]?\w+)@\w+([.-]?\w+)(\w{2,3})+$/;

  const handleValidation = (e) => {
    setEmail(e.target.value);
    if (!regex.test(email)) {
      e.target.classList.add("border-rose-400", "bg-rose-100", "text-rose-600");
      setErr(true);
    } else {
      e.target.classList.remove(
        "border-rose-400",
        "bg-rose-100",
        "text-rose-600",
      );
      setErr(false);
    }
  };

  const handleSubmit = (e) => {
    if (regex.test(email)) {
      console.log(e.target.closest("article"));

      setRedirect(true);
    }
  };

  return (
    <>
      <main className="bg-dark-slate-grey font-roboto flex items-center justify-center md:h-screen">
        <article className="bg-white pb-6 md:rounded-2xl md:p-4 md:shadow-2xl">
          {redirect || (
            <div className="md:grid-cols-auto grid-rows-auto grid items-center gap-6 md:grid-rows-none">
              <div className="text-dark-slate-grey flex max-w-80 flex-col gap-5 px-4 text-xs">
                <h1 className="text-charcoal-grey text-3xl font-extrabold">
                  Stay updated!
                </h1>
                <p className="leading-4">
                  Join 60,000+ product managers receiving monthly updates on:
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-3">
                    <img src={listIcon} alt="List Icon" className="h-4 w-4" />
                    Product discovery and building what matters
                  </li>
                  <li className="flex items-center gap-3">
                    <img src={listIcon} alt="List Icon" className="h-4 w-4" />
                    Measuring to ensure updates are a success
                  </li>
                  <li className="flex items-center gap-3">
                    <img src={listIcon} alt="List Icon" className="h-4 w-4" />
                    And much more!
                  </li>
                </ul>
                <label htmlFor="email" className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <h2 className="text-charcoal-grey text-xs font-bold">
                      Email address
                    </h2>
                    {err && (
                      <p className="text-xs font-bold text-rose-400">
                        Valid email required
                      </p>
                    )}
                  </div>
                  <input
                    type="email"
                    name=""
                    id="email"
                    placeholder="email@company.com"
                    required
                    className="border-grey placeholder:text-grey font-roboto focus-visible:border-charcoal-grey w-full rounded border-[1.5px] py-3 pl-4 placeholder:text-sm focus-visible:outline-none"
                    onBlur={(e) => {
                      handleValidation(e);
                    }}
                  />
                </label>
                <button
                  type="submit"
                  className="bg-dark-slate-grey hover:to-peach hover:shadow-tomato hover:from-tomato rounded px-4 py-3 text-sm font-bold text-white hover:bg-gradient-to-r hover:shadow-lg"
                  onClick={(e) => handleSubmit(e)}
                >
                  Subscribe to monthly newsletter
                </button>
              </div>
              <div className="order-first md:order-last md:max-w-64">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={mobileIllustration}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={desktopIllustration}
                  />
                  <img
                    src={desktopIllustration}
                    alt="Illustration"
                    className=""
                  />
                </picture>
              </div>
            </div>
          )}
          {redirect && (
            <div className="flex h-screen w-screen flex-col gap-5 px-4 py-28 md:h-auto md:max-w-72 md:justify-normal md:p-4">
              <div>
                <img src={listIcon} alt="" className="w-1/6" />
              </div>
              <h1 className="text-charcoal-grey text-4xl font-black">
                Thanks for subscribing!
              </h1>
              <p className="text-dark-slate-grey text-xs">
                A confirmation email has been sent to
                <span className="font-extrabold"> {email}</span>. Please open it
                and click the button inside to confirm your subscription.
              </p>
              <button className="bg-dark-slate-grey hover:to-peach hover:shadow-tomato hover:from-tomato w-full translate-y-64 transform rounded px-4 py-3 text-sm font-bold text-white hover:bg-gradient-to-r hover:shadow-lg md:translate-y-0">
                Dismiss message
              </button>
            </div>
          )}
        </article>
      </main>
    </>
  );
}

export default App;
