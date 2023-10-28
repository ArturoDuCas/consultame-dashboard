import {useEffect, useState} from "react";
import { themes } from "../config/themesConfig.js";
import {Link} from "react-router-dom";


function Icon({ theme }) {
  const IconComponent = theme.icon;
  return <IconComponent />;
}

export default function Header() {
  const [otherThemes, setOtherThemes] = useState([])
  const [theme, setTheme] = useState(themes[0])

  useEffect(() => {
    setOtherThemes(themes.filter((t) => t.name !== theme.name))
    document.querySelector("html").setAttribute("data-theme", theme.name);
  }, [theme])

  return (
    <div className="navbar bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <Link to="" className="flex items-center">
          <div className="avatar mr-2">
            <div className="w-10 mask mask-squircle">
              <img src="/logo.png" />
            </div>
          </div>
          <span className="text-2xl font-bold">
            consultame
          </span>
        </Link>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">


          <div className="dropdown dropdown-hover dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              <Icon theme={theme} />
            </label>
            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
              {otherThemes.map(t => (
                <li key={t.name}><a onClick={() => setTheme(t)}>{t.name}</a></li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}