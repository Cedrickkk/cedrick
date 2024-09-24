import {
  DiJsBadge,
  DiLaravel,
  DiMongodb,
  DiMysql,
  DiPhp,
  DiReact,
} from "react-icons/di";
import { IconContext } from "react-icons";
import IconToolTip from "./IconToolTip";

export default function TechnologyStack() {
  return (
    <section className="flex flex-col items-center border-b border-b-slate-200 px-3 py-12">
      <h3 className="mb-2 text-2xl font-bold text-slate-800">
        Technology Stack
      </h3>
      <p className="mb-4 text-slate-700">I am proficient in</p>

      <IconContext.Provider value={{ size: "4.8rem" }}>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <IconToolTip iconName="JavaScript">
            <DiJsBadge />
          </IconToolTip>
          <IconToolTip iconName="React">
            <DiReact />
          </IconToolTip>
          <IconToolTip iconName="PHP">
            <DiPhp />
          </IconToolTip>
          <IconToolTip iconName="Laravel">
            <DiLaravel />
          </IconToolTip>
          <IconToolTip iconName="MySQL">
            <DiMysql />
          </IconToolTip>
          <IconToolTip iconName="MongoDB">
            <DiMongodb />
          </IconToolTip>
        </div>
      </IconContext.Provider>
    </section>
  );
}
