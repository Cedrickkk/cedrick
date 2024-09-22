export default function About() {
  return (
    <section className="m-3 grid grid-cols-2 gap-20 border-b border-b-slate-200 px-3 py-12">
      <div>
        <h3 className="mb-2 text-2xl font-bold text-slate-800">About me</h3>
        <p className="text-slate-700">
          IT student based in the Philippines, currently in my 3rd year. My goal
          is to become a full-stack developer and keep growing my skills in this
          fast-paced field. I love learning new technologies and using them to
          transform my ideas into real, functional websites.
        </p>
      </div>
      <div>
        <h5 className="mb-2 font-bold">Education</h5>
        <ul className="flex flex-col gap-2">
          <li className="text-sm font-semibold">
            Pamantasan ng Lungsod ng Pasig
            <small className="block text-slate-500">2023 - Present</small>
          </li>
        </ul>
      </div>
    </section>
  );
}
